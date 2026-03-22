# Developer Code Standards Guide

This document outlines the coding standards and conventions used in the AiDOiT landing page project.

## 📋 Table of Contents

1. [Naming Conventions](#naming-conventions)
2. [TypeScript Guidelines](#typescript-guidelines)
3. [Component Patterns](#component-patterns)
4. [State Management](#state-management)
5. [File Organization](#file-organization)
6. [Error Handling](#error-handling)
7. [Testing Guidelines](#testing-guidelines)
8. [Performance Tips](#performance-tips)

## 🏷️ Naming Conventions

### Files & Directories

```
✅ Good:
- src/components/common/Button.tsx           # PascalCase for components
- src/utils/common.ts                         # lowercase for utilities
- src/hooks/useMousePosition.ts               # use* prefix for hooks
- src/types/index.ts                          # lowercase for types

❌ Avoid:
- src/components/button.tsx                   # lowercase
- src/Utilities/common.ts                     # weird capitalization
- src/hooks/mousePosition.ts                  # missing use* prefix
```

### Variables & Constants

```typescript
// ✅ Good
const MAX_RETRIES = 3;                        // UPPERCASE for constants
const userName: string = "John";              // camelCase for variables
const isLoading: boolean = false;             // prefix boolean with is/has
const handleClick = () => {};                 // handle* for event handlers
const fetchUser = async () => {};             // verb prefix for functions

// ❌ Avoid
const max_retries = 3;                        // snake_case for constants
const UserName = "John";                      // PascalCase for variables
const loading = false;                        // no is prefix
const onClick = () => {};                     // no handle prefix
```

### React Components

```typescript
// ✅ Good
const PrimaryButton: React.FC<ButtonProps> = ({ children }) => {};
export const Header: React.FC = () => {};

// ❌ Avoid
const primaryButton = () => {};               // lowercase
interface ButtonPropsInterface {}             // redundant suffix
type ButtonPropsType = {};                    // redundant suffix
```

## 📘 TypeScript Guidelines

### Interface vs Type

```typescript
// ✅ Use interface for object shapes
interface ComponentProps {
  className?: string;
  children: React.ReactNode;
}

// ✅ Use type for unions and complex types
type Status = "loading" | "success" | "error";
type Callback = (value: string) => void;
```

### Optional Properties

```typescript
// ✅ Good
interface Props {
  required: string;
  optional?: string;
  withDefault?: string; // Use prop defaults instead
}

// ❌ Avoid
interface Props {
  required: string;
  optional: string | undefined;  // Use optional syntax
}
```

### Generics

```typescript
// ✅ Good
function useAsync<T>(
  asyncFunc: () => Promise<T>,
  deps: React.DependencyList
): { data: T | null; loading: boolean; error: Error | null } {
  // Implementation
}

// ❌ Avoid
function useAsync(
  asyncFunc: () => Promise<any>,
  deps: any
): any {
  // Implementation
}
```

### Never Use `any`

```typescript
// ✅ Good
function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  return String(data);
}

// ❌ Avoid
function processData(data: any): string {
  return data.toUpperCase(); // Dangerous!
}
```

## 🎯 Component Patterns

### Functional Components with Hooks

```typescript
/**
 * Feature-rich component with proper TypeScript typing
 */
interface FeatureProps {
  title: string;
  onTrigger?: () => void;
}

const Feature: React.FC<FeatureProps> = ({ title, onTrigger }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
    onTrigger?.();
  }, [onTrigger]);

  return (
    <div>
      <button onClick={handleToggle}>{title}</button>
      {isOpen && <div>Content</div>}
    </div>
  );
};

export default Feature;
```

### Custom Hooks Pattern

```typescript
/**
 * Custom hook with proper documentation and typing
 * 
 * @param initialValue - Initial state value
 * @returns Array of [state, setState]
 */
function useCustomState<T>(initialValue: T): [T, (value: T) => void] {
  const [state, setState] = React.useState<T>(initialValue);

  return [state, setState];
}
```

### Error Boundary Pattern

```typescript
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  name?: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

## 🔄 State Management

### Local Component State

```typescript
// ✅ Good - Simple state management
const [count, setCount] = useState(0);
const [isOpen, setIsOpen] = useState(false);

// Use useCallback for event handlers
const increment = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
```

### Avoid Prop Drilling

```typescript
// ✅ Good - Use context for shared state
const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
);

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
```

## 📁 File Organization

### Component File Structure

```
Button.tsx
├── Interface definitions (ButtonProps)
├── Constants (if any)
├── Component definition
└── Export
```

```typescript
/**
 * @fileoverview Button component description
 */

import React from "react";
import { COLORS } from "@/constants";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
```

### Utility File Structure

```
common.ts
├── JSDoc comments
├── Function implementations
└── Exports
```

```typescript
/**
 * @fileoverview Common utility functions
 */

/**
 * Debounce a function with proper typing
 */
export function debounce<T extends (...args: never[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return function debounced(...args: Parameters<T>) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
}
```

## 🚨 Error Handling

### Try-Catch Pattern

```typescript
// ✅ Good
try {
  const result = await fetchData();
  return result;
} catch (error) {
  logger.error("Failed to fetch data", error);
  return null;
}

// With finally
try {
  await operation();
} catch (error) {
  logger.error("Operation failed", error);
  throw error;
} finally {
  cleanup();
}
```

### Async Error Handling

```typescript
// ✅ Good - Proper error handling in async functions
async function handleSubmit(email: string): Promise<void> {
  try {
    const result = await subscribe(email);
    
    if (result.error) {
      if (result.error.code === "DUPLICATE") {
        toast.info("Already subscribed");
      } else {
        logger.error("Subscription failed", result.error);
        toast.error("Failed to subscribe");
      }
      return;
    }

    toast.success("Subscription successful");
  } catch (error) {
    logger.error("Unexpected error", error);
    toast.error("Something went wrong");
  }
}
```

## 🧪 Testing Guidelines

### Unit Test Structure

```typescript
describe("Button Component", () => {
  it("should render children text", () => {
    // Arrange
    const { getByText } = render(<Button>Click me</Button>);
    
    // Act
    const button = getByText("Click me");
    
    // Assert
    expect(button).toBeInTheDocument();
  });

  it("should call onClick handler when clicked", () => {
    // Arrange
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click</Button>);
    
    // Act
    fireEvent.click(getByText("Click"));
    
    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## ⚡ Performance Tips

### Memoization

```typescript
// ✅ Good - Memoize expensive operations
const processedData = useMemo(() => {
  return data.map(item => expensive(item));
}, [data]);

// ✅ Good - Memoize callbacks
const handleChange = useCallback((value) => {
  setData(value);
}, []);
```

### Code Splitting

```typescript
// ✅ Good - Dynamic imports for large components
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <Skeleton />,
});
```

### Image Optimization

```typescript
// ✅ Good - Use Next.js Image component
import Image from "next/image";

<Image
  src={image}
  alt="Description"
  width={400}
  height={300}
  priority
/>
```

## 📋 Checklist Before Committing

- [ ] TypeScript types are applied to all functions/components
- [ ] No `any` types used (except when absolutely necessary)
- [ ] Error handling is implemented
- [ ] Components have JSDoc comments
- [ ] Event handlers use `useCallback`
- [ ] No console.log statements (use logger instead)
- [ ] No magic strings/numbers (use constants)
- [ ] Accessibility ARIA labels are present
- [ ] Components are tested
- [ ] Performance optimizations applied

---

**Document Version**: 1.0  
**Last Updated**: March 2026

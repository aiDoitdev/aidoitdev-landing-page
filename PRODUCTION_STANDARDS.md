# AiDOiT Landing Page - Production Code Standards

A modern, high-performance landing page for AiDOiT built with Next.js 14, TypeScript, and Tailwind CSS. This project follows production-grade best practices and clean code guidelines.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for email subscription feature)

### Installation

```bash
# Clone repository
git clone <repository-url>
cd aidoitdev-landing-page

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build & Deployment

```bash
# Production build
npm run build

# Run production server
npm start

# Lint code
npm run lint --fix
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata & error boundary
│   ├── page.tsx        # Homepage with section imports
│   ├── api/            # API routes (if needed)
│   └── globals.css     # Global styles
├── sections/           # Page sections (Header, Hero, Footer, etc.)
├── components/
│   ├── common/         # Reusable UI components (Button, Input, etc.)
│   └── ErrorBoundary   # Error boundary for graceful error handling
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
│   ├── logger.ts       # Centralized logging system
│   ├── common.ts       # Common utilities (debounce, throttle, etc.)
│   └── supabaseClient.ts # Supabase client initialization
├── config/             # Application configuration
├── constants/          # Global constants & configuration values
├── types/              # TypeScript type definitions
└── assets/             # Static assets (images, SVGs, etc.)

public/
└── assets/            # Public assets (lottie animations, etc.)
```

## 🏗️ Architecture & Best Practices

### 1. **Type Safety**

All components and functions are properly typed with TypeScript:

```typescript
// ✅ Good
interface ButtonProps extends React.PropsWithChildren {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  // Implementation
};

// ❌ Avoid
const Button = (props: any) => {
  // Implementation
};
```

### 2. **Component Organization**

- **Smart Components**: Contains business logic, state, and data fetching
- **Presentational Components**: Pure UI components with props
- **Error Boundaries**: Wrap major sections for graceful error handling

```typescript
<ErrorBoundary name="HeroSection">
  <Hero />
</ErrorBoundary>
```

### 3. **Centralized Configuration**

All hardcoded values are in `src/constants/`:

```typescript
// Instead of hardcoding strings across files
export const SITE_METADATA = {
  TITLE: "AiDOiT - Ai MVP & Agent Development in 1 Week",
  DESCRIPTION: "Build AI agents and MVPs...",
  // ...
};

// Usage
import { SITE_METADATA } from "@/constants";
const title = SITE_METADATA.TITLE;
```

### 4. **Custom Hooks**

Reusable logic extracted into hooks:

```typescript
// Mouse tracking for interactive effects
const mousePosition = useMousePosition();

// Intersection observer for scroll animations  
const [isInView, ref] = useInView();

// Reduced motion preference detection
const prefersReduced = usePrefersReducedMotion();
```

### 5. **Error Handling & Logging**

Structured logging with namespaces:

```typescript
import { createLogger } from "@/utils/logger";

const logger = createLogger("EmailInput");

logger.info("Email subscribed", { email });
logger.error("Subscription failed", error);
```

### 6. **Environment Variables**

Never commit `.env.local`. Use `.env.example` for documentation:

```typescript
import { supabaseConfig } from "@/config";

// Safe access with validation
if (!supabaseConfig.url) {
  logger.warn("Supabase URL not configured");
}
```

## 🎨 Styling Conventions

### Tailwind CSS Best Practices

```typescript
// ✅ Good - Use Tailwind utilities
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
  Click me
</button>

// ❌ Avoid - Mixing with inline styles
<button style={{ backgroundColor: "#2563eb" }}>
  Click me
</button>
```

### Responsive Design

```typescript
// Mobile-first approach
<div className="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## 🔄 State Management

### Local State

Use `useState` for component-level state:

```typescript
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
```

### Derived State

Avoid redundant state:

```typescript
// ✅ Good - Compute from existing state
const count = items.length;

// ❌ Avoid - Separate state
const [items, setItems] = useState([]);
const [count, setCount] = useState(0); // Redundant!
```

## 🚀 Performance Optimizations

### Image Optimization

```typescript
import Image from "next/image";

<Image
  src={image}
  alt="Description"
  width={400}
  height={300}
  priority // Use only for above-the-fold images
/>
```

### Code Splitting

Sections are automatically code-split via Next.js:

```typescript
// Each section is imported separately - auto-split by Next.js
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
```

### Memoization

Use `useCallback` and `useMemo` judiciously:

```typescript
const handleClick = useCallback(() => {
  // Only recreated when dependencies change
}, [dependency]);

const expensiveValue = useMemo(() => {
  return expensiveOperation(data);
}, [data]);
```

## 📝 Documentation Standards

### JSDoc Comments

All functions and components include JSDoc:

```typescript
/**
 * Animated primary button component
 * Features gradient background with animated border effect
 *
 * @example
 * <Button onClick={handleClick}>Click Me</Button>
 */
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  // Implementation
};
```

### Component Props Documentation

```typescript
interface ButtonProps {
  /** Click handler function */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Aria label for accessibility */
  ariaLabel?: string;
}
```

## 🧪 Error Handling

### Graceful Error Handling

```typescript
try {
  const result = await supabase.from("email").insert([{ email }]);
  
  if (result.error) {
    // Handle specific error types
    if (result.error.code === "23505") {
      // Duplicate email
      toast.info("Already in waitlist");
    } else {
      logger.error("Subscription failed", result.error);
    }
  }
} catch (error) {
  logger.error("Unexpected error", error);
  toast.error("Something went wrong");
}
```

### Error Boundary Fallback

```typescript
<ErrorBoundary 
  name="HeroSection"
  fallback={<ErrorFallback />}
>
  <Hero />
</ErrorBoundary>
```

## 🔐 Security Best Practices

### XSS Prevention

- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Use `rel="noopener noreferrer"` for external links
- Sanitize user input before rendering

### CSRF Protection

- Use secure HTTP-only cookies
- Implement proper CORS handling
- Use SameSite cookie attribute

### Environment Variables

- Never commit `.env.local`
- Use `.env.example` for reference
- Keep sensitive tokens server-side when possible

## 📊 Accessibility (a11y)

### ARIA Labels

```typescript
<button
  aria-label="Toggle menu"
  aria-expanded={isOpen}
  onClick={toggleMenu}
>
  <MenuIcon />
</button>
```

### Semantic HTML

```typescript
// ✅ Good
<header>Navigation</header>
<main>Content</main>
<footer>Footer</footer>

// ❌ Avoid
<div className="header">Navigation</div>
<div className="main">Content</div>
```

### Focus Management

```typescript
// Visible focus indicators
<button className="focus:outline-none focus:ring-2 focus:ring-blue-500">
  Click me
</button>
```

## 🔄 Git Workflow

### Commit Messages

```
feat: Add email subscription feature
fix: Correct animation timing in Hero section
docs: Update installation instructions
refactor: Extract animation variants to constants
```

### Branch Naming

```
feature/add-email-subscription
bugfix/fix-hero-animation
docs/update-readme
```

## 📦 Dependencies

### Core

- **Next.js 14**: React framework
- **React 18**: UI library  
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS

### UI & Animation

- **Framer Motion**: Smooth animations
- **React Icons**: Icon library
- **DotLottie**: Animation format

### Utilities

- **Supabase**: Backend & database
- **React Toastify**: Notifications
- **Tailwind Merge**: Conditional Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub and connect with Vercel
# Environment variables are set in Vercel dashboard
```

### Self-Hosted

```bash
npm run build
npm start
```

## 📚 Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Supabase Docs](https://supabase.com/docs)

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.

## 📄 License

See [LICENSE](LICENSE) for details.

---

**Last Updated**: March 2026
**Production Status**: ✅ Approved for production use

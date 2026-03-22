# Quick Start for Developers

**Welcome to the AiDOiT Landing Page Project!** 👋

This is a quick reference guide for developers working on this project. For detailed information, see the documentation files.

## 🚀 First Time Setup

```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 3. Start development
npm run dev

# 4. Open browser
# http://localhost:3000
```

## 📁 Where to Find Things

| What | Where |
|------|-------|
| Type definitions | `src/types/index.ts` |
| Constants & config | `src/constants/index.ts` |
| API & config setup | `src/config/index.ts` |
| Utility functions | `src/utils/common.ts` |
| Custom hooks | `src/hooks/index.ts` |
| Logging | `src/utils/logger.ts` |
| Components | `src/components/` |
| Page sections | `src/sections/` |
| Styles | `src/app/globals.css` |

## 📝 Common Tasks

### Add a New Constant

```typescript
// In src/constants/index.ts
export const MY_CONSTANT = "value" as const;
```

### Create a New Component

```typescript
// src/components/MyComponent.tsx
import React from "react";

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

/**
 * My new component description
 * 
 * @example
 * <MyComponent title="Hello" onClick={handleClick} />
 */
const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return <div onClick={onClick}>{title}</div>;
};

export default MyComponent;
```

### Use a Custom Hook

```typescript
import { useMousePosition } from "@/hooks";

const MyComponent = () => {
  const mousePos = useMousePosition();
  
  return <div>{mousePos.x}, {mousePos.y}</div>;
};
```

### Add Logging

```typescript
import { createLogger } from "@/utils/logger";

const logger = createLogger("ComponentName");

logger.info("User subscribed", { email });
logger.error("Failed to subscribe", error);
```

### Handle Errors

```typescript
import { ErrorBoundary } from "@/components/ErrorBoundary";

<ErrorBoundary name="MySection">
  <MySection />
</ErrorBoundary>
```

## 🎯 Code Standards Quick Reference

### TypeScript First
```typescript
// ✅ Always type your props and functions
interface Props {
  name: string;
  age?: number;
}

const Component: React.FC<Props> = ({ name, age }) => {};
```

### Use Constants Instead of Magic Strings
```typescript
// ✅ Good
import { HERO_CONFIG } from "@/constants";
const title = HERO_CONFIG.TITLE;

// ❌ Avoid
const title = "Launch Your Ai MVP";
```

### Event Handlers with useCallback
```typescript
// ✅ Good
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);

// ❌ Avoid
const handleClick = () => {
  console.log("clicked");
};
```

### JSDoc Comments
```typescript
// ✅ Good
/**
 * Quick description
 * 
 * @param name - The user's name
 * @returns The greeting message
 */
const greet = (name: string): string => `Hello, ${name}!`;

// ❌ Avoid
const greet = (name) => `Hello, ${name}!`;
```

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Run ESLint
npm run lint --fix   # Fix linting issues
```

## 🐛 Debugging

### Use Logger
```typescript
import { createLogger } from "@/utils/logger";
const logger = createLogger("MyComponent");

logger.debug("Debug info", { data });
logger.error("An error occurred", error);
```

### Check TypeScript
```bash
# Verify types are correct
npx tsc --noEmit
```

## 📚 Documentation Files

- **PRODUCTION_STANDARDS.md** - Complete production guide
- **CODE_STANDARDS.md** - Coding standards and conventions
- **IMPLEMENTATION_SUMMARY.md** - What was changed and why
- **This file** - Quick reference for daily work

## 💡 Pro Tips

1. **Use Path Aliases**: Import from `@/components` instead of `../../../components`
2. **Check Hooks**: See `src/hooks/` before writing custom logic
3. **Reuse Utilities**: Check `src/utils/common.ts` for helper functions
4. **Follow Patterns**: Look at existing components for patterns
5. **Keep Constants Updated**: Add new values to `src/constants/`

## ❓ Troubleshooting

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit

# Restart TypeScript server in VS Code
Cmd+Shift+P -> TypeScript: Restart TS Server
```

### Import Errors
- Check file paths are correct
- Verify path aliases in `tsconfig.json`
- Make sure file extensions are included in exports

### Build Errors
```bash
# Clean cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

## 🤝 Contributing

1. Follow CODE_STANDARDS.md
2. Use TypeScript for all new code
3. Add types and JSDoc comments
4. Test changes locally
5. Use meaningful commit messages

## 📞 Need Help?

- Check **CODE_STANDARDS.md** for coding patterns
- Check **PRODUCTION_STANDARDS.md** for architecture
- Look at similar components for examples
- Check JSDoc comments in the code
- See `src/` folder structure

---

**Happy Coding!** 🎉

*Last Updated: March 2026*

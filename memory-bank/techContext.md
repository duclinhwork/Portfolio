# Technology Context

## Core Technology Stack

### Frontend Framework
- **Next.js 14**: Latest version with App Router for modern React development
- **React 18**: Component-based UI with hooks and modern patterns
- **TypeScript**: Full type safety and better developer experience

### Styling and UI
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **CSS Modules**: Component-scoped styling when needed
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Development Tools
- **ESLint**: Code quality and consistency enforcement
- **Prettier**: Automated code formatting
- **TypeScript Compiler**: Type checking and compilation

### Build and Deployment
- **Vercel**: Optimal platform for Next.js deployment
- **Git**: Version control with clean commit history
- **GitHub**: Repository hosting and collaboration

## Dependencies

### Production Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0"
}
```

### Development Dependencies
```json
{
  "eslint": "^8.0.0",
  "eslint-config-next": "^14.0.0",
  "prettier": "^3.0.0",
  "tailwindcss": "^3.0.0",
  "@types/react": "^18.0.0",
  "@types/node": "^20.0.0"
}
```

## Development Setup

### Environment Requirements
- **Node.js**: Version 18+ for Next.js 14 compatibility
- **npm/yarn**: Package management
- **Git**: Version control

### Project Structure
```
portfolio/
├── /app                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── /components            # React components
├── /contexts              # React contexts
├── /data                  # JSON data files
│   ├── cv-english.json    # English CV data
│   └── cv-vietnamese.json # Vietnamese CV data
├── /lib                   # Utilities and types
├── /public               # Static assets
│   └── avatar.jpg        # Profile image
├── /types                # TypeScript type definitions
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Configuration Files

### Next.js Configuration
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [], // Add external image domains if needed
  },
}

module.exports = nextConfig
```

### Tailwind Configuration
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      fontFamily: {
        // Custom fonts
      },
    },
  },
  plugins: [],
}
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Technical Constraints

### Performance Requirements
- **First Contentful Paint**: < 1.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3 seconds

### Browser Support
- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 88+

### Accessibility Requirements
- **WCAG 2.1 AA Compliance**: Color contrast, keyboard navigation
- **Screen Reader Support**: Semantic HTML, ARIA labels
- **Mobile Accessibility**: Touch target sizes, responsive design

## Development Workflow

### Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  }
}
```

### Code Quality
- **Pre-commit Hooks**: ESLint and Prettier checks
- **Type Checking**: Strict TypeScript configuration
- **Code Review**: Clean, readable, and maintainable code

### Asset Management
- **Images**: Optimized with Next.js Image component
- **Fonts**: Self-hosted or Google Fonts with optimization
- **Icons**: SVG icons or icon library integration

## Deployment Strategy

### Vercel Deployment
- **Automatic Deployments**: Connected to GitHub repository
- **Preview Deployments**: Every pull request gets a preview URL
- **Production Deployment**: Automatic deployment from main branch

### Environment Configuration
- **Development**: Local development server
- **Preview**: Vercel preview deployments
- **Production**: Production deployment on Vercel

### Performance Monitoring
- **Next.js Analytics**: Built-in performance monitoring
- **Vercel Analytics**: Real user monitoring and insights
- **Core Web Vitals**: Tracking and optimization 
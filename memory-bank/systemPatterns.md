# System Patterns

## Architecture Overview

The portfolio follows a modern component-based architecture using Next.js 14 with TypeScript for type safety and maintainability.

```
├── /app                    # Next.js 14 App Router
├── /components             # Reusable UI components
├── /contexts               # React contexts (Language, Theme)
├── /data                   # Static JSON data files
├── /lib                    # Utility functions and types
├── /public                 # Static assets (images, icons)
└── /styles                 # Global styles and Tailwind config
```

## Key Technical Decisions

### 1. Next.js 14 with App Router
- **Rationale**: Modern React patterns, built-in optimization, excellent developer experience
- **Benefits**: Server-side rendering for SEO, automatic code splitting, optimized performance

### 2. TypeScript Throughout
- **Rationale**: Type safety for complex data structures, better developer experience
- **Implementation**: Strict typing for CV data, component props, and API interfaces

### 3. Static Data Approach
- **Rationale**: Simple content management, fast loading, easy deployment
- **Implementation**: JSON files for CV data, easy to update and version control

### 4. Context-Based State Management
- **Rationale**: Minimal state complexity, avoiding over-engineering
- **Implementation**: LanguageContext for i18n, potential ThemeContext for dark mode

## Component Architecture

### Core Components Structure
```
/components
├── /layout
│   ├── Header.tsx          # Navigation and language switch
│   ├── Footer.tsx          # Social links and contact
│   └── Layout.tsx          # Main layout wrapper
├── /sections
│   ├── IntroSection.tsx    # Hero section with avatar and summary
│   ├── ExperienceSection.tsx # Work experience timeline
│   ├── EducationSection.tsx   # Education timeline
│   ├── SkillsSection.tsx      # Skills grid/categories
│   ├── ProjectsSection.tsx    # Projects showcase
│   └── CertificationsSection.tsx # Awards and certifications
└── /ui
    ├── Card.tsx            # Reusable card component
    ├── Badge.tsx           # Technology tags
    ├── Timeline.tsx        # Timeline component
    └── Button.tsx          # Interactive elements
```

### Data Flow Pattern
1. **Static Import**: JSON data imported at build time
2. **Context Provider**: Language context wraps the application
3. **Component Consumption**: Components subscribe to context for current language
4. **Type Safety**: TypeScript interfaces ensure data structure consistency

## Design Patterns

### 1. Composition Over Inheritance
- **Application**: Building complex sections from simple, reusable components
- **Example**: Timeline component used for both education and experience sections

### 2. Separation of Concerns
- **Data Layer**: Pure JSON data files separate from presentation
- **Presentation Layer**: React components focused solely on rendering
- **State Layer**: Context API handling application state

### 3. Mobile-First Responsive Design
- **Approach**: Tailwind CSS utilities with mobile-first breakpoints
- **Implementation**: Progressive enhancement from mobile to desktop

### 4. Performance Optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Next.js Image component for avatars and assets
- **Font Loading**: Optimized web font loading strategies

## Data Modeling

### CV Data Structure
```typescript
interface CVData {
  personal: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: SkillCategories;
  projects: Project[];
  certifications: Certification[];
}
```

### Multi-language Support
- **Pattern**: Separate JSON files per language (cv-english.json, cv-vietnamese.json)
- **Benefits**: Easy translation management, clear separation of content
- **Implementation**: Context-based language switching with type-safe data access

## Accessibility Patterns

### 1. Semantic HTML
- **Implementation**: Proper heading hierarchy, semantic elements
- **Benefits**: Screen reader compatibility, SEO advantages

### 2. Keyboard Navigation
- **Implementation**: Focus management, tab order, skip links
- **Benefits**: Accessibility compliance, better user experience

### 3. Color Contrast
- **Implementation**: Tailwind color system ensuring WCAG compliance
- **Benefits**: Accessibility for users with visual impairments

## SEO and Meta Patterns

### 1. Dynamic Meta Tags
- **Implementation**: Language-specific titles and descriptions
- **Benefits**: Better search engine visibility, social media sharing

### 2. Structured Data
- **Implementation**: JSON-LD for professional profile information
- **Benefits**: Rich snippets in search results

### 3. OpenGraph Integration
- **Implementation**: Dynamic OG tags with professional information
- **Benefits**: Better social media sharing experience 
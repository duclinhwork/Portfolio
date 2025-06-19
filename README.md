# CV Website - Nguyễn Đức Linh

Professional CV website built with React + TypeScript + Vite, deployed on GitHub Pages.

## 🚀 Features

- **Bilingual Support**: Vietnamese and English versions
- **Responsive Design**: Mobile-first, optimized for all devices
- **Interactive UI**: Smooth animations and progressive disclosure
- **Modern Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **GitHub Pages**: Automated deployment with GitHub Actions
- **Professional Design**: Metal element feng shui color scheme

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions
- **Data**: JSON-based content management

## 📁 Project Structure

```
cv-website/
├── src/
│   ├── components/          # React components
│   ├── contexts/           # React contexts (Language, UI)
│   ├── data/              # CV content in JSON format
│   │   ├── cv-vietnamese.json
│   │   ├── cv-english.json
│   │   └── types.ts
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions
└── docs/                  # Build output for GitHub Pages
```

## 🎨 Design System

### Color Palette (Metal Element Feng Shui)
- **Primary**: #2C3E50 (Deep blue-gray)
- **Secondary**: #34495E (Darker blue-gray)  
- **Accent**: #3498DB (Professional blue)
- **Gold**: #F39C12 (Metal gold accent)
- **Silver**: #95A5A6 (Silver gray)

### Typography
- **Primary Font**: Inter (Professional sans-serif)
- **Monospace**: JetBrains Mono (Code/technical content)

## 📝 Content Management

### Easy Content Updates

The CV content is stored in JSON files for easy editing:

#### Adding New Work Experience
```json
{
  "id": "new-job-id",
  "company": "Company Name",
  "position": "Position Title",
  "period": "Start Date - End Date",
  "isCurrentJob": true,
  "summary": "Brief description",
  "achievements": [
    {
      "title": "Achievement Title",
      "description": "Achievement description",
      "impact": "business_growth"
    }
  ],
  "responsibilities": ["Task 1", "Task 2"],
  "technologies": ["Tech1", "Tech2"]
}
```

#### Adding New Skills
```json
{
  "name": "Skill Name",
  "level": "advanced",
  "years": 3
}
```

#### Adding New Projects
```json
{
  "id": "project-id",
  "title": "Project Name",
  "github": "github.com/username/repo",
  "summary": "Project description",
  "technologies": ["Tech1", "Tech2"],
  "highlights": ["Feature 1", "Feature 2"],
  "featured": true
}
```

### File Locations
- **Vietnamese content**: `src/data/cv-vietnamese.json`
- **English content**: `src/data/cv-english.json`
- **Type definitions**: `src/data/types.ts`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cv-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### GitHub Pages (Automatic)

The website automatically deploys to GitHub Pages when you push to the `main` branch.

1. **Enable GitHub Pages** in repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - deployment happens automatically

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

### Key Components

- **App.tsx**: Main application with providers
- **Header**: Navigation with language toggle
- **HeroSection**: Personal info and contact
- **ExperienceSection**: Work experience with achievements
- **EducationSection**: Academic background
- **SkillsSection**: Technical and soft skills
- **ProjectsSection**: Featured projects
- **CertificationsSection**: Awards and certifications
- **Footer**: Contact info and links

### Language Support

The app uses React Context for language switching:

```typescript
const { language, setLanguage, t, cvData } = useLanguage();
```

- `language`: Current language ('vi' | 'en')
- `setLanguage`: Switch language function
- `t`: Translation function for UI elements
- `cvData`: Current language CV data

## 📱 Responsive Design

- **Mobile-first**: Designed for mobile, enhanced for desktop
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly**: 44px minimum touch targets
- **Performance**: Optimized for mobile connections

## ♿ Accessibility

- **WCAG AA Compliant**: Color contrast and keyboard navigation
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Focus Management**: Clear focus indicators

## 🎯 Performance

- **Bundle Size**: < 100KB gzipped
- **First Contentful Paint**: < 1.5s
- **Lighthouse Score**: > 90
- **Code Splitting**: Route-based lazy loading

## 📄 License

This project is for personal use. Feel free to use as inspiration for your own CV website.

## 🤝 Contributing

This is a personal CV website, but suggestions and improvements are welcome!

## 📞 Contact

- **Email**: duclinh.work@gmail.com
- **LinkedIn**: linkedin.com/in/duclinhwork
- **Phone**: +84-965-002-228 
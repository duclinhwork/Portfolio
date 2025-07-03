# Portfolio - Nguyễn Đức Linh

Professional portfolio website showcasing experience as a Data Analyst and Machine Learning Engineer.

## 🚀 Features

- **Bilingual Support**: Complete English/Vietnamese language switching
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Professional Sections**: Experience, Skills, Projects, Education, Certifications
- **Interactive UI**: Smooth animations and elegant hover effects
- **Static Export**: Optimized for GitHub Pages deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages / Vercel
- **Data**: Static JSON files with bilingual content

## 🏗️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Deployment

### Option 1: GitHub Pages (Recommended for GitHub)

1. **Enable GitHub Pages**:
   - Go to your repository Settings > Pages
   - Source: "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Automatic deployment**:
   - GitHub Actions will automatically build and deploy
   - Your site will be available at: `https://YOUR_USERNAME.github.io/Portfolio/`

### Option 2: Vercel (Easiest)

1. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

2. **Custom domain** (optional):
   - Add your custom domain in Vercel dashboard

## 📁 Project Structure

```
Portfolio/
├── .github/workflows/      # GitHub Actions deployment
├── public/                 # Static assets (images, icons)
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Page sections
│   │   └── ui/           # Reusable UI components
│   ├── contexts/         # React contexts (Language)
│   ├── data/             # CV data (English/Vietnamese)
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript definitions
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 📝 Customization

### Update Content
1. **Personal Information**: Edit `src/data/cv-english.json` and `src/data/cv-vietnamese.json`
2. **Profile Image**: Replace `public/avatar.jpg` with your photo
3. **Colors/Styling**: Modify Tailwind classes in components

### Add Sections
1. Create new component in `src/components/sections/`
2. Add to main page in `src/app/page.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: duclinh.work@gmail.com
- **LinkedIn**: [linkedin.com/in/duclinhwork](https://linkedin.com/in/duclinhwork)
- **Location**: Ho Chi Minh City, Vietnam

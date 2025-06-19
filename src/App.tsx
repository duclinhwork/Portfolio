import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header with navigation */}
        <Header />
        
        {/* Main content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />
          
          {/* CV Sections */}
          <div className="space-y-16 py-16">
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificationsSection />
          </div>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App; 
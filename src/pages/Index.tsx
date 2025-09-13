
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useAnimationObserver from '@/utils/AnimationObserver';

const Index = () => {
  // Use the animation observer hook
  useAnimationObserver();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden animate-fade-in">
      {/* Page loading animation overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-portfolio-darkblue/20 to-background pointer-events-none opacity-0 animate-fade-in z-0"></div>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

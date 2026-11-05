import React, { useState, useEffect } from 'react';
import { PageView, Project, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './components/HeroSection';
import { BrandIntroSection } from './components/BrandIntroSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ServicesOverviewSection } from './components/ServicesOverviewSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProcessSection } from './components/ProcessSection';
import { WhyPerformizeSection } from './components/WhyPerformizeSection';
import { MetaInsightsSection } from './components/MetaInsightsSection';
import { ROICalculatorSection } from './components/ROICalculatorSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { WorkPage } from './components/WorkPage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { ShowreelModal } from './components/ShowreelModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsEnquiryOpen(false);
        setIsShowreelOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenEnquiry = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setIsEnquiryOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenEnquiry(service.title);
  };

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F5F5F5] relative selection:bg-[#E60023] selection:text-white">
      {/* Desktop magnetic custom cursor */}
      <CustomCursor />

      {/* Primary Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Content Router */}
      <main>
        {currentPage === 'home' && (
          <>
            <HeroSection
              onStartProject={() => handleOpenEnquiry()}
              onExploreWork={() => navigateTo('work')}
              onOpenShowreel={() => setIsShowreelOpen(true)}
            />
            <BrandIntroSection onLearnMore={() => navigateTo('about')} />
            <SelectedWorkSection
              onSelectProject={(p) => setSelectedProject(p)}
              onViewAllWork={() => navigateTo('work')}
            />
            {/* Audited Meta Ads Manager Performance & Animated Data Graph */}
            <MetaInsightsSection />
            <ServicesOverviewSection
              onSelectService={handleSelectService}
              onEnquireService={(title) => handleOpenEnquiry(title)}
            />
            <PhilosophySection onStartProject={() => handleOpenEnquiry()} />
            <ProcessSection />
            <ROICalculatorSection />
            <WhyPerformizeSection />
            <CTASection onStartProject={() => handleOpenEnquiry()} />
          </>
        )}

        {currentPage === 'work' && (
          <WorkPage
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}

        {currentPage === 'services' && (
          <>
            <ServicesPage
              onEnquireForService={(title) => handleOpenEnquiry(title)}
            />
            <ROICalculatorSection />
          </>
        )}

        {currentPage === 'insights' && (
          <div className="pt-28 bg-[#0B0B0C] min-h-screen">
            <MetaInsightsSection />
            <ROICalculatorSection />
            <CTASection onStartProject={() => handleOpenEnquiry()} />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onStartProject={() => handleOpenEnquiry()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Agency Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquireForProject={(title) => handleOpenEnquiry(title)}
      />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        preselectedService={preselectedService}
      />

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        onStartProject={() => {
          setIsShowreelOpen(false);
          handleOpenEnquiry();
        }}
      />
    </div>
  );
}

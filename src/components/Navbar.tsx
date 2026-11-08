import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, Menu, X, MessageSquare, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Work', page: 'work' },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'Services', page: 'services' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-[#26262B] py-3.5 shadow-2xl'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark & emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none shrink-0"
            aria-label="Performize Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* Zone 2: 4-5 Clean single-line nav links with subtle hover underlines */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 group ${
                    isActive
                      ? 'text-[#F5F5F5] font-semibold'
                      : 'text-[#858585] hover:text-[#F5F5F5]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E60023]" />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Fast WhatsApp */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919528074537?text=Hi%20Arman%2C%20reaching%20out%20from%20Performize.%20I%20would%20like%20to%20discuss%20a%20growth%20strategy%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-[#0B0B0C] border border-[#25D366]/40 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
              title="Chat with Arman on WhatsApp (+91 95280 74537)"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_24px_rgba(230,0,35,0.4)] hover:shadow-[0_0_32px_rgba(255,30,56,0.6)] flex items-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#F5F5F5] bg-[#121214] border border-[#26262B] hover:border-[#E60023] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0B0C]/98 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-fadeIn">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest text-[#858585] font-mono-numbers">
              Navigation
            </span>
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left text-2xl font-display font-bold py-2 border-b border-[#1A1A1E] flex items-center justify-between ${
                    currentPage === item.page ? 'text-[#FF1E38]' : 'text-[#F5F5F5]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono-numbers text-[#858585]">0{idx + 1}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#1A1A1E]">
            <a
              href="https://wa.me/919528074537?text=Hi%20Arman%2C%20reaching%20out%20from%20Performize.%20I%20would%20like%20to%20discuss%20a%20growth%20strategy%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#25D366] text-[#0B0B0C] font-display font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-4 h-4 fill-[#0B0B0C]" />
              <span>Chat on WhatsApp (+91 95280 74537)</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-4 rounded-xl bg-[#E60023] text-white font-display font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(230,0,35,0.4)]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start a Project</span>
            </button>
            <div className="flex justify-between items-center text-xs text-[#858585]">
              <span>hello@performize.agency</span>
              <span className="text-[#CCFF00]">Available for Q4/Q1</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

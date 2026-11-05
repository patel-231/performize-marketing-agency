import React from 'react';
import { PageView } from '../types';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080809] border-t border-[#1A1A1E] text-[#858585] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1A1A1E]">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <BrandLogo size="lg" />
            <p className="text-sm text-[#858585] max-w-sm leading-relaxed">
              Performize is a creative digital marketing agency combining bold art direction,
              full-funnel performance media, and custom AI automation to make brands impossible to ignore.
            </p>
            <div className="text-xs text-[#858585]">
              <span className="text-[#CCFF00] font-semibold">Service Reach:</span> Delhi NCR, Mumbai &amp; Nationwide India · Global Remote Scaling Network
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/armanbeg09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#121214] border border-[#222227] flex items-center justify-center text-[#858585] hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors text-xs font-semibold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://www.youtube.com/@armannbeg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#121214] border border-[#222227] flex items-center justify-center text-[#858585] hover:text-[#FF1E38] hover:border-[#FF1E38]/40 transition-colors text-xs font-semibold"
                aria-label="YouTube"
              >
                YT
              </a>
              <a
                href="https://www.facebook.com/Armanbeg09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#121214] border border-[#222227] flex items-center justify-center text-[#858585] hover:text-[#0066FF] hover:border-[#0066FF]/40 transition-colors text-xs font-semibold"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#F5F5F5] font-semibold block">
              Pages
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleLink('home')} className="hover:text-[#F5F5F5] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('work')} className="hover:text-[#F5F5F5] transition-colors cursor-pointer">
                  Work / Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-[#F5F5F5] transition-colors cursor-pointer">
                  All 9 Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('insights')} className="hover:text-[#CCFF00] transition-colors cursor-pointer flex items-center gap-1">
                  <span>Meta Ads Insights</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#E60023] text-white">Live</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('about')} className="hover:text-[#F5F5F5] transition-colors cursor-pointer">
                  About Performize
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} className="hover:text-[#F5F5F5] transition-colors cursor-pointer">
                  Contact &amp; Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#F5F5F5] font-semibold block">
              Key Disciplines
            </span>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleLink('services')} className="hover:text-[#F5F5F5] transition-colors text-left cursor-pointer">Meta Ads Management</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-[#F5F5F5] transition-colors text-left cursor-pointer">Google Ads Management</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-[#F5F5F5] transition-colors text-left cursor-pointer">Website Development</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-[#F5F5F5] transition-colors text-left cursor-pointer">AI Automation &amp; Chatbots</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-[#F5F5F5] transition-colors text-left cursor-pointer">Ad Creative &amp; UGC</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-[#F5F5F5] transition-colors text-left cursor-pointer">Lead Generation &amp; CRM</button></li>
            </ul>
          </div>

          {/* Direct Contact (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#F5F5F5] font-semibold block">
              Direct Channels
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="mailto:mirzafaiz0852@gmail.com" className="hover:text-[#CCFF00] transition-colors flex items-center gap-1">
                  <span>mirzafaiz0852@gmail.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/919528074537" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors flex items-center gap-1">
                  <span>WhatsApp (+91 95280 74537)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button onClick={onOpenEnquiry} className="text-[#E60023] hover:text-[#FF1E38] font-semibold flex items-center gap-1 cursor-pointer">
                  <span>Start A Project</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-numbers text-[#858585]">
          <div>
            &copy; {currentYear} Performize Marketing Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#F5F5F5] cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-[#F5F5F5] cursor-pointer">Terms of Engagement</span>
            <span>·</span>
            <span className="text-[#CCFF00]">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

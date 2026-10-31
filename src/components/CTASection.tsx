import React from 'react';
import { ArrowUpRight, Mail, MessageCircle, PhoneCall } from 'lucide-react';

interface CTASectionProps {
  onStartProject: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartProject }) => {
  return (
    <section className="py-24 sm:py-36 bg-[#0B0B0C] relative overflow-hidden">
      {/* High-intensity crimson background refraction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-[#E60023]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[15rem] bg-[#CCFF00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        {/* Editorial Subtitle */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121214] border border-[#26262B] text-xs font-mono-numbers text-[#CCFF00] uppercase tracking-widest mb-8">
          <span>Scale Your Authority</span>
        </div>

        {/* Oversized Headline */}
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F5F5] uppercase tracking-tight leading-[1.02] max-w-5xl mx-auto text-balance">
          Ready To Make Your Brand{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#FF4D64]">
            Impossible To Ignore?
          </span>
        </h2>

        <p className="mt-8 text-base sm:text-xl text-[#858585] max-w-2xl mx-auto font-light leading-relaxed">
          Book an introductory growth consultation. We’ll audit your existing media,
          pinpoint where qualified leads are slipping, and draft a high-velocity roadmap.
        </p>

        {/* Action Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <button
            onClick={onStartProject}
            data-cursor="explore"
            className="px-9 py-5 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_40px_rgba(230,0,35,0.6)] hover:shadow-[0_0_50px_rgba(255,30,56,0.8)] flex items-center gap-3 cursor-pointer active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <a
            href="https://wa.me/15550192834?text=Hi%20Performize%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-5 rounded-full bg-[#121214] hover:bg-[#1A1A1E] text-[#F5F5F5] border border-[#26262B] hover:border-[#CCFF00]/50 font-display font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#CCFF00]" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="mailto:hello@performize.agency"
            className="px-7 py-5 rounded-full bg-[#121214] hover:bg-[#1A1A1E] text-[#858585] hover:text-[#F5F5F5] border border-[#26262B] font-display font-medium text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>hello@performize.agency</span>
          </a>
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs text-[#858585] font-mono-numbers">
          <span>✓ Guaranteed Response Within 2 Hours</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Direct Strategy Director Access</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Non-Disclosure Protected</span>
        </div>
      </div>
    </section>
  );
};

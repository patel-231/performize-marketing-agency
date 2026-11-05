import React from 'react';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121214] border border-[#26262B] text-xs font-mono-numbers text-[#CCFF00] uppercase tracking-widest mb-8"
        >
          <span>Scale Your Authority</span>
        </motion.div>

        {/* Oversized Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F5F5] uppercase tracking-tight leading-[1.02] max-w-5xl mx-auto text-balance"
        >
          Ready To Make Your Brand{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#FF4D64]">
            Impossible To Ignore?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-base sm:text-xl text-[#858585] max-w-2xl mx-auto font-light leading-relaxed"
        >
          Book an introductory growth consultation. We’ll audit your existing media,
          pinpoint where qualified leads are slipping, and draft a high-velocity roadmap.
        </motion.p>

        {/* Action Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-12"
        >
          <button
            onClick={onStartProject}
            data-cursor="explore"
            className="px-9 py-5 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_40px_rgba(230,0,35,0.6)] hover:shadow-[0_0_50px_rgba(255,30,56,0.8)] flex items-center gap-3 cursor-pointer active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <a
            href="https://wa.me/919528074537?text=Hi%20Arman%2C%20I%20would%20like%20to%20audit%20my%20ad%20campaigns%20and%20discuss%20a%20growth%20strategy%20with%20Performize."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#0B0B0C] font-display font-black text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-[0_0_25px_rgba(37,211,102,0.4)] active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-[#0B0B0C]" />
            <span>Chat on WhatsApp (+91 95280 74537)</span>
          </a>

          <a
            href="mailto:mirzafaiz0852@gmail.com"
            className="px-7 py-5 rounded-full bg-[#121214] hover:bg-[#1A1A1E] text-[#858585] hover:text-[#F5F5F5] border border-[#26262B] font-display font-medium text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>mirzafaiz0852@gmail.com</span>
          </a>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs text-[#858585] font-mono-numbers"
        >
          <span>✓ Guaranteed Response Within 2 Hours</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Direct Strategy Director Access</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Non-Disclosure Protected</span>
        </motion.div>
      </div>
    </section>
  );
};

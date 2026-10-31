import React from 'react';
import { AGENCY_SERVICES } from '../data/agencyData';
import { ArrowUpRight, Check, Sparkles, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesPageProps {
  onEnquireForService: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onEnquireForService }) => {
  return (
    <div className="pt-32 pb-24 bg-[#0B0B0C] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#1F1F24] pb-12 mb-16"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
            <span>Capabilities &amp; Disciplines</span>
            <span className="text-[#858585]">/ 9 Services</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#F5F5F5] uppercase tracking-tight text-balance">
            Comprehensive Growth Infrastructure.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#FF4D64]">
              Zero Friction.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#858585] max-w-2xl font-light leading-relaxed">
            From creative direction and bespoke web development to algorithmic paid acquisition and AI-driven CRM automation, we deploy the entire modern marketing stack under one roof.
          </p>
        </motion.div>

        {/* 9 Services Comprehensive Grid with Staggered Scroll Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENCY_SERVICES.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/70 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_10px_30px_rgba(230,0,35,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-numbers text-xs font-bold text-[#858585] group-hover:text-[#CCFF00] transition-colors">
                    {s.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono-numbers tracking-widest text-[#CCFF00] bg-[#1A1A1E] px-2.5 py-1 rounded border border-[#26262B]">
                    {s.impactMetric} {s.impactLabel.split(' ')[0]}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#F5F5F5] group-hover:text-[#FF1E38] transition-colors mb-3">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#858585] leading-relaxed mb-6">
                  {s.shortDescription}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 border-t border-[#1F1F24] pt-4 mb-6">
                  {s.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-2 text-xs text-[#858585]">
                      <Check className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onEnquireForService(s.title)}
                className="w-full py-3.5 rounded-xl bg-[#1A1A1E] group-hover:bg-[#E60023] text-[#F5F5F5] group-hover:text-white font-display font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Enquire For {s.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

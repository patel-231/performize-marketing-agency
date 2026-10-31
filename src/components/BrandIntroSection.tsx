import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_VALUES } from '../data/agencyData';

interface BrandIntroSectionProps {
  onLearnMore: () => void;
}

export const BrandIntroSection: React.FC<BrandIntroSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative overflow-hidden">
      {/* Subtle ambient red glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#E60023]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-[#1F1F24] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
              <span>Agency Manifesto</span>
              <span className="text-[#858585]">/ 01</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
              Built For The Bold. Refusing Mediocrity.
            </h2>
          </div>

          <button
            onClick={onLearnMore}
            className="text-xs uppercase tracking-wider text-[#858585] hover:text-[#CCFF00] transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>Our Full Story</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Asymmetrical Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Large Lead Paragraph (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-display text-2xl sm:text-3xl text-[#F5F5F5] font-light leading-snug">
              In an overcrowded digital landscape dominated by recycled templates and timid marketing,
              <span className="text-[#FF1E38] font-bold"> being safe is the highest risk of all</span>.
            </p>
            <p className="text-[#858585] text-base sm:text-lg leading-relaxed">
              Performize was founded to bridge the gaping divide between pure aesthetic creative agencies
              and pure quantitative performance media shops. We operate at the intersection of cinematic
              art direction, advanced motion, full-funnel algorithmic media buying, and autonomous AI infrastructure.
            </p>
            <p className="text-[#858585] text-base sm:text-lg leading-relaxed">
              We do not chase vanity metrics or produce ornamental campaigns. We design undeniable brand identities
              and construct ruthless acquisition engines that turn ambitious brands into category leaders.
            </p>
          </div>

          {/* Key Pillars / Values List (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono-numbers uppercase tracking-widest text-[#858585] border-b border-[#1F1F24] pb-3">
              Core Operational Invariants
            </h3>

            <div className="space-y-6">
              {BRAND_VALUES.map((val, idx) => (
                <div
                  key={val.title}
                  className="p-5 rounded-xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display font-bold text-base text-[#F5F5F5] group-hover:text-[#FF1E38] transition-colors">
                      {val.title}
                    </h4>
                    <span className="text-xs font-mono-numbers text-[#CCFF00]">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[#858585] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

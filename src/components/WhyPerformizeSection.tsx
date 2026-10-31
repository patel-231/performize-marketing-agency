import React from 'react';
import { WHY_PERFORMIZE } from '../data/agencyData';
import { Check, X, Zap } from 'lucide-react';

export const WhyPerformizeSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-[#1F1F24] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
              <span>Competitive Moat</span>
              <span className="text-[#858585]">/ 06</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] uppercase tracking-tight">
              Why Forward-Thinking Brands Choose Performize
            </h2>
          </div>
          <p className="text-xs text-[#858585] max-w-xs self-start sm:self-auto font-mono-numbers">
            Engineered from day one to replace slow, bloated legacy agency retainers.
          </p>
        </div>

        {/* 4 Differentiators Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {WHY_PERFORMIZE.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#1A1A1E] text-[#CCFF00] flex items-center justify-center font-mono-numbers text-xs font-bold border border-[#26262B]">
                  0{idx + 1}
                </span>
                <span className="text-[11px] font-mono-numbers uppercase text-[#858585] tracking-widest">
                  Standard Operating Protocol
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F5] group-hover:text-[#FF1E38] transition-colors mb-3">
                {item.title}
              </h3>

              <p className="text-[#858585] text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0E0E10] border border-[#1F1F24]">
          <h3 className="text-sm font-mono-numbers uppercase tracking-widest text-[#F5F5F5] mb-6 flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#CCFF00]" />
            <span>Legacy Agencies vs. The Performize Model</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#1F1F24]">
            <div className="pt-4 md:pt-0">
              <span className="text-xs uppercase tracking-wider text-[#858585] font-semibold block mb-2">
                Traditional Agency
              </span>
              <ul className="space-y-2.5 text-xs text-[#858585]">
                <li className="flex items-center gap-2 text-rose-400">
                  <X className="w-3.5 h-3.5 shrink-0" />
                  <span>3-4 weeks for simple ad edits</span>
                </li>
                <li className="flex items-center gap-2 text-rose-400">
                  <X className="w-3.5 h-3.5 shrink-0" />
                  <span>Account handed off to junior interns</span>
                </li>
                <li className="flex items-center gap-2 text-rose-400">
                  <X className="w-3.5 h-3.5 shrink-0" />
                  <span>Vanity metrics (impressions, clicks)</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="text-xs uppercase tracking-wider text-[#CCFF00] font-semibold block mb-2">
                Performize Agency
              </span>
              <ul className="space-y-2.5 text-xs text-[#F5F5F5]">
                <li className="flex items-center gap-2 text-[#CCFF00]">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>48-hour rapid creative sprint cycle</span>
                </li>
                <li className="flex items-center gap-2 text-[#CCFF00]">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Senior directors on every strategy call</span>
                </li>
                <li className="flex items-center gap-2 text-[#CCFF00]">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Net ROAS & verified inbound revenue pipeline</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-wider text-[#858585] font-semibold block mb-1">
                Average Speed Advantage
              </span>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#FF1E38] font-mono-numbers">
                +400%
              </div>
              <span className="text-[11px] text-[#858585] mt-1">
                Faster time-to-market on new ad angles & conversion funnels
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

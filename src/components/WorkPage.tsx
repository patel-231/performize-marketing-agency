import React, { useState } from 'react';
import { AGENCY_PROJECTS } from '../data/agencyData';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface WorkPageProps {
  onSelectProject: (project: Project) => void;
  onOpenEnquiry: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectProject, onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'brand', label: 'Brand & Performance' },
    { id: 'ecommerce', label: 'eCommerce Growth' },
    { id: 'automation', label: 'AI & Automation' }
  ];

  const filtered = AGENCY_PROJECTS.filter(p => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'brand') return p.category.includes('Brand') || p.category.includes('Performance');
    if (activeCategory === 'ecommerce') return p.category.includes('eCommerce');
    if (activeCategory === 'automation') return p.category.includes('AI') || p.category.includes('Automation');
    return true;
  });

  return (
    <div className="pt-32 pb-24 bg-[#0B0B0C] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Hero */}
        <div className="border-b border-[#1F1F24] pb-12 mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
            <span>Portfolio Archive</span>
            <span className="text-[#858585]">/ 2025–2026</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#F5F5F5] uppercase tracking-tight text-balance">
            Evidence of Growth.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#FF4D64]">
              Work That Scales.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#858585] max-w-2xl font-light leading-relaxed">
            Every case study below represents real business architecture: creative repositioning,
            algorithmic customer acquisition, and 24/7 automation systems built for compounding enterprise value.
          </p>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mt-10">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#E60023] text-white shadow-[0_0_20px_rgba(230,0,35,0.4)]'
                    : 'bg-[#121214] text-[#858585] border border-[#222227] hover:text-[#F5F5F5] hover:border-[#33333A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image-Led Case Study Layouts */}
        <div className="space-y-16">
          {filtered.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              data-cursor="project"
              className="rounded-2xl bg-[#121214] border border-[#222227] overflow-hidden hover:border-[#E60023]/60 transition-all duration-500 group cursor-pointer shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Media (7 cols) */}
                <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#0E0E10]">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-60" />
                </div>

                {/* Details (5 cols) */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono-numbers text-[#858585] mb-2">
                      <span className="text-[#CCFF00] font-semibold">{proj.clientIndustry}</span>
                      <span>{proj.year}</span>
                    </div>

                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F5F5] group-hover:text-[#FF1E38] transition-colors">
                      {proj.title}
                    </h2>

                    <p className="text-[#858585] text-sm sm:text-base leading-relaxed mt-4">
                      {proj.shortDescription}
                    </p>

                    {/* Quantified Metrics */}
                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#1F1F24]">
                      {proj.results.slice(0, 2).map(r => (
                        <div key={r.label}>
                          <div className="font-display font-extrabold text-2xl text-[#F5F5F5] font-mono-numbers">
                            {r.value}
                          </div>
                          <div className="text-[11px] text-[#858585] uppercase tracking-wider mt-0.5">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex items-center justify-between">
                    <span className="text-xs uppercase font-mono-numbers text-[#858585]">
                      Click to explore full case
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#1A1A1E] group-hover:bg-[#E60023] text-[#F5F5F5] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-24 p-10 rounded-2xl bg-[#121214] border border-[#26262B] text-center space-y-6">
          <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-[#F5F5F5]">
            Have a custom brand challenge?
          </h3>
          <p className="text-sm text-[#858585] max-w-lg mx-auto">
            We architect tailored solutions across paid media, bespoke development, and automated AI lead generation.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-4 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(230,0,35,0.4)] cursor-pointer"
          >
            Request Private Case Presentation
          </button>
        </div>
      </div>
    </div>
  );
};

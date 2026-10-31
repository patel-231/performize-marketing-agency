import React, { useState } from 'react';
import { AGENCY_PROJECTS } from '../data/agencyData';
import { Project } from '../types';
import { ArrowUpRight, Layers } from 'lucide-react';

interface WorkPageProps {
  onSelectProject: (project: Project) => void;
  onOpenEnquiry: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectProject, onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'd2c' | 'ecommerce' | 'lead-generation'>('all');

  const filterTabs: { id: 'all' | 'd2c' | 'ecommerce' | 'lead-generation'; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'd2c', label: 'D2C' },
    { id: 'ecommerce', label: 'Ecommerce' },
    { id: 'lead-generation', label: 'Lead Generation' }
  ];

  const filtered = AGENCY_PROJECTS.filter(p => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'd2c') return p.category.toLowerCase().includes('d2c');
    if (activeCategory === 'ecommerce') return p.category.toLowerCase().includes('ecommerce');
    if (activeCategory === 'lead-generation') return p.category.toLowerCase().includes('lead generation');
    return true;
  });

  return (
    <div className="pt-32 pb-24 bg-[#0B0B0C] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Hero */}
        <div className="border-b border-[#1F1F24] pb-12 mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
            <Layers className="w-4 h-4 text-[#CCFF00]" />
            <span>Portfolio Archive</span>
            <span className="text-[#858585]">/ D2C · Ecommerce · Lead Generation</span>
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

        {/* Stack of Cards Layout */}
        <div className="relative pb-24 space-y-12 sm:space-y-16">
          {filtered.map((proj, idx) => {
            const stickyTop = 110 + idx * 24;
            const zIndex = 10 + idx;

            return (
              <div
                key={proj.id}
                style={{
                  top: `${stickyTop}px`,
                  zIndex: zIndex
                }}
                onClick={() => onSelectProject(proj)}
                data-cursor="project"
                className="sticky rounded-3xl bg-[#121214] border border-[#26262B] overflow-hidden hover:border-[#E60023]/70 transition-all duration-500 group cursor-pointer shadow-[0_-15px_40px_rgba(0,0,0,0.9),0_25px_60px_rgba(0,0,0,0.9)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Media (7 cols) */}
                  <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto overflow-hidden bg-[#0E0E10]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-[#0B0B0C]/85 backdrop-blur-md border border-[#26262B] text-xs font-mono-numbers text-[#CCFF00] font-semibold">
                        {proj.category}
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#0B0B0C]/85 backdrop-blur-md border border-[#26262B] text-xs font-mono-numbers text-[#858585]">
                        {proj.year}
                      </span>
                    </div>
                  </div>

                  {/* Details (5 cols) */}
                  <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#121214]">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono-numbers text-[#858585] mb-3">
                        <span className="text-[#CCFF00] font-semibold uppercase tracking-wider">{proj.clientIndustry}</span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-[#1A1A1E] text-[#858585]">Case #0{idx + 1}</span>
                      </div>

                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#F5F5F5] group-hover:text-[#FF1E38] transition-colors">
                        {proj.title}
                      </h2>

                      <p className="text-[#858585] text-sm sm:text-base leading-relaxed mt-4">
                        {proj.shortDescription}
                      </p>

                      {/* Quantified Metrics */}
                      <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-[#1F1F24]">
                        {proj.results.slice(0, 2).map(r => (
                          <div key={r.label} className="p-3 rounded-xl bg-[#0B0B0C] border border-[#1F1F24]">
                            <div className="font-display font-extrabold text-xl sm:text-2xl text-[#F5F5F5] font-mono-numbers">
                              {r.value}
                            </div>
                            <div className="text-[10px] text-[#858585] uppercase tracking-wider mt-1 line-clamp-1">
                              {r.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 mt-6 border-t border-[#1F1F24] flex items-center justify-between">
                      <span className="text-xs uppercase font-mono-numbers text-[#858585]">
                        Click to explore full case audit
                      </span>
                      <div className="w-11 h-11 rounded-full bg-[#1A1A1E] group-hover:bg-[#E60023] text-[#F5F5F5] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-10 rounded-2xl bg-[#121214] border border-[#26262B] text-center space-y-6">
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

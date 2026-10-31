import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { AGENCY_PROJECTS } from '../data/agencyData';
import { Project } from '../types';

interface SelectedWorkSectionProps {
  onSelectProject: (project: Project) => void;
  onViewAllWork: () => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({
  onSelectProject,
  onViewAllWork
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'd2c' | 'ecommerce' | 'lead-generation'>('all');

  const categories: { id: 'all' | 'd2c' | 'ecommerce' | 'lead-generation'; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'd2c', label: 'D2C' },
    { id: 'ecommerce', label: 'Ecommerce' },
    { id: 'lead-generation', label: 'Lead Generation' }
  ];

  const filteredProjects = AGENCY_PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'd2c') return proj.category.toLowerCase().includes('d2c');
    if (activeFilter === 'ecommerce') return proj.category.toLowerCase().includes('ecommerce');
    if (activeFilter === 'lead-generation') return proj.category.toLowerCase().includes('lead generation');
    return true;
  });

  return (
    <section id="work-section" className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with Title and Filter Segmented Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-[#1F1F24] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
              <Layers className="w-4 h-4 text-[#CCFF00]" />
              <span>Selected Portfolio</span>
              <span className="text-[#858585]">/ 02 · Stacking Showcase</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] uppercase tracking-tight">
              Work That Commands Market Share
            </h2>
          </div>

          {/* Interactive filter tabs: Strictly All, D2C, Ecommerce, Lead Generation */}
          <div className="flex items-center gap-1.5 p-1 bg-[#121214] border border-[#222227] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-[#E60023] text-white shadow-[0_0_15px_rgba(230,0,35,0.4)]'
                    : 'text-[#858585] hover:text-[#F5F5F5] hover:bg-[#1A1A1E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stack of Cards Container */}
        <div className="relative pb-24 space-y-12 sm:space-y-16">
          {filteredProjects.map((project, idx) => {
            // Dynamic stack offset
            const stickyTop = 110 + idx * 24;
            const zIndex = 10 + idx;

            return (
              <div
                key={project.id}
                style={{
                  top: `${stickyTop}px`,
                  zIndex: zIndex
                }}
                onClick={() => onSelectProject(project)}
                data-cursor="project"
                className="sticky rounded-3xl bg-[#121214] border border-[#26262B] transition-all duration-500 hover:border-[#E60023]/70 group cursor-pointer shadow-[0_-15px_40px_rgba(0,0,0,0.9),0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Left Column: Visual Media with Dark Vignette (7 cols) */}
                  <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto overflow-hidden bg-[#0A0A0B]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-70 lg:opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#121214] hidden lg:block opacity-90" />

                    {/* Floating pill tags */}
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-[#0B0B0C]/85 backdrop-blur-md border border-[#26262B] text-xs font-mono-numbers text-[#CCFF00] font-semibold">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#0B0B0C]/85 backdrop-blur-md border border-[#26262B] text-xs font-mono-numbers text-[#858585]">
                        {project.year}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 lg:hidden">
                      <span className="text-xs uppercase font-mono-numbers text-[#CCFF00] font-semibold">
                        {project.clientIndustry}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Case Details & Quantified Metrics (5 cols) */}
                  <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#121214]">
                    <div>
                      <div className="hidden lg:flex items-center justify-between text-xs font-mono-numbers text-[#858585] mb-3">
                        <span className="text-[#CCFF00] font-semibold uppercase tracking-wider">
                          {project.clientIndustry}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-[#1A1A1E] text-[#858585]">
                          Case #0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#F5F5F5] group-hover:text-[#FF1E38] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-[#858585] text-sm sm:text-base leading-relaxed mt-4">
                        {project.shortDescription}
                      </p>

                      {/* Quantified Metrics Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-[#1F1F24]">
                        {project.results.map((res) => (
                          <div key={res.label} className="p-3 rounded-xl bg-[#0B0B0C] border border-[#1F1F24]">
                            <div className="font-display font-bold text-lg sm:text-xl text-[#F5F5F5] font-mono-numbers">
                              {res.value}
                            </div>
                            <div className="text-[10px] text-[#858585] uppercase tracking-wider mt-1 line-clamp-1">
                              {res.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA trigger */}
                    <div className="pt-8 mt-6 border-t border-[#1F1F24] flex items-center justify-between">
                      <span className="text-xs font-mono-numbers uppercase text-[#858585] group-hover:text-[#F5F5F5] transition-colors">
                        Inspect Complete Audit
                      </span>
                      <div className="w-11 h-11 rounded-full bg-[#1A1A1E] group-hover:bg-[#E60023] text-[#F5F5F5] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Work Button */}
        <div className="text-center pt-8">
          <button
            onClick={onViewAllWork}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#121214] hover:bg-[#1A1A1E] border border-[#26262B] hover:border-[#E60023] text-[#F5F5F5] font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
          >
            <span>Explore All Client Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-[#CCFF00]" />
          </button>
        </div>
      </div>
    </section>
  );
};

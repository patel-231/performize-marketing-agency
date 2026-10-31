import React, { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
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
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Cases' },
    { id: 'brand', label: 'Brand & Growth' },
    { id: 'ecommerce', label: 'eCommerce' },
    { id: 'ai', label: 'AI & Automation' }
  ];

  const filteredProjects = AGENCY_PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'brand') return proj.category.includes('Brand') || proj.category.includes('Performance');
    if (activeFilter === 'ecommerce') return proj.category.includes('eCommerce');
    if (activeFilter === 'ai') return proj.category.includes('AI') || proj.category.includes('Automation');
    return true;
  });

  return (
    <section className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with Title and Filter Segmented Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-[#1F1F24] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
              <span>Selected Portfolio</span>
              <span className="text-[#858585]">/ 02</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] uppercase tracking-tight">
              Work That Commands Market Share
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#121214] border border-[#222227] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
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

        {/* Dynamic Asymmetric Project Showcase Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout span
            const isColWide = idx % 3 === 0;
            const colSpan = isColWide ? 'lg:col-span-12' : 'lg:col-span-6';

            return (
              <div
                key={project.id}
                className={`${colSpan} group cursor-pointer`}
                onClick={() => onSelectProject(project)}
                data-cursor="project"
              >
                {/* Media Container with Dynamic Scrim */}
                <div className="relative rounded-2xl overflow-hidden border border-[#222227] bg-[#121214] transition-all duration-500 group-hover:border-[#E60023]/60 group-hover:shadow-[0_20px_50px_rgba(230,0,35,0.15)]">
                  <div className={`relative overflow-hidden ${isColWide ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[16/10]'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  </div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md bg-[#0B0B0C]/80 backdrop-blur-md border border-[#26262B] text-xs font-mono-numbers text-[#F5F5F5]">
                      {project.year}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-[#0B0B0C]/80 backdrop-blur-md border border-[#26262B] text-xs font-medium text-[#CCFF00]">
                      {project.clientIndustry}
                    </span>
                  </div>

                  {/* Content Overlay / Bottom Bar */}
                  <div className="p-6 sm:p-8 bg-[#121214] border-t border-[#1F1F24]">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs font-mono-numbers uppercase tracking-wider text-[#E60023] font-semibold">
                          {project.category}
                        </span>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F5F5] group-hover:text-[#FF1E38] transition-colors mt-1">
                          {project.title}
                        </h3>
                      </div>

                      <div className="w-10 h-10 rounded-full bg-[#1A1A1E] group-hover:bg-[#E60023] text-[#F5F5F5] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    <p className="text-[#858585] text-sm sm:text-base line-clamp-2 mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Results Metrics Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1F1F24]">
                      {project.results.map((res) => (
                        <div key={res.label}>
                          <div className="font-display font-bold text-lg sm:text-xl text-[#F5F5F5] font-mono-numbers">
                            {res.value}
                          </div>
                          <div className="text-[11px] text-[#858585] uppercase tracking-wider mt-0.5">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Work Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onViewAllWork}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#121214] hover:bg-[#1A1A1E] border border-[#26262B] hover:border-[#E60023] text-[#F5F5F5] font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
          >
            <span>View Complete Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-[#CCFF00]" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';
import { AGENCY_SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesOverviewSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onEnquireService: (serviceTitle: string) => void;
}

export const ServicesOverviewSection: React.FC<ServicesOverviewSectionProps> = ({
  onSelectService,
  onEnquireService
}) => {
  const [expandedId, setExpandedId] = useState<string>(AGENCY_SERVICES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-[#1F1F24] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
              <span>Capabilities Matrix</span>
              <span className="text-[#858585]">/ 03</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] uppercase tracking-tight">
              Nine Disciplines. Zero Silos.
            </h2>
          </div>
          <p className="text-xs text-[#858585] max-w-xs self-start sm:self-auto font-mono-numbers">
            All capabilities engineered in-house for maximum cross-funnel synergy.
          </p>
        </div>

        {/* Interactive Accordion / Expandable Service List */}
        <div className="divide-y divide-[#1F1F24] border-y border-[#1F1F24]">
          {AGENCY_SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`transition-colors duration-300 ${
                  isExpanded ? 'bg-[#121214]/60' : 'hover:bg-[#121214]/30'
                }`}
              >
                {/* Clickable Header Row */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="py-7 sm:py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="font-mono-numbers text-sm font-semibold text-[#858585] group-hover:text-[#CCFF00] transition-colors w-6">
                      {service.number}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[#F5F5F5] group-hover:text-[#FF1E38] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pl-12 md:pl-0">
                    {/* Impact metric badge */}
                    <div className="hidden sm:flex items-center gap-2 text-right">
                      <span className="font-mono-numbers font-bold text-sm text-[#CCFF00]">
                        {service.impactMetric}
                      </span>
                      <span className="text-[11px] text-[#858585] uppercase tracking-wider">
                        {service.impactLabel}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#1A1A1E] group-hover:bg-[#E60023] text-[#F5F5F5] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-8 pt-2 pl-12 sm:pl-20 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#1F1F24]/60 animate-fadeIn">
                    {/* Overview & Deliverables (8 cols) */}
                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-[#858585] text-base leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-[#F5F5F5] font-semibold mb-3">
                          Standard Sprint Deliverables
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-xs text-[#858585]">
                              <Check className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Core Tech Stack */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-[11px] uppercase tracking-wider text-[#858585] mr-2">
                          Core Stack:
                        </span>
                        {service.coreTech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#1A1A1E] border border-[#26262B] text-xs font-mono-numbers text-[#F5F5F5]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Card (4 cols) */}
                    <div className="lg:col-span-4 p-6 rounded-xl bg-[#0B0B0C] border border-[#26262B] flex flex-col justify-between gap-6">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#858585]">
                          Target Benchmark
                        </span>
                        <div className="font-display font-extrabold text-3xl text-[#CCFF00] font-mono-numbers mt-1">
                          {service.impactMetric}
                        </div>
                        <div className="text-xs text-[#858585] mt-0.5">
                          {service.impactLabel}
                        </div>
                      </div>

                      <button
                        onClick={() => onEnquireService(service.title)}
                        className="w-full py-3 px-4 rounded-xl bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(230,0,35,0.4)] cursor-pointer"
                      >
                        <span>Enquire For {service.title}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

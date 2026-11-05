import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Layers, Sparkles, MessageCircle } from 'lucide-react';
import { AGENCY_SERVICES, getServiceWhatsAppUrl } from '../data/agencyData';
import { ServiceItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

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
    <section id="services-section" className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-[#1F1F24] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
              <span>Capabilities Matrix</span>
              <span className="text-[#858585]">/ 03 · Interactive Extraction</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] uppercase tracking-tight">
              Nine Disciplines. Zero Silos.
            </h2>
          </div>
          <p className="text-xs text-[#858585] max-w-xs self-start sm:self-auto font-mono-numbers">
            Click any discipline to extract full sprint deliverables, tech stack, and verified benchmarks.
          </p>
        </div>

        {/* Interactive Accordion / Expandable Service List with Smooth Motion */}
        <div className="divide-y divide-[#1F1F24] border-y border-[#1F1F24]">
          {AGENCY_SERVICES.map((service, idx) => {
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`transition-colors duration-300 ${
                  isExpanded ? 'bg-[#121214]/80' : 'hover:bg-[#121214]/40'
                }`}
              >
                {/* Clickable Header Row */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="py-7 sm:py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group select-none"
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

                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isExpanded
                        ? 'bg-[#E60023] text-white rotate-180 shadow-[0_0_15px_rgba(230,0,35,0.5)]'
                        : 'bg-[#1A1A1E] text-[#F5F5F5] group-hover:bg-[#E60023] group-hover:text-white'
                    }`}>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Smooth Animated Extraction Drawer */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${service.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-8 pt-4 pl-12 sm:pl-20 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#1F1F24]/60">
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
                        <div className="lg:col-span-4 p-6 rounded-xl bg-[#0B0B0C] border border-[#26262B] flex flex-col justify-between gap-6 shadow-xl">
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

                          <div className="space-y-2.5">
                            <a
                              href={getServiceWhatsAppUrl(service.title, service.whatsappMessage)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0B0B0C] font-display font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] active:scale-95"
                            >
                              <MessageCircle className="w-4 h-4 fill-[#0B0B0C]" />
                              <span>Discuss on WhatsApp</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </a>

                            <button
                              onClick={() => onEnquireService(service.title)}
                              className="w-full py-2.5 px-4 rounded-xl bg-[#1A1A1E] hover:bg-[#E60023] text-[#F5F5F5] hover:text-white font-display font-semibold text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-[#26262B] hover:border-transparent cursor-pointer active:scale-95"
                            >
                              <span>Custom Scope Proposal</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

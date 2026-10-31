import React, { useState } from 'react';
import { AGENCY_PROCESS } from '../data/agencyData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProcessSection: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const currentStep = AGENCY_PROCESS[activeStepIdx];

  return (
    <section className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-[#1F1F24] pb-8"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
              <span>Operational Blueprint</span>
              <span className="text-[#858585]">/ 05</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] uppercase tracking-tight">
              From Diagnostic To Scale
            </h2>
          </div>
          <p className="text-xs text-[#858585] max-w-xs self-start sm:self-auto font-mono-numbers">
            Our battle-tested 4-phase agile engine designed to mitigate risk and accelerate ROI.
          </p>
        </motion.div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {AGENCY_PROCESS.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            return (
              <motion.button
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#121214] border-[#E60023] shadow-[0_0_20px_rgba(230,0,35,0.25)]'
                    : 'bg-[#0E0E10] border-[#1F1F24] hover:border-[#2E2E35]'
                }`}
              >
                <span className={`font-mono-numbers text-xs font-bold block mb-2 ${
                  isActive ? 'text-[#CCFF00]' : 'text-[#858585]'
                }`}>
                  Phase {step.step}
                </span>
                <span className={`font-display font-bold text-sm sm:text-base line-clamp-1 ${
                  isActive ? 'text-[#F5F5F5]' : 'text-[#858585]'
                }`}>
                  {step.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Phase Details Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-2xl bg-[#121214] border border-[#222227] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-[#E60023] text-white text-xs font-mono-numbers font-bold">
                  Phase {currentStep.step}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#CCFF00] font-semibold">
                  {currentStep.tagline}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F5]">
                {currentStep.title}
              </h3>

              <p className="text-[#858585] text-base leading-relaxed">
                {currentStep.description}
              </p>

              <div className="pt-4 border-t border-[#1F1F24]">
                <span className="text-xs uppercase tracking-widest text-[#F5F5F5] font-semibold block mb-3">
                  Phase Deliverables & Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStep.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#F5F5F5]">
                      <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 rounded-xl bg-[#0B0B0C] border border-[#26262B] space-y-4">
                <span className="text-[11px] uppercase tracking-wider text-[#858585] font-mono-numbers">
                  Sprint Progression
                </span>
                <div className="w-full bg-[#1F1F24] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#E60023] to-[#CCFF00] h-full transition-all duration-500"
                    style={{ width: `${((activeStepIdx + 1) / AGENCY_PROCESS.length) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-[#858585] font-mono-numbers">
                  <span>Phase 01</span>
                  <span>Phase 04</span>
                </div>

                <div className="pt-4 flex justify-between items-center text-xs">
                  <button
                    disabled={activeStepIdx === 0}
                    onClick={() => setActiveStepIdx(prev => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded bg-[#1A1A1E] text-[#F5F5F5] hover:bg-[#26262B] disabled:opacity-40 cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    disabled={activeStepIdx === AGENCY_PROCESS.length - 1}
                    onClick={() => setActiveStepIdx(prev => Math.min(AGENCY_PROCESS.length - 1, prev + 1))}
                    className="px-3.5 py-1.5 rounded bg-[#E60023] text-white hover:bg-[#FF1E38] disabled:opacity-40 flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

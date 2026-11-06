import React from 'react';
import { Flame, Shield, Target } from 'lucide-react';
import { motion } from 'motion/react';

interface PhilosophySectionProps {
  onStartProject: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onStartProject }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E60023]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3"
        >
          <span>Agency Philosophy</span>
          <span className="text-[#858585]">/ 04</span>
        </motion.div>

        {/* Oversized Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F5] uppercase leading-[1.08] tracking-tight">
              We Don't Follow Trends.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] to-[#FF4D64]">
                We Engineer Attention.
              </span>
            </h2>

            <p className="mt-8 text-lg text-[#858585] max-w-2xl leading-relaxed font-light">
              Digital noise has reached saturation. The human brain filters out 99% of advertisements
              it encounters daily. The only currency that converts into enduring valuation is radical
              memorability paired with scientific distribution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <div className="p-8 rounded-2xl bg-[#121214] border border-[#26262B] relative shadow-xl hover:border-[#CCFF00]/40 transition-colors">
              <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono-numbers">
                Guiding Doctrine
              </span>
              <p className="font-display text-xl font-bold text-[#F5F5F5] mt-3 leading-snug">
                "If it feels comfortable, it will be forgotten. If it commands conviction, it will scale."
              </p>
              <div className="mt-6 pt-6 border-t border-[#1F1F24] flex items-center justify-between text-xs text-[#858585]">
                <span>Performize Creative Directorate</span>
                <span className="text-[#E60023]">✦</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Verified Track Record Affirmation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-12 border-t border-[#1F1F24] grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#CCFF00]/40 transition-colors">
            <span className="text-xs uppercase font-mono-numbers text-[#CCFF00] tracking-wider block mb-2 font-semibold">
              Verified Scale
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] font-mono-numbers">
              30+ Brands
            </div>
            <p className="text-xs text-[#858585] mt-2 leading-relaxed">
              Partnered and scaled across e-commerce, D2C, education, and high-ticket service verticals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/40 transition-colors">
            <span className="text-xs uppercase font-mono-numbers text-[#FF1E38] tracking-wider block mb-2 font-semibold">
              Capital Deployed
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] font-mono-numbers">
              ₹10 Cr+
            </div>
            <p className="text-xs text-[#858585] mt-2 leading-relaxed">
              Ad spend managed across Meta Ads &amp; Google Ads with verified conversion tracking.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#CCFF00]/40 transition-colors">
            <span className="text-xs uppercase font-mono-numbers text-[#CCFF00] tracking-wider block mb-2 font-semibold">
              Execution Track Record
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] font-mono-numbers">
              30+ Campaigns
            </div>
            <p className="text-xs text-[#858585] mt-2 leading-relaxed">
              High-converting funnels run &amp; managed with 24/7 automated lead routing and CAPI tracking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

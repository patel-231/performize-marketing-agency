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

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#1F1F24]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-[#26262B] flex items-center justify-center text-[#E60023]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#F5F5F5]">
              Conversion Is In The Craft
            </h3>
            <p className="text-sm text-[#858585] leading-relaxed">
              True conversion rate optimization isn’t changing a button color from blue to green. It’s crafting an unshakeable narrative hook that resolves customer skepticism in 3 seconds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-[#26262B] flex items-center justify-center text-[#CCFF00]">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#F5F5F5]">
              Velocity Kills Competition
            </h3>
            <p className="text-sm text-[#858585] leading-relaxed">
              Markets reward the rapid. Our streamlined studio model lets us iterate on creatives, launch funnels, and test live angles weeks before slow traditional agencies even finish their kickoff slide deck.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-[#26262B] flex items-center justify-center text-[#FF1E38]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#F5F5F5]">
              Data Without Ego
            </h3>
            <p className="text-sm text-[#858585] leading-relaxed">
              We test relentlessly and let real consumer behavior dictate winning assets. We don’t fall in love with concepts that don’t generate cash flow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

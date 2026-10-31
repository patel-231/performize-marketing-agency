import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, Award, Compass, Eye, ShieldCheck, Zap } from 'lucide-react';

interface AboutPageProps {
  onStartProject: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onStartProject }) => {
  return (
    <div className="pt-32 pb-24 bg-[#0B0B0C] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="border-b border-[#1F1F24] pb-12 mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
            <span>About Performize</span>
            <span className="text-[#858585]">/ Who We Are</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#F5F5F5] uppercase tracking-tight text-balance">
            The Digital Agency Built For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#FF4D64]">
              High-Velocity Scale.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#858585] max-w-2xl font-light leading-relaxed">
            Performize is an internationally positioned creative digital marketing agency.
            We dismantle the traditional boundaries between artistic creativity and performance marketing.
          </p>
        </div>

        {/* Brand Symbol Story Section */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#121214] border border-[#26262B] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#0B0B0C] rounded-xl border border-[#1F1F24]">
            <BrandLogo size="xl" showSubtitle={true} className="flex-col text-center" />
            <div className="mt-6 text-center text-xs text-[#858585] max-w-xs font-mono-numbers">
              Ascending skyscraper monoliths swept by an upward arrow: symbolizing architectural stability and exponential market elevation.
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono-numbers font-semibold">
              The Symbolism of Elevation
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
              Architecture Meets Velocity
            </h2>
            <p className="text-[#858585] text-sm sm:text-base leading-relaxed">
              Our emblem is derived from two core fundamentals: the structural permanence of modern skyscrapers
              and the upward velocity of exponential performance trajectories.
            </p>
            <p className="text-[#858585] text-sm sm:text-base leading-relaxed">
              Most digital marketing produces fleeting spikes followed by immediate crashes. We build brands like skyscrapers—anchored by undeniable design systems, automated CRM pipelines, and compounding organic authority—then propel them upward with surgical paid media.
            </p>
          </div>
        </div>

        {/* Vision & Creative Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-[#121214] border border-[#222227] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] text-[#E60023] flex items-center justify-center border border-[#26262B]">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#F5F5F5]">
              Our Vision
            </h3>
            <p className="text-[#858585] text-sm sm:text-base leading-relaxed">
              To redefine the standard of modern brand building. We envision an industry where creative agencies
              are judged not by awards alone, but by actual enterprise value, qualified pipeline, and sustained category leadership created for client partners.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#121214] border border-[#222227] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] text-[#CCFF00] flex items-center justify-center border border-[#26262B]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#F5F5F5]">
              Creative Approach
            </h3>
            <p className="text-[#858585] text-sm sm:text-base leading-relaxed">
              We reject conservative design defaults. Every campaign asset must pass our primary invariant: Is it impossible to ignore? If an ad looks like every other competitor in the feed, it is dead on arrival. We engineer thumb-stopping contrast.
            </p>
          </div>
        </div>

        {/* Working Process Pillars */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0E0E10] border border-[#1F1F24] mb-20">
          <h3 className="text-xs uppercase tracking-widest text-[#858585] font-mono-numbers mb-8">
            Working Process &amp; Standards
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-display font-bold text-lg text-[#F5F5F5] mb-2">
                1. Full Immersion
              </div>
              <p className="text-xs text-[#858585] leading-relaxed">
                Before writing a line of copy or launching an ad set, we conduct deep stakeholder and customer interviews to extract your unique market advantage.
              </p>
            </div>
            <div>
              <div className="font-display font-bold text-lg text-[#F5F5F5] mb-2">
                2. Sprint-Based Production
              </div>
              <p className="text-xs text-[#858585] leading-relaxed">
                We work in 2-week focused sprints with clear weekly deliverables and transparent performance dashboards.
              </p>
            </div>
            <div>
              <div className="font-display font-bold text-lg text-[#F5F5F5] mb-2">
                3. Continuous Optimization
              </div>
              <p className="text-xs text-[#858585] leading-relaxed">
                We continuously rotate creatives, eliminate fatigue, and calibrate automated follow-ups to maintain highest possible ROAS.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onStartProject}
            className="px-8 py-4 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(230,0,35,0.4)] cursor-pointer"
          >
            Start A Strategic Conversation
          </button>
        </div>
      </div>
    </div>
  );
};

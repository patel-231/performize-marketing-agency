import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Compass, Eye, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FOUNDER_PROFILE, AGENCY_FAQS, createWhatsAppUrl } from '../data/agencyData';

interface AboutPageProps {
  onStartProject: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onStartProject }) => {
  return (
    <div className="pt-32 pb-24 bg-[#0B0B0C] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-[#1F1F24] pb-12 mb-16"
        >
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
        </motion.div>

        {/* Brand Symbol Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-2xl bg-[#121214] border border-[#26262B] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20"
        >
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
        </motion.div>

        {/* Vision & Creative Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl bg-[#121214] border border-[#222227] space-y-4"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-[#121214] border border-[#222227] space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] text-[#CCFF00] flex items-center justify-center border border-[#26262B]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#F5F5F5]">
              Creative Approach
            </h3>
            <p className="text-[#858585] text-sm sm:text-base leading-relaxed">
              We reject conservative design defaults. Every campaign asset must pass our primary invariant: Is it impossible to ignore? If an ad looks like every other competitor in the feed, it is dead on arrival. We engineer thumb-stopping contrast.
            </p>
          </motion.div>
        </div>

        {/* Working Process Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-2xl bg-[#0E0E10] border border-[#1F1F24] mb-20"
        >
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
        </motion.div>

        {/* Founder & Agency Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-2xl bg-[#121214] border border-[#26262B] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E60023]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Founder Portrait Column */}
          <div className="lg:col-span-4 relative flex flex-col items-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#2A2A30] bg-[#0E0E10] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <img
                src={FOUNDER_PROFILE.photo}
                alt={`${FOUNDER_PROFILE.name} — ${FOUNDER_PROFILE.title}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E60023]/20 via-transparent to-transparent opacity-40 mix-blend-screen" />

              {/* Status pill on photo */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 rounded-xl bg-[#0B0B0C]/85 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[11px] font-mono-numbers text-[#F5F5F5] font-semibold">Active & Available</span>
                </div>
                <span className="text-[10px] uppercase font-mono-numbers text-[#CCFF00] font-bold">FOUNDER</span>
              </div>
            </div>
          </div>

          {/* Founder Bio and Credentials Column */}
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E60023]/15 border border-[#E60023]/30 text-[#FF1E38] text-xs font-mono-numbers font-semibold">
              <span>AGENCY FOUNDER &amp; GROWTH ARCHITECT</span>
            </div>
            
            <div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
                {FOUNDER_PROFILE.name}
              </h3>
              <p className="text-xs uppercase font-mono-numbers text-[#CCFF00] tracking-wider font-semibold mt-1">
                {FOUNDER_PROFILE.title} · {FOUNDER_PROFILE.specialty}
              </p>
            </div>

            <p className="text-[#F5F5F5] text-base leading-relaxed font-light">
              "{FOUNDER_PROFILE.bio}"
            </p>

            <p className="text-xs text-[#858585] leading-relaxed">
              Serving ambitious brands across India and internationally — managing ₹10 Cr+ in ad spend, running &amp; managing 30+ campaigns across 30+ brands, and engineering automated lead-to-booking pipelines that eliminate operational friction.
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              {FOUNDER_PROFILE.credentials.map((cred) => (
                <span key={cred} className="px-2.5 py-1 rounded-md bg-[#1A1A1E] border border-[#26262B] text-[11px] text-[#858585] font-mono-numbers hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-colors">
                  {cred}
                </span>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={createWhatsAppUrl("Hi Arman, I read your background and track record on Performize. I would like to consult with you directly on scaling our marketing.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#0B0B0C] font-display font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B0B0C]" />
                <span>Chat Directly on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={FOUNDER_PROFILE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#1A1A1E] text-[#F5F5F5] border border-[#26262B] hover:border-[#CCFF00]/40 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Book 1-on-1 Strategy Call
              </a>
            </div>
          </div>
        </motion.div>

        {/* Real Frequently Asked Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#CCFF00] block mb-2">
              Clear Answers
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {AGENCY_FAQS.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl bg-[#121214] border border-[#222227] space-y-3">
                <h4 className="font-display font-bold text-base text-[#F5F5F5]">
                  {faq.question}
                </h4>
                <p className="text-xs text-[#858585] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Quick FAQ Question WhatsApp Banner */}
          <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-[#121214] border border-[#222227] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 fill-[#25D366]" />
              </span>
              <div>
                <div className="font-display font-bold text-sm text-[#F5F5F5]">
                  Have a specific question about your business?
                </div>
                <div className="text-xs text-[#858585]">
                  Get direct, straight answers without pushy sales tactics.
                </div>
              </div>
            </div>

            <a
              href={createWhatsAppUrl("Hi Arman, I reviewed your FAQs on Performize and have a question regarding my business marketing strategy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#0B0B0C] font-display font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shrink-0"
            >
              <span>Ask on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onStartProject}
            className="px-8 py-4 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(230,0,35,0.4)] cursor-pointer"
          >
            Start A Strategic Conversation
          </button>
          <a
            href={createWhatsAppUrl("Hi Arman, I would like to book a 1-on-1 strategy audit for my business with Performize.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#0B0B0C] font-display font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-[#0B0B0C]" />
            <span>WhatsApp Quick Audit</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

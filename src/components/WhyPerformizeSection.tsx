import React, { useState } from 'react';
import { REAL_CLIENT_BRANDS, CLIENT_TESTIMONIALS, createWhatsAppUrl } from '../data/agencyData';
import { Check, Star, X, Zap, MessageCircle, ArrowUpRight, LayoutGrid, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ClientBrand } from '../types';

export const WhyPerformizeSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');

  const row1Brands = REAL_CLIENT_BRANDS.slice(0, 12);
  const row2Brands = REAL_CLIENT_BRANDS.slice(12);

  // Duplicated for seamless infinite CSS marquee loops
  const marqueeRow1 = [...row1Brands, ...row1Brands, ...row1Brands];
  const marqueeRow2 = [...row2Brands, ...row2Brands, ...row2Brands];

  const BrandLogoCard = ({ brand }: { brand: ClientBrand }) => (
    <div className="group flex-shrink-0 mx-2.5 w-[160px] sm:w-[175px] h-[85px] rounded-2xl border border-white/10 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_30px_rgba(230,0,35,0.3)] hover:-translate-y-1 hover:border-[#CCFF00]/60 transition-all duration-300 flex items-center justify-center p-3 relative overflow-hidden">
      {brand.logo ? (
        <img
          src={brand.logo}
          alt={brand.name}
          className="max-h-[50px] max-w-[130px] w-auto h-auto object-contain transition-all duration-300 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="font-display font-bold text-xs text-[#111827] text-center px-1">
          {brand.name}
        </span>
      )}
    </div>
  );
  return (
    <section className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-[#1F1F24] pb-8"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
              <span>Competitive Moat</span>
              <span className="text-[#858585]">/ 06</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] uppercase tracking-tight">
              Why Forward-Thinking Brands Choose Performize
            </h2>
          </div>
          <p className="text-xs text-[#858585] max-w-xs self-start sm:self-auto font-mono-numbers">
            Engineered from day one to replace slow, bloated legacy agency retainers with measurable outcomes.
          </p>
        </motion.div>

        {/* Head-to-Head Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-10 rounded-2xl bg-[#0E0E10] border border-[#1F1F24] mb-20"
        >
          <h3 className="text-sm font-mono-numbers uppercase tracking-widest text-[#F5F5F5] mb-6 flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#CCFF00]" />
            <span>Legacy Agencies vs. The Performize Model</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#1F1F24]">
            <div className="pt-4 md:pt-0">
              <span className="text-xs uppercase tracking-wider text-[#858585] font-semibold block mb-2">
                Traditional Agency
              </span>
              <ul className="space-y-2.5 text-xs text-[#858585]">
                <li className="flex items-center gap-2 text-rose-400">
                  <X className="w-3.5 h-3.5 shrink-0" />
                  <span>3-4 weeks for simple ad edits</span>
                </li>
                <li className="flex items-center gap-2 text-rose-400">
                  <X className="w-3.5 h-3.5 shrink-0" />
                  <span>Account handed off to junior interns</span>
                </li>
                <li className="flex items-center gap-2 text-rose-400">
                  <X className="w-3.5 h-3.5 shrink-0" />
                  <span>Vanity metrics (impressions, clicks)</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="text-xs uppercase tracking-wider text-[#CCFF00] font-semibold block mb-2">
                Performize Agency
              </span>
              <ul className="space-y-2.5 text-xs text-[#F5F5F5]">
                <li className="flex items-center gap-2 text-[#CCFF00]">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>48-hour rapid creative sprint cycle</span>
                </li>
                <li className="flex items-center gap-2 text-[#CCFF00]">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Direct founder strategy on every call</span>
                </li>
                <li className="flex items-center gap-2 text-[#CCFF00]">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Net ROAS & verified inbound revenue pipeline</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-wider text-[#858585] font-semibold block mb-1">
                Average Speed Advantage
              </span>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#FF1E38] font-mono-numbers">
                +400%
              </div>
              <span className="text-[11px] text-[#858585] mt-1">
                Faster time-to-market on new ad angles & conversion funnels
              </span>
            </div>
          </div>
        </motion.div>

        {/* Verified Brands Trust Showcase - Real Brand Logos */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#1F1F24]">
            <div>
              <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#CCFF00] block mb-1">
                Proven Track Record · Real Brand Logos
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F5F5]">
                30+ Real Brands Scaled With Performize
              </h3>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-numbers text-[#858585] hidden md:block">
                ₹10 Cr+ Managed Spend · 30+ Campaigns Managed
              </span>

              {/* View Switcher: Marquee vs Grid */}
              <div className="flex items-center p-1 rounded-xl bg-[#141416] border border-[#26262B]">
                <button
                  onClick={() => setViewMode('marquee')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono-numbers transition-all ${
                    viewMode === 'marquee'
                      ? 'bg-[#E60023] text-white font-bold shadow-sm'
                      : 'text-[#858585] hover:text-[#F5F5F5]'
                  }`}
                >
                  Stream View
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono-numbers transition-all flex items-center gap-1.5 ${
                    viewMode === 'grid'
                      ? 'bg-[#E60023] text-white font-bold shadow-sm'
                      : 'text-[#858585] hover:text-[#F5F5F5]'
                  }`}
                >
                  <LayoutGrid className="w-3 h-3" />
                  <span>All 23 Logos</span>
                </button>
              </div>
            </div>
          </div>

          {/* Marquee View: Two Continuous Flowing Streams with Pause-on-Hover */}
          {viewMode === 'marquee' ? (
            <div className="space-y-4 py-2 overflow-hidden relative">
              {/* Left and right fade gradients for cinematic depth */}
              <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0B0B0C] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0B0B0C] to-transparent z-10 pointer-events-none" />

              {/* Row 1: Scrolling Left */}
              <div className="overflow-hidden w-full py-1">
                <div className="animate-marquee-left">
                  {marqueeRow1.map((client, idx) => (
                    <BrandLogoCard key={`r1-${client.name}-${idx}`} brand={client} />
                  ))}
                </div>
              </div>

              {/* Row 2: Scrolling Right */}
              <div className="overflow-hidden w-full py-1">
                <div className="animate-marquee-right">
                  {marqueeRow2.map((client, idx) => (
                    <BrandLogoCard key={`r2-${client.name}-${idx}`} brand={client} />
                  ))}
                </div>
              </div>

              <p className="text-center text-[11px] font-mono-numbers text-[#858585] pt-3">
                Hover over any logo to pause stream. Verified commercial clients across India & global markets.
              </p>
            </div>
          ) : (
            /* Grid View: All 23 Verified Logos */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {REAL_CLIENT_BRANDS.map((client) => (
                <div
                  key={client.name}
                  className="p-3.5 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#CCFF00]/50 transition-all duration-300 flex flex-col items-center justify-between gap-3 group"
                >
                  <div className="w-full h-[65px] rounded-xl bg-white flex items-center justify-center p-2.5 shadow-sm group-hover:scale-[1.03] transition-transform duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-[46px] max-w-[110px] w-auto h-auto object-contain"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center w-full">
                    <span className="font-display font-bold text-xs text-[#F5F5F5] group-hover:text-[#CCFF00] transition-colors truncate block">
                      {client.name}
                    </span>
                    <span className="text-[10px] text-[#858585] font-mono-numbers truncate block mt-0.5">
                      {client.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Scale Brand on WhatsApp CTA Banner */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#121214] border border-[#222227] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 fill-[#25D366]" />
              </span>
              <div>
                <div className="font-display font-bold text-sm text-[#F5F5F5]">
                  Ready to add your brand to our track record?
                </div>
                <div className="text-xs text-[#858585] mt-0.5">
                  Discuss target ROAS, ad creative sprints, and custom campaign funnels directly with Arman.
                </div>
              </div>
            </div>

            <a
              href={createWhatsAppUrl("Hi Arman, I saw the client brands you scaled at Performize (Karpasa, Starglazze, Fly High Visas, etc.). Let's discuss a strategy to scale my brand.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#0B0B0C] font-display font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-4 h-4 fill-[#0B0B0C]" />
              <span>Scale My Brand on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Real Client Reviews / Testimonials */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#1F1F24]">
            <div>
              <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#CCFF00] block mb-1">
                Verified Client Feedback
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F5F5]">
                Real Outcomes Backed by Real Partners
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono-numbers text-[#858585]">
              <div className="flex items-center text-[#CCFF00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#CCFF00] text-[#CCFF00]" />
                ))}
              </div>
              <span className="text-[#F5F5F5] font-bold">5.0 / 5.0</span>
              <span>· Verified Google & Meta Clients</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.slice(0, 6).map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#121214] border border-[#222227] flex flex-col justify-between relative group hover:border-[#E60023]/50 transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#CCFF00] mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#CCFF00] text-[#CCFF00]" />
                    ))}
                  </div>
                  <p className="text-[#F5F5F5] text-sm leading-relaxed mb-6 font-light">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1F1F24] flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#F5F5F5]">
                      {testimonial.name}
                    </h4>
                    <span className="text-xs text-[#858585] font-mono-numbers">
                      {testimonial.location}, India
                    </span>
                  </div>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.initials}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

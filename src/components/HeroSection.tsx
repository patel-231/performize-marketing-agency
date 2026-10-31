import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Sparkles, TrendingUp, Zap } from 'lucide-react';
import gsap from 'gsap';
import { AGENCY_METRICS } from '../data/agencyData';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onOpenShowreel?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreWork,
  onOpenShowreel
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered hero entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.1
      })
      .from('.hero-title-line', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15
      }, '-=0.5')
      .from(copyRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8
      }, '-=0.6')
      .from(mediaRef.current, {
        scale: 0.94,
        opacity: 0,
        duration: 1.1,
        ease: 'power2.out'
      }, '-=0.7')
      .from(tickerRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen pt-32 lg:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-[#0B0B0C]"
    >
      {/* Sophisticated background treatment: Obsidian grid & atmospheric crimson lighting */}
      <div className="absolute inset-0 pointer-events-none bg-noise opacity-40" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#E60023]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-[32rem] h-[32rem] bg-[#FF1E38]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-[#CCFF00]/5 to-transparent blur-[100px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 my-auto">
        {/* Editorial Subtitle / Agency Positioning Header */}
        <div className="hero-badge flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#858585] mb-6">
          <span className="flex items-center gap-1.5 text-[#CCFF00] font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Creative Performance Engine</span>
          </span>
          <span aria-hidden="true" className="text-[#333338]">·</span>
          <span>Digital Strategy</span>
          <span aria-hidden="true" className="text-[#333338]">·</span>
          <span>Next-Gen Brand Scale</span>
        </div>

        {/* 2-Column Asymmetric Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          {/* Column 1: Oversized Expressive Typography & Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1
              ref={headlineRef}
              className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl leading-[1.04] tracking-[-0.03em] uppercase text-[#F5F5F5] mb-8 text-balance"
            >
              <span className="block hero-title-line">
                Make Your Brand
              </span>
              <span className="block hero-title-line text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#FF4D64] drop-shadow-[0_4px_30px_rgba(230,0,35,0.4)]">
                Impossible
              </span>
              <span className="block hero-title-line flex items-center flex-wrap gap-x-4">
                <span>To Ignore</span>
                <span className="inline-block text-[#CCFF00] font-mono-numbers text-2xl sm:text-4xl align-middle font-light">
                  [+]
                </span>
              </span>
            </h1>

            {/* Supporting Text */}
            <div ref={copyRef} className="space-y-8 max-w-xl">
              <p className="text-lg sm:text-xl text-[#858585] font-light leading-relaxed">
                We combine <span className="text-[#F5F5F5] font-medium">creativity</span>,{' '}
                <span className="text-[#F5F5F5] font-medium">technology</span> and{' '}
                <span className="text-[#F5F5F5] font-medium">digital strategy</span> to help brands build
                stronger identities and create meaningful growth.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onStartProject}
                  data-cursor="explore"
                  className="group relative px-8 py-4 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(230,0,35,0.5)] hover:shadow-[0_0_40px_rgba(255,30,56,0.7)] flex items-center gap-3 cursor-pointer active:scale-95"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <button
                  onClick={onExploreWork}
                  data-cursor="project"
                  className="px-7 py-4 rounded-full bg-[#121214] hover:bg-[#1A1A1E] text-[#F5F5F5] border border-[#26262B] hover:border-[#CCFF00]/50 font-display font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Explore Our Work</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                </button>
              </div>

              {/* Client Satisfaction / Real-Time Guarantee Note */}
              <div className="flex items-center gap-3 pt-2 text-xs text-[#858585]">
                <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                <span>Currently onboarding select brands for Q4 / Q1 growth cycles</span>
              </div>
            </div>
          </div>

          {/* Column 2: Layered Creative Visual Showcase (5 cols) */}
          <div ref={mediaRef} className="lg:col-span-5 flex flex-col justify-center relative">
            <div
              data-cursor="project"
              className="relative w-full rounded-2xl overflow-hidden border border-[#26262B] bg-[#121214] group shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Aspect Ratio 16:9 Image with Dark Vignette Scrim */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="/src/assets/images/hero_creative_agency_1793425948429.jpg"
                  alt="Performize Creative Agency Architectural Space"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E60023]/20 via-transparent to-transparent opacity-60 mix-blend-screen" />
              </div>

              {/* Overlay Glass Floating Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-md bg-[#0B0B0C]/85 backdrop-blur-md border border-[#26262B] text-[11px] font-mono-numbers text-[#F5F5F5] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E60023]" />
                  <span>PERFORMIZE HQ · CREATIVE LAB</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#CCFF00] text-[#0B0B0C] text-[10px] font-bold uppercase tracking-wider font-mono-numbers">
                  2026 REEL
                </div>
              </div>

              {/* Bottom Interactive Banner within Media Container */}
              <div className="p-5 bg-[#121214] border-t border-[#1F1F24] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-display font-bold text-[#F5F5F5] group-hover:text-[#FF1E38] transition-colors">
                    The Art of Non-Conformity
                  </h4>
                  <p className="text-xs text-[#858585] mt-0.5">
                    Agency Methodology & Kinetic Showreel
                  </p>
                </div>

                <button
                  onClick={onOpenShowreel}
                  aria-label="Play Showreel"
                  className="w-10 h-10 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(230,0,35,0.5)] cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </button>
              </div>
            </div>

            {/* Floating Asymmetric Detail Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 p-4 rounded-xl bg-[#121214]/95 backdrop-blur-md border border-[#26262B] shadow-2xl items-center gap-4 max-w-xs">
              <div className="w-10 h-10 rounded-lg bg-[#E60023]/20 border border-[#E60023]/40 flex items-center justify-center text-[#FF1E38] shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-mono-numbers font-bold text-[#F5F5F5] text-sm leading-tight">
                  3.8x Blended ROAS
                </div>
                <div className="text-[#858585] text-[11px] mt-0.5">
                  Performance across Meta & Google campaigns
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width KPI Proof Strip below Hero Split (strictly follows §13 Spatial & 2-Column Balance) */}
      <div
        ref={tickerRef}
        className="w-full border-y border-[#1F1F24] bg-[#0E0E10] mt-16 py-6 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#1F1F24]">
            {AGENCY_METRICS.map((metric, idx) => (
              <div key={metric.label} className={`flex flex-col ${idx !== 0 ? 'sm:pl-8' : ''} pt-4 sm:pt-0`}>
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] font-mono-numbers tracking-tight flex items-center gap-1.5">
                  <span>{metric.value}</span>
                  {idx === 0 && <span className="text-[#CCFF00] text-sm">✦</span>}
                </span>
                <span className="text-xs text-[#858585] uppercase tracking-wider font-medium mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

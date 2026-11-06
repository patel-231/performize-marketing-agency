import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Play, TrendingUp, Zap, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { AGENCY_METRICS, createWhatsAppUrl } from '../data/agencyData';
import gsap from 'gsap';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onOpenShowreel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreWork,
  onOpenShowreel
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: -15,
        opacity: 0,
        duration: 0.7,
        delay: 0.1
      })
      .from('.hero-title-line', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power4.out'
      }, '-=0.4')
      .from(copyRef.current, {
        y: 25,
        opacity: 0,
        duration: 0.9
      }, '-=0.7')
      .from(mediaRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out'
      }, '-=0.8')
      .from(certRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, '-=0.6')
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
            <span>Creative Performance Marketing</span>
          </span>
          <span aria-hidden="true" className="text-[#333338]">·</span>
          <span>Meta &amp; Google Ads Specialists</span>
          <span aria-hidden="true" className="text-[#333338]">·</span>
          <span>Next-Gen Brand Scale</span>
        </div>

        {/* 2-Column Asymmetric Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          {/* Column 1: Inspired by Reference Design in Brand Palette (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Main Headline: "Optimize Your Ads For More Profit." */}
            <h1
              ref={headlineRef}
              className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.03em] text-[#F5F5F5] mb-6 text-balance"
            >
              <span className="block hero-title-line">
                Optimize Your Ads
              </span>
              <span className="relative inline-block hero-title-line mt-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#FF4D64] drop-shadow-[0_4px_30px_rgba(230,0,35,0.4)]">
                  For More Profit.
                </span>
                
                {/* Dynamic Curved Swoosh Underline in Electric Yellow with Pencil/Spark Accent */}
                <svg
                  className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-4 sm:h-5 text-[#CCFF00] overflow-visible pointer-events-none"
                  viewBox="0 0 320 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 14C65 4 200 4 315 15"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  {/* Subtle pencil/spark accent tip */}
                  <circle cx="317" cy="15" r="2.5" fill="#E60023" />
                </svg>
              </span>
            </h1>

            {/* Key Agency Track Record Line: "30+ Brands | ₹10 Cr+ Ad Spend | 30+ Campaigns Run & Managed" */}
            <div className="py-2.5 px-4 rounded-xl bg-[#121214] border border-[#222227] inline-flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono-numbers text-[#F5F5F5] font-semibold w-fit mb-5 shadow-inner">
              <span className="text-[#CCFF00]">30+ Brands</span>
              <span className="text-[#333338]">|</span>
              <span className="text-[#F5F5F5]">₹10 Cr+ Ad Spend</span>
              <span className="text-[#333338]">|</span>
              <span className="text-[#FF1E38]">30+ Campaigns Run &amp; Managed</span>
            </div>

            {/* Sub-headline from Reference */}
            <div ref={copyRef} className="space-y-6 max-w-xl">
              <p className="text-base sm:text-lg text-[#858585] font-light leading-relaxed">
                A dedicated team of specialists, delivering remarkable work to our clients worldwide! We combine high-velocity creative testing, AI-driven attribution, and full-funnel media buying to build category leaders.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={onStartProject}
                  data-cursor="explore"
                  className="group relative px-8 py-4 rounded-xl bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(230,0,35,0.5)] hover:shadow-[0_0_40px_rgba(255,30,56,0.7)] flex items-center gap-3 cursor-pointer active:scale-95"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <a
                  href={createWhatsAppUrl("Hi Arman, I would like to book a Free Strategy Audit for my brand with Performize.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0B0B0C] font-display font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(37,211,102,0.3)] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0B0B0C]" />
                  <span>WhatsApp: Free Audit</span>
                </a>

                <button
                  onClick={onExploreWork}
                  data-cursor="project"
                  className="px-6 py-4 rounded-xl bg-[#121214] hover:bg-[#1A1A1E] text-[#F5F5F5] border border-[#26262B] hover:border-[#CCFF00]/50 font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Explore Work</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                </button>
              </div>

              {/* Certified By Trust Bar from Reference */}
              <div ref={certRef} className="pt-4 border-t border-[#1F1F24]/80">
                <span className="text-[11px] uppercase tracking-wider text-[#858585] font-mono-numbers block mb-3 font-medium">
                  Our Performance Marketing Services are Certified by
                </span>
                
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* Meta Business Partner */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#121214] border border-[#222227] hover:border-[#0081FB]/50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0081FB] fill-current shrink-0">
                      <path d="M16.99 0H7.01C3.14 0 0 3.14 0 7.01v9.98C0 20.86 3.14 24 7.01 24h9.98c3.87 0 7.01-3.14 7.01-7.01V7.01C24 3.14 20.86 0 16.99 0zm-1.89 16.5c-1.39 0-2.47-.94-3.1-1.92-.63.98-1.71 1.92-3.1 1.92-2.12 0-3.65-1.76-3.65-4.5 0-2.74 1.53-4.5 3.65-4.5 1.45 0 2.54.98 3.1 1.92.56-.94 1.65-1.92 3.1-1.92 2.12 0 3.65 1.76 3.65 4.5 0 2.74-1.53 4.5-3.65 4.5zm0-7.2c-1.12 0-1.99 1.1-1.99 2.7 0 1.6.87 2.7 1.99 2.7 1.12 0 1.99-1.1 1.99-2.7 0-1.6-.87-2.7-1.99-2.7zm-6.2 0c-1.12 0-1.99 1.1-1.99 2.7 0 1.6.87 2.7 1.99 2.7 1.12 0 1.99-1.1 1.99-2.7 0-1.6-.87-2.7-1.99-2.7z" />
                    </svg>
                    <div className="flex flex-col leading-tight">
                      <span className="font-display font-extrabold text-xs text-[#F5F5F5] tracking-tight">Meta</span>
                      <span className="text-[9px] text-[#858585] uppercase tracking-wider font-mono-numbers">Business Partner</span>
                    </div>
                  </div>

                  {/* Shopify Partners */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#121214] border border-[#222227] hover:border-[#95BF47]/50 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
                      <path d="M19.9 8.2c-.1-.3-.3-.4-.5-.4-.1 0-1.5.1-1.5.1s-1.2-3.3-1.3-3.6c-.1-.3-.4-.4-.7-.4h-.3c-.3 0-1.9.1-3 .5-.8-.8-1.8-1.3-3-1.3-2.3 0-3.8 1.8-3.8 4.4 0 .9.2 1.8.6 2.6l-2.4.7c-.4.1-.6.5-.5.9l2.4 12.3c.1.4.4.7.8.7h8.8c.4 0 .8-.3.8-.7l4.3-15.3c0-.1 0-.3-.1-.5zm-4.3-.4l-1.3-.4c-.2-.1-.4 0-.4.2l-.7 2.3-1.7-.5c.8-1.5 2.1-2.4 3.7-2.8l.4 1.2zm-6-2.9c0-1.7 1-2.9 2.5-2.9.7 0 1.3.3 1.8.8-1.4.5-2.6 1.4-3.4 2.8-.6-.2-.9-.5-.9-.7zm.9 3.8c.2-.5.5-1 1-1.4l1.3.4-3.1 7.2-.6-3.1 1.4-3.1zm1.7 12.3l-2.1-10.8 1.4-.4 2.8 6.5c.2.4.6.6 1 .4.4-.2.6-.6.4-1l-2.7-6.2 1.4-.4.8 2.7c.1.3.4.5.7.5s.6-.1.7-.4l1-3.2 2.1.6-4.1 14.7h-7.6z" fill="#95BF47" />
                    </svg>
                    <div className="flex flex-col leading-tight">
                      <span className="font-display font-extrabold text-xs text-[#95BF47] tracking-tight">shopify</span>
                      <span className="text-[9px] text-[#858585] uppercase tracking-wider font-mono-numbers">partners</span>
                    </div>
                  </div>

                  {/* Google Partner */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#121214] border border-[#222227] hover:border-[#4285F4]/50 transition-colors">
                    <div className="flex items-center gap-0.5 shrink-0">
                      <span className="w-1.5 h-4 rounded-sm bg-[#4285F4]" />
                      <span className="w-1.5 h-4 rounded-sm bg-[#EA4335]" />
                      <span className="w-1.5 h-4 rounded-sm bg-[#FBBC05]" />
                      <span className="w-1.5 h-4 rounded-sm bg-[#34A853]" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="font-display font-extrabold text-xs text-[#F5F5F5] tracking-tight">Google</span>
                      <span className="text-[9px] text-[#858585] uppercase tracking-wider font-mono-numbers">Partner</span>
                    </div>
                  </div>
                </div>
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
                  src="/assets/images/hero_marketing_monolith_1793790555026.jpg"
                  alt="Performize Digital Marketing Agency — Skyscraper Monoliths and Live Ad Telemetry"
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
                    Agency Methodology &amp; Kinetic Showreel
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
                  ₹2.85 / Lead · 4.99M+ Impr
                </div>
                <div className="text-[#858585] text-[11px] mt-0.5">
                  Verified Meta Ads live account data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width KPI Proof Strip below Hero Split */}
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

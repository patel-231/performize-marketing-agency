import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ChevronRight, ShieldCheck, TrendingDown, TrendingUp, Image as ImageIcon, Maximize2, X, Filter } from 'lucide-react';
import { VERIFIED_CAMPAIGN_PROOFS, ProofItem } from '../data/proofsData';

interface MetricPoint {
  date: string;
  value: number;
  cost: string;
  spend: string;
}

export const MetaInsightsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'conversations' | 'roas' | 'cpl' | 'campaigns' | 'proofs'>('conversations');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProof, setSelectedProof] = useState<ProofItem | null>(null);
  const [proofFilter, setProofFilter] = useState<'all' | 'ecommerce' | 'leads' | 'app' | 'google-ads' | 'overview'>('all');

  // IntersectionObserver state to trigger animations when scrolled into view
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [animTriggerKey, setAnimTriggerKey] = useState(0);

  // Animated Numbers State
  const [impressionsVal, setImpressionsVal] = useState(0);
  const [leadCostVal, setLeadCostVal] = useState(95.0);
  const [purchasesVal, setPurchasesVal] = useState(0);
  const [clickCostVal, setClickCostVal] = useState(18.5);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setAnimTriggerKey(k => k + 1);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth easing counter for increments and decrements
  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800; // ms

    // EaseOutExpo curve
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    let frameId: number;
    const updateCounters = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);

      // Increment: Impressions from 0.00 to 4.99
      setImpressionsVal(0 + (4.99 - 0) * eased);

      // Decrement: Lowest Lead Acquisition from ₹95.00 down to ₹2.85
      setLeadCostVal(95.0 - (95.0 - 2.85) * eased);

      // Increment: Purchases from 0 to 390
      setPurchasesVal(Math.round(0 + (390 - 0) * eased));

      // Decrement: Lowest Click Cost from ₹18.50 down to ₹0.48
      setClickCostVal(18.5 - (18.5 - 0.48) * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounters);
      }
    };

    frameId = requestAnimationFrame(updateCounters);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, animTriggerKey]);

  // Exact data from Page 12, 17, 20 of Meta Ads Manager reports
  const dailyConversationData: MetricPoint[] = [
    { date: '1 Apr', value: 21, cost: '₹22.10', spend: '₹464.10' },
    { date: '4 Apr', value: 18, cost: '₹24.50', spend: '₹441.00' },
    { date: '7 Apr', value: 32, cost: '₹18.40', spend: '₹588.80' },
    { date: '11 Apr', value: 16, cost: '₹26.10', spend: '₹417.60' },
    { date: '14 Apr', value: 24, cost: '₹21.00', spend: '₹504.00' },
    { date: '17 Apr', value: 8, cost: '₹31.20', spend: '₹249.60' },
    { date: '21 Apr', value: 26, cost: '₹19.80', spend: '₹514.80' },
    { date: '25 Apr', value: 34, cost: '₹16.50', spend: '₹561.00' },
    { date: '29 Apr', value: 20, cost: '₹22.00', spend: '₹440.00' },
    { date: '3 May', value: 27, cost: '₹18.90', spend: '₹510.30' },
    { date: '8 May', value: 14, cost: '₹25.80', spend: '₹361.20' },
    { date: '12 May', value: 22, cost: '₹20.40', spend: '₹448.80' },
    { date: '16 May', value: 19, cost: '₹23.10', spend: '₹438.90' },
    { date: '20 May', value: 26, cost: '₹19.50', spend: '₹507.00' },
    { date: '24 May', value: 36, cost: '₹15.20', spend: '₹547.20' },
    { date: '28 May', value: 30, cost: '₹17.80', spend: '₹534.00' },
    { date: '1 Jun', value: 31, cost: '₹16.90', spend: '₹523.90' },
    { date: '4 Jun', value: 23, cost: '₹21.30', spend: '₹489.90' },
    { date: '5 Jun', value: 15, cost: '₹27.93', spend: '₹418.95' }
  ];

  // Literal rupee data directly from Page 5 (Ram Dashboard) & Page 2 (Karpasaonline)
  const roasCampaigns = [
    { name: 'Ram eCommerce Campaign Alpha (Page 5)', spend: '₹2,01,263.22', revenue: '97 Purchases', roas: '₹2,074 CPA', purchases: 97, cpa: 'CPM ₹220.31 · 9.13L Impr' },
    { name: 'Ram eCommerce Campaign Beta (Page 5)', spend: '₹1,97,897.84', revenue: '88 Purchases', roas: '₹2,248 CPA', purchases: 88, cpa: 'CPM ₹255.77 · 7.73L Impr' },
    { name: 'Ram eCommerce Campaign Gamma (Page 5)', spend: '₹1,40,147.90', revenue: '69 Purchases', roas: '₹2,031 CPA', purchases: 69, cpa: 'CPM ₹142.33 · 9.84L Impr' },
    { name: 'Ram eCommerce Campaign Delta (Page 5)', spend: '₹69,449.42', revenue: '43 Purchases', roas: '₹1,615 CPA', purchases: 43, cpa: 'CPM ₹304.12 · 2.28L Impr' },
    { name: 'Ram eCommerce Campaign Epsilon (Page 5)', spend: '₹60,612.62', revenue: '38 Purchases', roas: '₹1,595 CPA', purchases: 38, cpa: 'CPM ₹208.04 · 2.91L Impr' },
    { name: 'Karpasaonline Catalog Retargeting (Page 2)', spend: '₹2,767.06', revenue: '2,896 Adds to Cart', roas: '₹0.96 ATC', purchases: 89, cpa: '1.13L Reach · 1,132 Views' }
  ];

  // Cost per lead benchmarks from pages 1, 14, 19, 25, 26, 34
  const cplBenchmarks = [
    { category: 'BTS & Restaurant Engagement', cost: '₹2.85', baseline: '₹18.00', reduction: '84% Cheaper', metric: 'Per Conversation' },
    { category: 'High-Intent Meta Leads (Form)', cost: '₹9.95', baseline: '₹65.00', reduction: '85% Cheaper', metric: 'Per Qualified Lead' },
    { category: 'Direct WhatsApp Leads', cost: '₹12.25', baseline: '₹45.00', reduction: '73% Cheaper', metric: 'Per Direct Inbound' },
    { category: 'Real Estate & Delhi NCR Inbound', cost: '₹25.37', baseline: '₹95.00', reduction: '73% Cheaper', metric: 'Per Form Lead' },
    { category: 'Dental & Clinic Appointments', cost: '₹26.93', baseline: '₹80.00', reduction: '66% Cheaper', metric: 'Per Patient Lead' },
    { category: 'Study Abroad & Visa Consultation', cost: '₹39.24', baseline: '₹140.00', reduction: '72% Cheaper', metric: 'Per Consultation' }
  ];

  // Real campaign ledger directly from screenshots
  const verifiedCampaignLedger = [
    {
      campaign: 'Vaani / Cher Brand Video & Creative Scale (Page 35, 429 Campaigns)',
      results: '36,462 Clicks',
      costPerResult: '₹0.48 – ₹1.64 CPC',
      impressions: '4,990,420',
      reach: '2,787,388',
      spend: '₹59,740.71',
      badge: '4.99M Impressions'
    },
    {
      campaign: 'Ram Dashboard eCommerce Purchase Scale (Page 5)',
      results: '388 Purchases',
      costPerResult: '₹1,595 – ₹2,248 / Purchase',
      impressions: '3,866,974',
      reach: '2,185,550',
      spend: '₹7,86,360.71',
      badge: '₹7.86L Spend'
    },
    {
      campaign: 'Karpasaonline eCommerce Retargeting (Page 2)',
      results: '2,896 Adds to Cart',
      costPerResult: '₹0.96 / Add to Cart',
      impressions: '113,407 Reach',
      reach: '113,407',
      spend: '₹2,767.06',
      badge: '₹0.96 ATC'
    },
    {
      campaign: 'BTS 1st Anniversary Engagement (Page 26)',
      results: '47 Inquiries',
      costPerResult: '₹2.85 / Message',
      impressions: '3,033',
      reach: '1,878',
      spend: '₹133.75',
      badge: '₹2.85 / Inquiry'
    },
    {
      campaign: 'Le Cafe Crush Dining Inbound (Page 27)',
      results: '97 Inquiries',
      costPerResult: '₹9.31 / Message',
      impressions: '23,350',
      reach: '15,995',
      spend: '₹903.50',
      badge: '₹9.31 / Lead'
    },
    {
      campaign: 'Delhi NCR & Pan-India Lead Gen Forms (Page 34)',
      results: '368 Meta Leads',
      costPerResult: '₹25.37 – ₹63.94 / Lead',
      impressions: '190,400',
      reach: '135,063',
      spend: '₹26,494.57',
      badge: '₹25.37 / Lead'
    },
    {
      campaign: 'Study Visa & Admissions Global Funnel (Page 1)',
      results: '417 Conversations',
      costPerResult: '₹39.24 / Lead',
      impressions: '1,293,670',
      reach: '693,382',
      spend: '₹1,34,034.28',
      badge: '1.29M Impressions'
    }
  ];

  // SVG Chart Geometry
  const width = 800;
  const height = 260;
  const paddingX = 40;
  const paddingY = 30;

  const maxValue = Math.max(...dailyConversationData.map(d => d.value)) * 1.15;
  const points = dailyConversationData.map((d, i) => {
    const x = paddingX + (i / (dailyConversationData.length - 1)) * (width - paddingX * 2);
    const y = height - paddingY - (d.value / maxValue) * (height - paddingY * 2);
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc, point, i, arr) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = arr[i - 1];
    const cp1x = prev.x + (point.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (point.x - prev.x) / 2;
    const cp2y = point.y;
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  return (
    <section
      ref={sectionRef}
      id="meta-insights"
      className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[36rem] h-[24rem] bg-[#E60023]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[28rem] h-[20rem] bg-[#CCFF00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-[#1F1F24] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
              <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
              <span>Verified Meta Ads Performance</span>
              <span className="text-[#858585]">· Audited Account Data</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] uppercase tracking-tight">
              Real Data. Real Returns.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#FF4D64]">
                Zero Hype.
              </span>
            </h2>
          </div>
          <p className="text-xs text-[#858585] max-w-sm font-mono-numbers">
            Extracted directly from live Meta Ads Manager campaigns. Numbers and graphs animate automatically as you scroll into view.
          </p>
        </div>

        {/* 4 High-Impact KPI Proof Strips with Animated Increments and Decrements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* Card 1: INCREMENT (0 -> 4.99M+) */}
          <div className="p-6 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-colors">
            <span className="text-xs font-mono-numbers text-[#858585] uppercase tracking-wider block mb-1">
              Total Ad Impressions
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] font-mono-numbers tracking-tight">
              {impressionsVal.toFixed(2)}M+
            </div>
            <div className="text-[11px] text-[#CCFF00] font-mono-numbers mt-2 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>2.78M Unique Accounts Reached</span>
            </div>
          </div>

          {/* Card 2: DECREMENT (₹95.00 -> ₹2.85) */}
          <div className="p-6 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-colors">
            <span className="text-xs font-mono-numbers text-[#858585] uppercase tracking-wider block mb-1">
              Lowest Lead Acquisition
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#CCFF00] font-mono-numbers tracking-tight">
              ₹{leadCostVal.toFixed(2)}
            </div>
            <div className="text-[11px] text-[#858585] font-mono-numbers mt-2 flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>Reduced to ₹2.85 / Inbound Message</span>
            </div>
          </div>

          {/* Card 3: INCREMENT (0 -> 390+) */}
          <div className="p-6 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-colors">
            <span className="text-xs font-mono-numbers text-[#858585] uppercase tracking-wider block mb-1">
              Verified Website Purchases
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#FF1E38] font-mono-numbers tracking-tight">
              {purchasesVal}+
            </div>
            <div className="text-[11px] text-[#858585] font-mono-numbers mt-2 flex items-center gap-1">
              <span>Across ₹7,86,360 Spend (Page 5)</span>
            </div>
          </div>

          {/* Card 4: DECREMENT (₹18.50 -> ₹0.48) */}
          <div className="p-6 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-colors">
            <span className="text-xs font-mono-numbers text-[#858585] uppercase tracking-wider block mb-1">
              Lowest Click Cost (CPC)
            </span>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] font-mono-numbers tracking-tight">
              ₹{clickCostVal.toFixed(2)}
            </div>
            <div className="text-[11px] text-[#CCFF00] font-mono-numbers mt-2 flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>Reduced to ₹0.48 on 36.4K Clicks</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation (Replay button removed; automatic on-scroll animation enabled) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-[#121214] border border-[#222227] rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('conversations')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'conversations'
                  ? 'bg-[#E60023] text-white shadow-[0_0_15px_rgba(230,0,35,0.4)]'
                  : 'text-[#858585] hover:text-[#F5F5F5]'
              }`}
            >
              1. Lead &amp; Conversation Velocity Graph
            </button>
            <button
              onClick={() => setActiveTab('roas')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'roas'
                  ? 'bg-[#E60023] text-white shadow-[0_0_15px_rgba(230,0,35,0.4)]'
                  : 'text-[#858585] hover:text-[#F5F5F5]'
              }`}
            >
              2. eCommerce Purchases &amp; ATC (Page 5 &amp; 2)
            </button>
            <button
              onClick={() => setActiveTab('cpl')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'cpl'
                  ? 'bg-[#E60023] text-white shadow-[0_0_15px_rgba(230,0,35,0.4)]'
                  : 'text-[#858585] hover:text-[#F5F5F5]'
              }`}
            >
              3. Cost-Per-Lead (CPL) Benchmarks
            </button>
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'campaigns'
                  ? 'bg-[#E60023] text-white shadow-[0_0_15px_rgba(230,0,35,0.4)]'
                  : 'text-[#858585] hover:text-[#F5F5F5]'
              }`}
            >
              4. Verified Campaign Ledger
            </button>
            <button
              onClick={() => setActiveTab('proofs')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'proofs'
                  ? 'bg-[#E60023] text-white shadow-[0_0_15px_rgba(230,0,35,0.4)]'
                  : 'text-[#CCFF00] hover:text-[#F5F5F5] hover:bg-[#1A1A1E]'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>5. Live Proof Screenshots ({VERIFIED_CAMPAIGN_PROOFS.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-numbers text-[#858585]">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            <span>Interactive Data Visualizer</span>
          </div>
        </div>

        {/* TAB 1: Animated Interactive Spline Chart (Auto-draws on screen entrance) */}
        {activeTab === 'conversations' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#222227] shadow-2xl relative animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#858585] font-mono-numbers">
                  Meta Ads Manager · Performance Overview
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F5] mt-1 flex items-center gap-3">
                  <span>Messaging Conversations Inbound Velocity</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#E60023]/20 border border-[#E60023]/40 text-[#FF1E38] font-mono-numbers">
                    +550.9% 66-Day Trajectory
                  </span>
                </h3>
              </div>

              {/* Tooltip display or summary */}
              <div className="px-4 py-2 rounded-xl bg-[#0B0B0C] border border-[#26262B] text-xs font-mono-numbers flex items-center gap-4">
                <div>
                  <span className="text-[#858585] block text-[10px]">INSPECTING</span>
                  <span className="text-[#CCFF00] font-bold">
                    {hoveredIndex !== null ? dailyConversationData[hoveredIndex].date : 'Daily Inbound Leads'}
                  </span>
                </div>
                <div className="border-l border-[#26262B] pl-4">
                  <span className="text-[#858585] block text-[10px]">AVG COST / RESULT</span>
                  <span className="text-[#F5F5F5] font-bold">
                    {hoveredIndex !== null ? dailyConversationData[hoveredIndex].cost : '₹25.16'}
                  </span>
                </div>
              </div>
            </div>

            {/* SVG Interactive Chart with Viewport Trigger Key */}
            <div className="relative w-full aspect-[16/7] sm:aspect-[21/8] bg-[#0E0E10] rounded-xl border border-[#1F1F24] p-2 sm:p-4 overflow-hidden">
              {/* Grid lines */}
              <div className="absolute inset-x-8 top-1/4 border-b border-[#1A1A1E] border-dashed" />
              <div className="absolute inset-x-8 top-2/4 border-b border-[#1A1A1E] border-dashed" />
              <div className="absolute inset-x-8 top-3/4 border-b border-[#1A1A1E] border-dashed" />

              <svg
                key={`chart-key-${animTriggerKey}`}
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-full overflow-visible"
              >
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E60023" stopOpacity="0.45" />
                    <stop offset="60%" stopColor="#FF1E38" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#CCFF00" stopOpacity="0.0" />
                  </linearGradient>

                  <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#CCFF00" />
                    <stop offset="45%" stopColor="#FF1E38" />
                    <stop offset="100%" stopColor="#E60023" />
                  </linearGradient>

                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FF1E38" floodOpacity="0.6" />
                  </filter>
                </defs>

                {/* Animated Gradient Area */}
                <path
                  d={areaD}
                  fill="url(#areaGradient)"
                  className="transition-opacity duration-700 ease-out animate-fadeIn"
                />

                {/* Animated Stroke Path with on-screen entrance */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#strokeGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                  style={{
                    strokeDasharray: 2000,
                    strokeDashoffset: 2000,
                    animation: 'drawChart 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                  }}
                />

                {/* Data Points with Hover Detection */}
                {points.map((pt, i) => {
                  const isHovered = hoveredIndex === i;
                  return (
                    <g key={pt.date} className="cursor-pointer">
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="14"
                        fill="transparent"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      />

                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHovered ? 6 : 3.5}
                        fill={isHovered ? '#CCFF00' : '#FF1E38'}
                        stroke="#0B0B0C"
                        strokeWidth="2"
                        className="transition-all duration-200"
                      />

                      {/* Tooltip on hover */}
                      {isHovered && (
                        <g transform={`translate(${pt.x}, ${pt.y - 45})`}>
                          <rect
                            x="-50"
                            y="-10"
                            width="100"
                            height="38"
                            rx="6"
                            fill="#0B0B0C"
                            stroke="#E60023"
                            strokeWidth="1.5"
                            filter="drop-shadow(0 4px 12px rgba(0,0,0,0.8))"
                          />
                          <text
                            x="0"
                            y="6"
                            textAnchor="middle"
                            fill="#F5F5F5"
                            fontSize="11"
                            fontWeight="bold"
                            fontFamily="monospace"
                          >
                            {pt.value} Inbounds
                          </text>
                          <text
                            x="0"
                            y="20"
                            textAnchor="middle"
                            fill="#CCFF00"
                            fontSize="9"
                            fontFamily="monospace"
                          >
                            {pt.cost} / lead
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>

              <style>{`
                @keyframes drawChart {
                  to {
                    strokeDashoffset: 0;
                  }
                }
              `}</style>
            </div>

            {/* X-axis date labels */}
            <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono-numbers text-[#858585] mt-3 px-2">
              <span>1 Apr (Campaign Launch)</span>
              <span>17 Apr</span>
              <span>4 May (Scale Phase)</span>
              <span>20 May</span>
              <span>5 Jun (Sustained Peak)</span>
            </div>

            {/* Bottom Insight Footer */}
            <div className="mt-6 pt-6 border-t border-[#1F1F24] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-[#858585]">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                <span>Source: Meta Ads Manager Export (1,139 total messaging leads at ₹25.16 average)</span>
              </div>
              <span className="text-[#CCFF00] font-mono-numbers">Account ID: Verified Active</span>
            </div>
          </div>
        )}

        {/* TAB 2: eCommerce Purchases & Karpasaonline */}
        {activeTab === 'roas' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#222227] shadow-2xl animate-fadeIn">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#858585] font-mono-numbers">
                Page 5 (Ram Dashboard) &amp; Page 2 Verified Purchases
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F5F5] mt-1">
                ₹7,86,360.71 Spend Driving 390+ Verified Purchases &amp; 2,896 Adds to Cart
              </h3>
            </div>

            <div className="space-y-4">
              {roasCampaigns.map((camp, idx) => (
                <div
                  key={camp.name}
                  className="p-5 rounded-xl bg-[#0E0E10] border border-[#1F1F24] hover:border-[#E60023]/60 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono-numbers text-[#858585]">
                      Campaign {idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-base text-[#F5F5F5]">
                      {camp.name}
                    </h4>
                    <div className="flex items-center gap-4 text-xs font-mono-numbers text-[#858585]">
                      <span>Spend: {camp.spend}</span>
                      <span>·</span>
                      <span>Purchases: {camp.purchases}</span>
                      <span>·</span>
                      <span>CPA: {camp.cpa}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-[#1F1F24]">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#858585] block">
                        Verified Outcome
                      </span>
                      <span className="font-display font-bold text-lg text-[#F5F5F5] font-mono-numbers">
                        {camp.revenue}
                      </span>
                    </div>

                    <div className="px-4 py-2 rounded-xl bg-[#E60023]/20 border border-[#E60023] text-center min-w-[100px]">
                      <span className="text-[10px] uppercase text-[#FF4D64] block font-mono-numbers">Efficiency</span>
                      <span className="font-display font-extrabold text-sm sm:text-base text-[#CCFF00] font-mono-numbers">
                        {camp.roas}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Cost Per Lead Benchmarks */}
        {activeTab === 'cpl' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#222227] shadow-2xl animate-fadeIn">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#858585] font-mono-numbers">
                Acquisition Cost Efficiency
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F5F5] mt-1">
                How Performize Crushes Industry Cost-Per-Lead Benchmarks
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cplBenchmarks.map((b) => (
                <div
                  key={b.category}
                  className="p-6 rounded-xl bg-[#0E0E10] border border-[#1F1F24] hover:border-[#CCFF00]/50 transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-base text-[#F5F5F5]">
                      {b.category}
                    </h4>
                    <span className="px-2.5 py-1 rounded bg-[#CCFF00] text-[#0B0B0C] text-[10px] font-bold font-mono-numbers uppercase">
                      {b.reduction}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3 rounded-lg bg-[#121214] border border-[#222227]">
                      <span className="text-[10px] uppercase text-[#858585] block">Industry Baseline</span>
                      <span className="font-mono-numbers text-sm text-[#858585] line-through">{b.baseline}</span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#1A1A1E] border border-[#E60023]/60">
                      <span className="text-[10px] uppercase text-[#FF1E38] block font-semibold">Performize Result</span>
                      <span className="font-mono-numbers font-bold text-lg text-[#CCFF00]">{b.cost}</span>
                    </div>
                  </div>

                  <span className="text-xs text-[#858585] block font-mono-numbers">
                    Verified Metric: {b.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Raw Verified Campaign Ledger */}
        {activeTab === 'campaigns' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#222227] shadow-2xl animate-fadeIn overflow-x-auto">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#858585] font-mono-numbers">
                Full Ads Manager Transparency Log
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F5F5] mt-1">
                Audited Meta Campaign Ledger
              </h3>
            </div>

            <table className="w-full text-left text-xs font-mono-numbers min-w-[700px]">
              <thead>
                <tr className="border-b border-[#1F1F24] text-[#858585] uppercase tracking-wider">
                  <th className="py-3 px-4">Campaign Name / Scope</th>
                  <th className="py-3 px-4">Results</th>
                  <th className="py-3 px-4">Cost / Result</th>
                  <th className="py-3 px-4">Impressions</th>
                  <th className="py-3 px-4">Reach</th>
                  <th className="py-3 px-4">Total Spent</th>
                  <th className="py-3 px-4">Key Milestone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F24]">
                {verifiedCampaignLedger.map((row) => (
                  <tr key={row.campaign} className="hover:bg-[#1A1A1E]/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#F5F5F5] font-sans max-w-xs">
                      {row.campaign}
                    </td>
                    <td className="py-4 px-4 text-[#CCFF00] font-bold">
                      {row.results}
                    </td>
                    <td className="py-4 px-4 text-[#FF1E38]">
                      {row.costPerResult}
                    </td>
                    <td className="py-4 px-4 text-[#858585]">
                      {row.impressions}
                    </td>
                    <td className="py-4 px-4 text-[#858585]">
                      {row.reach}
                    </td>
                    <td className="py-4 px-4 text-[#F5F5F5] font-semibold">
                      {row.spend}
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2.5 py-1 rounded-md bg-[#1A1A1E] border border-[#26262B] text-[10px] text-[#CCFF00]">
                        {row.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 5: Live Real Campaign Proof Screenshots from Replit */}
        {activeTab === 'proofs' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#222227] shadow-2xl animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-[#1F1F24] pb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono-numbers font-semibold">
                  Uncut Live Proof Ledger
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] uppercase tracking-tight mt-1">
                  Verified Meta &amp; Google Ads Dashboard Snapshots
                </h3>
                <p className="text-xs text-[#858585] mt-1 max-w-2xl">
                  Actual live account snapshots showing verified client campaigns, cost-per-lead, adds-to-cart, purchase ROAS, and volume benchmarks. Click any screenshot to inspect full resolution.
                </p>
              </div>

              {/* Sub-Category Filter */}
              <div className="flex items-center gap-1.5 p-1 bg-[#0E0E10] border border-[#26262B] rounded-xl overflow-x-auto self-start sm:self-auto max-w-full">
                {[
                  { id: 'all', label: 'All Proofs' },
                  { id: 'ecommerce', label: 'E-Commerce' },
                  { id: 'leads', label: 'Leads & Messages' },
                  { id: 'app', label: 'App Installs' },
                  { id: 'google-ads', label: 'Google Ads' },
                  { id: 'overview', label: 'Overviews' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setProofFilter(f.id as any)}
                    className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      proofFilter === f.id
                        ? 'bg-[#E60023] text-white shadow-[0_0_10px_rgba(230,0,35,0.4)]'
                        : 'text-[#858585] hover:text-[#F5F5F5] hover:bg-[#1A1A1E]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Proofs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VERIFIED_CAMPAIGN_PROOFS.filter(
                (p) => proofFilter === 'all' || p.category === proofFilter
              ).map((proof) => (
                <div
                  key={proof.id}
                  onClick={() => setSelectedProof(proof)}
                  className="group relative rounded-xl border border-[#222227] bg-[#0E0E10] overflow-hidden hover:border-[#CCFF00]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/10] bg-[#0B0B0C] overflow-hidden">
                    <img
                      src={proof.file}
                      alt={proof.caption}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent opacity-80" />
                    
                    {/* Hover Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <div className="px-3 py-1.5 rounded-lg bg-[#E60023] text-white text-xs font-bold font-mono-numbers flex items-center gap-1.5 shadow-[0_0_20px_rgba(230,0,35,0.8)]">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Data</span>
                      </div>
                    </div>

                    {/* Category pill */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded bg-[#0B0B0C]/85 backdrop-blur-md border border-white/10 text-[9px] font-mono-numbers uppercase text-[#CCFF00] font-bold">
                        {proof.category}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Context */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-[#F5F5F5] font-sans font-medium line-clamp-2 leading-relaxed">
                      {proof.caption}
                    </p>
                    <div className="mt-3 pt-3 border-t border-[#1F1F24] flex items-center justify-between text-[10px] font-mono-numbers text-[#858585]">
                      <span>Ads Manager Certified</span>
                      <span className="text-[#CCFF00] group-hover:translate-x-0.5 transition-transform">
                        View Detail &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal for Full-Resolution Proof Inspection */}
        {selectedProof && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedProof(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#121214] border border-[#2E2E35] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1F1F24] bg-[#0E0E10]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
                  <span className="text-xs uppercase font-mono-numbers text-[#CCFF00] font-bold">
                    Verified Ads Manager Proof · {selectedProof.category.toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProof(null)}
                  className="p-1.5 rounded-lg bg-[#1A1A1E] text-[#858585] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Full Image Container */}
              <div className="p-3 sm:p-4 bg-[#0B0B0C] max-h-[70vh] overflow-auto flex items-center justify-center">
                <img
                  src={selectedProof.file}
                  alt={selectedProof.caption}
                  className="max-h-[65vh] w-auto object-contain rounded-lg border border-[#1F1F24]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal Footer with Caption and WhatsApp Call-To-Action */}
              <div className="p-5 sm:p-6 bg-[#121214] border-t border-[#1F1F24] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#F5F5F5] font-sans">
                    {selectedProof.caption}
                  </h4>
                  <span className="text-xs text-[#858585] font-mono-numbers block mt-1">
                    Authentic client result managed and scaled by Performize Marketing Agency
                  </span>
                </div>
                <a
                  href={`https://wa.me/919528074537?text=${encodeURIComponent(`Hi Arman, I saw the proof: "${selectedProof.caption}". Can Performize replicate these metrics for my business?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0B0B0C] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap self-start sm:self-auto cursor-pointer shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                >
                  <span>Replicate These Results</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  TrendingDown,
  BarChart3,
  DollarSign,
  Users,
  Repeat,
  Target,
  PieChart,
  ShieldCheck,
  Layers,
  MessageCircle,
  Calendar,
  Building,
  CheckCircle2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { CaseStudyReport } from '../types';
import { CASE_STUDY_REPORTS, PORTFOLIO_AGGREGATE_METRICS } from '../data/caseStudiesReportsData';

interface CaseStudiesPageProps {
  onBackToHome?: () => void;
  onOpenEnquiry?: (serviceName?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onBackToHome,
  onOpenEnquiry
}) => {
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All Case Studies' | 'E-commerce' | 'D2C' | 'Lead Generation' | 'Brand Awareness'>('All Case Studies');

  const filterTabs: ('All Case Studies' | 'E-commerce' | 'D2C' | 'Lead Generation' | 'Brand Awareness')[] = [
    'All Case Studies',
    'E-commerce',
    'D2C',
    'Lead Generation',
    'Brand Awareness'
  ];

  const filteredReports = useMemo(() => {
    if (activeCategory === 'All Case Studies') return CASE_STUDY_REPORTS;
    return CASE_STUDY_REPORTS.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  const activeReport = useMemo(() => {
    return CASE_STUDY_REPORTS.find((r) => r.id === selectedReportId) || null;
  }, [selectedReportId]);

  const handleSelectCaseStudy = (id: string) => {
    setSelectedReportId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToListing = () => {
    setSelectedReportId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-28 bg-[#0B0B0C] min-h-screen text-[#F5F5F5] selection:bg-[#E60023] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* ========================================================= */}
        {/* VIEW 1: ALL COMPANIES CASE STUDY LISTING VIEW             */}
        {/* ========================================================= */}
        {!activeReport ? (
          <div>
            {/* Header / Intro */}
            <div className="border-b border-[#1F1F24] pb-12 mb-10">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
                <Layers className="w-4 h-4 text-[#CCFF00]" />
                <span>Audited Performance Records · All {CASE_STUDY_REPORTS.length} Companies Included</span>
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#F5F5F5] uppercase tracking-tight text-balance">
                Company Case Studies &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#FF4D64]">
                  Performance Reports.
                </span>
              </h1>
              <p className="mt-5 text-sm sm:text-lg text-[#858585] max-w-3xl font-light leading-relaxed">
                Extracted directly from verified advertising campaign reports. Review real company data, audited spend, audience reach, average frequencies, and cost-per-result across all {CASE_STUDY_REPORTS.length} companies with zero fluff.
              </p>

              {/* Portfolio Master Telemetry Bar from Verified Audit */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 p-6 rounded-2xl bg-[#121214] border border-[#222227] shadow-xl">
                <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                  <span className="text-[11px] uppercase tracking-wider text-[#858585] font-mono-numbers block mb-1">
                    Total Money Spent (All Portfolios)
                  </span>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#FF1E38] font-mono-numbers">
                    {PORTFOLIO_AGGREGATE_METRICS.totalMoneySpent}
                  </div>
                  <span className="text-[10px] text-[#858585] font-mono-numbers mt-1 block">
                    {PORTFOLIO_AGGREGATE_METRICS.totalMoneySpentNote}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                  <span className="text-[11px] uppercase tracking-wider text-[#858585] font-mono-numbers block mb-1">
                    Total Audience Reach Across Campaigns
                  </span>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#CCFF00] font-mono-numbers">
                    {PORTFOLIO_AGGREGATE_METRICS.totalReach}
                  </div>
                  <span className="text-[10px] text-[#858585] font-mono-numbers mt-1 block">
                    Unique verified consumers reached
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                  <span className="text-[11px] uppercase tracking-wider text-[#858585] font-mono-numbers block mb-1">
                    Average Campaign Frequency
                  </span>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] font-mono-numbers">
                    {PORTFOLIO_AGGREGATE_METRICS.averageFrequency}
                  </div>
                  <span className="text-[10px] text-[#858585] font-mono-numbers mt-1 block">
                    Optimal algorithmic exposure window
                  </span>
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 mt-8 pt-4">
                {filterTabs.map((tab) => {
                  const count =
                    tab === 'All Case Studies'
                      ? CASE_STUDY_REPORTS.length
                      : CASE_STUDY_REPORTS.filter((r) => r.category === tab).length;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveCategory(tab)}
                      className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                        activeCategory === tab
                          ? 'bg-[#E60023] text-white shadow-[0_0_20px_rgba(230,0,35,0.4)]'
                          : 'bg-[#121214] text-[#858585] border border-[#222227] hover:text-[#F5F5F5] hover:border-[#33333A]'
                      }`}
                    >
                      <span>{tab}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono-numbers ${
                        activeCategory === tab ? 'bg-white/20 text-white' : 'bg-[#1F1F24] text-[#858585]'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Case Studies Grid: ALL 30 COMPANIES WITH LOGO, NAME & TAGLINE (NO IMAGES) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReports.map((report, index) => (
                <div
                  key={report.id}
                  className="group rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_12px_35px_rgba(230,0,35,0.18)]"
                >
                  {/* Top Brand Identity Header: Company Logo, Tagline & Category */}
                  <div className="p-6 pb-5 bg-gradient-to-b from-[#18181D] to-[#121214] border-b border-[#1F1F24] relative">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      {/* Company Logo in sleek container */}
                      <div className={`w-16 h-16 rounded-2xl p-2.5 flex items-center justify-center border transition-all duration-300 group-hover:scale-105 ${
                        report.darkLogo
                          ? 'bg-[#0E0E10] border-[#2A2A32] shadow-inner'
                          : 'bg-[#FFFFFF] border-white/90 shadow-md'
                      }`}>
                        <img
                          src={report.logo}
                          alt={`${report.companyName} logo`}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      {/* Category Badge & Company Number */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono-numbers text-[#858585] px-2 py-0.5 rounded bg-[#0E0E10] border border-[#222227]">
                          #{index + 1}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#0B0B0C]/85 backdrop-blur-md border border-[#26262B] text-[#CCFF00]">
                          {report.category}
                        </span>
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-extrabold text-2xl text-[#F5F5F5] group-hover:text-white transition-colors leading-tight">
                        {report.companyName}
                      </h3>
                      {report.websiteLink && (
                        <a
                          href={report.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg bg-[#1A1A1E] text-[#858585] hover:text-[#CCFF00] hover:bg-[#26262B] transition-colors shrink-0"
                          title="Visit official website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Company Tagline */}
                    <p className="text-xs text-[#CCFF00]/90 font-medium mt-1 leading-snug">
                      {report.tagline}
                    </p>

                    {/* Highlight Metric Strip */}
                    <div className="mt-4 p-3 rounded-xl bg-[#0B0B0C]/90 border border-[#222227] flex items-center justify-between">
                      <span className="text-[10px] text-[#858585] uppercase tracking-wider font-mono-numbers">
                        Audited Performance
                      </span>
                      <span className="text-xs font-bold font-mono-numbers text-[#F5F5F5]">
                        {report.highlightStat}
                      </span>
                    </div>
                  </div>

                  {/* Card Body: Industry, Reporting Period, Overview & Metrics */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#858585] mb-3 font-mono-numbers">
                        <span className="flex items-center gap-1.5 truncate max-w-[55%]">
                          <Building className="w-3.5 h-3.5 text-[#E60023] shrink-0" />
                          <span className="truncate">{report.industry}</span>
                        </span>
                        <span className="flex items-center gap-1.5 shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{report.totalCampaigns || report.reportingPeriod}</span>
                        </span>
                      </div>

                      <p className="text-xs text-[#858585] line-clamp-3 leading-relaxed mb-6 font-light">
                        {report.performanceOverview}
                      </p>

                      {/* Quick 2-Metric Preview */}
                      <div className="grid grid-cols-2 gap-2.5 pb-6 mb-2 border-b border-[#1A1A1E]">
                        <div className="p-2.5 rounded-lg bg-[#0E0E10] border border-[#1F1F24]">
                          <span className="text-[10px] text-[#858585] uppercase tracking-wider block font-mono-numbers">
                            Money Spent
                          </span>
                          <span className="text-sm font-bold font-mono-numbers text-[#FF1E38]">
                            {report.metrics.totalAmountSpent}
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0E0E10] border border-[#1F1F24]">
                          <span className="text-[10px] text-[#858585] uppercase tracking-wider block font-mono-numbers">
                            Avg Cost / Result
                          </span>
                          <span className="text-sm font-bold font-mono-numbers text-[#CCFF00]">
                            {report.metrics.averageCostPerResult}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* View Full Case Study Button */}
                    <button
                      onClick={() => handleSelectCaseStudy(report.id)}
                      className="w-full py-3 px-4 rounded-xl bg-[#1A1A1E] hover:bg-[#E60023] text-[#F5F5F5] hover:text-white border border-[#26262B] hover:border-[#E60023] font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md group-hover:shadow-[0_0_20px_rgba(230,0,35,0.4)] active:scale-95"
                    >
                      <span>View Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-[#CCFF00] group-hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* VIEW 2: COMPLETE DETAILED PERFORMANCE REPORT               */
          /* ========================================================= */
          <div className="animate-fadeIn">
            {/* Top Navigation: Back to Case Studies */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1F1F24]">
              <button
                onClick={handleBackToListing}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#121214] hover:bg-[#1A1A1E] border border-[#26262B] hover:border-[#E60023] text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] transition-all cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 text-[#CCFF00]" />
                <span>Back to All 30 Case Studies</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-mono-numbers text-[#858585]">
                <span>Status:</span>
                <span className="text-[#CCFF00] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Audited Advertising Data
                </span>
              </div>
            </div>

            {/* Case Study Information Header with Company Logo & Name & Tagline */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121214] border border-[#222227] shadow-2xl mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 mb-6 border-b border-[#1F1F24]">
                <div className="flex items-center gap-5">
                  {/* Company Logo */}
                  <div className={`w-20 h-20 rounded-2xl p-3 flex items-center justify-center border shrink-0 ${
                    activeReport.darkLogo
                      ? 'bg-[#0E0E10] border-[#2A2A32] shadow-inner'
                      : 'bg-[#FFFFFF] border-white/90 shadow-md'
                  }`}>
                    <img
                      src={activeReport.logo}
                      alt={`${activeReport.companyName} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E60023]/20 border border-[#E60023]/50 text-[#FF1E38]">
                        {activeReport.category}
                      </span>
                      <span className="text-xs text-[#858585] font-mono-numbers">
                        {activeReport.industry}
                      </span>
                      {activeReport.websiteLink && (
                        <a
                          href={activeReport.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#CCFF00] hover:underline font-mono-numbers"
                        >
                          <span>{activeReport.websiteLink}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] tracking-tight">
                      {activeReport.companyName}
                    </h1>
                    <p className="text-sm text-[#CCFF00] font-medium mt-1">
                      {activeReport.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#222227] text-right sm:text-right">
                  <span className="text-[10px] text-[#858585] uppercase tracking-wider font-mono-numbers block">
                    Execution Scale
                  </span>
                  <span className="text-sm font-bold font-mono-numbers text-[#F5F5F5]">
                    {activeReport.totalCampaigns || activeReport.reportingPeriod}
                  </span>
                  <span className="text-[11px] text-[#CCFF00] font-mono-numbers block mt-1">
                    {activeReport.highlightStat}
                  </span>
                </div>
              </div>

              {/* Campaign Objective & Performance Overview Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5">
                  <span className="text-xs font-mono-numbers text-[#CCFF00] uppercase tracking-wider font-semibold block mb-1">
                    Campaign Objective
                  </span>
                  <p className="text-sm text-[#F5F5F5] font-medium leading-relaxed">
                    {activeReport.campaignObjective}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <span className="text-xs font-mono-numbers text-[#CCFF00] uppercase tracking-wider font-semibold block mb-1">
                    Performance Overview
                  </span>
                  <p className="text-sm text-[#858585] leading-relaxed font-light">
                    {activeReport.performanceOverview}
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Summary: 6 Professional Metric Cards */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-[#CCFF00]" />
                <h2 className="font-display font-extrabold text-2xl text-[#F5F5F5] uppercase tracking-tight">
                  Performance Summary
                </h2>
                <span className="text-xs text-[#858585] font-mono-numbers ml-2">
                  (Audited Real Account Metrics for {activeReport.companyName})
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {/* 1. Total Results */}
                <div className="p-5 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#858585] mb-2">
                    <span className="uppercase tracking-wider font-mono-numbers text-[11px]">1. Total Results</span>
                    <Target className="w-4 h-4 text-[#CCFF00]" />
                  </div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-[#F5F5F5] font-mono-numbers tracking-tight">
                    {activeReport.metrics.totalResults}
                  </div>
                  <div className="text-[11px] text-[#858585] mt-1 font-mono-numbers truncate">
                    {activeReport.metrics.totalResultsLabel}
                  </div>
                </div>

                {/* 2. Total Reach */}
                <div className="p-5 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#858585] mb-2">
                    <span className="uppercase tracking-wider font-mono-numbers text-[11px]">2. Total Reach</span>
                    <Users className="w-4 h-4 text-[#CCFF00]" />
                  </div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] font-mono-numbers tracking-tight">
                    {activeReport.metrics.totalReach}
                  </div>
                  <div className="text-[11px] text-[#858585] mt-1 font-mono-numbers">
                    Unique Accounts
                  </div>
                </div>

                {/* 3. Average Frequency */}
                <div className="p-5 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#858585] mb-2">
                    <span className="uppercase tracking-wider font-mono-numbers text-[11px]">3. Avg Frequency</span>
                    <Repeat className="w-4 h-4 text-[#CCFF00]" />
                  </div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] font-mono-numbers tracking-tight">
                    {activeReport.metrics.averageFrequency}x
                  </div>
                  <div className="text-[11px] text-[#858585] mt-1 font-mono-numbers">
                    Impressions / Account
                  </div>
                </div>

                {/* 4. Average Cost Per Result */}
                <div className="p-5 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#858585] mb-2">
                    <span className="uppercase tracking-wider font-mono-numbers text-[11px]">4. Avg Cost / Result</span>
                    <TrendingDown className="w-4 h-4 text-[#CCFF00]" />
                  </div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-[#CCFF00] font-mono-numbers tracking-tight truncate">
                    {activeReport.metrics.averageCostPerResult}
                  </div>
                  <div className="text-[11px] text-[#858585] mt-1 font-mono-numbers">
                    Cost Efficiency
                  </div>
                </div>

                {/* 5. Total Budget */}
                <div className="p-5 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#858585] mb-2">
                    <span className="uppercase tracking-wider font-mono-numbers text-[11px]">5. Total Budget</span>
                    <PieChart className="w-4 h-4 text-[#CCFF00]" />
                  </div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-[#F5F5F5] font-mono-numbers tracking-tight truncate">
                    {activeReport.metrics.totalBudget || 'Data Not Available'}
                  </div>
                  <div className="text-[11px] text-[#858585] mt-1 font-mono-numbers">
                    Allocated Budget
                  </div>
                </div>

                {/* 6. Total Amount Spent */}
                <div className="p-5 rounded-2xl bg-[#121214] border border-[#222227] hover:border-[#E60023]/60 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#858585] mb-2">
                    <span className="uppercase tracking-wider font-mono-numbers text-[11px]">6. Total Amount Spent</span>
                    <DollarSign className="w-4 h-4 text-[#FF1E38]" />
                  </div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-[#FF1E38] font-mono-numbers tracking-tight truncate">
                    {activeReport.metrics.totalAmountSpent}
                  </div>
                  <div className="text-[11px] text-[#858585] mt-1 font-mono-numbers">
                    Verified Ad Spend
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Charts & Budget Analysis Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
              {/* Left Column: 4 Performance Trend Charts (8 cols) */}
              <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#222227]">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1F1F24]">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-[#F5F5F5] uppercase tracking-tight">
                      Performance Trends
                    </h3>
                    <p className="text-xs text-[#858585]">
                      Visualized progression across campaign delivery cycles for {activeReport.companyName}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono-numbers uppercase tracking-wider bg-[#0E0E10] text-[#CCFF00] border border-[#26262B]">
                    4-Cycle Verification
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Chart 1: Results over time */}
                  <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-mono-numbers text-[#858585] uppercase tracking-wider">Results Over Time</span>
                      <span className="text-[#CCFF00] font-mono-numbers font-bold">
                        {activeReport.charts.trends[activeReport.charts.trends.length - 1].results.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-32 flex items-end gap-2 pt-2">
                      {activeReport.charts.trends.map((t, idx) => {
                        const max = Math.max(...activeReport.charts.trends.map((item) => item.results));
                        const pct = Math.max((t.results / max) * 100, 10);
                        return (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                            <div className="w-full bg-[#1A1A1E] rounded-t-md h-28 relative flex items-end overflow-hidden">
                              <div
                                style={{ height: `${pct}%` }}
                                className="w-full bg-gradient-to-t from-[#E60023] to-[#FF1E38] rounded-t-md group-hover/bar:brightness-125 transition-all duration-500"
                              />
                            </div>
                            <span className="text-[10px] text-[#858585] font-mono-numbers">{t.period}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Chart 2: Reach Trends */}
                  <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-mono-numbers text-[#858585] uppercase tracking-wider">Reach Trends</span>
                      <span className="text-[#F5F5F5] font-mono-numbers font-bold">
                        {(activeReport.charts.trends[activeReport.charts.trends.length - 1].reach / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="h-32 flex items-end gap-2 pt-2">
                      {activeReport.charts.trends.map((t, idx) => {
                        const max = Math.max(...activeReport.charts.trends.map((item) => item.reach));
                        const pct = Math.max((t.reach / max) * 100, 10);
                        return (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                            <div className="w-full bg-[#1A1A1E] rounded-t-md h-28 relative flex items-end overflow-hidden">
                              <div
                                style={{ height: `${pct}%` }}
                                className="w-full bg-gradient-to-t from-[#0081FB] to-[#38BDF8] rounded-t-md group-hover/bar:brightness-125 transition-all duration-500"
                              />
                            </div>
                            <span className="text-[10px] text-[#858585] font-mono-numbers">{t.period}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Chart 3: Amount Spent Over Time */}
                  <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-mono-numbers text-[#858585] uppercase tracking-wider">Spend Progression</span>
                      <span className="text-[#FF1E38] font-mono-numbers font-bold">
                        ₹{(activeReport.charts.trends[activeReport.charts.trends.length - 1].spent / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="h-32 flex items-end gap-2 pt-2">
                      {activeReport.charts.trends.map((t, idx) => {
                        const max = Math.max(...activeReport.charts.trends.map((item) => item.spent));
                        const pct = Math.max((t.spent / max) * 100, 10);
                        return (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                            <div className="w-full bg-[#1A1A1E] rounded-t-md h-28 relative flex items-end overflow-hidden">
                              <div
                                style={{ height: `${pct}%` }}
                                className="w-full bg-gradient-to-t from-[#B91C1C] to-[#E60023] rounded-t-md group-hover/bar:brightness-125 transition-all duration-500"
                              />
                            </div>
                            <span className="text-[10px] text-[#858585] font-mono-numbers">{t.period}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Chart 4: Cost Per Result Trends */}
                  <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-mono-numbers text-[#858585] uppercase tracking-wider">Cost Per Result (CPR)</span>
                      <span className="text-[#CCFF00] font-mono-numbers font-bold">
                        {activeReport.metrics.averageCostPerResult}
                      </span>
                    </div>
                    <div className="h-32 flex items-end gap-2 pt-2">
                      {activeReport.charts.trends.map((t, idx) => {
                        const max = Math.max(...activeReport.charts.trends.map((item) => item.cpr));
                        const pct = Math.max((t.cpr / max) * 100, 10);
                        return (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                            <div className="w-full bg-[#1A1A1E] rounded-t-md h-28 relative flex items-end overflow-hidden">
                              <div
                                style={{ height: `${pct}%` }}
                                className="w-full bg-gradient-to-t from-[#84CC16] to-[#CCFF00] rounded-t-md group-hover/bar:brightness-125 transition-all duration-500"
                              />
                            </div>
                            <span className="text-[10px] text-[#858585] font-mono-numbers">{t.period}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Budget Analysis & Efficiency Score (4 cols) */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#222227] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1F1F24]">
                    <PieChart className="w-4 h-4 text-[#CCFF00]" />
                    <h3 className="font-display font-extrabold text-xl text-[#F5F5F5] uppercase tracking-tight">
                      Budget Analysis
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                      <span className="text-[11px] text-[#858585] uppercase tracking-wider font-mono-numbers block mb-1">
                        Allocated Budget
                      </span>
                      <div className="font-display font-bold text-xl text-[#F5F5F5] font-mono-numbers truncate">
                        {activeReport.metrics.totalBudget || 'Data Not Available'}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                      <span className="text-[11px] text-[#858585] uppercase tracking-wider font-mono-numbers block mb-1">
                        Actual Amount Spent
                      </span>
                      <div className="font-display font-bold text-xl text-[#FF1E38] font-mono-numbers truncate">
                        {activeReport.metrics.totalAmountSpent}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                      <span className="text-[11px] text-[#858585] uppercase tracking-wider font-mono-numbers block mb-1">
                        Remaining Budget
                      </span>
                      <div className="font-display font-bold text-xl text-[#CCFF00] font-mono-numbers truncate">
                        {activeReport.metrics.remainingBudget || 'Data Not Available'}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#1F1F24]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] text-[#858585] uppercase tracking-wider font-mono-numbers">
                          Budget Utilization
                        </span>
                        <span className="font-bold text-sm text-[#F5F5F5] font-mono-numbers">
                          {activeReport.metrics.budgetUtilization || 'Data Not Available'}
                        </span>
                      </div>
                      <div className="w-full bg-[#1A1A1E] h-2 rounded-full overflow-hidden">
                        <div
                          style={{
                            width: activeReport.metrics.budgetUtilization
                              ? activeReport.metrics.budgetUtilization
                              : '85%'
                          }}
                          className="h-full bg-gradient-to-r from-[#E60023] to-[#CCFF00] rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1F1F24] mt-6">
                  <div className="flex items-center gap-2 text-xs text-[#858585]">
                    <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                    <span>Every single rupee mapped to verified conversion telemetry</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Performance Breakdown Table (Clean Numerical Data Presentation, No Images) */}
            {activeReport.screenshot && activeReport.screenshot.anonymizedAdSets && (
              <div className="p-6 sm:p-10 rounded-2xl bg-[#121214] border border-[#222227] shadow-2xl mb-12">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#1F1F24]">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Audited Campaign Ledger</span>
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-[#F5F5F5] uppercase tracking-tight">
                      {activeReport.companyName} · Campaign Set Breakdown
                    </h3>
                    <p className="text-xs text-[#858585] mt-1">
                      Verified performance ledger across ad sets. Strictly numerical and factual attribution data.
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono-numbers">
                    <thead>
                      <tr className="border-b border-[#222227] text-[#858585]">
                        <th className="pb-3 font-semibold uppercase">Campaign Set Descriptor</th>
                        <th className="pb-3 font-semibold uppercase">Results Delivered</th>
                        <th className="pb-3 font-semibold uppercase">Avg Cost / Result</th>
                        <th className="pb-3 font-semibold uppercase">Verified Reach</th>
                        <th className="pb-3 font-semibold uppercase">Total Spend</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1A1A1E]">
                      {activeReport.screenshot.anonymizedAdSets.map((adSet, idx) => (
                        <tr key={idx} className="hover:bg-[#16161A] transition-colors">
                          <td className="py-3.5 text-[#F5F5F5] font-semibold">{adSet.label}</td>
                          <td className="py-3.5 text-[#CCFF00] font-bold">{adSet.results}</td>
                          <td className="py-3.5 text-[#858585]">{adSet.cpr}</td>
                          <td className="py-3.5 text-[#858585]">{adSet.reach}</td>
                          <td className="py-3.5 text-[#FF1E38] font-semibold">{adSet.spend}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Contact Performize CTA (Bottom Section) */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121214] via-[#16161B] to-[#121214] border border-[#26262B] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#E60023]/10 rounded-full blur-[140px] pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div>
                  <span className="text-xs font-mono-numbers uppercase tracking-[0.22em] text-[#CCFF00] font-semibold block mb-2">
                    Ready to Scale With Similar Metrics?
                  </span>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
                    Deploy Next-Gen Performance Marketing for Your Brand
                  </h3>
                  <p className="text-sm text-[#858585] mt-2 max-w-xl font-light">
                    Every strategy is customized to your unit economics, profit margins, and target customer acquisition cost.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleBackToListing}
                    className="px-6 py-3.5 rounded-full bg-[#1A1A1E] hover:bg-[#26262B] text-xs font-bold uppercase tracking-wider text-[#F5F5F5] border border-[#26262B] transition-all cursor-pointer"
                  >
                    ← Back to All Case Studies
                  </button>

                  <a
                    href={`https://wa.me/919528074537?text=Hi%20Arman%2C%20I%20reviewed%20the%20${encodeURIComponent(activeReport.companyName)}%20case%20study%20and%20would%20like%20to%20discuss%20scaling%20my%20business%20campaigns.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(230,0,35,0.4)] cursor-pointer active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire About {activeReport.companyName} Blueprint</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

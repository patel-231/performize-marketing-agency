import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, MessageCircle, ArrowUpRight, DollarSign, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { createWhatsAppUrl } from '../data/agencyData';

export const ROICalculatorSection: React.FC = () => {
  const [adSpend, setAdSpend] = useState<number>(50000);
  const [expectedRoas, setExpectedRoas] = useState<number>(4.0);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(2000);

  // Math calculations
  const estimatedRevenue = adSpend * expectedRoas;
  const netProfit = Math.max(0, estimatedRevenue - adSpend);
  const roiPercentage = ((netProfit / adSpend) * 100).toFixed(0);
  const estimatedOrders = Math.floor(estimatedRevenue / Math.max(avgOrderValue, 1));
  const avgCpa = Math.round(adSpend / Math.max(estimatedOrders, 1));

  const formatCurrency = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  const formatLakhs = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} L`;
    }
    if (val >= 1000) {
      return `₹${(val / 1000).toFixed(0)}K`;
    }
    return `₹${val}`;
  };

  const whatsappMessage = `Hi Arman, I ran the ROI calculator on Performize — I'm planning to invest ₹${adSpend.toLocaleString('en-IN')}/mo with a ${expectedRoas}x ROAS target (~₹${avgOrderValue.toLocaleString('en-IN')} ticket size). Can we discuss a custom growth strategy for my brand?`;

  const sliderPercent = (val: number, min: number, max: number) => {
    return Math.min(100, Math.max(0, ((val - min) / (max - min)) * 100));
  };

  return (
    <section id="roi-calculator" className="py-24 sm:py-32 bg-[#0B0B0C] border-b border-[#1A1A1E] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E60023]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#CCFF00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E60023]/30 bg-[#E60023]/10 text-[#FF1E38] text-xs font-mono-numbers font-semibold mb-5"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>FREE ROI ESTIMATOR</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F5] uppercase tracking-tight mb-4"
          >
            Calculate Your Potential{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#CCFF00]">
              Return On Ad Spend
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-[#858585] font-light leading-relaxed"
          >
            Simulate how much revenue and net returns your business could generate with a battle-tested Meta Ads architecture and automated conversion funnel.
          </motion.p>
        </div>

        {/* 2-Column Calculator Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto"
        >
          {/* Left Column: Input Controls (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#121214] border border-[#222227] shadow-2xl flex flex-col justify-between space-y-8 relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#1F1F24]">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#E60023]/15 text-[#FF1E38] flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </span>
                <span className="font-display font-bold text-lg text-[#F5F5F5]">
                  Your Investment Parameters
                </span>
              </div>
              <span className="text-xs font-mono-numbers text-[#CCFF00] uppercase tracking-wider">
                Real-Time Calibration
              </span>
            </div>

            {/* Slider 1: Monthly Ad Spend */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[#F5F5F5] flex items-center gap-2">
                  <span>Monthly Ad Spend</span>
                  <span className="text-[10px] text-[#858585] uppercase tracking-wider font-mono-numbers">(INR)</span>
                </label>
                <span className="font-mono-numbers font-black text-xl text-[#CCFF00]">
                  {formatCurrency(adSpend)}
                </span>
              </div>
              <div className="relative py-1">
                <input
                  type="range"
                  min={10000}
                  max={500000}
                  step={5000}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-[#1F1F24] accent-[#E60023]"
                  style={{
                    background: `linear-gradient(90deg, #E60023 ${sliderPercent(adSpend, 10000, 500000)}%, #1F1F24 ${sliderPercent(adSpend, 10000, 500000)}%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono-numbers text-[#858585]">
                <span>₹10,000 (Testing)</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000 (Scaling)</span>
              </div>
            </div>

            {/* Slider 2: Expected ROAS */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[#F5F5F5] flex items-center gap-2">
                  <span>Target ROAS Target</span>
                  <span className="text-[10px] text-[#858585] uppercase tracking-wider font-mono-numbers">(Multiplier)</span>
                </label>
                <span className="font-mono-numbers font-black text-xl text-[#FF1E38]">
                  {expectedRoas.toFixed(1)}x
                </span>
              </div>
              <div className="relative py-1">
                <input
                  type="range"
                  min={2}
                  max={10}
                  step={0.5}
                  value={expectedRoas}
                  onChange={(e) => setExpectedRoas(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-[#1F1F24] accent-[#FF1E38]"
                  style={{
                    background: `linear-gradient(90deg, #FF1E38 ${sliderPercent(expectedRoas, 2, 10)}%, #1F1F24 ${sliderPercent(expectedRoas, 2, 10)}%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono-numbers text-[#858585]">
                <span>2.0x (Conservative)</span>
                <span>4.5x (Performize Avg)</span>
                <span>10.0x (High-Ticket)</span>
              </div>
            </div>

            {/* Slider 3: Avg Order or Lead Value */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[#F5F5F5] flex items-center gap-2">
                  <span>Avg. Ticket / Order Value</span>
                  <span className="text-[10px] text-[#858585] uppercase tracking-wider font-mono-numbers">(AOV)</span>
                </label>
                <span className="font-mono-numbers font-black text-xl text-[#F5F5F5]">
                  {formatCurrency(avgOrderValue)}
                </span>
              </div>
              <div className="relative py-1">
                <input
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-[#1F1F24] accent-[#CCFF00]"
                  style={{
                    background: `linear-gradient(90deg, #CCFF00 ${sliderPercent(avgOrderValue, 500, 50000)}%, #1F1F24 ${sliderPercent(avgOrderValue, 500, 50000)}%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono-numbers text-[#858585]">
                <span>₹500 (D2C Fast Goods)</span>
                <span>₹5,000</span>
                <span>₹50,000 (Services / High Ticket)</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#858585] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
              <span>Calibrated against 500+ live campaigns and ₹1.2Cr+ managed Meta ad spend.</span>
            </div>
          </div>

          {/* Right Column: Output / Potential Returns Card (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-gradient-to-b from-[#18181C] to-[#101012] border-2 border-[#E60023]/40 shadow-[0_10px_40px_rgba(230,0,35,0.2)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF1E38]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center gap-2.5 pb-4 border-b border-[#26262B] mb-5">
              <span className="w-7 h-7 rounded-lg bg-[#E60023] text-white flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </span>
              <h3 className="font-display font-extrabold text-lg uppercase tracking-tight text-[#F5F5F5]">
                Your Potential Returns
              </h3>
            </div>

            {/* Output Metric Boxes */}
            <div className="space-y-3.5 flex-1">
              {/* Box 1: Estimated Revenue (Highlight) */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#E60023]/25 to-[#FF1E38]/10 border border-[#E60023]/50">
                <div className="text-xs uppercase font-mono-numbers text-[#CCFF00] font-semibold tracking-wider">
                  Estimated Gross Revenue
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] font-mono-numbers mt-0.5">
                  {formatCurrency(estimatedRevenue)}
                </div>
                <div className="text-[11px] text-[#858585] mt-1 font-mono-numbers">
                  From {formatLakhs(adSpend)} ad spend ({expectedRoas}x ROAS)
                </div>
              </div>

              {/* Box 2: Net Profit */}
              <div className="p-3.5 rounded-xl bg-[#141416] border border-[#222227]">
                <div className="text-[11px] uppercase font-mono-numbers text-[#858585] font-semibold tracking-wider">
                  Estimated Net Profit (After Ads)
                </div>
                <div className="font-display font-bold text-xl text-[#CCFF00] font-mono-numbers mt-0.5">
                  {formatCurrency(netProfit)}
                </div>
                <div className="text-[11px] text-[#858585] mt-0.5 font-mono-numbers">
                  Net return after ad spend deducted
                </div>
              </div>

              {/* Box 3: ROI % & Order / Lead Count */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#141416] border border-[#222227]">
                  <div className="text-[10px] uppercase font-mono-numbers text-[#858585]">
                    Return On Spend (ROI)
                  </div>
                  <div className="font-display font-bold text-lg text-[#FF1E38] font-mono-numbers mt-0.5">
                    +{roiPercentage}%
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#141416] border border-[#222227]">
                  <div className="text-[10px] uppercase font-mono-numbers text-[#858585]">
                    Est. Orders / Leads
                  </div>
                  <div className="font-display font-bold text-lg text-[#F5F5F5] font-mono-numbers mt-0.5">
                    {estimatedOrders.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[9px] text-[#858585] font-mono-numbers">
                    ~₹{avgCpa} CPA
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action with pre-filled drafted message */}
            <div className="mt-6 pt-4 border-t border-[#26262B] space-y-2.5">
              <a
                href={createWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0B0B0C] font-display font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(37,211,102,0.4)] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B0B0C]" />
                <span>Discuss This Strategy on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[10px] text-[#858585] text-center font-mono-numbers">
                Estimates only. Actual ROAS depends on offer strength, creative hooks & market demand.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

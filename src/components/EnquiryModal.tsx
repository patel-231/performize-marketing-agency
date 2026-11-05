import React, { useState } from 'react';
import { X, Check, ArrowUpRight, MessageCircle, Send } from 'lucide-react';
import { AGENCY_SERVICES } from '../data/agencyData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    selectedServices: preselectedService ? [preselectedService] : [] as string[],
    budget: '₹50,000 - ₹1,50,000 / mo',
    overview: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(title);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter(s => s !== title)
          : [...prev.selectedServices, title]
      };
    });
  };

  const budgetOptions = [
    '< ₹50,000 / mo',
    '₹50,000 - ₹1,50,000 / mo',
    '₹1,50,000 - ₹5,00,000 / mo',
    '₹5,00,000+ / mo',
    'One-Off Sprint / Launch'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#121214] border border-[#26262B] rounded-2xl shadow-2xl p-6 sm:p-10 my-auto text-[#F5F5F5]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-[#1A1A1E] hover:bg-[#E60023] text-[#F5F5F5] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] flex items-center justify-center mx-auto border border-[#CCFF00]/40">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F5F5]">
              Project Brief Received
            </h3>
            <p className="text-[#858585] text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#F5F5F5] font-semibold">{formData.fullName}</span>. A Performize growth strategist will review your brand requirements and reach out within 2 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/919528074537?text=Hi%20Performize%2C%20I%20just%20submitted%20a%20project%20brief%20for%20${encodeURIComponent(formData.companyName || 'our brand')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#CCFF00] text-[#0B0B0C] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#B8E600] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Chat on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-[#1A1A1E] text-[#F5F5F5] hover:bg-[#26262B] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#CCFF00] font-mono-numbers mb-2">
                <span>Direct Strategic Intake</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F5F5]">
                Start A Project With Performize
              </h3>
              <p className="text-xs text-[#858585] mt-1">
                Tell us about your brand targets. We analyze feasibility and reply within 2 business hours.
              </p>
            </div>

            {/* Service selector */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#858585] mb-2 font-semibold">
                Select Desired Services (Click all that apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {AGENCY_SERVICES.map(s => {
                  const selected = formData.selectedServices.includes(s.title);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => toggleService(s.title)}
                      className={`p-2 rounded-lg text-left text-xs font-medium border transition-all cursor-pointer ${
                        selected
                          ? 'bg-[#E60023] text-white border-[#FF1E38] shadow-[0_0_12px_rgba(230,0,35,0.4)]'
                          : 'bg-[#1A1A1E] text-[#858585] border-[#26262B] hover:text-[#F5F5F5]'
                      }`}
                    >
                      <div className="line-clamp-1">{s.title}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5] placeholder-[#4A4A52]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                  Company / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vance Horizon Ltd"
                  value={formData.companyName}
                  onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5] placeholder-[#4A4A52]"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                  Work Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@vancehorizon.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5] placeholder-[#4A4A52]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 95280 74537"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5] placeholder-[#4A4A52]"
                />
              </div>
            </div>

            {/* Monthly Budget Tier */}
            <div>
              <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                Estimated Monthly Growth Budget
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map(b => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setFormData({ ...formData, budget: b })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-numbers transition-all cursor-pointer ${
                      formData.budget === b
                        ? 'bg-[#CCFF00] text-[#0B0B0C] font-bold'
                        : 'bg-[#1A1A1E] text-[#858585] border border-[#26262B] hover:text-[#F5F5F5]'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                Project Overview & Core Growth Objective
              </label>
              <textarea
                rows={3}
                placeholder="Describe your current bottleneck, desired deliverables, timeline, or current ad spend..."
                value={formData.overview}
                onChange={e => setFormData({ ...formData, overview: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5] placeholder-[#4A4A52] resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-[#858585] font-mono-numbers">
                Strict Confidentiality Guaranteed
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(230,0,35,0.4)] flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Submit Strategic Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

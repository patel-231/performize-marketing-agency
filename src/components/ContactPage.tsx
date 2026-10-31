import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck } from 'lucide-react';
import { AGENCY_SERVICES } from '../data/agencyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    services: [] as string[],
    budget: '$5,000 - $15,000 / mo',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (title: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(title)
        ? prev.services.filter(s => s !== title)
        : [...prev.services, title]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-32 pb-24 bg-[#0B0B0C] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="border-b border-[#1F1F24] pb-12 mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#CCFF00] font-semibold mb-3">
            <span>Direct Access</span>
            <span className="text-[#858585]">/ Project Inquiries</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#F5F5F5] uppercase tracking-tight text-balance">
            Let's Make Your Brand{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60023] via-[#FF1E38] to-[#FF4D64]">
              Impossible To Ignore.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#858585] max-w-2xl font-light leading-relaxed">
            Ready to discuss a project, scale paid acquisition, or engineer 24/7 AI lead automation?
            Fill out the brief below or connect directly via WhatsApp or email.
          </p>
        </div>

        {/* 2-Column Split: Form (7 cols) + Direct Contact Info (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Intake Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#121214] border border-[#222227] shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] flex items-center justify-center mx-auto border border-[#CCFF00]/40">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F5F5]">
                  Inquiry Dispatched
                </h3>
                <p className="text-[#858585] text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#F5F5F5] font-semibold">{formData.fullName}</span>. Your brief has been routed to our senior strategy director. We will reply within 2 business hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/15550192834?text=Hi%20Performize%2C%20I%20just%20submitted%20a%20project%20form%20for%20${encodeURIComponent(formData.companyName || 'our team')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#CCFF00] text-[#0B0B0C] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#B8E600] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-[#1A1A1E] text-[#858585] hover:text-[#F5F5F5] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#F5F5F5] uppercase">
                    Project Brief &amp; Discovery
                  </h3>
                  <p className="text-xs text-[#858585] mt-1">
                    Every project begins with understanding your commercial objectives.
                  </p>
                </div>

                {/* Service pills */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#858585] font-semibold mb-2">
                    Services Needed
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {AGENCY_SERVICES.map(s => {
                      const isChecked = formData.services.includes(s.title);
                      return (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => toggleService(s.title)}
                          className={`p-2 rounded-lg text-left text-xs font-medium border transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-[#E60023] text-white border-[#FF1E38] shadow-[0_0_10px_rgba(230,0,35,0.4)]'
                              : 'bg-[#1A1A1E] text-[#858585] border-[#26262B] hover:text-[#F5F5F5]'
                          }`}
                        >
                          <span className="line-clamp-1">{s.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Sterling"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5] placeholder-[#4A4A52]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sterling Dynamics"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5] placeholder-[#4A4A52]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@sterling.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5] placeholder-[#4A4A52]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5] placeholder-[#4A4A52]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                    Estimated Monthly Marketing Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5]"
                  >
                    <option>&lt; $5,000 / mo</option>
                    <option>$5,000 - $15,000 / mo</option>
                    <option>$15,000 - $35,000 / mo</option>
                    <option>$35,000+ / mo</option>
                    <option>One-Off Project / Sprint</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#858585] uppercase tracking-wider mb-1 font-semibold">
                    Project Scope &amp; Target Timeline
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand challenges, current monthly revenue or ad spend, and timeline..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0B0C] border border-[#26262B] focus:border-[#E60023] focus:outline-none text-sm text-[#F5F5F5] placeholder-[#4A4A52] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(230,0,35,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Dispatching Brief...</span>
                  ) : (
                    <>
                      <span>Transmit Brief to Performize</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Direct Card */}
            <div className="p-8 rounded-2xl bg-[#121214] border border-[#222227] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/15 text-[#CCFF00] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#F5F5F5]">
                    Fast-Track WhatsApp
                  </h3>
                  <span className="text-xs text-[#858585]">Real-time dialogue</span>
                </div>
              </div>
              <p className="text-xs text-[#858585] leading-relaxed">
                Need immediate answers? Start a direct chat with our client success team. Average reply time is under 15 minutes during business hours.
              </p>
              <a
                href="https://wa.me/15550192834?text=Hi%20Performize%2C%20I'd%20like%20to%20discuss%20a%20new%20marketing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CCFF00] text-[#0B0B0C] font-bold text-xs uppercase tracking-wider hover:bg-[#B8E600] transition-colors"
              >
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email & Phone Cards */}
            <div className="p-8 rounded-2xl bg-[#121214] border border-[#222227] space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] text-[#FF1E38] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-numbers uppercase text-[#858585]">Direct Email</span>
                  <a href="mailto:hello@performize.agency" className="font-display font-bold text-base text-[#F5F5F5] hover:text-[#FF1E38] block mt-0.5">
                    hello@performize.agency
                  </a>
                  <span className="text-[11px] text-[#858585]">Pitch decks &amp; RFPs welcome</span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#1F1F24]">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] text-[#F5F5F5] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-numbers uppercase text-[#858585]">Primary Office</span>
                  <div className="font-display font-semibold text-sm text-[#F5F5F5] mt-0.5">
                    440 Montgomery Street
                  </div>
                  <div className="text-xs text-[#858585]">
                    Financial District, San Francisco, CA 94104
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#1F1F24]">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] text-[#CCFF00] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-numbers uppercase text-[#858585]">SLA Guarantee</span>
                  <div className="text-xs text-[#F5F5F5] font-medium mt-0.5">
                    Response time under 2 business hours
                  </div>
                  <div className="text-[11px] text-[#858585]">
                    Monday – Friday, 08:00 – 19:00 PST
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

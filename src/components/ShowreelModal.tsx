import React from 'react';
import { X, Play, Volume2, Sparkles, ArrowUpRight } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartProject: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onStartProject
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-lg animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#121214] border border-[#26262B] rounded-2xl shadow-2xl overflow-hidden my-auto text-[#F5F5F5]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#1A1A1E] hover:bg-[#E60023] text-[#F5F5F5] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Visual Container */}
        <div className="relative aspect-[16/9] w-full bg-[#0B0B0C] overflow-hidden group">
          <img
            src="/assets/images/agency_production_studio_1793790556606.jpg"
            alt="Performize Agency Cinema Workstation and Creative Production Studio"
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />

          {/* Dynamic scanlines & red glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-[#0B0B0C]/40" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E60023]/25 via-transparent to-transparent mix-blend-screen" />

          {/* Central Play overlay simulation */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[#E60023] text-white flex items-center justify-center shadow-[0_0_50px_rgba(230,0,35,0.8)] scale-100 hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>

            <div className="mt-6">
              <span className="px-3 py-1 rounded bg-[#0B0B0C]/90 text-[11px] font-mono-numbers text-[#CCFF00] uppercase tracking-widest border border-[#26262B]">
                Agency Reel 2026 · Sound ON
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight text-white mt-3">
                Non-Conformist Velocity
              </h3>
              <p className="text-xs sm:text-sm text-[#858585] max-w-md mx-auto mt-2">
                Featuring highlights across Cypher Financial, Aura Luxury, and Nexus Autonomous Workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="p-6 bg-[#121214] border-t border-[#1F1F24] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-[#858585]">
            <Volume2 className="w-4 h-4 text-[#CCFF00]" />
            <span>Master audio mixed for high-impact commercial playback</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="px-6 py-2.5 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg"
          >
            <span>Commission Creative Like This</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Project } from '../types';
import { X, ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onEnquireForProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onEnquireForProject
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121214] border border-[#26262B] rounded-2xl shadow-2xl overflow-y-auto my-auto text-[#F5F5F5]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#1A1A1E] hover:bg-[#E60023] text-[#F5F5F5] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B0B0C]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-90" />

          {/* Top metadata */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-[#0B0B0C]/80 backdrop-blur-md border border-[#26262B] text-xs font-mono-numbers text-[#CCFF00]">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded bg-[#0B0B0C]/80 backdrop-blur-md border border-[#26262B] text-xs font-mono-numbers text-[#858585]">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#858585] font-mono-numbers">
              {project.clientIndustry}
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#F5F5F5] mt-1">
              {project.title}
            </h2>
            <p className="text-[#858585] text-base sm:text-lg leading-relaxed mt-4 font-light">
              {project.fullDescription}
            </p>
          </div>

          {/* Quantified Business Results */}
          <div className="p-6 rounded-xl bg-[#0B0B0C] border border-[#222227]">
            <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono-numbers font-semibold block mb-4">
              Verified Campaign Performance
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.results.map((res) => (
                <div key={res.label}>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] font-mono-numbers">
                    {res.value}
                  </div>
                  <div className="text-xs font-semibold text-[#FF1E38] mt-1">
                    {res.label}
                  </div>
                  <div className="text-[11px] text-[#858585] mt-0.5">
                    {res.context}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#17171B] border border-[#26262B]">
              <span className="text-xs uppercase tracking-widest text-[#FF1E38] font-bold block mb-2">
                The Core Challenge
              </span>
              <p className="text-sm text-[#858585] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#17171B] border border-[#26262B]">
              <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-bold block mb-2">
                The Performize Strategy
              </span>
              <p className="text-sm text-[#858585] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Services Deployed */}
          <div>
            <span className="text-xs uppercase tracking-widest text-[#F5F5F5] font-semibold block mb-3">
              Disciplines Deployed
            </span>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-[#1A1A1E] border border-[#26262B] text-xs text-[#F5F5F5] font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-[#1F1F24] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#858585]">
              Interested in similar outcomes for your company?
            </div>
            <button
              onClick={() => {
                onClose();
                onEnquireForProject(project.title);
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#E60023] hover:bg-[#FF1E38] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(230,0,35,0.4)] cursor-pointer"
            >
              <span>Build Strategy Like This</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

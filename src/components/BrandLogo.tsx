import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-11 h-11',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  const subSizes = {
    sm: 'text-[7px] tracking-[0.24em]',
    md: 'text-[9px] tracking-[0.28em]',
    lg: 'text-[11px] tracking-[0.32em]',
    xl: 'text-[14px] tracking-[0.35em]'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Ascending skyscraper structure with dynamic upward arrow icon */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(230,0,35,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Skyscraper Bar 1 (Shortest, Left) */}
          <path
            d="M26 62L40 48V72L26 80V62Z"
            fill="url(#crimsonGrad)"
          />
          {/* Skyscraper Bar 2 (Medium, Center) */}
          <path
            d="M44 43L58 29V67L44 76V43Z"
            fill="url(#brightRedGrad)"
          />
          {/* Skyscraper Bar 3 (Tallest, Right) */}
          <path
            d="M62 25L76 11V62L62 70V25Z"
            fill="url(#crimsonGrad)"
          />
          {/* 3D Angled Roof Facets */}
          <path
            d="M26 62L34 56L40 48L32 54Z"
            fill="#FF4D64"
          />
          <path
            d="M44 43L52 37L58 29L50 35Z"
            fill="#FF4D64"
          />
          <path
            d="M62 25L70 19L76 11L68 17Z"
            fill="#FF6B7F"
          />
          {/* Dynamic sweeping swoosh curve under pillars */}
          <path
            d="M18 64C20 78 36 86 52 83C66 80 78 72 87 56"
            stroke="url(#brightRedGrad)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Upward dynamic arrow head */}
          <path
            d="M78 48L91 53L86 67L84 57L74 55L78 48Z"
            fill="#FF1E38"
          />

          <defs>
            <linearGradient id="crimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1E38" />
              <stop offset="100%" stopColor="#C4001A" />
            </linearGradient>
            <linearGradient id="brightRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D64" />
              <stop offset="100%" stopColor="#E60023" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className={`font-display font-bold leading-none tracking-tight ${textSizes[size]}`}>
          <span className="text-[#F5F5F5]">Perform</span>
          <span className="text-[#E60023]">ize</span>
        </div>
        {showSubtitle && (
          <span className={`font-medium uppercase text-[#858585] mt-1 ${subSizes[size]}`}>
            Marketing Agency
          </span>
        )}
      </div>
    </div>
  );
};

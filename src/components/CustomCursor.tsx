import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'project' | 'view'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('[data-cursor]');
      if (interactiveEl) {
        const type = interactiveEl.getAttribute('data-cursor');
        if (type === 'project') {
          setCursorState('project');
          setCursorText('VIEW CASE');
        } else if (type === 'explore') {
          setCursorState('view');
          setCursorText('EXPLORE');
        } else {
          setCursorState('pointer');
          setCursorText('');
        }
      } else if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        setCursorState('pointer');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp for trailing aura
  useEffect(() => {
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animateTrail = () => {
      setTrailingPos(prev => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18)
      }));
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    animationFrameId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  const isLarge = cursorState === 'project' || cursorState === 'view';

  return (
    <>
      {/* Precision inner center dot */}
      <div
        className="pointer-events-none fixed z-[9999] top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          width: isLarge ? '0px' : '6px',
          height: isLarge ? '0px' : '6px',
          backgroundColor: '#CCFF00',
          boxShadow: '0 0 10px #CCFF00'
        }}
      />

      {/* Kinetic trailing aura / badge */}
      <div
        className={`pointer-events-none fixed z-[9998] top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out flex items-center justify-center font-display font-bold text-[10px] tracking-widest text-[#0B0B0C] ${
          isLarge
            ? 'w-24 h-24 bg-[#E60023] text-white shadow-[0_0_30px_rgba(230,0,35,0.6)] scale-100 opacity-95'
            : cursorState === 'pointer'
            ? 'w-12 h-12 border border-[#E60023] bg-[rgba(230,0,35,0.15)] backdrop-blur-[1px] scale-110'
            : 'w-8 h-8 border border-[rgba(255,255,255,0.2)] bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      >
        {isLarge && <span>{cursorText}</span>}
      </div>
    </>
  );
};

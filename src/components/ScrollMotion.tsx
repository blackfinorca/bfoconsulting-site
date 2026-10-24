import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from 'motion/react';

// Shared easing: fast start, long soft settle.
const EASE = [0.22, 1, 0.36, 1] as const;

const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' } as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* ------------------------------------------------------------------ */
/* Time-based reveals (play once when the element enters the viewport) */
/* ------------------------------------------------------------------ */

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Animate on mount instead of when scrolled into view (for above-the-fold content). */
  immediate?: boolean;
}

/** Fades and lifts its children in once they scroll into view. */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, immediate = false }) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport: VIEWPORT })}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  immediate?: boolean;
}

/** Container that reveals its StaggerItem children one after another. */
export const Stagger: React.FC<StaggerProps> = ({
  children,
  className,
  stagger = 0.09,
  delay = 0,
  immediate = false,
}) => (
  <motion.div
    className={className}
    initial="hidden"
    {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport: VIEWPORT })}
    variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <motion.div className={className} variants={fadeUp}>
    {children}
  </motion.div>
);

/* ------------------------------------------------------------------ */
/* Scroll-linked effects (progress follows the scrollbar, both ways)   */
/* ------------------------------------------------------------------ */

/** Hero pinned to the viewport; it shrinks and fades while the page scrolls on. */
export const PinnedHero: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.82]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.75], [1, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <div ref={ref} className="relative h-[170vh]">
      <div className="sticky top-0 h-svh flex items-center pt-36 md:pt-24">
        <motion.div className="w-full origin-left" style={reduce ? undefined : { scale, opacity }}>
          {children}
        </motion.div>
        <motion.div
          aria-hidden="true"
          style={reduce ? undefined : { opacity: cueOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden [@media(min-height:760px)]:flex flex-col items-center gap-2 text-sm font-semibold text-royal-deep/60"
        >
          <span>Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-royal/60 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

const splitWords = (text: string) => (/\s/.test(text) ? text.split(/(\s+)/) : Array.from(text));

const Word: React.FC<{ progress: MotionValue<number>; range: [number, number]; children: string }> = ({
  progress,
  range,
  children,
}) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

interface ScrollStatementProps {
  eyebrow?: React.ReactNode;
  headline: string;
  body?: string;
}

/** Pinned statement in very large type; its words light up one by one as you scroll. */
export const ScrollStatement: React.FC<ScrollStatementProps> = ({ eyebrow, headline, body }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const headWords = splitWords(headline);
  const bodyWords = body ? splitWords(body) : [];
  const total = headWords.length + bodyWords.length;

  const renderWords = (words: string[], startIndex: number) =>
    words.map((w, i) => {
      if (reduce || /^\s+$/.test(w)) return <React.Fragment key={i}>{w}</React.Fragment>;
      // Finish lighting up by 85% so the full sentence holds before un-pinning.
      const start = ((startIndex + i) / total) * 0.85;
      return (
        <Word key={i} progress={scrollYProgress} range={[start, start + 0.85 / total]}>
          {w}
        </Word>
      );
    });

  return (
    <div ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 h-svh flex flex-col justify-center pt-36 md:pt-24 max-w-5xl mx-auto px-4 md:px-8">
        {eyebrow}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-royal-deep tracking-tight leading-[1.05]">
          {renderWords(headWords, 0)}
        </h2>
        {body && (
          <p className="mt-6 md:mt-8 text-xl md:text-3xl font-semibold text-royal leading-snug max-w-3xl">
            {renderWords(bodyWords, headWords.length)}
          </p>
        )}
      </div>
    </div>
  );
};

interface ScrubProps {
  children: React.ReactNode;
  className?: string;
  /** Starting offsets; each animates to its resting value as the element scrolls into place. */
  from?: { x?: number; y?: number; scale?: number; rotateX?: number; rotate?: number };
  /** 0-1: delays this element's progress, so siblings land one after another. */
  lag?: number;
}

/** Moves an element into place in step with the scrollbar as it enters the viewport. */
export const Scrub: React.FC<ScrubProps> = ({ children, className, from = { y: 120 }, lag = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.55'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });
  const range = [lag, 1];

  const x = useTransform(smooth, range, [from.x ?? 0, 0]);
  const y = useTransform(smooth, range, [from.y ?? 0, 0]);
  const scale = useTransform(smooth, range, [from.scale ?? 1, 1]);
  const rotateX = useTransform(smooth, range, [from.rotateX ?? 0, 0]);
  const rotate = useTransform(smooth, range, [from.rotate ?? 0, 0]);
  const opacity = useTransform(smooth, [lag, lag + (1 - lag) * 0.6], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce ? undefined : { x, y, scale, rotateX, rotate, opacity, transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  );
};

/** Full-bleed oversized heading that slides sideways as you scroll past it. */
export const SectionMarquee: React.FC<{ text: string; direction?: 1 | -1 }> = ({ text, direction = 1 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], direction === 1 ? ['0%', '-30%'] : ['-30%', '0%']);

  return (
    <div ref={ref} aria-hidden="true" className="overflow-hidden py-8 md:py-12 select-none">
      <motion.div
        style={reduce ? undefined : { x }}
        className="flex whitespace-nowrap text-[18vw] md:text-[13vw] font-extrabold leading-none tracking-tighter"
      >
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="flex items-center">
            <span className={i % 2 ? 'text-aster' : 'text-royal-deep'}>{text}</span>
            <span className="mx-[3vw] w-[3vw] h-[3vw] rounded-full bg-habanero shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/** Thin reading-progress bar pinned to the top of the viewport. */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-gradient-to-r from-royal via-aster to-habanero"
      style={{ scaleX }}
    />
  );
};

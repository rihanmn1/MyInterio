import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
}

export default function TextReveal({ children, className = '' }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.25'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        filter: blur.get() > 0 ? `blur(${blur.get()}px)` : 'none',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

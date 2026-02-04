import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
  animate?: boolean;
}

export default function Section({
  id,
  className,
  children,
  containerClassName,
  animate = true,
}: SectionProps) {
  const content = (
    <div className={cn('container mx-auto px-4 lg:px-8', containerClassName)}>
      {children}
    </div>
  );

  if (!animate) {
    return (
      <section id={id} className={cn('py-16 md:py-24', className)}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('py-16 md:py-24', className)}
    >
      {content}
    </motion.section>
  );
}

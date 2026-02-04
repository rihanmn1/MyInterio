import { motion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  className?: string;
}

export default function ShinyText({ text, className = '' }: ShinyTextProps) {
  return (
    <motion.span
      className={`relative inline-block bg-clip-text overflow-visible leading-[1.15] pb-[0.14em] ${className}`}
      initial={{ backgroundPosition: '200% center' }}
      animate={{ backgroundPosition: '-200% center' }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          hsl(var(--foreground)) 0%,
          hsl(var(--foreground)) 40%,
          hsl(var(--primary)) 50%,
          hsl(var(--foreground)) 60%,
          hsl(var(--foreground)) 100%
        )`,
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {text}
    </motion.span>
  );
}

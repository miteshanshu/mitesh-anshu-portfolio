import { useRef, type ReactNode, type MouseEvent, type RefObject } from 'react';
import { motion } from 'framer-motion';
import './MagneticButton.css';

type Variant = 'primary' | 'secondary' | 'outline';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  external?: boolean;
  onClick?: () => void;
  className?: string;
}

export function MagneticButton({
  children,
  href,
  variant = 'primary',
  external = false,
  onClick,
  className = '',
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  const classes = `mag-btn mag-btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <motion.a
        ref={ref as RefObject<HTMLAnchorElement>}
        className={classes}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileTap={{ scale: 0.97 }}
      >
        <span className="mag-btn__shine" />
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as RefObject<HTMLButtonElement>}
      type="button"
      className={classes}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
    >
      <span className="mag-btn__shine" />
      {children}
    </motion.button>
  );
}
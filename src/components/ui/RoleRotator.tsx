import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './RoleRotator.css';

interface RoleRotatorProps {
  roles: string[];
}

export function RoleRotator({ roles }: RoleRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <span className="role-rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="role-rotator__text gradient-text"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
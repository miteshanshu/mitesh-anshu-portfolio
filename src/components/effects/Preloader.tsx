import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../../data/portfolio';
import './Preloader.css';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.classList.add('is-loading');

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 120);

    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        document.body.classList.remove('is-loading');
      }, 500);
    }, 1600);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      document.body.classList.remove('is-loading');
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader__inner">
            <span className="preloader__label mono">mitesh-anshu.dev</span>
            <h2 className="preloader__name display">{personal.firstName}</h2>
            <div className="preloader__bar">
              <motion.div
                className="preloader__fill"
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <span className="preloader__pct mono">{Math.min(Math.round(progress), 100)}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
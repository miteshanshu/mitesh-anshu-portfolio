import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';
import './SectionHeading.css';

interface SectionHeadingProps {
  num: string;
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ num, label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.header
      className="section-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div className="section-heading__meta" variants={fadeUp} custom={0}>
        <span className="section-heading__num mono">{num}</span>
        <span className="section-heading__label mono">{label}</span>
      </motion.div>
      <motion.h2 className="section-heading__title display" variants={fadeUp} custom={1}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className="section-heading__subtitle" variants={fadeUp} custom={2}>
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
}
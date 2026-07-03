import { motion } from 'framer-motion';
import { Code2, Layers, Sparkles } from 'lucide-react';
import { personal, stats, uxPrinciples } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { useCountUp } from '../../hooks/useCountUp';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import './About.css';

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);

  return (
    <div className="about__stat">
      <span className="about__stat-value display" ref={ref}>
        {count}
        {suffix}
      </span>
      <span className="about__stat-label">{label}</span>
    </div>
  );
}

const icons = [Layers, Code2, Sparkles];

export function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeading
          num="02"
          label="About Me"
          title="Engineering with design intent"
          subtitle="I build products where backend reliability meets thoughtful frontend craft."
        />

        <div className="about__layout">
          <motion.div
            className="about__summary-wrap"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p className="about__summary" variants={fadeUp}>
              {personal.summary}
            </motion.p>

            <motion.div className="about__stats" variants={fadeUp}>
              {stats.map((s) => (
                <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about__bento"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {uxPrinciples.map((item, i) => {
              const Icon = icons[i] ?? Sparkles;
              return (
                <motion.div key={item.title} variants={fadeUp} custom={i}>
                  <TiltCard>
                    <div className="about__card">
                      <div className="about__card-icon">
                        <Icon size={22} />
                      </div>
                      <h3 className="display">{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
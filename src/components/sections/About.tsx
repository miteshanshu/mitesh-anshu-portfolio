import { motion } from 'framer-motion';
import { personal, stats, uxPrinciples, processSteps } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { useCountUp } from '../../hooks/useCountUp';
import { SectionHeading } from '../ui/SectionHeading';
import './About.css';

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);

  return (
    <div className="about__stat">
      <span className="about__stat-value display" ref={ref}>
        {count}
        {suffix}
      </span>
      <span className="about__stat-label mono">{label}</span>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeading
          num="02"
          label="About"
          title={
            <>
              Engineering with <em className="serif-italic accent-em">design intent</em>
            </>
          }
          subtitle="Where backend reliability meets thoughtful frontend craft."
        />

        <div className="about__grid">
          <motion.div
            className="about__main"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.blockquote className="about__quote display" variants={fadeUp}>
              &ldquo;{personal.summary}&rdquo;
            </motion.blockquote>

            <motion.div className="about__stats" variants={fadeUp}>
              {stats.map((s) => (
                <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about__side"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div className="about__process" variants={fadeUp}>
              <span className="about__label mono">How I work</span>
              <ol className="about__steps">
                {processSteps.map((p, i) => (
                  <li key={p.step} className="about__step">
                    <span className="about__step-num mono">0{i + 1}</span>
                    <div>
                      <h3 className="display">{p.step}</h3>
                      <p>{p.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div className="about__principles" variants={fadeUp} custom={1}>
              {uxPrinciples.map((item) => (
                <article key={item.title} className="about__principle">
                  <span className="about__principle-num mono">{item.num}</span>
                  <div>
                    <h3 className="display">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
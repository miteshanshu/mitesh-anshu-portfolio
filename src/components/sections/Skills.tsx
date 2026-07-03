import { motion } from 'framer-motion';
import { skills, education, achievements, marqueeItems } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { SectionHeading } from '../ui/SectionHeading';
import { Marquee } from '../ui/Marquee';
import { TiltCard } from '../ui/TiltCard';
import './Skills.css';

export function Skills() {
  return (
    <section id="skills" className="skills section">
      <Marquee items={marqueeItems} />

      <div className="container skills__body">
        <SectionHeading
          num="04"
          label="Skills & Background"
          title="The full stack, visually"
          subtitle="From responsive UI to transactional PostgreSQL — every layer considered."
        />

        <motion.div
          className="skills__bento"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className={`skills__cell ${i === 0 ? 'skills__cell--wide' : ''}`}
              variants={fadeUp}
              custom={i}
            >
              <TiltCard glow={false}>
                <div className="skills__card">
                  <div className="skills__card-head">
                    <h3 className="display">{group.category}</h3>
                    <div className="skills__bar">
                      <motion.div
                        className="skills__bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${group.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                  <div className="skills__tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          <motion.div className="skills__cell skills__cell--edu" variants={fadeUp}>
            <TiltCard glow={false}>
              <div className="skills__card skills__card--edu">
                <span className="mono skills__edu-label">Education</span>
                <h3 className="display">{education.institution}</h3>
                <p className="skills__degree">{education.degree}</p>
                <p className="skills__period mono">{education.period}</p>
                <div className="skills__coursework">
                  {education.coursework.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div className="skills__cell skills__cell--achieve" variants={fadeUp}>
            <TiltCard glow={false}>
              <div className="skills__card skills__card--achieve">
                <span className="mono skills__edu-label">Achievements</span>
                {achievements.map((a) => (
                  <div key={a.title} className="skills__achievement">
                    <h4 className="display">{a.title}</h4>
                    <p>{a.description}</p>
                  </div>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
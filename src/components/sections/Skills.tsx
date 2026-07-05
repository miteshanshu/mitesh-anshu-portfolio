import { motion } from 'framer-motion';
import { skills, education, achievements, marqueeItems } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { SectionHeading } from '../ui/SectionHeading';
import { Marquee } from '../ui/Marquee';
import './Skills.css';

export function Skills() {
  return (
    <section id="skills" className="skills section">
      <Marquee items={marqueeItems} />

      <div className="container skills__body">
        <SectionHeading
          num="04"
          label="Skills"
          title={
            <>
              The full stack, <em className="serif-italic accent-em">visually</em>
            </>
          }
          subtitle="From responsive UI to transactional PostgreSQL — every layer considered."
        />

        <motion.div
          className="skills__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((group, i) => (
            <motion.article
              key={group.category}
              className={`skills__card ${i === 0 ? 'skills__card--wide' : ''}`}
              variants={fadeUp}
              custom={i}
            >
              <div className="skills__card-top">
                <h3 className="display">{group.category}</h3>
                <span className="skills__level mono">{group.level}%</span>
              </div>
              <div className="skills__bar">
                <motion.div
                  className="skills__bar-fill"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: group.level / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          ))}

          <motion.article className="skills__card skills__card--edu" variants={fadeUp}>
            <span className="skills__label mono">Education</span>
            <h3 className="display">{education.institution}</h3>
            <p className="skills__degree">{education.degree}</p>
            <p className="skills__period mono">{education.period} · {education.location}</p>
            <div className="skills__coursework">
              {education.coursework.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </motion.article>

          <motion.article className="skills__card skills__card--achieve" variants={fadeUp}>
            <span className="skills__label mono">Achievements</span>
            {achievements.map((a) => (
              <div key={a.title} className="skills__achievement">
                <h4 className="display">{a.title}</h4>
                <p>{a.description}</p>
              </div>
            ))}
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
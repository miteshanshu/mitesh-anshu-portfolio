import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Tag } from '../common/Tag';
import { achievements, education } from '../../data/portfolio';
import './Education.css';

export function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <SectionHeader label="Education & Achievements" title="Background & milestones" />

        <div className="education__grid">
          <motion.article
            className="education__card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="education__icon">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3>{education.institution}</h3>
              <p className="education__degree">{education.degree}</p>
              <p className="education__period">{education.period}</p>

              <div className="education__coursework">
                <span className="education__label">
                  <BookOpen size={16} />
                  Relevant Coursework
                </span>
                <div className="education__tags">
                  {education.coursework.map((course) => (
                    <Tag key={course}>{course}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="education__card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="education__icon">
              <Award size={24} />
            </div>
            <div>
              <h3>Achievements</h3>
              <ul className="education__achievements">
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
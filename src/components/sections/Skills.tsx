import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { Tag } from '../common/Tag';
import { skills } from '../../data/portfolio';
import './Skills.css';

export function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionHeader
          label="Skills"
          title="Technical toolkit"
          subtitle="Technologies I use to build reliable, production-ready applications."
        />

        <div className="skills__grid">
          {skills.map((group, groupIndex) => (
            <motion.article
              key={group.category}
              className="skills__group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
            >
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
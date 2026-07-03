import { motion } from 'framer-motion';
import { Database, Layers, Shield } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { personal } from '../../data/portfolio';
import './About.css';

const highlights = [
  {
    icon: Layers,
    title: 'Full-Stack Delivery',
    text: 'End-to-end features from React frontends to Express APIs and PostgreSQL schemas.',
  },
  {
    icon: Shield,
    title: 'RBAC & Auth',
    text: 'JWT authentication and role-based middleware for secure, access-controlled systems.',
  },
  {
    icon: Database,
    title: 'Data Integrity',
    text: 'Transactional workflows with stored procedures, row-level locking, and concurrency-safe design.',
  },
];

export function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeader label="About" title="Building reliable systems end to end" />

        <div className="about__grid">
          <motion.p
            className="about__summary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {personal.summary}
          </motion.p>

          <div className="about__cards">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                className="about__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="about__card-icon">
                  <item.icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
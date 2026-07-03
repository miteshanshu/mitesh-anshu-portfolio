import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { SectionHeader } from '../common/SectionHeader';
import { Tag } from '../common/Tag';
import { projects } from '../../data/portfolio';
import './Projects.css';

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHeader
          label="Projects"
          title="Selected work"
          subtitle="Real applications focused on backend reliability, RBAC, and transactional data design."
        />

        <div className="projects__list">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-card__header">
                <div>
                  {project.featured && (
                    <span className="project-card__badge">
                      <Star size={14} />
                      Featured
                    </span>
                  )}
                  <h3 className="project-card__name">{project.name}</h3>
                  <p className="project-card__subtitle">{project.subtitle}</p>
                </div>
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GithubIcon size={20} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card__stack">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <ul className="project-card__highlights">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
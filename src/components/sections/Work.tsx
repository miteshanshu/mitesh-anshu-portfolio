import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { GithubIcon } from '../common/SocialIcons';
import './Work.css';

export function Work() {
  return (
    <section id="work" className="work section">
      <div className="container">
        <SectionHeading
          num="03"
          label="Selected Work"
          title={
            <>
              Case studies that <em className="serif-italic accent-em">ship</em>
            </>
          }
          subtitle="End-to-end builds with production architecture and interfaces users trust."
        />

        <motion.div
          className="work__list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className={`work__case ${project.featured ? 'work__case--featured' : ''}`}
              variants={fadeUp}
              custom={i}
              style={{ '--project-accent': project.color } as CSSProperties}
            >
              <div className="work__case-header">
                <div className="work__case-meta">
                  <span className="work__index mono">0{i + 1}</span>
                  <span className="work__year mono">{project.year}</span>
                </div>
                <div className="work__case-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GithubIcon size={18} />
                  </a>
                  {'githubBackend' in project && project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work__api-link mono"
                      title="Backend repository"
                    >
                      API
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="work__title display">{project.name}</h3>
              <p className="work__subtitle">{project.subtitle}</p>

              <div className="work__metrics">
                {project.metrics.map((m) => (
                  <div key={m.label} className="work__metric">
                    <span className="work__metric-val display">{m.value}</span>
                    <span className="work__metric-label mono">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="work__narrative">
                <div className="work__narrative-block">
                  <span className="work__narrative-label mono">Problem</span>
                  <p>{project.problem}</p>
                </div>
                <div className="work__narrative-block">
                  <span className="work__narrative-label mono">Solution</span>
                  <p>{project.solution}</p>
                </div>
                <div className="work__narrative-block">
                  <span className="work__narrative-label mono">Outcome</span>
                  <p>{project.outcome}</p>
                </div>
              </div>

              <ul className="work__highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="work__footer">
                <div className="work__stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button href={project.live ?? project.github} external variant="ghost" size="sm">
                  Explore project
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
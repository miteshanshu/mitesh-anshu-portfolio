import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import { GithubIcon } from '../common/SocialIcons';
import './Work.css';

export function Work() {
  return (
    <section id="work" className="work section">
      <div className="container">
        <SectionHeading
          num="03"
          label="Selected Work"
          title="Projects that ship"
          subtitle="End-to-end builds with production-grade architecture and polished interfaces."
        />

        <motion.div
          className="work__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className={`work__item ${project.featured ? 'work__item--featured' : ''}`}
              variants={fadeUp}
              custom={i}
            >
              <TiltCard>
                <div className="work__card">
                  <div className="work__card-top">
                    <div>
                      <span className="work__year mono">{project.year}</span>
                      <h3 className="work__name display">{project.name}</h3>
                      <p className="work__subtitle">{project.subtitle}</p>
                    </div>
                    <div className="work__links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GithubIcon size={18} />
                      </a>
                      {'githubBackend' in project && project.githubBackend && (
                        <a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Backend repository"
                          className="work__link-backend mono"
                          title="Backend repo"
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

                  <div className="work__metrics">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="work__metric">
                        <span className="work__metric-val display">{m.value}</span>
                        <span className="work__metric-label mono">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="work__stack">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <ul className="work__highlights">
                    {project.highlights.slice(0, project.featured ? 5 : 3).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="work__cta mono">
                    View project <ArrowUpRight size={14} />
                  </a>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { MagneticButton } from '../ui/MagneticButton';
import { RoleRotator } from '../ui/RoleRotator';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import './Hero.css';

const HeroScene = lazy(() =>
  import('../three/HeroScene').then((m) => ({ default: m.HeroScene })),
);

export function Hero() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section id="home" className="hero section">
      {isDesktop && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}

      <div className="container hero__grid">
        <div className="hero__content">
          <motion.div
            className="hero__status"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="hero__pulse" />
            <span className="mono">{personal.availability}</span>
          </motion.div>

          <motion.h1
            className="hero__title display"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafting digital
            <br />
            experiences that
            <br />
            <span className="gradient-text">perform & delight</span>
          </motion.h1>

          <motion.p
            className="hero__name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I&apos;m <strong>{personal.name}</strong> — a{' '}
            <RoleRotator roles={personal.roles} />
          </motion.p>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            <MagneticButton onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
              View my work
              <ArrowUpRight size={18} />
            </MagneticButton>
            <MagneticButton href={`mailto:${personal.email}`} variant="secondary">
              <Mail size={18} />
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div
            className="hero__social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={20} />
              <span>GitHub</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__bento"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="hero__card hero__card--main">
            <span className="hero__card-label mono">Featured Project</span>
            <h3 className="display">CircuLib</h3>
            <p>Role-based library platform with 12 API domains & analytics dashboards</p>
          </div>
          <div className="hero__card hero__card--stat">
            <span className="hero__stat-num display gradient-text">100+</span>
            <span className="mono">DSA Solved</span>
          </div>
          <div className="hero__card hero__card--stack">
            <span className="mono">Stack</span>
            <div className="hero__stack-tags">
              {['React', 'Node', 'PostgreSQL'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Scroll to explore
        <span className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
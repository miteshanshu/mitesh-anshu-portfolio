import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { Button } from '../common/Button';
import { personal } from '../../data/portfolio';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import './Hero.css';

const HeroScene = lazy(() =>
  import('../three/HeroScene').then((module) => ({ default: module.HeroScene })),
);

export function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero section">
      {!isMobile && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}

      <div className="container hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Available for opportunities
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I&apos;m <span className="hero__highlight">{personal.name}</span>
        </motion.h1>

        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {personal.title}
        </motion.p>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button onClick={scrollToProjects}>View Projects</Button>
          <Button href="/resume.pdf" variant="secondary" external>
            Download Resume
          </Button>
          <Button href={`mailto:${personal.email}`} variant="secondary">
            <Mail size={18} />
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          className="hero__social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="hero__scroll"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
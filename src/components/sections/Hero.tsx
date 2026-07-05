import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { personal, stats } from '../../data/portfolio';
import { Button } from '../ui/Button';
import { RoleRotator } from '../ui/RoleRotator';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import './Hero.css';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__wrap">
        <div className="hero__top">
          <motion.div
            className="hero__badge mono"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
          >
            <span className="hero__dot" />
            {personal.availability}
          </motion.div>

          <motion.div
            className="hero__meta mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span>Based in {personal.location}</span>
            <span className="hero__meta-sep">·</span>
            <span>{personal.title}</span>
          </motion.div>
        </div>

        <div className="hero__headline">
          <motion.h1
            className="hero__name display"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease }}
          >
            <span className="hero__name-line">Mitesh</span>
            <span className="hero__name-line hero__name-line--accent">
              Kumar <em className="serif-italic">Anshu</em>
            </span>
          </motion.h1>

          <motion.p
            className="hero__role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease }}
          >
            <RoleRotator roles={personal.roles} />
            <span className="hero__role-sep">—</span>
            <span className="hero__role-desc">{personal.tagline}</span>
          </motion.p>
        </div>

        <div className="hero__bottom">
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease }}
          >
            <Button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} size="lg">
              View selected work
              <ArrowUpRight size={18} />
            </Button>
            <Button href={`mailto:${personal.email}`} variant="secondary" size="lg">
              <Mail size={18} />
              {personal.email}
            </Button>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="hero__stat"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.08, duration: 0.5, ease }}
              >
                <span className="hero__stat-val display">
                  {s.value}
                  {s.suffix}
                </span>
                <span className="hero__stat-label mono">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__preview"
          initial={{ opacity: 0, x: 40, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.6, duration: 1, ease }}
        >
          <div className="hero__browser">
            <div className="hero__browser-bar">
              <span />
              <span />
              <span />
              <span className="hero__browser-url mono">circulib.app/dashboard</span>
            </div>
            <div className="hero__browser-body">
              <div className="hero__browser-sidebar">
                <div className="hero__browser-nav-item hero__browser-nav-item--active" />
                <div className="hero__browser-nav-item" />
                <div className="hero__browser-nav-item" />
              </div>
              <div className="hero__browser-main">
                <div className="hero__browser-header">
                  <span className="display">Analytics Overview</span>
                  <span className="hero__browser-pill mono">Live</span>
                </div>
                <div className="hero__browser-charts">
                  <div className="hero__chart hero__chart--lg" />
                  <div className="hero__chart hero__chart--sm" />
                  <div className="hero__chart hero__chart--sm" />
                </div>
                <div className="hero__browser-table">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="hero__table-row" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="hero__preview-caption mono">CircuLib — Featured Project</p>
        </motion.div>

        <motion.div
          className="hero__social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
        </motion.div>

        <motion.button
          type="button"
          className="hero__scroll mono"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-label="Scroll to about section"
        >
          <ArrowDown size={16} />
          Scroll
        </motion.button>
      </div>
    </section>
  );
}
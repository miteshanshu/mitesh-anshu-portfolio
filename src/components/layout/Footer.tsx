import { personal } from '../../data/portfolio';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="display footer__logo">
            Mitesh<span className="gradient-text">.</span>
          </span>
          <p className="footer__tagline">Designed & built with React, Three.js & intent.</p>
        </div>

        <div className="footer__links">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
        </div>

        <p className="footer__copy mono">
          © {year} {personal.name}
        </p>
      </div>
    </footer>
  );
}
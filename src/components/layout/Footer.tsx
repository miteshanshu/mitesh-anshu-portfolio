import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { personal } from '../../data/portfolio';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          © {year} {personal.name}. Built with React & Three.js.
        </p>
        <div className="footer__links">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
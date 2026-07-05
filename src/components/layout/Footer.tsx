import { personal } from '../../data/portfolio';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo display">
            Mitesh <em className="serif-italic">Anshu</em>
          </span>
          <p className="footer__tagline mono">
            Designed & engineered with React, TypeScript & intent.
          </p>
        </div>

        <div className="footer__center mono">
          <a href={personal.portfolioRepo} target="_blank" rel="noopener noreferrer">
            View source
          </a>
          <span>·</span>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <div className="footer__right">
          <div className="footer__social">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
          <p className="footer__copy mono">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
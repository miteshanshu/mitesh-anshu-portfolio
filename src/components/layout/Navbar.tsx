import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/portfolio';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { MagneticButton } from '../ui/MagneticButton';
import './Navbar.css';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(navLinks.map((l) => l.id));

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <button type="button" className="navbar__logo display" onClick={() => go('home')}>
          <span className="navbar__logo-mark">M</span>
          <span className="navbar__logo-text">itesh<span className="gradient-text">.</span></span>
        </button>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => go(link.id)}
            >
              <span className="navbar__link-num mono">{link.num}</span>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <MagneticButton href="/resume.pdf" variant="outline" external className="navbar__resume">
            Resume
          </MagneticButton>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
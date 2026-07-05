import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/portfolio';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { Button } from '../ui/Button';
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
        <button type="button" className="navbar__logo" onClick={() => go('home')}>
          <span className="navbar__logo-mark mono">MKA</span>
          <span className="navbar__logo-name display">Mitesh</span>
        </button>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`} aria-label="Main">
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
          <Button href="/resume.pdf" variant="outline" external size="sm" className="navbar__resume">
            Resume
          </Button>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
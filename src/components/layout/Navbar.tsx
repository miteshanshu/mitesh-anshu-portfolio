import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personal } from '../../data/portfolio';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((link) => link.id));

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <button type="button" className="navbar__brand" onClick={() => handleNavClick('home')}>
          <span className="navbar__brand-mark">MA</span>
          <span className="navbar__brand-name">{personal.name.split(' ')[0]}</span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { personal } from '../../data/portfolio';
import './Contact.css';

const contactItems = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/miteshanshu', href: personal.linkedin, external: true },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/miteshanshu', href: personal.github, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Let's connect"
          subtitle="Open to full-time roles and collaborations. Reach out anytime."
          align="center"
        />

        <motion.div
          className="contact__card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact__grid">
            {contactItems.map((item) => (
              <a
                key={item.label}
                className="contact__item"
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                <item.icon size={20} />
                <div>
                  <span className="contact__item-label">{item.label}</span>
                  <span className="contact__item-value">{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="contact__cta">
            <Button href={`mailto:${personal.email}`}>
              <Mail size={18} />
              Send an Email
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
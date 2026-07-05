import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { fadeUp } from '../../lib/animations';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionHeading
          num="05"
          label="Contact"
          title={
            <>
              Let&apos;s build something <em className="serif-italic accent-em">remarkable</em>
            </>
          }
          subtitle="Open to frontend, full-stack, and product engineering roles."
        />

        <motion.div
          className="contact__layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact__cta" variants={fadeUp}>
            <p className="contact__prompt display">
              Have a project or role in mind?
            </p>
            <Button href={`mailto:${personal.email}`} size="lg">
              <Mail size={18} />
              {personal.email}
              <ArrowUpRight size={18} />
            </Button>
            <p className="contact__hint mono">Typically responds within 24 hours</p>
          </motion.div>

          <motion.div className="contact__grid" variants={fadeUp} custom={1}>
            <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="contact__card">
              <Phone size={20} />
              <div>
                <span className="contact__card-label mono">Phone</span>
                <span className="contact__card-value">{personal.phone}</span>
              </div>
            </a>
            <div className="contact__card">
              <MapPin size={20} />
              <div>
                <span className="contact__card-label mono">Location</span>
                <span className="contact__card-value">{personal.location}</span>
              </div>
            </div>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact__card">
              <GithubIcon size={20} />
              <div>
                <span className="contact__card-label mono">GitHub</span>
                <span className="contact__card-value">github.com/miteshanshu</span>
              </div>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact__card">
              <LinkedinIcon size={20} />
              <div>
                <span className="contact__card-label mono">LinkedIn</span>
                <span className="contact__card-value">linkedin.com/in/miteshanshu</span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
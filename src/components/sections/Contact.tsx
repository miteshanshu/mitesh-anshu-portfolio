import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { fadeUp } from '../../lib/animations';
import { SectionHeading } from '../ui/SectionHeading';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionHeading
          num="05"
          label="Contact"
          title="Let's build something remarkable"
          subtitle="Open to frontend, full-stack, and product engineering roles."
        />

        <motion.div
          className="contact__panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact__main" variants={fadeUp}>
            <h3 className="contact__headline display">
              Have a project or role in mind?
              <span className="gradient-text"> Let&apos;s talk.</span>
            </h3>

            <MagneticButton href={`mailto:${personal.email}`}>
              <Mail size={18} />
              {personal.email}
              <ArrowUpRight size={18} />
            </MagneticButton>
          </motion.div>

          <motion.div className="contact__details" variants={fadeUp} custom={1}>
            <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="contact__detail">
              <Phone size={18} />
              <div>
                <span className="mono">Phone</span>
                <span>{personal.phone}</span>
              </div>
            </a>
            <div className="contact__detail">
              <MapPin size={18} />
              <div>
                <span className="mono">Location</span>
                <span>{personal.location}</span>
              </div>
            </div>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact__detail">
              <GithubIcon size={18} />
              <div>
                <span className="mono">GitHub</span>
                <span>github.com/miteshanshu</span>
              </div>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact__detail">
              <LinkedinIcon size={18} />
              <div>
                <span className="mono">LinkedIn</span>
                <span>linkedin.com/in/miteshanshu</span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
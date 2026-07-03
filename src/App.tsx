import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/effects/Preloader';
import { ScrollProgress } from './components/effects/ScrollProgress';
import { GrainOverlay } from './components/effects/GrainOverlay';
import { AmbientOrbs } from './components/effects/AmbientOrbs';
import { CursorGlow } from './components/effects/CursorGlow';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Work } from './components/sections/Work';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <AmbientOrbs />
      <GrainOverlay />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
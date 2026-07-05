import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { GridBackground } from './components/effects/GridBackground';
import { ScrollProgress } from './components/effects/ScrollProgress';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Work } from './components/sections/Work';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <>
      <GridBackground />
      <ScrollProgress />
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
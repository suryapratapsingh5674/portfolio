import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Home() {
  return (
    <>
      {/* Global background visual system */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow-1" aria-hidden="true" />
      <div className="bg-glow-2" aria-hidden="true" />

      {/* Interaction overlays */}
      <CustomCursor />
      <ScrollProgress />
      <RevealOnScroll />

      {/* Navigation */}
      <Nav />

      {/* Main content */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

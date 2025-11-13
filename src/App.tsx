import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout onNavigate={handleNavigate}>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;

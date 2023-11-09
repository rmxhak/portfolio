import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useEffect, useRef, useState } from 'react';

const sections = ['home', 'about', 'skills', 'projects'];

function App() {
  const sectionRef = useRef([]);
  const [currentList, setCurrentList] = useState('home');

  useEffect(() => {
    const options = {
      rootMargin: '-20% 0px 0px 0px',
      threshold: [0, 0.98],
    };

    const visibleSections = sections.map(() => false);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = sectionRef.current?.indexOf(entry.target);
        visibleSections[index] = entry.isIntersecting;
      });

      const navIndex = visibleSections.indexOf(true);
      changeCurrentList(sections[navIndex]);
    }, options);

    sectionRef.current.forEach((box) => observer.observe(box));

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const changeCurrentList = (target) => {
    setCurrentList(target);
  };

  return (
    <>
      <Header currentList={currentList} nav={sections} sectionRef={sectionRef} />
      <main className='w-screen'>
        <section className='home' ref={(el) => (sectionRef.current[0] = el)}>
          <Home />
        </section>
        <section className='about' ref={(el) => (sectionRef.current[1] = el)}>
          <About />
        </section>
        <section className='skills' ref={(el) => (sectionRef.current[2] = el)}>
          <Skills />
        </section>
        <section className='projects' ref={(el) => (sectionRef.current[3] = el)}>
          <Projects />
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

import { RxDoubleArrowUp } from 'react-icons/rx';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';

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
      let selectLastOne;
      entries.forEach((entry) => {
        const index = sectionRef.current?.indexOf(entry.target);
        visibleSections[index] = entry.isIntersecting;

        selectLastOne =
          index === sections.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.98;
      });

      const navIndex = selectLastOne ? sections.length - 1 : visibleSections.indexOf(true);
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
      <main className='relative'>
        <section ref={(el) => (sectionRef.current[0] = el)} className='home pb-1'>
          <Home sectionRef={sectionRef} />
        </section>
        <section ref={(el) => (sectionRef.current[1] = el)}>
          <About />
        </section>
        <section ref={(el) => (sectionRef.current[2] = el)}>
          <Skills />
        </section>
        <section ref={(el) => (sectionRef.current[3] = el)}>
          <Projects />
        </section>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='group absolute translate-y-[50%] left-[calc(50%-1.5rem)] cursor-pointer bottom-2 w-12 h-14 bg-amber-500 center hover:bg-amber-700 text-white transition-all'
        >
          <RxDoubleArrowUp className='text-4xl font-bold group-hover:-translate-y-1 transition-all' />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

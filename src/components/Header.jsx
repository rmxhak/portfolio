import { useEffect, useState } from 'react';
import { BsList } from 'react-icons/bs';

const Header = ({ currentList, nav, sectionRef }) => {
  const [isScrolled, setIsScrolled] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isListed, setIsListed] = useState(false);

  const scrollToMove = (index) => {
    sectionRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScroll = () => setIsScrolled(window.scrollY);

  const handleScreen = () => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
      setIsListed(false);
    } else setIsDesktop(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScreen);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScreen);
    };
  }, []);

  return (
    <header
      className={
        isScrolled > 100 || !isDesktop
          ? 'bg-slate-800 text-white transition-colors border-b-4 border-b-lime-800'
          : ''
      }
    >
      <h1 className='nav'>JHW's Portfoilo</h1>
      {isDesktop ? (
        <ul className='flex gap-6 mb-2 justify-end items-center text-xl transition-all '>
          {nav.map((tab, i) => (
            <li
              key={i}
              onClick={() => scrollToMove(i)}
              className={`nav-list ${tab === currentList ? 'text-red-700 border-b-2' : ''}
            `}
            >
              {tab.toUpperCase()}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <div className='inline-flex justify-end w-4/6'>
            <BsList className='cursor-pointer text-5xl' onClick={() => setIsListed(!isListed)} />
          </div>
          <ul className='flex flex-col text-xl'>
            {isListed &&
              nav.map((tab, i) => (
                <li
                  key={i}
                  className={`${tab === currentList ? 'text-red-700' : ''}
            `}
                >
                  <span
                    className='cursor-pointer hover:text-red-600'
                    onClick={() => {
                      scrollToMove(i);
                      setIsListed(!isListed);
                    }}
                  >
                    {tab.toUpperCase()}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

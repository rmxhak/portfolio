import UsePieceObserver from '../hook/usePieceObserver';
import SectionTitle from './ui/SectionTitle';

const SKILLS = {
  html: '90%',
  css: '90%',
  javascript: '80%',
  react: '70%',
  typescript: '50%',
  nodeJs: '60%',
  mysql: '50%',
  git: '70%',
};

const Skills = () => {
  const targetRef = UsePieceObserver();

  return (
    <section ref={targetRef} className='bg-[#F9C51E] p-12 h-full w-full'>
      <SectionTitle title='SKILLS' direction='right' />
      <div className='mt-20 flex flex-col gap-8 lg:flex-row lg:justify-center lg:max-w-[1400px] lg:m-auto'>
        <article className='w-[90%] lg:w-[50%] flex justify-around m-auto slide-left'>
          <div className='skill-wrap'>
            <h2 className='skill-title'>Forntend</h2>
            <img src='./images/frontend.png' alt='frontend' />
          </div>
          <div>
            <div className='skill-wrap mb-16 m-auto'>
              <h2 className='skill-title'>Backend</h2>
              <img src='./images/backend.png' alt='backend' />
            </div>
            <div className='skill-wrap m-auto'>
              <h2 className='skill-title'>Version Control</h2>
              <img src='./images/version.png' alt='versionControl' />
            </div>
          </div>
        </article>
        <article className='w-[90%] lg:w-[50%] pt-8 m-auto flex flex-col items-center slide-right lg:m-0'>
          {Object.keys(SKILLS).map((key, i) => (
            <div key={i} className='flex skills w-full bg-slate-200 relative rounded-sm mb-4'>
              <p className='w-28 text-white text-xl h-full  bg-[#94BC3B] center '>
                {key.toUpperCase()}
              </p>
              <div className={`bg-green-700 fill`}></div>
              <span className='center w-[10%] absolute right-0 font-serif text-sm opacity-60 hidden text-center lg:inline-block'>
                {SKILLS[key]}
              </span>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Skills;

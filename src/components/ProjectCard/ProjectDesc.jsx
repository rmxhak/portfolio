import DuiDom from '../../dom/DuiDom';
import Portfolio from '../../dom/Portfolio';
import TrelloDom from '../../dom/TrelloDom';
import YoutubeDom from '../../dom/YoutubeDom';

const REPOSITORY = {
  trello: <TrelloDom />,
  dui: <DuiDom />,
  youtube: <YoutubeDom />,
  portfolio: <Portfolio />,
};

const ProjectDesc = ({ title, addition }) => {
  return (
    <div className='w-full text-md desc flex gap-8 flex-col lg:text-lg lg:flex-row '>
      <div className='lg:w-1/2 min-w-[450px]'>{REPOSITORY[title.toLowerCase()]}</div>
      <ul className='flex flex-col gap-4'>
        <li>
          <h3 className='font-bold text-lg mr-8 min-w-[100px]'>✔️ 주요기능</h3>
          <p className='text-md text-slate-700 pl-8'>{addition.main}</p>
        </li>
        <li>
          <h3 className='font-bold text-lg mr-8 min-w-[100px]'>✔️ Frontend</h3>
          <p className='text-md text-slate-700 pl-8'>{addition.frontend}</p>
        </li>
        {addition.backend && (
          <li>
            <h3 className='font-bold text-lg mr-8 min-w-[100px]'>✔️ Backend</h3>
            <p className='text-md text-slate-700 pl-8'>{addition.backend}</p>
          </li>
        )}
        <li>
          <h3 className='font-bold text-lg mr-8 min-w-[100px]'>✔️ Github</h3>
          <a
            href={addition.github}
            target='_blank'
            rel='noreferrer'
            className='text-md text-blue-400 pl-8 hover:underline'
          >
            {addition.github}
          </a>
        </li>
        {addition.url && (
          <li>
            <h3 className='font-bold text-lg mr-8 min-w-[100px]'>✔️ URL</h3>
            <a
              href={addition.url}
              target='_blank'
              rel='noreferrer'
              className='text-md text-blue-400 pl-8 hover:underline'
            >
              {addition.url}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProjectDesc;

import UsePieceObserver from '../hook/usePieceObserver';
import ProjectCard from './ProjectCard/ProjectCard';
import SectionTitle from './ui/SectionTitle';

const Projects = () => {
  const targetRef = UsePieceObserver();

  return (
    <div ref={targetRef} className='p-12 h-full w-full bg-[#222222]'>
      <SectionTitle title='PROJECTS' direction='left' color='white' />
      <div className='mt-8 max-w-[1100px] lg:m-auto'>
        <ProjectCard
          title='Trello'
          addition={{
            main: '다른 사람과 혐업을 위해 도움을 주는 툴입니다.',
            frontend: 'Html, Css, JavaScript',
            github: 'https://github.com/memore2-projects/Trello',
            url: 'https://memore2-projects.github.io/Trello/',
          }}
        />
        <ProjectCard
          title='DUI'
          addition={{
            main: '로그인, 회원가입, 게시글 및 댓글 CRUD',
            frontend: 'Html, Css, JavaScript',
            backend: 'Node.Js, Express',
            github: 'https://github.com/piso-deepdive-project/DUI/tree/develop',
          }}
        />
        <ProjectCard
          title='YOUTUBE'
          addition={{
            main: '유튜브 API 요청, 리액트 라이브러리 사용',
            frontend: 'Html, Css, JavaScript, React, React-query',
            github: 'https://github.com/practice-react/youtube-review',
            url: 'https://main--jolly-daffodil-e0cd79.netlify.app/',
          }}
        />
      </div>
    </div>
  );
};

export default Projects;

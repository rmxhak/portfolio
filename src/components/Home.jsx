import TypeIt from 'typeit-react';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Home = ({ sectionRef }) => {
  return (
    <section>
      <div className='logo min-w-base min-h-base flex flex-col justify-center items-center text-3xl text-white gap-2'>
        <div className='max-w-[250px] max-h-[250px] border-4 border-amber-300 rounded-full overflow-hidden mb-3'>
          <img src='./images/profile.jpg' alt='프로필 사진' className='-translate-y-3 scale-105' />
        </div>
        <p className='block'>안녕하세요,</p>
        <TypeIt
          className='text-orange-400 typeit font-serif'
          options={{ speed: 100, loop: true }}
          getBeforeInit={(instance) => {
            instance
              .type('프론트엔드 개발자')
              .pause(750)
              .move(-4, { delay: 100 })
              .delete()
              .type('풀스택을 꿈 꾸는 ')
              .pause(750)
              .delete()
              .type('UX를 중요시하는 ')
              .move(4, { delay: 100 })
              .delete();

            // Remember to return it!
            return instance;
          }}
        />
        장현우입니다.
        <div
          onClick={() => sectionRef.current[1]?.scrollIntoView({ behavior: 'smooth' })}
          className='text-base flex mt-2 items-center bg-amber-600 py-2 px-4 leading-normal rounded-2xl hover:bg-amber-500 transition-colors cursor-pointer'
        >
          더 알아보기 <AiOutlineArrowDown className='text-xl ml-2' />
        </div>
      </div>
    </section>
  );
};
export default Home;

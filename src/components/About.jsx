import UsePieceObserver from '../hook/usePieceObserver';
import { BsFillPersonFill } from 'react-icons/bs';
import { SlCalender, SlLocationPin } from 'react-icons/sl';
import { BiSolidContact } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { LiaPenSolid } from 'react-icons/lia';

import AboutCard from './ui/AboutCard';
import SectionTitle from './ui/SectionTitle';

const About = () => {
  const targetRef = UsePieceObserver();

  return (
    <section className='about py-12 flex flex-col justify-center items-center' ref={targetRef}>
      <SectionTitle title='ABOUT ME' direction='left' />
      <div className='piece-hidden flex gap-8 justify-center flex-wrap'>
        <AboutCard Icon={BsFillPersonFill} contents={{ title: '이름', detail: '장현우' }} />
        <AboutCard Icon={SlCalender} contents={{ title: '생년월일', detail: '1993.12.09' }} />
        <AboutCard Icon={SlLocationPin} contents={{ title: '주소', detail: '인천광역시 계양구' }} />
        <AboutCard Icon={BiSolidContact} contents={{ title: '연락처', detail: '010-9456-4029' }} />
        <AboutCard
          Icon={AiOutlineMail}
          contents={{ title: '이메일', detail: 'rmakxh@naver.com' }}
        />
        <AboutCard
          Icon={LiaPenSolid}
          contents={{ title: '학력', detail: '대전과학기술대학교(군사과)' }}
        />
      </div>
    </section>
  );
};

export default About;

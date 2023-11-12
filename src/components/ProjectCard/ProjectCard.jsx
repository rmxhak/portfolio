import Carousel from '../Carousel';
import * as images from '../../assets/findImages';
import ProjectDesc from './ProjectDesc';

const ProjectCard = ({ title, addition }) => {
  return (
    <div className='w-[80%] mt-8 p-12 m-auto bg-white rounded-2xl lg:w-[90%]'>
      <h2 className='mb-8 text-orange-500 text-4xl font-bold block text-center font-mono'>
        - {title} -
      </h2>
      <div className='flex flex-col'>
        <div className='m-auto rounded-md max-w-[800px]'>
          <Carousel images={images.createCarouselImages(images.collection[title.toLowerCase()])} />
        </div>
        <div className='mt-8 m-auto lg:w-full'>
          <ProjectDesc title={title.toLowerCase()} addition={addition} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

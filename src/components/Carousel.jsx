import { useEffect, useRef, useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const Carousel = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(1);
  const carouselRef = useRef(null);
  const timeId = useRef(null);

  useEffect(() => {
    carouselRef.current.style.transform = `translateX(-${imgIndex}00%)`;
  }, [imgIndex]);

  const moveToNthSlide = (index) => {
    setTimeout(() => {
      setImgIndex(index);
      carouselRef.current.style.transition = '';
    }, 400);
  };

  const handleMoveToSlide = (direction) => {
    if (timeId.current) return;

    const newIndex = imgIndex + direction;
    if (newIndex === 0) {
      moveToNthSlide(images.length - 2);
    }
    if (newIndex === images.length - 1) {
      moveToNthSlide(1);
    }

    setImgIndex((pre) => pre + direction);
    carouselRef.current.style.transition = 'all 0.4s';

    timeId.current = setTimeout(() => {
      timeId.current = null;
    }, 300);
  };

  const handleMoveToSelect = (index) => {
    if (index === imgIndex) return;
    setImgIndex(index + 1);
    carouselRef.current.style.transition = 'all 0.4s';
  };

  return (
    <div className='overflow-hidden '>
      <ul ref={carouselRef} className={`w-full h-full flex translate-x-[100%]`}>
        {images.map((address, i) => (
          <li key={i} className={`min-w-full min-h-full`}>
            <img src={address} alt='project' className='min-h-full' />
          </li>
        ))}
      </ul>
      <div className='flex gap-2 justify-center my-3'>
        {new Array(images.length - 2).fill('').map((_, i) => (
          <div
            key={i}
            onClick={() => handleMoveToSelect(i)}
            className={`w-[40px] h-[12px] rounded-lg hover:cursor-pointer ${
              imgIndex - 1 === i ? 'bg-black' : 'bg-black/30'
            }`}
          ></div>
        ))}
      </div>
      <div className='flex gap-4 justify-center my-3 h-8'>
        <button
          onClick={() => handleMoveToSlide(-1)}
          className='rounded-full pr-[4px] text-white bg-black/30 hover:bg-black/50 hover:scale-110'
        >
          <AiFillCaretLeft className='text-3xl' />
        </button>
        <button
          onClick={() => handleMoveToSlide(1)}
          className='rounded-full pl-[4px] text-white bg-black/30 hover:bg-black/50 hover:scale-110'
        >
          <AiFillCaretRight className='text-3xl' />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

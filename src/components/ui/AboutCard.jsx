const AboutCard = ({ Icon, contents }) => {
  return (
    <div className='about-card flex flex-col gap-4 items-center justify-center shadow-sm w-1/3 md:w-3/12'>
      <div className='octagon-wrap center flip unanimate'>
        <Icon className='text-5xl text-white' />
      </div>
      <div className=' text-center fadein unanimate'>
        <div className='font-bold mb-2 text-xl opacity-80'>{contents.title}</div>
        <span className='opacity-50 text-base'>{contents.detail}</span>
      </div>
    </div>
  );
};

export default AboutCard;

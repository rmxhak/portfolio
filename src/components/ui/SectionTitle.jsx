const SectionTitle = ({ title, direction, color = 'black' }) => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h2
        className={`font-bold title text-5xl ${
          direction === 'left' ? 'slide-left' : 'slide-right'
        } ${color === 'white' ? 'text-white' : 'text-zinc-900'}`}
      >
        {title}
      </h2>
      <div
        className={`w-[80px] h-[4px] slide-left ${
          direction === 'left' ? 'slide-left' : 'slide-right'
        }
        ${color === 'white' ? 'bg-zinc-300' : 'bg-zinc-500'}`}
      ></div>
    </div>
  );
};

export default SectionTitle;

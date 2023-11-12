const Footer = () => {
  return (
    <footer className='w-full h-[140px] pt-8 mb-4 flex flex-col justify-center items-center'>
      <div>
        <a href='https://github.com/JH-Wooo' className='inline-block w-20'>
          <img src='./images/github.png' alt='github' className='object-cover' />
        </a>
      </div>
      <div>&#169;2023. Jang Hyeon Woo</div>
    </footer>
  );
};

export default Footer;

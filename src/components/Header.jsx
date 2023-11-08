const tabs = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS'];

const Header = ({ selectTab, changeTab }) => {
  return (
    <header>
      <h1 className='title'>JHW's Portfoilo</h1>
      <ul className='flex gap-6 justify-center items-center text-xl transition-all'>
        {tabs.map((tab, i) => (
          <li
            key={i}
            onClick={changeTab}
            data-name={tab}
            className={`nav-list ${
              selectTab === tab ? 'text-red-700 border-b-2 border-b-white' : ''
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;

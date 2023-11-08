import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [selectTab, setSelectTab] = useState('HOME');

  const handleChangeTap = (e) => {
    setSelectTab(e.target.dataset.name);
  };

  return (
    <>
      <Header selectTab={selectTab} changeTab={handleChangeTap} />
      <main className='w-screen'>
        <section className='home'>
          <div className='logo min-w-base min-h-base'></div>
        </section>
        <section className='about min-h-base bg-red-300'></section>
        <section className='skills min-h-base bg-blue-300'></section>
        <section className='projects min-h-base bg-yellow-400'></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

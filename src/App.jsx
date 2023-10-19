function App() {
  return (
    <>
      <header>
        <h1 className='title'>JHW's Portfoilo</h1>
        <ul className='flex gap-6 justify-center align-middle text-xl transition-all'>
          <li className='nav-list'>HOME</li>
          <li className='nav-list'>ABOUT</li>
          <li className='nav-list'>SKILLS</li>
          <li className='nav-list'>PROJECTS</li>
        </ul>
      </header>
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

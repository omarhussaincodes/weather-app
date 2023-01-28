import './App.css';
import Navbar from './components/Navbar';
import WeatherApp from './WeatherApp';

function App() {

  return (
    <>
      <header className="sticky top-0 z-50 max-w-full mx-auto xl:items-center">
        <Navbar />
      </header>
      <main>
          <section className='flex flex-col justify-between items-center z-10 scroll-smooth'>
            <WeatherApp />
          </section>
      </main>
    </>

  );
}

export default App;

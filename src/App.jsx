import './App.css'
import Hero from './components/Hero/hero'
import Navbar from './components/Navbar/navbar'
import About from './components/About/about'
function App() {
  

  return (
    <>
    <div className='app-container'>
      <Navbar />
      <Hero />
    </div>
    <About/>
    </>
  );
}

export default App

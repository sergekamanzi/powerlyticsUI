import './App.css'
import Hero from './components/Hero/hero'
import Navbar from './components/Navbar/navbar'
import About from './components/About/about'
import World from "./components/World/world";
import Service from "./components/Service/service";
function App() {
  

  return (
    <>
    <div className='app-container'>
      <Navbar />
      <Hero />
    </div>
    <About/>
    <World />
    <Service/>
    </>
  );
}

export default App

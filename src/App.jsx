import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/hero'
import Navbar from './components/Navbar/navbar'
import About from './components/About/about'
import World from "./components/World/world";
import Service from "./components/Service/service";
import Video from "./components/Video/video";
import Blog from "./components/Blog/blog";
import Contact from "./components/Contact/contact";
import Auth from "./components/Authentication/auth";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website Route */}
        <Route path="/" element={
          <>
            <div className='app-container'>
              <Navbar />
              <Hero />
            </div>
            <About/>
            <World />
            <Service/>
            <Video/>
            <Blog/>
            <Contact/>
          </>
        } />
        
        {/* Authentication Page Route */}
        <Route path="/auth" element={
          <>
            <Auth />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App
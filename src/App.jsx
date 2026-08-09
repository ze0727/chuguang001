import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import VideoShowcase from './components/VideoShowcase';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <VideoShowcase />
        <Advantages />
        <Contact />
      </main>
    </div>
  );
}

export default App;

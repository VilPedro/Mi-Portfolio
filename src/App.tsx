import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project';
import Skills  from './components/Skills';
import About from './components/About';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="absolute top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

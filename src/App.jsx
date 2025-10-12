import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div id="home" className="bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;

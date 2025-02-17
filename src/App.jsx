import "./App.css";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

function App() {
  return (
    <div id="home">
      <Navbar />
      <HeroSection />
      <Projects />
    </div>
  );
}

export default App;

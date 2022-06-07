import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import My_services from "./components/My_services";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <My_services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

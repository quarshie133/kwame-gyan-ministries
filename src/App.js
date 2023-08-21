import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav/Nav";
import Mandate from "./components/mandate/Mandate";
import Music from "./components/music/Music";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div>
      <Nav />
      <Mandate />
      <Music />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

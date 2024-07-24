import Certificates from "./Components/Certificates/Certificates";
import Introduction from "./Components/Introduction/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Contact from "./Contact/Contact";


function App() {
  return (
    <div className="App">
    <Navbar />
      <section id="introduction">
        <Introduction />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

import Home from "../Components/Home";
import Navigation from "../Components/Navigation";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function App() {
  return (
    <>
      <div>
        <nav>
          <Navigation></Navigation>
        </nav>
        <section id="Home">
          <Home></Home>
        </section>
        <section id="About">
          <About></About>
        </section>
        <section id="Skills">
          <Skills></Skills>
        </section>
        <section id="Projects">
          <Projects></Projects>
        </section>
        <section id="Contact">
          <Contact></Contact>
          <Footer></Footer>
        </section>
      </div>
    </>
  );
}

export default App;

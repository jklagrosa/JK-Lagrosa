import Navigation from "../components/Nav";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Home() {
  return (
    <>
      <Navigation />
      <Introduction />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
}

import Navigation from "../components/Nav";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <Introduction />
      <Projects />
      <About />
      <Skills />
    </>
  );
}

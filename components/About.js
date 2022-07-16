import styles from "../styles/COMPONENT.module.scss";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className={styles._about_component_wrapper}>
        <Container fluid="lg" className="p-0">
          <h3 className={styles._h3_title}>About</h3>

          <p className={styles._about_paragraph_}>
            Hi, my name is JK Lagrosa, and I'm a Front-end web developer. I
            designed and developed websites and web applications with a focus on
            usability, accessibility, and performance. Using technologies such
            as HTML/CSS, JavaScript, React, Next.js, MongoDB, Bootstrap, and
            Sass. I'm passionate about building responsive, dynamic,
            SEO-friendly websites and web apps.
          </p>
        </Container>
      </div>
    </>
  );
};

export default About;

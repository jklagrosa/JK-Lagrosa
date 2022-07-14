import styles from "../styles/COMPONENT.module.scss";
import { Container } from "react-bootstrap";

const Introduction = () => {
  return (
    <>
      <div className={styles._component_wrapper_}>
        <Container fluid="lg" className="p-0">
          <div className={styles._introduction_box}>
            <h2>JK LAGROSA</h2>
            <h1>FRONT-END DEVELOPER</h1>
            <p>
              I designed and developed websites and web applications with a
              focus on usability, accessibility, and performance.
            </p>

            <div className={styles._introduction_box_btn_wrapper}>
              <button>View Projects</button>
              <button>Contact Me</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Introduction;

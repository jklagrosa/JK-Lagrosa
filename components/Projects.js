import styles from "../styles/COMPONENT.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {
  return (
    <>
      <div className={styles._main_component_wrapper}>
        <Container fluid="lg" className="p-0">
          <h3 className={styles._h3_title}>Projects</h3>
          <Row className="gx-3 gy-4">
            <Col xs={12} md={6} id={styles._projects_details_}>
              <h4 className={styles._projects_title}>
                LutongBahay | Web Application
              </h4>

              <p className={styles._projects_paragraph_}>
                Retelz is a resort hotel web application I built as part of my
                portfolio. If you want to try this web application, you can
                login as a demo user. To be redirected to the login page, click
                the login button, and then click the{" "}
                <code>
                  <q>Login as demo user</q>
                </code>{" "}
                button. In this web application, you can reserve a room, check
                all reserved rooms by date, and book events.
              </p>

              <div className={styles._projects_tags_wrapper_}>
                <span>JavaScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>MongoDB</span>
              </div>

              {/* ACTION BUTTONS */}

              <div className={styles._projects_action_buttons_}>
                <a>Live Demo</a>
                <a>Source Code</a>
              </div>
            </Col>

            {/* #################### */}

            <Col xs={12} md={6} id={styles._projects_details_}>
              {/* <div className={styles._projects_img_}></div> */}
              <a
                style={{ all: "unset" }}
                href="https://resort-hotel-web-application.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/projects/1/1.png"
                  className={styles._projects_img_}
                />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;

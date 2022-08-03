import styles from "../styles/COMPONENT.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {
  return (
    <>
      <div className={styles._main_component_wrapper} id="projects">
        <Container fluid="lg" className="p-0">
          <h3 className={styles._h3_title}>Projects</h3>

          <Row className="gx-3 gy-0 mx-auto" id={styles._projects_row_wrapper_}>
            <Col
              xs={12}
              lg={6}
              id={styles._projects_details_}
              className="order-2 order-lg-1"
            >
              <h4 className={styles._projects_title}>
                LutongBahay • Web Application
              </h4>

              <p className={styles._projects_paragraph_}>
                LutongBahay is a food delivery web application I built as part
                of my portfolio. If you want to try this web application, you
                can login as a demo user. To be redirected to the login page,
                click the login button, and then click the{" "}
                <code>
                  <q>Login as demo user</q>
                </code>{" "}
                button.
              </p>

              <div className={styles._projects_tags_wrapper_}>
                <span>JavaScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>MongoDB</span>
              </div>

              {/* ACTION BUTTONS */}

              <div className={styles._projects_action_buttons_}>
                <a
                  href="https://food-delivery-web-application.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/jklagrosa/Food-Delivery-Web-Application"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </Col>

            {/* #################### */}

            <Col
              xs={12}
              lg={6}
              id={styles._projects_details_}
              className="order-1 order-lg-2"
            >
              {/* <div className={styles._projects_img_}></div> */}
              <a
                style={{ all: "unset" }}
                href="https://food-delivery-web-application.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/projects/1/2_updated.png"
                  className={styles._projects_img_}
                />
              </a>
            </Col>
          </Row>
          {/* ######################################################################################### */}

          <Row className="gx-3 gy-0 mx-auto" id={styles._projects_row_wrapper_}>
            <Col
              xs={12}
              lg={6}
              id={styles._projects_details_}
              className="order-2 order-lg-1"
            >
              <h4 className={styles._projects_title}>
                Edukasyon • Web Application
              </h4>

              <p className={styles._projects_paragraph_}>
                Edukasyon is an online learning web application I built as part
                of my portfolio. If you want to try this web application, you
                can login as a demo user. To be redirected to the login page,
                click the login button, and then click the{" "}
                <code>
                  <q>Login as demo user</q>
                </code>{" "}
                button.
              </p>

              <div className={styles._projects_tags_wrapper_}>
                <span>JavaScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>MongoDB</span>
              </div>

              {/* ACTION BUTTONS */}

              <div className={styles._projects_action_buttons_}>
                <a
                  href="https://online-learning-web-application.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/jklagrosa/Online-Learning-Web-Application"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </Col>

            {/* #################### */}

            <Col
              xs={12}
              lg={6}
              id={styles._projects_details_}
              className="order-1 order-lg-2"
            >
              {/* <div className={styles._projects_img_}></div> */}
              <a
                style={{ all: "unset" }}
                href="https://online-learning-web-application.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/projects/1/3_updated.png"
                  className={styles._projects_img_}
                />
              </a>
            </Col>
          </Row>
          {/* ######################################################################################### */}

          {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

          <Row className="gx-3 gy-0 mx-auto" id={styles._projects_row_wrapper_}>
            <Col
              xs={12}
              lg={6}
              id={styles._projects_details_}
              className="order-2 order-lg-1"
            >
              <h4 className={styles._projects_title}>
                Retelz • Web Application
              </h4>

              <p className={styles._projects_paragraph_}>
                Retelz is a resort hotel web application I built as part of my
                portfolio. If you want to try this web application, you can
                login as a demo user. To be redirected to the login page, click
                the login button, and then click the{" "}
                <code>
                  <q>Login as demo user</q>
                </code>{" "}
                button.
              </p>

              <div className={styles._projects_tags_wrapper_}>
                <span>JavaScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>MongoDB</span>
              </div>

              {/* ACTION BUTTONS */}

              <div className={styles._projects_action_buttons_}>
                <a
                  href="https://resort-hotel-web-application.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/jklagrosa/Resort-Hotel-Web-Application"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </Col>

            {/* #################### */}

            <Col
              xs={12}
              lg={6}
              id={styles._projects_details_}
              className="order-1 order-lg-2"
            >
              {/* <div className={styles._projects_img_}></div> */}
              <a
                style={{ all: "unset" }}
                href="https://resort-hotel-web-application.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/projects/1/1_updated.png"
                  className={styles._projects_img_}
                />
              </a>
            </Col>
          </Row>
          {/* ######################################################################################### */}
        </Container>
      </div>
    </>
  );
};

export default Projects;

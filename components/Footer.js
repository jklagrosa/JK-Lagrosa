import styles from "../styles/COMPONENT.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles._footer_component_wrapper}>
        <Container fluid="lg" className="p-0">
          <Row className="gx-3 gy-5 mx-auto" id={styles._footer_row_wrapper_}>
            <Col xs={12} md={6} lg={6} id={styles._footer_cols_wrapper_}>
              <abbr title="JK Lagrosa - Scroll to top" style={{ all: "unset" }}>
                <h1
                  className={styles._footer_logo_icon_}
                  onClick={() => router.push("/")}
                >
                  JKL
                </h1>
              </abbr>
              <p className={styles._footer_desc_}>
                I designed and developed websites and web applications with a
                focus on usability, accessibility, and performance. Using
                technologies such as HTML/CSS, JavaScript, React, Next.js,
                MongoDB, Bootstrap, and Sass.
              </p>
            </Col>
            {/* ### */}
            <Col xs={12} md={6} lg={3} id={styles._footer_cols_wrapper_}>
              <h6 className={styles._footer_h6_header_}>Contact me</h6>
              <div className={styles._footer_links_tag_wrapper_}>
                <a
                  href="https://www.linkedin.com/in/jklagrosa/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href="https://github.com/jklagrosa"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  Github
                </a>
                <br />
                <a
                  href="mailto:jklagrosa.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  Gmail
                </a>
                <br />
              </div>
            </Col>
            {/* ### */}
            <Col xs={12} md={6} lg={3} id={styles._footer_cols_wrapper_}>
              <h6 className={styles._footer_h6_header_}>Tech Used</h6>
              <div className={styles._footer_links_tag_wrapper_}>
                <a
                  href="https://html.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  HTML
                </a>
                <br />
                <a
                  href="https://www.w3.org/Style/CSS/Overview.en.html"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  CSS
                </a>
                <br />
                <a
                  href="https://sass-lang.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  Sass
                </a>
                <br />
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  Bootstrap
                </a>
                <br />
                <a
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  JavaScript
                </a>
                <br />
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  React
                </a>
                <br />
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  Next.js
                </a>
                <br />
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._footer_links_tag_}
                >
                  MongoDB
                </a>
                <br />
              </div>
            </Col>
            {/* ### */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;

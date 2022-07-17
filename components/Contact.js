import styles from "../styles/COMPONENT.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div className={styles._contact_component_wrapper}>
        <Container fluid="lg" className="p-0">
          <h3 className={styles._h3_title}>Contact</h3>

          <Row className="gx-3 gy-4 mx-auto">
            <Col xs={12} lg={8} className="order-2 order-lg-1">
              <h5 className={styles._contact_h5_tag_}>Let&apos;s talk</h5>
              <p className={styles._contact_paragraph_}></p>
            </Col>
            {/* ### */}
            <Col xs={12} lg={4} className="order-1 order-lg-2">
              <form></form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;

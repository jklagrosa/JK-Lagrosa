import styles from "../styles/COMPONENT.module.scss";
import { Container } from "react-bootstrap";

const Copyright = () => {
  return (
    <>
      <div className={styles._copyright_component_wrapper}>
        <Container fluid="lg" className="p-0">
          <p>
            Copyright &copy; {new Date().getFullYear()}, JK Lagrosa. All Rights
            Reserved.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Copyright;

import styles from "../styles/COMPONENT.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";
import { MdOutlineMenu } from "react-icons/md";

const Navigation = () => {
  const router = useRouter();

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={styles._navigation_component_wrapper}
      >
        <Container fluid="lg" className="p-0">
          <Navbar.Brand onClick={() => router.push("/")}>
            <h6>JKL</h6>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <MdOutlineMenu />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id={styles._navigation_component_links_}>
              <Nav.Link onClick={() => router.push("/")}>Home</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

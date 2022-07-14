import { useState } from "react";
import styles from "../styles/COMPONENT.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useRouter } from "next/router";
import { MdOutlineMenu } from "react-icons/md";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ all: "unset" }}
          >
            <MdOutlineMenu
              className={styles._navigation_hamburger_menu_}
              onClick={handleShow}
            />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={styles._navigation_collapse_}
          >
            <Nav className="ms-auto" id={styles._navigation_component_links_}>
              <Nav.Link onClick={() => router.push("/")}>Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* OFFCANVAS FOR LINKS - MEDIUM TO SMALL DEVICES - 991px */}

      <Offcanvas
        show={show}
        onHide={handleClose}
        className={styles._navigation_offcanvas_wrapper}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles._navigation_offcanvas_title}>
            {/* JKL */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles._navigation_offcanvas_body}>
          <a onClick={() => router.push("/")}>Home</a>
          <br />
          <a href="#projects">Projects</a>
          <br />
          <a href="#about">About</a>
          <br />
          <a href="#skills">Skills</a>
          <br />
          <a href="#contact">Contact</a>
          <br />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;

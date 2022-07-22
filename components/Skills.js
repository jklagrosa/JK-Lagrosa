import styles from "../styles/COMPONENT.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <div className={styles._skills_component_wrapper} id="skills">
        <Container fluid="lg" className="p-0">
          <h3 className={styles._h3_title}>Skills</h3>

          <div className={styles._skills_box_}>
            <div className={styles._skills_box_contents_}>
              <abbr title="JavaScript" style={{ all: "unset" }}>
                <img
                  src="/skills/javascript.png"
                  alt="javascript"
                  className={styles._skills_icons_}
                />
              </abbr>
            </div>
            {/* ### */}

            <div className={styles._skills_box_contents_}>
              <abbr title="TypeScript" style={{ all: "unset" }}>
                <img
                  src="/skills/typescript.png"
                  alt="typescript"
                  className={styles._skills_icons_}
                />
              </abbr>
            </div>
            {/* ### */}

            <div className={styles._skills_box_contents_}>
              <abbr title="React" style={{ all: "unset" }}>
                <img
                  src="/skills/react.png"
                  alt="react"
                  className={styles._skills_icons_}
                />
              </abbr>
            </div>
            {/* ### */}
            <div className={styles._skills_box_contents_}>
              <abbr title="Next.js" style={{ all: "unset" }}>
                <img
                  src="/skills/nextjs.png"
                  alt="next.js"
                  className={styles._skills_icons_}
                />
              </abbr>
            </div>
            {/* ### */}

            <div className={styles._skills_box_contents_}>
              <abbr title="GraphQL" style={{ all: "unset" }}>
                <img
                  src="/skills/graphql.png"
                  alt="graphql"
                  className={styles._skills_icons_}
                />
              </abbr>
            </div>
            {/* ### */}

            {/* <div className={styles._skills_box_contents_}>
              <abbr title="MongoDB" style={{ all: "unset" }}>
                <img
                  src="/skills/updated_mongodb.png"
                  alt="mongodb"
                  className={styles._skills_icons_}
                />
              </abbr>
            </div> */}
            {/* ### */}

            <div className={styles._skills_box_contents_}>
              <abbr title="Sass" style={{ all: "unset" }}>
                <img
                  src="/skills/sass.png"
                  alt="sass"
                  className={styles._skills_icons_}
                />
              </abbr>
            </div>
            {/* ### */}

            <div className={styles._skills_box_contents_}>
              <abbr title="Git" style={{ all: "unset" }}>
                <img
                  src="/skills/git.png"
                  alt="git"
                  className={styles._skills_icons_}
                />
              </abbr>
            </div>
            {/* ### */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skills;

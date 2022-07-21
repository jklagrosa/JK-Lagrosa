import { useState } from "react";
import styles from "../styles/COMPONENT.module.scss";
import { Container } from "react-bootstrap";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      <div className={styles._contact_component_wrapper} id="contact">
        <Container fluid="lg" className="p-0">
          <h3 className={styles._h3_title}>Contact</h3>

          <form
            action="https://formsubmit.co/b5df48a9b22a6fe270ef2d0708beb87b"
            method="POST"
            onSubmit={handleOnSubmit}
          >
            <div id={styles._contact_div_inside_form_}>
              <input
                type="hidden"
                name="_subject"
                value="PORTFOLIO - Someone has sent you a message."
              />
              <label>Name</label>
              <input
                type="text"
                required
                minLength={2}
                placeholder="e.g. JK Lagrosa"
                name="name"
              />
              {/* ### */}
              <label>Email</label>
              <input
                type="email"
                required
                minLength={6}
                placeholder="e.g. example@gmail.com"
                name="email"
              />
              {/* ### */}
              <label>Message</label>
              <textarea
                rows="10"
                cols="30"
                required
                minLength={2}
                placeholder="Your message"
                name="message"
              ></textarea>
              {/* ### */}
              {!loading && (
                <>
                  <button type="submit">Send message</button>
                </>
              )}
              {/* ################################################## */}
              {loading && (
                <>
                  <button id={styles._loading_submit_btn_} disabled>
                    Please wait...
                  </button>
                </>
              )}
              {/* <p className={styles._form_message_error_}>
                *All fields required.
              </p> */}

              <p className={styles._contact_other_accounts_p_tag_}>
                Do you have a question or proposal? My linkedin, github, and
                gmail accounts are also accessible.
              </p>

              <div className={styles._contact_anchor_tags_wrapper_}>
                <a
                  href="https://www.linkedin.com/in/jklagrosa/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._contact_anchor_tags_}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/jklagrosa"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._contact_anchor_tags_}
                >
                  Github
                </a>
                <a
                  href="mailto:jklagrosa.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles._contact_anchor_tags_}
                >
                  Gmail
                </a>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Contact;

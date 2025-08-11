export default function Contact() {
  return (
    <>
      <section id="contact">
        <h2 id="contact-h2">Contact Me</h2>
        <div id="contact-container">
          <h4>Let's Work Together</h4>
          <p>
            Send me an email through the link below and I will help you with
            your next project!
          </p>
          <div>
            <a href="mailto: rebecca.mcgirr@icloud.com">
              <button type="button" className="btn text-center">
                <img
                  src="../public/images/email.png"
                  style={{ height: "3rem" }}
                />
              </button>
            </a>
          </div>
          <p className="pt-3">Or reach out through the social media below:</p>
          <div className="d-flex gap-4 justify-content-center">
            <a
              href="https://www.linkedin.com/in/rebecca-mcgirr/"
              target="_blank"
            >
              <img
                src="../public/images/linkedin.png"
                style={{ height: "3rem" }}
              />
            </a>
            <a href="https://github.com/SkyRunnerGirl" target="_blank">
              <img
                src="../public/images/github-logo.png"
                style={{ height: "3rem" }}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

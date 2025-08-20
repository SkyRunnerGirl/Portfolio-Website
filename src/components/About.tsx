export default function About() {
  return (
    <>
      <section
        id="about"
        className="row justify-content-center align-items-center"
      >
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            id="about-image"
            src="/images/subject.png"
            alt="About"
          />
        </div>
        <div className="col-md-6 text-center">
          <div>
            <h2 id="about-h2">About Me</h2>
          </div>
          <p className="about-p">
            As I said, I am a beginning frontend software developer...
          </p>
          <p className="about-p">
            I am a passionate partly self-taught developer. I have completed an
            intense fronted software engineering bootcamp through QuickStart. I
            am also in the process of completing the certified full stack
            developer curriculum through freeCodeCamp.org. I am dedicated to
            writing clean, efficient code and to never stop learning!
          </p>
          <button
            id="resume-btn"
            className="justify-content-center align-items-center"
          >
            <a className="link-opacity-75-hover" href="https://drive.google.com/file/d/1eB2mZVDU8Xnl7Ryg-O58AfRhMiebD3ri/view?usp=sharing" target="_blank">
              Download Resume
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

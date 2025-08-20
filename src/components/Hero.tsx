export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="row justify-content-center align-items-center"
      >
        <div className="col-md-4">
          <div>
            <h4 id="hero-h4" className="text-center">Hi and welcome to</h4>
            <h2 id="hero-h2" className="text-center">
              My Portfolio Website
            </h2>
          </div>
          <p id="hero-p" className="text-center">
            I am a beginning frontend software developer...
          </p>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <img
            id="programmer-gif"
            src="/images/programmer.gif"
            alt="programmer gif"
            className="rounded"
            width="250"
            height="250"
          />
        </div>
      </section>
    </>
  );
}

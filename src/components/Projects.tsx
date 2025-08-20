export default function Projects() {
  return (
    <>
      <section id="projects">
        <h2 id="projects-h2">My Projects</h2>
        <div className="container p-0 d-grid gap-4">
          <div className="row align-items-center p-3 shadow-lg my-custom-hover-effect" style={{background: "#E9C46A"}}>
            <div className="col-4">
                <img
                    src="/images/cosmic-bookshelf.jpg"
                    alt="Cosmic Bookshelf image"
                    className="w-100"
                />
            </div>
            <div className="col-8">
              <h3>
                <a href="https://github.com/SkyRunnerGirl/FinalProject-BooksApp.git" target="_blank">Cosmic Bookshelf</a>
              </h3>
              <p>
                Web app to store your book list. You can line up your future
                adventures, showcase your current reads, and remember your past
                journeys.
              </p>
            </div>
          </div>
          <div className="row align-items-center p-3 shadow-lg my-custom-hover-effect" style={{background: "#E9C46A"}}>
            <div className="col-4">
                <img
                    src="/images/weather-app.png"
                    alt="Cosmic Bookshelf image"
                    className="w-100"
                />
            </div>
            <div className="col-8">
              <h3>
                <a href="https://github.com/SkyRunnerGirl/Project12.git" target="_blank">Weather App</a>
              </h3>
              <p>
                Get important weather data about any city around the globe.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

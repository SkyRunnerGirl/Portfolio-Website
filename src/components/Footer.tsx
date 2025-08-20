export default function Footer() {
  return (
    <>
      <section id="footer" className="pb-4">
        <div className="d-flex align-items-center justify-content-end pe-5">
          <a href="#navbar" className="">
            <img id="up-arrow" src="/images/up-arrow.png" />
          </a>
        </div>
        <div className="row">
          <div className="col-5 ps-5">
            Last Updated: Aug 2025
          </div>
          <div className="col-6">
              Logos provided by:{" "}
              <a href="https://www.flaticon.com/free-icons/">Flaticon</a>
          </div>
        </div>
      </section>
    </>
  );
}

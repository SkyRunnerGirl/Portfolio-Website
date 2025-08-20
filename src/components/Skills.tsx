export default function Skills() {
  return (
    <>
      <section id="skills">
        <h2 id="skills-h2">My Skills</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 align-items-center" style={{background: 'none', border: 'none'}}>
              <img src="/images/html-5.png" className="card-img-top" alt="HTML-5 Logo" />
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 align-items-center" style={{background: 'none', border: 'none'}}>
              <img src="/images/css-3.png" className="card-img-top" alt="CSS Logo" />
              <div className="card-body">
                <h5 className="card-title">CSS</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 align-items-center" style={{background: 'none', border: 'none'}}>
              <img src="../public/images/js.png" className="card-img-top" alt="JavaScript Logo" />
              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 align-items-center" style={{background: 'none', border: 'none'}}>
              <img src="../public/images/typescript.png" className="card-img-top" alt="TypeScript Logo" />
              <div className="card-body">
                <h5 className="card-title">TypeScript</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 align-items-center" style={{background: 'none', border: 'none'}}>
              <img src="../public/images/react.png" className="card-img-top" alt="React Logo" />
              <div className="card-body">
                <h5 className="card-title">React</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 align-items-center" style={{background: 'none', border: 'none'}}>
              <img src="../public/images/bootstrap.png" className="card-img-top" alt="Bootstrap Logo" />
              <div className="card-body">
                <h5 className="card-title">Bootstrap</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

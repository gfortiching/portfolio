import "../CSS/Footer.css";

function Footer() {
  function End() {
    return (
      <>
        <section className="link-animation">
          <h1>You've reached the end!</h1>
          <h1>You've reached the end!</h1>
          <h1>You've reached the end!</h1>
          <h1>You've reached the end!</h1>
          <h1>You've reached the end!</h1>
          <h1>Thank You! &#128157;</h1>
        </section>
      </>
    );
  }

  return (
    <>
      <footer className="footer">
        <div className="footer-text secondary text-center">
          <div className="d-flex flex-column flex-sm-row">
            <div class="duda-university-badge mx-3" data-aos="fade-up">
              <a
                href="https://verify.skilljar.com/c/5uezcbuvbkmo"
                target="blank"
              >
                <img
                  src="https://irp-cdn.multiscreensite.com/8a237818/dms3rep/multi/Artboard+4.svg"
                  alt="Duda Certified in Web Design Badge"
                  width="200px"
                />
              </a>
            </div>

            <div class="duda-university-badge mx-3" data-aos="fade-up">
              <a
                href="http://verify.skilljar.com/c/75vcvsytdqr2"
                target="blank"
              >
                <img
                  src="https://irp-cdn.multiscreensite.com/8a237818/dms3rep/multi/Artboard+2.svg"
                  alt="Duda Platform Specialist Badge"
                  width="200px"
                />
              </a>
            </div>
          </div>

          <div className="socials-container primary">
            <a
              className="socials"
              data-aos="fade-up"
              href="https://www.linkedin.com/in/jgff/"
              target="blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670129.png"
                alt="LinkedIn"
              />
            </a>
            <a
              className="socials"
              data-aos="fade-up"
              href="https://github.com/gfortiching"
              target="blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1051/1051275.png"
                alt="Github"
              />
            </a>
            <a
              className="socials"
              data-aos="fade-up"
              href="https://www.freecodecamp.org/gfortiching"
              target="blank"
            >
              <img
                src="https://img.stackshare.io/stack/12741/bcc87e47eb053f5947fa6dbe45beba33a3d1dc56.png"
                alt="FreeCodeCamp"
              />
            </a>
          </div>
          <h4 data-aos="fade-up">Jose Gabriel Fortich Fabileña </h4>
          <h5 data-aos="fade-up">Homemade with &#128157; in 2022</h5>
        </div>
      </footer>
      <div className="infinite-animation">
        <End />
      </div>
    </>
  );
}

export default Footer;

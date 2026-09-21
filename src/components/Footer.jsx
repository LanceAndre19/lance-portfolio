function Footer() {
  return (
    <footer className="blueprint-footer">

      <div className="footer-system-card">

        <div className="footer-system-left">

          <div className="footer-system-code">
            <span className="status-pulse"></span>
            PORTFOLIO SYSTEM / ONLINE
          </div>

          <h3>
            Lance Andre Leominares
          </h3>

          <p>
            GoHighLevel Specialist & Web Developer
          </p>

        </div>


        <div className="footer-system-links">

          <a
            href="mailto:leominares19@gmail.com"
            className="footer-system-link"
          >
            <span className="footer-link-icon">
              @
            </span>

            <div>
              <small>EMAIL</small>
              <strong>Contact</strong>
            </div>
          </a>


          <a
            href="https://github.com/LanceAndre19"
            target="_blank"
            rel="noreferrer"
            className="footer-system-link"
          >
            <span className="footer-link-icon">
              GH
            </span>

            <div>
              <small>GITHUB</small>
              <strong>Projects</strong>
            </div>
          </a>


          <a
            href="https://www.linkedin.com/in/lance-andre-leominares-612461439/"
            target="_blank"
            rel="noreferrer"
            className="footer-system-link"
          >
            <span className="footer-link-icon">
              in
            </span>

            <div>
              <small>LINKEDIN</small>
              <strong>Connect</strong>
            </div>
          </a>

        </div>

      </div>


      <div className="footer-system-bottom">

        <span>
          © 2026 Lance Andre Leominares
        </span>

        <span>
          PORTFOLIO / VERSION 1.0
        </span>

      </div>

    </footer>
  );
}

export default Footer;
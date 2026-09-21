function Contact() {
  return (
    <main className="blueprint-contact">
      <section className="contact-system-header">
        <div className="contact-system-code">
          <span className="status-pulse"></span>
          05 / COMMUNICATION TERMINAL
        </div>

        <h1>
          Let&apos;s
          <span> Connect.</span>
        </h1>

        <p>
          Have a project, collaboration, opportunity, or idea?
          You can reach me through email, GitHub, or LinkedIn.
        </p>
      </section>


      <section className="contact-terminal-grid">

        {/* EMAIL */}
        <article className="contact-terminal-card">

          <div className="contact-terminal-top">
            <span>CHANNEL / 01</span>

            <div className="contact-online-status">
              <span></span>
              AVAILABLE
            </div>
          </div>

          <div className="contact-terminal-icon">
            @
          </div>

          <p className="contact-terminal-label">
            EMAIL
          </p>

          <h2>
            leominares19@gmail.com
          </h2>

          <p className="contact-terminal-description">
            Send me an email for project inquiries,
            collaboration opportunities, or professional communication.
          </p>

          <a
            href="mailto:leominares19@gmail.com"
            className="contact-terminal-button"
          >
            Send Email
            <span>↗</span>
          </a>

        </article>


        {/* GITHUB */}
        <article className="contact-terminal-card">

          <div className="contact-terminal-top">
            <span>CHANNEL / 02</span>

            <div className="contact-online-status">
              <span></span>
              ONLINE
            </div>
          </div>

          <div className="contact-terminal-icon">
            GH
          </div>

          <p className="contact-terminal-label">
            GITHUB
          </p>

          <h2>
            LanceAndre19
          </h2>

          <p className="contact-terminal-description">
            View my repositories, programming projects,
            development work, and source code.
          </p>

          <a
            href="https://github.com/LanceAndre19"
            target="_blank"
            rel="noreferrer"
            className="contact-terminal-button"
          >
            View GitHub
            <span>↗</span>
          </a>

        </article>


        {/* LINKEDIN */}
        <article className="contact-terminal-card">

          <div className="contact-terminal-top">
            <span>CHANNEL / 03</span>

            <div className="contact-online-status">
              <span></span>
              CONNECT
            </div>
          </div>

          <div className="contact-terminal-icon">
            in
          </div>

          <p className="contact-terminal-label">
            LINKEDIN
          </p>

          <h2>
            Lance Andre Leominares
          </h2>

          <p className="contact-terminal-description">
            Connect with me professionally and view my
            profile, skills, projects, and career updates.
          </p>

          <a
            href="https://www.linkedin.com/in/lance-andre-leominares-612461439/"
            target="_blank"
            rel="noreferrer"
            className="contact-terminal-button"
          >
            View LinkedIn
            <span>↗</span>
          </a>

        </article>

      </section>


      <section className="contact-system-footer">

        <div className="contact-system-message">

          <div>
            <span className="contact-message-code">
              SYSTEM MESSAGE
            </span>

            <h2>
              Open to collaboration and new opportunities.
            </h2>

            <p>
              I&apos;m continuously developing my skills in
              GoHighLevel, web development, automation,
              programming, and modern digital technologies.
            </p>
          </div>


          <div className="contact-system-indicator">

            <div className="contact-indicator-circle">
              <span>LA</span>
            </div>

            <small>
              COMMUNICATION
              <br />
              SYSTEM ONLINE
            </small>

          </div>

        </div>

      </section>
    </main>
  );
}

export default Contact;
import profilePhoto from "../assets/profile/Me.png";

function About() {
  return (
    <main className="blueprint-about">

      {/* TOP SECTION */}
      <section className="about-blueprint-shell">

        {/* PHOTO SIDE */}
        <div className="about-blueprint-photo">

          <div className="about-photo-label">
            <span className="status-pulse"></span>
            PROFILE / ACTIVE
          </div>

          <div className="about-image-frame">

            <img
              src={profilePhoto}
              alt="Lance Andre Leominares"
            />

            <span className="photo-corner photo-corner-one"></span>
            <span className="photo-corner photo-corner-two"></span>
            <span className="photo-corner photo-corner-three"></span>
            <span className="photo-corner photo-corner-four"></span>

          </div>

          <div className="about-photo-footer">
            <span>LA / 2026</span>
            <span>GOHIGHLEVEL + WEB</span>
          </div>

        </div>


        {/* INFORMATION SIDE */}
        <div className="about-blueprint-content">

          <div className="about-system-label">
            02 / ABOUT SYSTEM
          </div>

          <h1>
            About
            <span> Me.</span>
          </h1>

          <h2>
            GoHighLevel Specialist
            <br />
            & Web Developer
          </h2>

          <p>
            I'm Lance Andre Leominares, focused on building
            practical solutions through{" "}
            <strong>GoHighLevel</strong>,{" "}
            <strong>CRM automation</strong>, and{" "}
            <strong>web development</strong>.
          </p>

          <p>
            I work with workflows, lead management, automated
            follow-ups, CRM processes, and digital systems designed
            to make repetitive tasks more organized and efficient.
          </p>

          <p>
            Alongside GoHighLevel, I continue developing my
            programming skills through React, Python, FastAPI,
            web applications, AI tools, and software projects.
          </p>


          {/* SPECIALIZATION GRID */}
          <div className="about-specialization-grid">

            <div className="about-specialization">
              <span>01</span>
              <small>SPECIALIZATION</small>
              <strong>GoHighLevel</strong>
              <p>CRM, workflows & automation</p>
            </div>

            <div className="about-specialization">
              <span>02</span>
              <small>DEVELOPMENT</small>
              <strong>Web Development</strong>
              <p>Frontend & practical web systems</p>
            </div>

          </div>

        </div>

      </section>


      {/* WHAT I DO */}
      <section className="about-capabilities">

        <div className="capabilities-heading">

          <div>
            <p>03 / CAPABILITIES</p>

            <h2>
              What I
              <span> Work With.</span>
            </h2>
          </div>

          <p className="capabilities-description">
            Combining automation, development, and modern digital
            tools to build practical solutions.
          </p>

        </div>


        <div className="capability-flow">

          {/* 01 */}
          <div className="capability-box">

            <div className="capability-top">
              <span>01</span>
              <small>GHL</small>
            </div>

            <div className="capability-icon">
              G
            </div>

            <h3>GoHighLevel Specialist</h3>

            <p>
              Working with CRM systems, workflows, lead management,
              automated follow-ups, pipelines, and business process
              automation.
            </p>

            <div className="capability-tags">
              <span>CRM</span>
              <span>Workflows</span>
              <span>Leads</span>
            </div>

          </div>


          {/* CONNECTOR */}
          <div className="capability-connector">
            <span></span>
          </div>


          {/* 02 */}
          <div className="capability-box">

            <div className="capability-top">
              <span>02</span>
              <small>WEB</small>
            </div>

            <div className="capability-icon">
              &lt;/&gt;
            </div>

            <h3>Web Development</h3>

            <p>
              Building responsive web interfaces and practical
              applications while developing frontend and backend
              programming skills.
            </p>

            <div className="capability-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Python</span>
            </div>

          </div>


          {/* CONNECTOR */}
          <div className="capability-connector">
            <span></span>
          </div>


          {/* 03 */}
          <div className="capability-box">

            <div className="capability-top">
              <span>03</span>
              <small>TOOLS</small>
            </div>

            <div className="capability-icon">
              AI
            </div>

            <h3>Modern Technology</h3>

            <p>
              Using AI tools, development platforms, design tools,
              and modern technologies to support productivity and
              digital project creation.
            </p>

            <div className="capability-tags">
              <span>AI Tools</span>
              <span>Canva</span>
              <span>CapCut</span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;
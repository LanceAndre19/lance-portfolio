import { Link } from "react-router-dom";

function Hero() {
  return (
    <main className="blueprint-hero">

      <div className="blueprint-shell">

        {/* LEFT CONTENT */}
        <section className="blueprint-copy">

          <div className="blueprint-kicker">
            <span className="status-pulse"></span>
            <span>01 / PORTFOLIO SYSTEM</span>
          </div>

          <p className="blueprint-label">
            GOHIGHLEVEL SPECIALIST • WEB DEVELOPMENT • DIGITAL SYSTEMS
          </p>

          <h1>
            Lance Andre
            <span> Leominares</span>
          </h1>

          <h2>
            GoHighLevel Specialist
            <br />
            & Web Developer
          </h2>

          <p className="blueprint-description">
            I focus on{" "}
            <strong>GoHighLevel CRM systems</strong>,{" "}
            <strong>workflow automation</strong>, and{" "}
            <strong>web development</strong>, creating practical
            digital solutions that improve business processes,
            organize leads, automate follow-ups, and turn ideas
            into functional web experiences.
          </p>

          <div className="blueprint-actions">

            <Link
              to="/projects"
              className="blueprint-primary"
            >
              View Projects
              <span>↗</span>
            </Link>

            <Link
              to="/contact"
              className="blueprint-secondary"
            >
              Contact Me
            </Link>

          </div>


          {/* SYSTEM STACK */}
          <div className="stack-strip">

            <div className="stack-strip-title">
              SYSTEM STACK
            </div>

            <div className="stack-strip-items">

              <div className="stack-mini">
                <span>01</span>
                <strong>GoHighLevel</strong>
                <small>Specialist</small>
              </div>

              <div className="stack-mini">
                <span>02</span>
                <strong>React</strong>
                <small>Web Development</small>
              </div>

              <div className="stack-mini">
                <span>03</span>
                <strong>Python</strong>
                <small>Development</small>
              </div>

              <div className="stack-mini">
                <span>04</span>
                <strong>AI Tools</strong>
                <small>Workflow Support</small>
              </div>

            </div>

          </div>

        </section>


        {/* RIGHT AUTOMATION PANEL */}
        <section className="blueprint-visual">

          <div className="automation-board">

            <div className="board-topbar">

              <div>
                <p>GOHIGHLEVEL WORKFLOW SYSTEM</p>
                <span>CRM & Automation Architecture</span>
              </div>

              <div className="board-status">
                <span></span>
                ACTIVE
              </div>

            </div>


            <div className="workflow-canvas">

              {/* CONNECTION LINES */}
              <div className="workflow-line line-one"></div>
              <div className="workflow-line line-two"></div>
              <div className="workflow-line line-three"></div>
              <div className="workflow-line line-four"></div>


              {/* NODE 1 */}
              <div className="workflow-node node-trigger">

                <span className="node-number">
                  01
                </span>

                <div className="node-icon">
                  ⚡
                </div>

                <div>
                  <small>TRIGGER</small>
                  <strong>New Lead</strong>
                </div>

              </div>


              {/* NODE 2 */}
              <div className="workflow-node node-crm">

                <span className="node-number">
                  02
                </span>

                <div className="node-icon">
                  G
                </div>

                <div>
                  <small>CRM</small>
                  <strong>GoHighLevel</strong>
                </div>

              </div>


              {/* NODE 3 */}
              <div className="workflow-node node-process">

                <span className="node-number">
                  03
                </span>

                <div className="node-icon">
                  ↻
                </div>

                <div>
                  <small>AUTOMATION</small>
                  <strong>Follow-Up</strong>
                </div>

              </div>


              {/* NODE 4 */}
              <div className="workflow-node node-web">

                <span className="node-number">
                  04
                </span>

                <div className="node-icon">
                  &lt;/&gt;
                </div>

                <div>
                  <small>OUTPUT</small>
                  <strong>Web Solution</strong>
                </div>

              </div>


              {/* CENTER CORE */}
              <div className="workflow-core">

                <div className="core-ring core-ring-one"></div>
                <div className="core-ring core-ring-two"></div>

                <span>LA</span>

              </div>

            </div>


            <div className="board-footer">

              <div>
                <span>CRM</span>
                <span>WORKFLOWS</span>
                <span>LEADS</span>
                <span>WEB</span>
              </div>

              <small>
                SYSTEM STATUS / ONLINE
              </small>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

export default Hero;
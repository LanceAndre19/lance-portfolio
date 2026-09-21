import { useState } from "react";

import dashboard from "../assets/biotrack/dashboard.jpg";

import bio1 from "../assets/biotrack/1.png";
import bio2 from "../assets/biotrack/2.jpg";
import bio3 from "../assets/biotrack/3.png";
import bio4 from "../assets/biotrack/4.png";
import bio5 from "../assets/biotrack/5.png";
import bio6 from "../assets/biotrack/6.jpg";
import bio7 from "../assets/biotrack/7.png";
import bio8 from "../assets/biotrack/8.png";
import bio9 from "../assets/biotrack/9.png";
import bio10 from "../assets/biotrack/10.png";

import automation1 from "../assets/automation/1.png";
import automation2 from "../assets/automation/2.png";
import automation3 from "../assets/automation/3.png";
import automation4 from "../assets/automation/4.png";
import automation5 from "../assets/automation/5.png";
import automation6 from "../assets/automation/6.png";

import coding1 from "../assets/coding/Coding1.png";

function Projects() {
  const bioImages = [
    dashboard,
    bio1,
    bio2,
    bio3,
    bio4,
    bio5,
    bio6,
    bio7,
    bio8,
    bio9,
    bio10,
  ];

  const automationImages = [
    automation1,
    automation2,
    automation3,
    automation4,
    automation5,
    automation6,
  ];

  const [selectedBioImage, setSelectedBioImage] = useState(dashboard);

  const [selectedAutomationImage, setSelectedAutomationImage] =
    useState(automation1);

  return (
    <main className="blueprint-projects">

      {/* PAGE HEADER */}
      <section className="projects-system-header">

        <div className="projects-system-code">
          <span className="status-pulse"></span>
          03 / PROJECT DATABASE
        </div>

        <h1>
          Selected
          <span> Projects.</span>
        </h1>

        <p>
          A collection of systems, automation workflows, and
          development projects built through practical work
          and continuous learning.
        </p>

        <div className="projects-summary">

          <div>
            <span>01</span>
            <strong>BioTrack</strong>
            <small>Capstone System</small>
          </div>

          <div>
            <span>02</span>
            <strong>GoHighLevel</strong>
            <small>CRM & Workflows</small>
          </div>

          <div>
            <span>03</span>
            <strong>Development</strong>
            <small>Coding Projects</small>
          </div>

        </div>

      </section>


      {/* =========================================
          BIOTRACK
      ========================================= */}

      <section className="system-project-card">

        <div className="system-project-topbar">

          <div className="project-id">
            <span>PROJECT / 001</span>
            <strong>BIOTRACK</strong>
          </div>

          <div className="project-status">
            <span></span>
            FEATURED CAPSTONE
          </div>

        </div>


        <div className="system-project-layout">

          {/* INFORMATION */}
          <div className="system-project-info">

            <p className="project-system-label">
              FACIAL RECOGNITION SYSTEM
            </p>

            <h2>
              BioTrack
            </h2>

            <h3>
              Automated Facial Recognition Attendance System
            </h3>

            <p>
              BioTrack is a capstone system designed to automate
              student attendance and institutional monitoring
              using facial recognition technology.
            </p>

            <p>
              The system includes student registration, biometric
              enrollment, facial recognition, attendance logging,
              real-time monitoring, profiles, and reporting.
            </p>


            <div className="system-project-stack">

              <span>React</span>
              <span>Python</span>
              <span>FastAPI</span>
              <span>OpenCV</span>
              <span>FaceNet</span>

            </div>


            <div className="project-spec-grid">

              <div>
                <small>TYPE</small>
                <strong>Capstone</strong>
              </div>

              <div>
                <small>FOCUS</small>
                <strong>Computer Vision</strong>
              </div>

            </div>

          </div>


          {/* GALLERY */}
          <div className="system-gallery">

            <div className="system-gallery-header">

              <span>LIVE PREVIEW</span>

              <small>
                CLICK A SCREEN TO VIEW
              </small>

            </div>


            <div className="system-main-preview">

              <img
                src={selectedBioImage}
                alt="Selected BioTrack Preview"
              />

              <div className="preview-scan-line"></div>

            </div>


            <div className="system-thumbnails">

              {bioImages.map((image, index) => (
                <button
                  type="button"
                  key={index}
                  className={
                    selectedBioImage === image
                      ? "system-thumbnail active-system-thumbnail"
                      : "system-thumbnail"
                  }
                  onClick={() => setSelectedBioImage(image)}
                >
                  <img
                    src={image}
                    alt={`BioTrack Screen ${index + 1}`}
                  />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          GOHIGHLEVEL
      ========================================= */}

      <section className="system-project-card">

        <div className="system-project-topbar">

          <div className="project-id">
            <span>PROJECT / 002</span>
            <strong>GOHIGHLEVEL</strong>
          </div>

          <div className="project-status">
            <span></span>
            CRM WORKFLOW SYSTEM
          </div>

        </div>


        <div className="system-project-layout">

          <div className="system-project-info">

            <p className="project-system-label">
              GOHIGHLEVEL SPECIALIST
            </p>

            <h2>
              CRM & Workflow Automation
            </h2>

            <h3>
              Lead Management, Follow-Ups & Business Processes
            </h3>

            <p>
              GoHighLevel workflows created to organize CRM
              processes, manage leads, automate follow-ups,
              and reduce repetitive business tasks.
            </p>

            <p>
              These examples demonstrate practical experience
              with workflows, triggers, actions, pipelines,
              lead management, and CRM-based automation.
            </p>


            <div className="system-project-stack">

              <span>GoHighLevel</span>
              <span>CRM</span>
              <span>Workflows</span>
              <span>Leads</span>
              <span>Automation</span>

            </div>


            <div className="project-spec-grid">

              <div>
                <small>ROLE</small>
                <strong>GHL Specialist</strong>
              </div>

              <div>
                <small>FOCUS</small>
                <strong>CRM Automation</strong>
              </div>

            </div>

          </div>


          <div className="system-gallery">

            <div className="system-gallery-header">

              <span>WORKFLOW PREVIEW</span>

              <small>
                CLICK A SCREEN TO VIEW
              </small>

            </div>


            <div className="system-main-preview">

              <img
                src={selectedAutomationImage}
                alt="Selected GoHighLevel Preview"
              />

              <div className="preview-scan-line"></div>

            </div>


            <div className="system-thumbnails">

              {automationImages.map((image, index) => (
                <button
                  type="button"
                  key={index}
                  className={
                    selectedAutomationImage === image
                      ? "system-thumbnail active-system-thumbnail"
                      : "system-thumbnail"
                  }
                  onClick={() =>
                    setSelectedAutomationImage(image)
                  }
                >
                  <img
                    src={image}
                    alt={`GoHighLevel Screen ${index + 1}`}
                  />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CODING
      ========================================= */}

      <section className="system-project-card">

        <div className="system-project-topbar">

          <div className="project-id">
            <span>PROJECT / 003</span>
            <strong>DEVELOPMENT</strong>
          </div>

          <div className="project-status">
            <span></span>
            CODING PROJECT
          </div>

        </div>


        <div className="system-project-layout">

          <div className="system-project-info">

            <p className="project-system-label">
              WEB & SOFTWARE DEVELOPMENT
            </p>

            <h2>
              Coding Projects
            </h2>

            <h3>
              Practical Programming & Development
            </h3>

            <p>
              Coding and development projects created while
              improving my programming, interface development,
              problem-solving, and software development skills.
            </p>

            <p>
              These projects allow me to apply programming
              concepts through real interfaces and functional
              applications.
            </p>


            <div className="system-project-stack">

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Programming</span>

            </div>


            <div className="project-spec-grid">

              <div>
                <small>TYPE</small>
                <strong>Development</strong>
              </div>

              <div>
                <small>FOCUS</small>
                <strong>Programming</strong>
              </div>

            </div>

          </div>


          <div className="system-gallery">

            <div className="system-gallery-header">

              <span>PROJECT PREVIEW</span>

              <small>
                DEVELOPMENT OUTPUT
              </small>

            </div>


            <div className="system-main-preview coding-system-preview">

              <img
                src={coding1}
                alt="Coding Project Preview"
              />

              <div className="preview-scan-line"></div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Projects;
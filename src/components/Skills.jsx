import { useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mouseActive, setMouseActive] = useState(false);

  const skills = [
    {
      name: "GoHighLevel",
      short: "GHL",
      category: "Automation",
      image: "",
      description:
        "CRM management, workflow automation, lead handling, follow-ups, pipelines, and practical business automation.",
      tags: ["CRM", "Workflows", "Leads"],
    },

    {
      name: "React",
      short: "R",
      category: "Development",
      image: "https://cdn.simpleicons.org/react/2563EB",
      description:
        "Used to build responsive and interactive interfaces for modern web applications.",
      tags: ["Frontend", "JavaScript", "UI"],
    },

    {
      name: "Python",
      short: "PY",
      category: "Development",
      image: "https://cdn.simpleicons.org/python/2563EB",
      description:
        "Used for backend development, automation, system logic, and computer vision projects.",
      tags: ["Backend", "Automation", "AI"],
    },

    {
      name: "FastAPI",
      short: "API",
      category: "Development",
      image: "https://cdn.simpleicons.org/fastapi/2563EB",
      description:
        "Used to build APIs that connect application logic, databases, and frontend systems.",
      tags: ["REST API", "Backend", "Python"],
    },

    {
      name: "OpenCV",
      short: "CV",
      category: "AI & Computer Vision",
      image: "https://cdn.simpleicons.org/opencv/2563EB",
      description:
        "Used for image processing, camera input, face detection, and computer vision workflows.",
      tags: ["Computer Vision", "Detection"],
    },

    {
      name: "FaceNet",
      short: "FN",
      category: "AI & Computer Vision",
      image: "",
      description:
        "Used for facial embeddings and facial recognition in the BioTrack capstone project.",
      tags: ["Deep Learning", "Recognition"],
    },

    {
      name: "ChatGPT",
      short: "GPT",
      category: "AI Tools",
      image: "https://cdn.simpleicons.org/openai/2563EB",
      description:
        "Used for brainstorming, coding support, debugging, research, documentation, and workflow improvement.",
      tags: ["AI Assistant", "Coding", "Research"],
    },

    {
      name: "Claude",
      short: "CL",
      category: "AI Tools",
      image: "https://cdn.simpleicons.org/anthropic/2563EB",
      description:
        "Used for writing, code analysis, problem solving, development support, and documentation.",
      tags: ["AI Assistant", "Analysis", "Development"],
    },

    {
      name: "Warp",
      short: "W",
      category: "AI Tools",
      image: "",
      description:
        "Used as an AI-powered terminal for command-line workflows and development productivity.",
      tags: ["Terminal", "Command Line", "Developer Tool"],
    },

    {
      name: "Canva",
      short: "C",
      category: "Editing & Design",
      image: "https://cdn.simpleicons.org/canva/2563EB",
      description:
        "Used for visual content, presentations, layouts, social graphics, and basic design work.",
      tags: ["Design", "Presentations", "Visual Content"],
    },

    {
      name: "CapCut",
      short: "CC",
      category: "Editing & Design",
      image: "https://cdn.simpleicons.org/capcut/2563EB",
      description:
        "Used for video editing, transitions, captions, short-form content, and multimedia production.",
      tags: ["Video Editing", "Content", "Multimedia"],
    },

    {
      name: "GitHub",
      short: "GH",
      category: "Tools",
      image: "https://cdn.simpleicons.org/github/2563EB",
      description:
        "Used for source control, repositories, project management, and development collaboration.",
      tags: ["Git", "Version Control"],
    },

    {
      name: "VS Code",
      short: "VS",
      category: "Tools",
      image: "https://cdn.simpleicons.org/visualstudiocode/2563EB",
      description:
        "My main development environment for writing, testing, and managing programming projects.",
      tags: ["Code Editor", "Development"],
    },

    {
      name: "Vercel",
      short: "V",
      category: "Tools",
      image: "https://cdn.simpleicons.org/vercel/2563EB",
      description:
        "Used for deploying and publishing modern web applications from Git-based projects.",
      tags: ["Deployment", "Hosting"],
    },
  ];

  const categories = [
    "All",
    "Automation",
    "Development",
    "AI & Computer Vision",
    "AI Tools",
    "Editing & Design",
    "Tools",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );

    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <main
      className={
        mouseActive
          ? "interactive-skills-page radar-active"
          : "interactive-skills-page"
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseActive(true)}
      onMouseLeave={() => setMouseActive(false)}
    >
      {/* MOUSE LIGHT */}
      <div className="skills-cursor-glow"></div>

      <div className="blueprint-skills">

        {/* FILTER */}
        <section className="skills-control-panel">

          <div className="skills-control-label">
            FILTER / TECHNOLOGY CATEGORY
          </div>

          <div className="skills-category-bar">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "skill-filter active-filter"
                    : "skill-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}

          </div>

        </section>


        {/* HEADER */}
        <section className="skills-showcase-header">

          <div className="skills-header-copy">

            <div className="skills-system-code">
              <span className="status-pulse"></span>
              04 / TECHNOLOGY INVENTORY
            </div>

            <h1>
              Built with the Right
              <span> Skills & Tools.</span>
            </h1>

            <p>
              A collection of technologies and platforms I use for
              GoHighLevel, web development, AI-assisted workflows,
              automation, editing, and digital projects.
            </p>

          </div>


          {/* FLOATING LOGOS */}
          <div className="skills-logo-universe">

            <div className="orbit-center">
              <span>LA</span>
              <small>STACK</small>
            </div>

            {skills.slice(0, 10).map((skill, index) => (
              <div
                className={`orbit-logo orbit-logo-${index + 1}`}
                key={skill.name}
                title={skill.name}
              >
                <span className="orbit-fallback">
                  {skill.short}
                </span>

                {skill.image && (
                  <img
                    src={skill.image}
                    alt={skill.name}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>
            ))}

          </div>

        </section>


        {/* SKILLS */}
        <section className="skills-system-grid">

          {filteredSkills.map((skill, index) => (
            <article
              className="skill-system-card"
              key={skill.name}
            >

              <div className="skill-system-top">

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <small>
                  {skill.category.toUpperCase()}
                </small>

              </div>


              <div className="skill-logo-row">

                <div className="skill-picture">

                  <span className="skill-picture-fallback">
                    {skill.short}
                  </span>

                  {skill.image && (
                    <img
                      src={skill.image}
                      alt={`${skill.name} logo`}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  )}

                </div>

                <div>
                  <h2>{skill.name}</h2>

                  <span className="skill-card-category">
                    {skill.category}
                  </span>
                </div>

              </div>


              <p>
                {skill.description}
              </p>


              <div className="skill-system-tags">

                {skill.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>


              <div className="skill-system-status">
                <span></span>
                ACTIVE TOOL
              </div>

            </article>
          ))}

        </section>

      </div>
    </main>
  );
}

export default Skills;
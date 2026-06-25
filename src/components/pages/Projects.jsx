import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaUsers,
  FaCode,
} from "react-icons/fa";

function Projects() {
  return (
    <section className="page-container">

      {/* HERO */}

      <div className="projects-hero">

        <h1 className="page-title">
          Community Projects
        </h1>

        <p className="projects-subtitle">
          Discover exciting projects, collaborate
          with talented developers, and gain
          real-world experience.
        </p>

      </div>

      {/* PROJECTS GRID */}

      <div className="project-grid">

        {/* PROJECT 1 */}

        <div className="project-card">

          <div className="project-icon">
            <FaReact size={50} />
          </div>

          <h3>AI Chatbot Platform</h3>

          <p>
            Build an intelligent chatbot using
            React, Node.js, and AI APIs.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>AI</span>
          </div>

          <div className="project-footer">
            <FaUsers />
            <span>4 Members Needed</span>
          </div>

        </div>

        {/* PROJECT 2 */}

        <div className="project-card">

          <div className="project-icon">
            <FaNodeJs size={50} />
          </div>

          <h3>E-Commerce Website</h3>

          <p>
            Create a modern online shopping
            platform with payment integration.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>

          <div className="project-footer">
            <FaUsers />
            <span>5 Members Needed</span>
          </div>

        </div>

        {/* PROJECT 3 */}

        <div className="project-card">

          <div className="project-icon">
            <FaGithub size={50} />
          </div>

          <h3>Portfolio Builder</h3>

          <p>
            A platform where students can
            generate professional portfolios.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Firebase</span>
            <span>CSS</span>
          </div>

          <div className="project-footer">
            <FaUsers />
            <span>3 Members Needed</span>
          </div>

        </div>

        {/* PROJECT 4 */}

        <div className="project-card">

          <div className="project-icon">
            <FaDatabase size={50} />
          </div>

          <h3>Student Management System</h3>

          <p>
            Manage attendance, grades,
            and student information.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>SQL</span>
            <span>Node.js</span>
          </div>

          <div className="project-footer">
            <FaUsers />
            <span>6 Members Needed</span>
          </div>

        </div>

        {/* PROJECT 5 */}

        <div className="project-card">

          <div className="project-icon">
            <FaCode size={50} />
          </div>

          <h3>Developer Community Platform</h3>

          <p>
            Build a platform where students
            can collaborate and share projects.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>

          <div className="project-footer">
            <FaUsers />
            <span>5 Members Needed</span>
          </div>

        </div>

        {/* PROJECT 6 */}

        <div className="project-card">

          <div className="project-icon">
            <FaReact size={50} />
          </div>

          <h3>Task Management App</h3>

          <p>
            Organize projects and improve
            team productivity.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Firebase</span>
            <span>Tailwind</span>
          </div>

          <div className="project-footer">
            <FaUsers />
            <span>4 Members Needed</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
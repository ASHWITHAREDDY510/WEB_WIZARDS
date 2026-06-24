import {
  FaBullseye,
  FaRocket,
  FaUsers,
  FaCode
} from "react-icons/fa";

function About() {
  return (
    <section className="page-container">

      {/* PAGE TITLE */}

      <div className="about-hero">

        <h1 className="page-title">
          About Web Wizards
        </h1>

        <p className="about-subtitle">
          A student-driven developer community
          focused on learning, collaboration,
          innovation, and real-world projects.
        </p>

      </div>

      {/* WHO WE ARE */}

      <div className="about-card">

        <h2>Who We Are</h2>

        <p>
          Web Wizards is a community built for
          students who want to improve their
          development skills, work on projects,
          participate in hackathons, and build
          an impressive portfolio.
        </p>

      </div>

      {/* MISSION VISION VALUES */}

      <div className="about-grid">

        <div className="info-card">

          <FaBullseye size={40} />

          <h3>Mission</h3>

          <p>
            Help students gain practical
            development experience through
            collaboration and project-based
            learning.
          </p>

        </div>

        <div className="info-card">

          <FaRocket size={40} />

          <h3>Vision</h3>

          <p>
            Build the strongest student
            developer network where
            innovation and teamwork thrive.
          </p>

        </div>

        <div className="info-card">

          <FaUsers size={40} />

          <h3>Community</h3>

          <p>
            Connect students, mentors,
            designers and developers from
            different backgrounds.
          </p>

        </div>

      </div>

      {/* TEAM SECTION */}

      <h2 className="section-heading">
        Meet Our Team
      </h2>

      <div className="team-grid">

        <div className="member-card">

          <FaCode size={35} />

          <h3>Member 1</h3>

          <p>
            Frontend Developer
          </p>

          <span>
            React • UI Development
          </span>

        </div>

        <div className="member-card">

          <FaCode size={35} />

          <h3>Member 2</h3>

          <p>
            Backend Developer
          </p>

          <span>
            Node.js • APIs • Database
          </span>

        </div>

        <div className="member-card">

          <FaCode size={35} />

          <h3>Member 3</h3>

          <p>
            UI/UX Designer
          </p>

          <span>
            Figma • User Experience
          </span>

        </div>

        <div className="member-card">

          <FaCode size={35} />

          <h3>Member 4</h3>

          <p>
            Project Coordinator
          </p>

          <span>
            Planning • Deployment
          </span>

        </div>

      </div>

      {/* COMMUNITY BENEFITS */}

      <h2 className="section-heading">
        Why Students Join Us
      </h2>

      <div className="about-grid">

        <div className="info-card">
          <h3>💼 Portfolio Building</h3>

          <p>
            Work on projects that showcase
            your skills to recruiters.
          </p>
        </div>

        <div className="info-card">
          <h3>🏆 Hackathons</h3>

          <p>
            Participate in coding events and
            competitions with your team.
          </p>
        </div>

        <div className="info-card">
          <h3>📚 Learning</h3>

          <p>
            Learn modern technologies through
            practical experience.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;
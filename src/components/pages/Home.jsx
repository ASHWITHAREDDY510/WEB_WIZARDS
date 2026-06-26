import {
  FaCode,
  FaUsers,
  FaRocket,
  FaLaptopCode,
  FaGithub,
  FaTrophy
} from "react-icons/fa";

import Counter from "../Counter";

function Home() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="hero">

  <div className="hero-left">

    <span className="hero-tag">
      🚀 Developer Community
    </span>

    <h1>
      Build Projects.
      <br />
      Learn Together.
      <br />
      Grow Faster.
    </h1>

    <p>
      Join a thriving community of student developers,
      collaborate on real-world projects,
      participate in hackathons,
      and build an impressive portfolio.
    </p>

    <div className="hero-buttons">

      <button className="btn-primary">
        Join Community
      </button>

      <button className="btn-secondary">
        Explore Projects
      </button>

    </div>

  </div>

  <div className="hero-right">

    <div className="floating-code code1">
      const developer = "Web Wizard";
    </div>

    <div className="floating-code code2">
      npm run dev 🚀
    </div>

    <div className="floating-code code3">
      git commit -m "Success"
    </div>

  </div>

</section>

      {/* FEATURES */}

      <section className="features">

        <h2>Why Join Web Wizards?</h2>

        <div className="feature-grid">

          <div className="card">

            <FaUsers size={45} />

            <h3>Collaboration</h3>

            <p>
              Work with talented students on
              exciting real-world projects.
            </p>

          </div>

          <div className="card">

            <FaCode size={45} />

            <h3>Learning</h3>

            <p>
              Improve your coding skills
              through practical experience.
            </p>

          </div>

          <div className="card">

            <FaRocket size={45} />

            <h3>Growth</h3>

            <p>
              Build an impressive portfolio
              and stand out.
            </p>

          </div>

          <div className="card">

            <FaLaptopCode size={45} />

            <h3>Projects</h3>

            <p>
              Build modern web applications
              with your team.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <div className="stat-card">

          <Counter end={500} />

          <p>Students</p>

        </div>

        <div className="stat-card">

          <Counter end={100} />

          <p>Projects</p>

        </div>

        <div className="stat-card">

          <Counter end={50} />

          <p>Events</p>

        </div>

      </section>

      {/* COMMUNITY */}

      <section className="community">

        <h2>Community Roles</h2>

        <div className="community-grid">

          <div className="member">

            <FaCode size={35} />

            <h3>Frontend Developers</h3>

            <p>
              Build beautiful user interfaces.
            </p>

          </div>

          <div className="member">

            <FaGithub size={35} />

            <h3>Backend Developers</h3>

            <p>
              Create APIs and databases.
            </p>

          </div>

          <div className="member">

            <FaLaptopCode size={35} />

            <h3>UI/UX Designers</h3>

            <p>
              Design amazing user experiences.
            </p>

          </div>

          <div className="member">

            <FaTrophy size={35} />

            <h3>Project Managers</h3>

            <p>
              Lead teams and manage projects.
            </p>

          </div>

        </div>

      </section>

      {/* EVENTS */}

      <section className="events">

        <h2>Upcoming Events</h2>

        <div className="timeline">

          <div className="event-card">

            <h3>July 2026</h3>

            <p>
              Web Development Workshop
            </p>

          </div>

          <div className="event-card">

            <h3>August 2026</h3>

            <p>
              Community Hackathon
            </p>

          </div>

          <div className="event-card">

            <h3>September 2026</h3>

            <p>
              Portfolio Review Session
            </p>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="testimonials">

        <h2>What Members Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            <p>
              "I found amazing teammates and
              built my first project."
            </p>

          </div>

          <div className="testimonial-card">

            <p>
              "The community helped me improve
              my development skills quickly."
            </p>

          </div>

          <div className="testimonial-card">

            <p>
              "A perfect place for students
              interested in web development."
            </p>

          </div>

        </div>

      </section>

      {/* JOIN BANNER */}

      <section className="github-section">

  <h2>
    Developer Activity
  </h2>

  <div className="github-grid">

    <div className="github-card">
      <h3>Projects Created</h3>
      <p>120+</p>
    </div>

    <div className="github-card">
      <h3>Pull Requests</h3>
      <p>850+</p>
    </div>

    <div className="github-card">
      <h3>Contributors</h3>
      <p>300+</p>
    </div>

  </div>

</section>

    </>
  );
}

export default Home;
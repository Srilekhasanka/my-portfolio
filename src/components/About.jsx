import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate <strong>Node.js Developer</strong> with hands-on experience
              in backend and full-stack development. I specialize in building scalable
              applications using modern technologies like Node.js, Express.js, TypeScript,
              and both SQL and NoSQL databases.
            </p>
            <p className="about-description">
              Currently working as a <strong>Software Developer Intern at Antino Labs</strong>,
              I actively contribute to developing backend features, building real-time analytics
              dashboards, and optimizing API performance. I thrive in agile environments and
              believe in writing clean, maintainable code.
            </p>
            <p className="about-description">
              My expertise lies in debugging complex issues, performance optimization, and
              delivering solutions that make a real impact. I'm always eager to learn new
              technologies and take on challenging projects that push my boundaries.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">💼</div>
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">4+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

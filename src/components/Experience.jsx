import './Experience.css';

const Experience = () => {
  const experience = {
    company: "Antino Labs Pvt. Ltd.",
    position: "Software Developer Intern",
    period: "Aug 2024 – Jan 2025",
    location: "Benguluru",
    icon: "💼",
    responsibilities: [
      "Developed backend features using Node.js, Express.js, TypeScript, and PostgreSQL",
      "Built dashboards for real-time analytics and stakeholder reporting",
      "Optimized APIs and database queries for enhanced performance",
      "Actively participated in agile sprints, code reviews, and team discussions"
    ]
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon">{experience.icon}</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="position">{experience.position}</h3>
                  <h4 className="company">{experience.company}</h4>
                </div>
                <div className="timeline-meta">
                  <span className="period">{experience.period}</span>
                  <span className="location">📍 {experience.location}</span>
                </div>
              </div>
              <ul className="responsibilities">
                {experience.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "LionCharge",
      icon: "⚡",
      description: "Backend application for EV charging station analytics with real-time dashboards and AI-powered assistants.",
      highlights: [
        "Designed and maintained backend applications using Node.js, Express.js, TypeScript, and PostgreSQL. ",
        "Built dynamic dashboards for real-time electric vehicle charging station analytics. ",
        "Improved database performance and API efficiency to enhance user experience and application scalability.",
        "Debugged and resolved issues in the existing CRUD APIs, ensuring smoother data operations and reduced downtime.",
        "Developed an AI agent integrating Charging Assistant, Payment Assistant, and other intelligent modules for enhanced user interaction using n8n.",
        "Gained hands-on experience with OCPP protocol and acquired foundational knowledge of the Beckn Protocol for EV charging ecosystems."
      ],
      tags: ["Node.js", "TypeScript", "PostgreSQL", "n8n", "OCPP"]
    },
    {
      title: "Emoneeds",
      icon: "🏥",
      description: "Hospital management system backend for a mental health care platform with assessment modules and patient portals.",
      highlights: [
        "Enhanced hospital management system backend using JavaScript, Node.js, and MongoDB for Emoneeds, a mental health care platform.",
        "Worked on resolving critical issues in existing modules, especially within the Assessment scoring logic, ensuring accurate and consistent results across patient records.",
        "Improved assessment modules, fixed bugs, and optimized backend logic to support seamless integration with the frontend team’s UI updates.",
        "Wrote comprehensive test cases to understand and validate the flow of various portals (Admin, Psychologist, and Patient), which helped in uncovering hidden issues and improving QA coverage.",
        "Contributed to sprint deliverables by writing reusable code, reviewing merge requests, and assisting in deployment tasks.",
        "Actively participated in team meetings and project discussions to align with development goals and client requirements."
      ],
      tags: ["JavaScript", "Node.js", "MongoDB", "Testing"]
    },
    {
      title: "Vaku Learning",
      icon: "📚",
      description: "Full-stack learning management platform with AI-driven content generation and gamification features.",
      highlights: [
        "Designed and developed a full-stack learning management platform with admin and user portals, featuring content generation, progress tracking, and gamification.",
        "Built a secure admin authentication system with JWT-based login and role-based access control.",
        "Integrated gamification mechanics such as XP points, streak tracking, and achievement keys to improve user engagement and retention.",
        "Implemented AI-driven content generation using FAi (custom AI integration) for automated course material and quiz creation.",
        "Developed an upload service to AWS S3 for managing user-generated and AI-generated learning content efficiently.",
        "Utilized MongoDB for managing user profiles, gamification stats, and localized content with optimized query performance.",
        "Designed localization support (i18n) enabling dynamic content delivery across multiple locales.",
        "Implemented a scalable and maintainable modular TypeScript architecture following clean code and SOLID principles to deliver a modern, responsive admin dashboard for content moderation, analytics, and learner insights."
      ],
      tags: ["TypeScript", "MongoDB", "AWS S3", "AI", "Gamification"]
    },
    {
      title: "Shine-care",
      icon: "🏢",
      description: "Admin management portal for centralized organizational dashboard control and analytics.",
      highlights: [
        "Developed an admin management portal enabling centralized control over all organizational dashboards and key operational data.",
        "Designed dynamic dashboard modules allowing real-time analytics, user management, and performance monitoring.",
        "Implemented modular RESTful APIs in Node.js for smooth integration between front-end dashboards and backend services.",
        "User management and operational data control"
      ],
      tags: ["Node.js", "RESTful API", "Analytics", "Admin Portal"]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

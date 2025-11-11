import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Git/GitHub", level: 88 },
        { name: "VS Code", level: 92 },
        { name: "DBeaver", level: 80 },
        { name: "n8n", level: 70 }
      ]
    },
    {
      title: "Soft Skills",
      icon: "🎯",
      skills: [
        { name: "Problem-solving", level: 90 },
        { name: "Team Collaboration", level: 88 },
        { name: "Attention to Detail", level: 92 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">My Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

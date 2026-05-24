import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      value: "+91 75699 77592",
      link: "tel:+917569977592"
    },
    {
      icon: "✉️",
      title: "Email",
      value: "srilekhasanka2003@gmail.com",
      link: "mailto:srilekhasanka2003@gmail.com"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Hyderabad, India",
      link: null
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "srilekha-sanka",
      link: "https://www.linkedin.com/in/srilekha-sanka-b5a74b271"
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-subtitle">
            Open to backend engineering roles, EV / fintech / EdTech systems work, and AI-infra collaborations. Let's build something that ships.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-cards">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{item.icon}</div>
                <h3 className="contact-title">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="contact-value"
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="contact-value">{item.value}</p>
                )}
              </div>
            ))}
          </div>
          <div className="contact-cta">
            <p className="cta-text">Ready to start a conversation?</p>
            <a href="mailto:srilekhasanka2003@gmail.com" className="btn btn-primary btn-large">
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

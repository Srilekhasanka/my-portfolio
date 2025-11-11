import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      value: "7569977592",
      link: "tel:7569977592"
    },
    {
      icon: "✉️",
      title: "Email",
      value: "srilekhasanka@gmail.com",
      link: "mailto:srilekhasanka@gmail.com"
    },
    {
      icon: "📍",
      title: "Location",
      value: "H.No: 1-108, Annapureddipalli,Telangana",
      link: null
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "srilekha-sanka-b5a74b271",
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
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
            <a href="mailto:srilekhasanka@gmail.com" className="btn btn-primary btn-large">
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

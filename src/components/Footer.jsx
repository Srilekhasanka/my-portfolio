import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">SS</span>
              <span className="logo-text">Srilekha Sanka</span>
            </div>
            <p className="footer-tagline">
              Building scalable solutions with passion and precision.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <div className="links-grid">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="contact-links">
              <a href="tel:7569977592" className="footer-link">
                📞 7569977592
              </a>
              <a href="mailto:srilekhasanka@gmail.com" className="footer-link">
                ✉️ srilekhasanka@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/srilekha-sanka-b5a74b271"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Srilekha Sanka. Built with React & Vite.
          </p>
          <p className="footer-heart">
            Made with 💜 and ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="greeting">
            <span className="wave">👋</span>
            <span className="greeting-text">Hello, I'm</span>
          </div>
          <h1 className="hero-title">
            Srilekha Sanka
          </h1>
          <div className="title-highlight">
            <span className="highlight-text">Node.js Developer</span>
          </div>
          <p className="hero-description">
            Crafting scalable backend solutions with Node.js, Express.js, and TypeScript.
            Passionate about clean code, performance optimization, and building meaningful applications.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
          <div className="hero-links">
            <a href="tel:7569977592" className="hero-link" title="Phone">
              📞
            </a>
            <a href="mailto:mohanasrisanka@gmail.com" className="hero-link" title="Email">
              ✉️
            </a>
            <a
              href="https://www.linkedin.com/in/srilekha-sanka-b5a74b271"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
              title="LinkedIn"
            >
              💼
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;

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
              I'm a <strong>Backend Engineer</strong> with 2.5 years building high-throughput
              <strong> Node.js / TypeScript</strong> services across <strong>EV charging, EdTech,
              and fintech</strong> verticals. My work centers on OCPP protocol systems,
              multi-gateway payment integrations, and AWS-native cloud infrastructure.
            </p>
            <p className="about-description">
              At <strong>Antino Labs</strong>, I'm the sole backend engineer behind OCPP integration
              and ELK-based charger log monitoring across two live EV platforms — LionCharge and
              Axon Energies — and I designed Rayna Tours' <strong>AI social media admin</strong>
              with GPT-4o caption generation and an async image pipeline through Lambda, Fargate,
              and Nano Banana (Gemini 2.5 Flash).
            </p>
            <p className="about-description">
              I have a strong bias toward <strong>clean architecture and measurable production
              outcomes</strong> — query plans that cut dashboard load 60%, sub-2s SLA alerting,
              zero payment integrity incidents post-launch, and 25% lift in 30-day learner
              retention. I work best where backend correctness meets real user impact.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Live EV Charging Stations</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💳</div>
              <div className="stat-number">3</div>
              <div className="stat-label">Payment Gateways Shipped</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Users Served in Production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

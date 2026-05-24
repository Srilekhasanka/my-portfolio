import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "Rising Star Award — Antino Labs (2024)",
      description: "Recognized for shipping multiple production systems end-to-end within first year."
    },
    {
      icon: "⚡",
      title: "OCPP Lead",
      description: "Sole backend engineer for OCPP integration + ELK charger log monitoring across two live EV platforms (LionCharge, Axon Energies)."
    },
    {
      icon: "🤖",
      title: "AI Platform Architect",
      description: "Designed and delivered Rayna Tours' AI social media admin — GPT-4o captions, Nano Banana async image gen, multi-platform scheduling via PostForme."
    },
    {
      icon: "💳",
      title: "3-Gateway Payments",
      description: "Shipped Stripe, Razorpay, and Cashfree integrations across EdTech and EV production platforms — zero payment integrity incidents post-launch."
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Impact</span>
          <h2 className="section-title">Achievements</h2>
        </div>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-body">
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

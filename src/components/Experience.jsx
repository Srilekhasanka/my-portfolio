import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Antino Labs Pvt. Ltd.",
      position: "Backend Developer",
      period: "Aug 2024 – Present",
      location: "Hyderabad",
      icon: "💼",
      summary: "Sole backend engineer on OCPP integration + ELK charger log monitoring across two live EV platforms. Designed Rayna Tours' AI social media admin end-to-end.",
      responsibilities: [
        "Shipped OCPP 1.6/2.0 WebSocket backend for real-time remote start/stop, diagnostics, and firmware updates across 100+ live charging stations (LionCharge).",
        "Cut dashboard load time ~60% on multi-tenant operator portal via composite indexing and PostgreSQL materialized views.",
        "Integrated Razorpay (LionCharge) and Cashfree (Axon Energies) — checkout, webhook signature verification, refund workflows, and reconciliation against session records.",
        "Built AWS SNS notification pipeline delivering charger fault alerts, session completions, and payment confirmations with sub-2s SLA.",
        "Architected Elasticsearch index with explicit keyword/date/integer mappings + rolling index templates and ILM policies for OCPP charger log retention.",
        "Designed async AI image pipeline for Rayna Tours: SQS → Lambda → Fargate → Nano Banana (Gemini 2.5 Flash) → S3 → CloudFront, delivered via WebSocket in 3–8s.",
        "Integrated GPT-4o caption generation returning 3 strategic variants (FOMO hook · storytelling · direct sell); admin rejections loop back as negative examples to self-improve quality.",
        "Implemented 5-state post lifecycle (Draft → Review → Approved → Scheduled → Published) with BullMQ Redis scheduler and UTM injection for GA4 attribution."
      ]
    },
    {
      company: "Independent Consulting",
      position: "Freelance Backend Developer",
      period: "Nov 2023 – Jul 2024",
      location: "Remote",
      icon: "🧩",
      summary: "Shipped backend systems for EdTech LMS and US-based EdTech fintech — auth at scale, secure media delivery, payment integrations, and a rule-based credit engine.",
      responsibilities: [
        "Architected JWT + refresh-token RBAC authentication serving 5,000+ users across student, instructor, and admin roles (Vaaku Learning).",
        "Built gamification engine — XP, streaks, badges, leaderboard — improving 30-day learner retention by ~25%.",
        "Integrated S3 + CloudFront CDN cutting media load latency ~45%.",
        "Automated onboarding and re-engagement campaigns via n8n chatbot workflows, eliminating 8+ hrs/week of manual outreach.",
        "Built Stripe integration for loan disbursement and EMI repayments (OpenCredits) — checkout sessions, subscription billing, webhook signature verification, refund flows with full audit logging.",
        "Engineered S3 + CloudFront signed-URL pipeline for secure course video uploads and protected CDN streaming to US-based learners.",
        "Designed rule-based credit eligibility engine (MongoDB) generating real-time lending decisions; fixed critical scoring bugs to unblock first commercial lending partner go-live."
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={`${experience.position}-${experience.period}-${index}`} className="timeline-item">
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
                {experience.summary && (
                  <p className="experience-summary">{experience.summary}</p>
                )}
                <ul className="responsibilities">
                  {experience.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

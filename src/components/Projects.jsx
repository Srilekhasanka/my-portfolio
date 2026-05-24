import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "LionCharge — Enterprise EV Charging Platform",
      icon: "⚡",
      company: "Antino Labs",
      description: "Production OCPP 1.6/2.0 backend powering real-time charger control, multi-tenant operator dashboards, and Razorpay-based session billing across 100+ live charging stations.",
      highlights: [
        "Shipped OCPP 1.6/2.0 WebSocket backend for real-time remote start/stop, diagnostics, and firmware updates across 100+ live charging stations.",
        "Engineered multi-tenant RBAC (operators, site managers, drivers); optimized PostgreSQL query plans cutting dashboard load time ~60% via composite indexing and materialized views.",
        "Integrated Razorpay for session billing — checkout initiation, webhook signature verification, refund workflows, and payment reconciliation against session records.",
        "Built AWS SNS notification pipeline delivering charger fault alerts, session completions, and payment confirmations with sub-2s SLA."
      ],
      tags: ["Node.js", "TypeScript", "PostgreSQL", "OCPP 1.6/2.0", "WebSockets", "Razorpay", "AWS SNS"]
    },
    {
      title: "Axon Energies — EV Fleet Management & Log Monitoring",
      icon: "📡",
      company: "Antino Labs",
      description: "ELK-powered observability platform for EV fleets — explicit Elasticsearch mappings, ILM-driven retention, and Cashfree billing for charging subscriptions.",
      highlights: [
        "Architected dedicated Elasticsearch index with explicit keyword/date/integer field mappings for OCPP charger log ingestion — preventing auto-mapping failures requiring costly full reindex.",
        "Configured rolling index templates + ILM policies for time-series log retention with automatic shard rollover as charger fleet scales.",
        "Integrated Cashfree for EV session billing and fleet subscriptions — order creation, webhook verification, payment capture, and idempotent refund flows.",
        "Built OCPP boot-notification, meter-value, and status-change event ingestion into ELK, powering real-time Kibana dashboards for fleet uptime, fault codes, and energy throughput."
      ],
      tags: ["Node.js", "TypeScript", "PostgreSQL", "OCPP", "Elasticsearch", "Kibana", "Cashfree", "AWS EC2"]
    },
    {
      title: "Rayna Tours — AI Social Media Management Platform",
      icon: "🤖",
      company: "Antino Labs",
      description: "End-to-end AI-driven social publishing admin — GPT-4o caption generation, async Nano Banana image pipeline, and BullMQ-orchestrated 5-state post lifecycle with GA4 attribution.",
      highlights: [
        "Built social publishing admin platform — PostForme unified API publishes composed posts to Instagram, LinkedIn, Facebook, and X in a single call, eliminating per-platform integration overhead.",
        "Integrated GPT-4o caption generation returning 3 strategic variants (FOMO hook · storytelling · direct sell) per campaign; admin rejection notes looped back as negative examples to self-improve output quality.",
        "Designed async AI image pipeline: SQS → Lambda → Fargate → Nano Banana (Gemini 2.5 Flash) → S3 → CloudFront; result delivered to composer via WebSocket in 3–8s.",
        "Implemented 5-state post lifecycle (Draft → Review → Approved → Scheduled → Published) with BullMQ Redis scheduler and UTM injection on all outgoing links for GA4 attribution."
      ],
      tags: ["Node.js", "TypeScript", "GPT-4o", "Nano Banana", "BullMQ", "SQS", "Lambda", "Fargate", "S3", "CloudFront"]
    },
    {
      title: "Vaaku Learning — EdTech LMS Platform",
      icon: "📚",
      company: "Freelance",
      description: "Full-stack LMS serving 5,000+ users — JWT refresh-token auth, gamification engine with measurable retention lift, and n8n-automated lifecycle campaigns.",
      highlights: [
        "Architected JWT + refresh-token RBAC authentication serving 5,000+ users across student, instructor, and admin roles.",
        "Built gamification engine (XP, streaks, badges, leaderboard) improving 30-day learner retention by ~25%.",
        "Integrated S3 + CloudFront CDN cutting media load latency ~45%.",
        "Automated onboarding and re-engagement campaigns via n8n chatbot workflows — eliminated 8+ hrs/week of manual outreach."
      ],
      tags: ["Node.js", "TypeScript", "PostgreSQL", "JWT", "AWS S3", "CloudFront", "n8n"]
    },
    {
      title: "OpenCredits — EdTech Fintech & Student Lending",
      icon: "🎓",
      company: "Freelance · US-based",
      description: "Student lending platform integrating Stripe-based loan flows, secure signed-URL course delivery, and a MongoDB rule-based credit eligibility engine.",
      highlights: [
        "Built Stripe integration for loan disbursement and EMI repayments — checkout sessions, subscription billing, webhook signature verification, refund flows with full audit logging.",
        "Engineered S3 + CloudFront signed-URL pipeline for secure course video uploads and protected CDN streaming delivery to US-based learners.",
        "Designed rule-based credit eligibility engine (MongoDB) generating real-time lending decisions; fixed critical assessment logic bugs ensuring 100% score accuracy — unblocking first commercial lending partner go-live."
      ],
      tags: ["Node.js", "TypeScript", "MongoDB", "Stripe", "AWS S3", "CloudFront CDN"]
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
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  {project.company && (
                    <span className="project-company">{project.company}</span>
                  )}
                </div>
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

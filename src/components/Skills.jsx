import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & APIs",
      icon: "⚙️",
      groups: [
        {
          items: [
            { name: "Node.js", detail: "Scalable services, async patterns, event-driven architecture" },
            { name: "TypeScript", detail: "Type-safe backend systems, strict mode, generics" },
            { name: "Express.js", detail: "Modular routing, middleware pipelines, REST APIs" },
            { name: "WebSockets", detail: "Real-time bidirectional channels (OCPP 1.6/2.0)" },
            { name: "JWT & RBAC", detail: "Refresh-token auth, multi-tenant role-based access" },
            { name: "BullMQ & State Machines", detail: "Redis-backed queues, 5-state post lifecycle" }
          ]
        }
      ]
    },
    {
      title: "Databases & Data Layer",
      icon: "🗄️",
      groups: [
        {
          items: [
            { name: "PostgreSQL", detail: "Schema design, composite indexing, materialized views, query plans" },
            { name: "MongoDB", detail: "Rule-based eligibility engines, flexible schemas" },
            { name: "Redis", detail: "Caching, BullMQ scheduling, ephemeral state" },
            { name: "Elasticsearch / Kibana (ELK)", detail: "Index templates, ILM, OCPP log ingestion + dashboards" }
          ]
        }
      ]
    },
    {
      title: "AWS Cloud Infrastructure",
      icon: "☁️",
      groups: [
        {
          items: [
            { name: "EC2 · Fargate · Lambda", detail: "Compute, containerized workloads, async pipelines" },
            { name: "S3 + CloudFront CDN", detail: "Signed URLs, secure media delivery, global edge caching" },
            { name: "SQS · SNS", detail: "Async queues, sub-2s fault alerting (SMS pipeline)" },
            { name: "IAM · VPC", detail: "Least-privilege policies, network isolation" }
          ]
        }
      ]
    },
    {
      title: "Payments & EV Protocol",
      icon: "💳",
      groups: [
        {
          items: [
            { name: "Stripe", detail: "Subscriptions, loan disbursement, EMI repayments, webhook signing" },
            { name: "Razorpay", detail: "EV session billing, refund workflows, payment reconciliation" },
            { name: "Cashfree", detail: "Fleet subscriptions, idempotent refund flows" },
            { name: "OCPP 1.6 / 2.0", detail: "Charger communication: boot, meter-value, status, firmware update" }
          ]
        }
      ]
    },
    {
      title: "AI & Marketing Analytics",
      icon: "🤖",
      groups: [
        {
          items: [
            { name: "GPT-4o", detail: "Caption generation, strategic variant prompting, rejection-loop tuning" },
            { name: "Nano Banana (Gemini 2.5 Flash)", detail: "Async image generation pipeline integration" },
            { name: "n8n", detail: "Workflow automation, chatbot onboarding flows" },
            { name: "PostForme", detail: "Multi-platform publishing (Instagram, LinkedIn, Facebook, X)" },
            { name: "GA4 + UTM", detail: "Attribution injection, marketing analytics pipeline" }
          ]
        }
      ]
    },
    {
      title: "Tools & Practices",
      icon: "🛠️",
      groups: [
        {
          items: [
            { name: "Git / GitHub", detail: "Trunk-based flow, code review, PR hygiene" },
            { name: "Postman", detail: "API contract testing, collection-driven QA" },
            { name: "Docker (basics)", detail: "Containerized local + Fargate workloads" },
            { name: "CI/CD", detail: "Build, test, and deploy automation" },
            { name: "Agile / Scrum", detail: "Sprint planning, demos, retrospectives" }
          ]
        }
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
                {category.groups.map((group, groupIndex) => (
                  <div key={groupIndex} className="skill-group">
                    {group.title && (
                      <div className="skill-group-title">{group.title}</div>
                    )}
                    <div className="skill-items">
                      {group.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="skill-item">
                          <span className="skill-name">{item.name}</span>
                          {item.detail && (
                            <span className="skill-detail">{item.detail}</span>
                          )}
                        </div>
                      ))}
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

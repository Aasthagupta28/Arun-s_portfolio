import type { ReactNode } from "react";
import ProjectsGrid from "./projects-grid";
import { getDomain, projects, type Project } from "./projects-data";
import SiteHeader from "./site-header";

const EMAIL = "arunkumarbhardwaj1999@gmail.com";

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "8", label: "Products delivered" },
  { value: "146K+", label: "Records processed by AI" },
  { value: "440+", label: "Automated tests written" },
];

const services = [
  {
    icon: "⌘",
    title: "Full-stack web apps",
    description: "Fast, responsive products — from database and APIs to the interface.",
    tags: ["Next.js", "React", "FastAPI", "PostgreSQL"],
  },
  {
    icon: "✦",
    title: "AI & automation",
    description: "AI-powered document processing and workflows that save hours of manual work.",
    tags: ["Python", "OpenAI API", "Celery", "PyMuPDF"],
  },
  {
    icon: "◎",
    title: "Backend & integrations",
    description: "Reliable APIs, data pipelines, and healthcare system integrations.",
    tags: ["Django", "Kafka", "AWS", "pytest"],
  },
];

const featured = {
  category: "AI & Documents · Freelance (Upwork)",
  title: "AI-Powered Document Metadata Pipeline",
  description:
    "Turns scanned magazine archives into clean, structured metadata. OpenAI extracts names, chapters, and subjects, validates them against client lists, and flags uncertain results for human review.",
  metrics: [
    { value: "146K+", label: "Records checked" },
    { value: "1,670", label: "Pages in one batch" },
    { value: "440+", label: "Tests written" },
  ],
  highlights: [
    "Secure multi-tenant platform (JWT)",
    "Hundreds of PDFs processed in parallel",
    "Crash-safe resume & cost estimates",
    "QA reports and one-click ZIP export",
  ],
  stack: ["Python", "FastAPI", "React", "OpenAI API", "AWS EC2"],
};

const liveProjects = projects.filter(
  (project): project is Project & { link: string } => Boolean(project.link),
);

const experience = [
  {
    period: "Aug 2025 — Present",
    role: "Python Backend & AI Automation Engineer",
    company: "Orbantis Technologies · Remote",
    summary: "APIs, AI automations, and AWS-backed client products.",
    current: true,
  },
  {
    period: "Oct 2024 — Aug 2025",
    role: "Python Developer",
    company: "Nath Outsourcing Solutions",
    summary: "Django APIs and automation for React applications.",
  },
  {
    period: "Aug 2023 — Sep 2024",
    role: "Python Developer",
    company: "Vqcodes Software Solutions",
    summary: "Django and React apps, APIs, and automations.",
  },
  {
    period: "Aug 2021 — Jul 2023",
    role: "Freelance Python Developer",
    company: "Self-employed · Remote",
    summary: "Django apps and automations for small businesses.",
  },
];

const education = [
  {
    degree: "MCA",
    name: "Master of Computer Applications",
    school: "Himachal Pradesh Technical University",
    period: "2019 — 2021 · First Division",
  },
  {
    degree: "BCA",
    name: "Bachelor of Computer Applications",
    school: "Himachal Pradesh University",
    period: "2016 — 2019",
  },
];

function SectionHeading({
  number,
  label,
  title,
  text,
}: {
  number: string;
  label: string;
  title: ReactNode;
  text?: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-label">
        <span className="section-number">{number}</span>
        {label}
      </span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function WindowBar({ label }: { label: string }) {
  return (
    <div className="window-bar">
      <span className="window-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="window-url">{label}</span>
    </div>
  );
}

function HeroShowcase() {
  return (
    <div className="showcase">
      <div className="window live-window">
        <WindowBar label="Live projects" />
        <ul className="live-list">
          {liveProjects.map((project) => (
            <li key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title} (opens in a new tab)`}
              >
                <span className="live-dot" aria-hidden="true" />
                <span className="live-name">
                  <strong>{project.title}</strong>
                  <small>{getDomain(project.link)}</small>
                </span>
                <span className="live-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a className="window window--front" href="#projects">
        <WindowBar label="Featured case study" />
        <div className="window-body">
          <p className="window-category">{featured.category}</p>
          <p className="window-title">{featured.title}</p>
          <dl className="window-metrics">
            {featured.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="window-tags">
            {featured.stack.slice(0, 4).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="home">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy" data-reveal>
              <span className="badge">
                <span className="status-dot" /> Available for new projects
              </span>
              <p className="hero-hello">
                Hi, I&apos;m <strong>Arun Kumar</strong> — Software Engineer
              </p>
              <h1>
                I build software that makes complex work <em>simple.</em>
              </h1>
              <p className="hero-text">
                Full-stack &amp; Python engineer specialising in AI automation,
                backend systems, and clean web products.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View my work <span aria-hidden="true">→</span>
                </a>
                <a className="button button-ghost" href="#contact">
                  Contact me
                </a>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <HeroShowcase />
            </div>
          </div>

          <div className="container">
            <dl className="stats" data-reveal>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <SectionHeading
              number="01"
              label="What I do"
              title={<>How I can <em>help</em></>}
            />
            <div className="services-grid">
              {services.map((service, index) => (
                <article className="card service-card" key={service.title} data-reveal>
                  <div className="service-top">
                    <span className="service-icon" aria-hidden="true">{service.icon}</span>
                    <span className="service-index">0{index + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="tags">
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="projects">
          <div className="container">
            <SectionHeading
              number="02"
              label="Projects"
              title={<>Selected <em>work</em></>}
              text="Real products built for real clients."
            />

            <article className="featured" data-reveal>
              <div className="featured-main">
                <span className="featured-badge">★ Featured project</span>
                <p className="category">{featured.category}</p>
                <h3>{featured.title}</h3>
                <p className="featured-text">{featured.description}</p>
                <ul className="checklist">
                  {featured.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="tags tags--dark">
                  {featured.stack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="featured-metrics">
                {featured.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <div className="more-heading" data-reveal>
              <h3>More projects</h3>
              <p>
                {projects.length} products · {liveProjects.length} live sites
              </p>
            </div>

            <ProjectsGrid projects={projects} />

            <a className="project-cta" href="#contact" data-reveal>
              <div>
                <h3>
                  Want something <em>similar?</em>
                </h3>
                <p>Tell me about your idea and let&apos;s build it together.</p>
              </div>
              <span className="button button-light">
                Start a project <span aria-hidden="true">→</span>
              </span>
            </a>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <SectionHeading
              number="03"
              label="Experience"
              title={<>Where I&apos;ve <em>worked</em></>}
            />
            <div className="experience-layout">
              <ol className="timeline">
                {experience.map((job) => (
                  <li
                    className={`timeline-item${job.current ? " is-current" : ""}`}
                    key={job.period}
                    data-reveal
                  >
                    <span className="timeline-period">
                      {job.period}
                      {job.current ? <em>Current</em> : null}
                    </span>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                    <p>{job.summary}</p>
                  </li>
                ))}
              </ol>

              <div className="education" id="education">
                <h3 className="education-title">
                  <span className="section-number">04</span> Education
                </h3>
                {education.map((item) => (
                  <article className="card education-card" key={item.degree} data-reveal>
                    <span className="degree">{item.degree}</span>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.school}</p>
                      <span>{item.period}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-box" data-reveal>
              <span className="section-label section-label--light">
                <span className="section-number">05</span>
                Contact
              </span>
              <h2>
                Have a project in <em>mind?</em>
              </h2>
              <p>Let&apos;s talk about how I can help you build it.</p>
              <a className="contact-email" href={`mailto:${EMAIL}?subject=Project%20inquiry`}>
                <span>
                  {EMAIL.split("@")[0]}@<wbr />
                  {EMAIL.split("@")[1]}
                </span>{" "}
                <span aria-hidden="true">↗</span>
              </a>
              <div className="contact-actions">
                <a
                  className="button button-outline-light"
                  href="https://www.linkedin.com/in/arunkumarbhardwaj1999/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a
                  className="button button-outline-light"
                  href="https://github.com/arunkumarbhardwaj1999"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Arun Kumar · Built with Next.js</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

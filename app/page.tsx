import SiteHeader from "./site-header";

function SpellingText({ text }: { text: string }) {
  const words = text.split(" ");
  const letterCount = Array.from(text.replaceAll(" ", "")).length;
  const duration = Math.max(4.8, letterCount * 0.075 + 3.8);

  return (
    <span className="spelling-text" aria-hidden="true">
      {words.map((word, wordIndex) => {
        const letterIndex = words
          .slice(0, wordIndex)
          .reduce((count, previousWord) => count + previousWord.length, 0);

        return (
          <span className="spelling-word" key={`${word}-${wordIndex}`}>
            {Array.from(word).map((letter, index) => {
              const currentIndex = letterIndex + index;

              return (
                <span
                  key={`${letter}-${currentIndex}`}
                  style={{
                    animationDelay: `${currentIndex * 75}ms`,
                    animationDuration: `${duration}s`,
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
  highlights?: string[];
};

type ProjectMetric = {
  value: string;
  label: string;
};

const featuredProject: Project & { highlights: string[] } = {
  number: "01",
  category: "AI & DOCUMENTS · FREELANCE (UPWORK)",
  title: "AI-Powered Document Metadata Pipeline",
  description:
    "Turns scanned, OCR'd magazine archives into structured, validated metadata. OpenAI extracts and matches names, chapters, page titles, and subjects against client authority lists, flagging uncertain results for human review.",
  highlights: [
    "Built a JWT-secured, multi-tenant platform with isolated client authority files, settings, and run history.",
    "Processes hundreds of PDFs concurrently with live progress and crash-safe, quota-safe resume.",
    "Creates QA reports, pre-run cost estimates, and one-click ZIP exports with a run manifest and processor fingerprint.",
    "Wrote 440+ tests and verified releases against production data.",
  ],
  stack: [
    "Python",
    "FastAPI",
    "React",
    "Vite",
    "OpenAI API",
    "PyMuPDF",
    "pandas",
    "AWS EC2",
    "Vercel",
  ],
};

const projects: Project[] = [
  featuredProject,
  {
    number: "02",
    category: "FILM & MEDIA",
    title: "ONE WORLD 3D",
    description:
      "Built script-to-production workflows for an AI-powered media platform.",
    link: "https://oneworld3d.ai/",
    linkLabel: "Visit ONE WORLD 3D",
    stack: ["Django", "React", "Celery", "OpenAI"],
  },
  {
    number: "03",
    category: "E-COMMERCE",
    title: "Artroom by Artjazz",
    description:
      "Built an art store with a responsive gallery, wishlist, cart, and PayPal checkout.",
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "PayPal",
    ],
    link: "https://artroombyartjazz.com",
    linkLabel: "Visit live store",
  },
  {
    number: "04",
    category: "CRM & AGENCY TOOLS",
    title: "AgencyFlow CRM",
    description:
      "Brought agency pipelines, client delivery, and GST invoicing into one CRM.",
    link: "https://agencyflow-frontend-lac.vercel.app/",
    linkLabel: "Visit AgencyFlow",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  {
    number: "05",
    category: "HR & ADMIN",
    title: "Smart HR Management System",
    description:
      "Role-based dashboard for employee records, attendance, leave, recruitment, and payroll.",
    stack: ["Next.js", "React", "Tailwind CSS", "Python", "Django"],
  },
  {
    number: "06",
    category: "E-COMMERCE",
    title: "Wildwood Carvings — Handicraft Store",
    description:
      "Online storefront for handcrafted wooden showpieces, built with Next.js and Django.",
    stack: ["Next.js", "React", "Tailwind CSS", "Python", "Django"],
    link: "https://www.wildwoodcarvings.com/",
    linkLabel: "Visit Wildwood Carvings",
  },
  {
    number: "07",
    category: "HEALTHCARE & DATA",
    title: "Batch Patient Management Loader",
    description:
      "Improved patient-file validation and processing, fixing 25+ rules, duplicate checks, and SFTP retries.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Kafka", "AWS S3"],
  },
  {
    number: "08",
    category: "HEALTHCARE & INTEGRATIONS",
    title: "License Management Sync Service",
    description:
      "Replaced a legacy PHP/Oracle system with a Python healthcare sync service; added 135 tests at 99% coverage.",
    stack: ["Python", "FastAPI", "PostgreSQL", "pytest"],
  },
];

const featuredMetrics: ProjectMetric[] = [
  { value: "146K+", label: "member & chapter records checked" },
  { value: "26 issues", label: "1,670 pages processed in a client batch" },
  { value: "440+", label: "automated tests written" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-profile">
              <div className="hero-profile-main">
                <p className="eyebrow hero-eyebrow">
                  <span className="status-dot" />
                  SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> PYTHON · AI · FULL STACK
                </p>
                <h1 id="hero-title" aria-label="Arun Kumar">
                  <SpellingText text="Arun Kumar" />
                  <span aria-hidden="true">.</span>
                </h1>
                <p className="hero-tagline">
                  I build software that makes complex work easier to run.
                </p>
                <p className="hero-description">
                  Full-stack and backend engineer working across AI-assisted
                  automation, healthcare data, and customer-facing products.
                  I take projects from workflow discovery through APIs,
                  integrations, and production-ready interfaces.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#projects">
                    Explore case studies <span aria-hidden="true">↓</span>
                  </a>
                  <a className="button button-secondary" href="#experience">
                    Career &amp; education <span aria-hidden="true">↘</span>
                  </a>
                </div>
              </div>
              <aside className="profile-facts" aria-label="Professional overview">
                <p className="profile-facts-heading">Professional overview</p>
                <dl>
                  <div>
                    <dt>Current role</dt>
                    <dd>Python Backend &amp; AI Automation Engineer</dd>
                  </div>
                  <div>
                    <dt>Core focus</dt>
                    <dd>Backend systems, workflow automation, healthcare data</dd>
                  </div>
                  <div>
                    <dt>Experience</dt>
                    <dd>Product teams, client delivery, and independent projects</dd>
                  </div>
                  <div>
                    <dt>Education</dt>
                    <dd>MCA · BCA</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-shell">
            <div className="section-kicker">
              <span>01 / PROJECTS</span>
            </div>
            <div className="projects-heading">
              <h2 aria-label="Selected projects">
                <SpellingText text="Selected projects" />
              </h2>
              <p>
                Real products and systems, with the problem, solution, and
                results explained clearly.
              </p>
            </div>
            <article className="case-study-feature" data-reveal>
              <div className="case-study-heading">
                <p className="case-study-kicker">
                  CASE STUDY 01 <span>/</span> {featuredProject.category}
                </p>
                <h3>{featuredProject.title}</h3>
                <p className="case-study-summary">{featuredProject.description}</p>
              </div>
              <div className="case-study-body">
                <div className="case-study-explanation">
                  <div>
                    <h4>The challenge</h4>
                    <p>
                      Scanned magazine archives contain valuable information,
                      but OCR text is inconsistent and difficult to organize.
                      Names, chapters, page titles, and subjects must also match
                      approved authority lists.
                    </p>
                  </div>
                  <div>
                    <h4>The solution</h4>
                    <p>
                      A multi-tenant processing platform extracts metadata,
                      validates it against client reference data, and sends
                      uncertain results for human review. Batch progress,
                      resumable runs, QA reports, and ZIP exports support the
                      workflow from upload to delivery.
                    </p>
                  </div>
                </div>
                <aside className="case-study-results" aria-label="Project results">
                  {featuredMetrics.map((metric) => (
                    <div key={metric.value}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </aside>
              </div>
              <div className="case-study-highlights">
                <h4>What was delivered</h4>
                <ul>
                  {featuredProject.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="case-study-footer">
                <ul className="case-study-stack" aria-label="Project technologies">
                  {featuredProject.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <p>JWT security · multi-tenant workflows · human review</p>
              </div>
            </article>

            <div className="project-list-heading">
              <h3>More projects</h3>
              <p>{projects.length - 1} more products and systems</p>
            </div>
            <div className="project-list">
              {projects.slice(1).map((project) => (
                <article className="project-list-item" key={project.number} data-reveal>
                  <span className="project-list-number">{project.number}</span>
                  <div className="project-list-main">
                    <p className="project-list-category">{project.category}</p>
                    <h4>{project.title}</h4>
                    <p className="project-list-description">{project.description}</p>
                    <ul className="project-list-stack" aria-label={`${project.title} technologies`}>
                      {project.stack.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                  {project.link ? (
                    <a
                      className="project-list-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.linkLabel ?? "View project"} (opens in a new tab)`}
                    >
                      <span>{project.linkLabel ?? "View project"}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="project-list-link project-list-link--private">
                      Additional project
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-shell">
            <div className="section-kicker">
              <span>02 / EXPERIENCE</span>
            </div>
            <div className="experience-heading">
              <h2 aria-label="Where I've worked">
                <SpellingText text="Where I've worked" />
              </h2>
              <p>My roles, workplaces, and the kind of work I did.</p>
            </div>
            <div className="experience-grid">
              <article className="experience-card experience-card--current" data-reveal>
                <div className="experience-card-top">
                  <span className="experience-period">Aug 2025 — Present · Remote</span>
                  <span className="experience-status">Current role</span>
                </div>
                <div className="experience-details">
                  <h3>Python Backend &amp; AI Automation Engineer</h3>
                  <p className="experience-company">Orbantis Technologies</p>
                  <p>Build APIs, AI automations, and AWS-backed client products.</p>
                </div>
              </article>
              <article className="experience-card" data-reveal>
                <div className="experience-card-top">
                  <span className="experience-period">Oct 2024 — Aug 2025 · On-site</span>
                </div>
                <div className="experience-details">
                  <h3>Python Developer</h3>
                  <p className="experience-company">Nath Outsourcing Solutions Pvt. Ltd.</p>
                  <p>Built Django APIs and automation for React applications.</p>
                </div>
              </article>
              <article className="experience-card" data-reveal>
                <div className="experience-card-top">
                  <span className="experience-period">Aug 2023 — Sep 2024 · On-site</span>
                </div>
                <div className="experience-details">
                  <h3>Python Developer</h3>
                  <p className="experience-company">Vqcodes Software Solutions LLP</p>
                  <p>Developed Django and React apps, APIs, and automations.</p>
                </div>
              </article>
              <article className="experience-card" data-reveal>
                <div className="experience-card-top">
                  <span className="experience-period">Aug 2021 — Jul 2023 · Remote</span>
                </div>
                <div className="experience-details">
                  <h3>Freelance Python Developer</h3>
                  <p className="experience-company">Self-employed</p>
                  <p>Created Django apps, APIs, and automations for small businesses.</p>
                </div>
              </article>
            </div>

            <div className="education-block" id="education">
              <div className="education-heading">
                <div>
                  <p className="education-kicker">ACADEMIC QUALIFICATIONS</p>
                  <h3>Education</h3>
                </div>
                <p>
                  Formal training in computer applications, software
                  development, and information systems.
                </p>
              </div>
              <div className="education-grid">
                <article className="education-card" data-reveal>
                  <span className="experience-period">Aug 2019 — Aug 2021</span>
                  <div className="education-card-body">
                    <span className="education-degree-mark" aria-hidden="true">MCA</span>
                    <div>
                      <h4>Master of Computer Applications</h4>
                      <p>Himachal Pradesh Technical University</p>
                      <span className="education-result">First Division</span>
                    </div>
                  </div>
                </article>
                <article className="education-card" data-reveal>
                  <span className="experience-period">Aug 2016 — Aug 2019</span>
                  <div className="education-card-body">
                    <span className="education-degree-mark" aria-hidden="true">BCA</span>
                    <div>
                      <h4>Bachelor of Computer Applications</h4>
                      <p>Himachal Pradesh University</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities-section" id="capabilities">
          <div className="section-shell">
            <div className="section-kicker">
              <span>03 / CAPABILITIES</span>
            </div>
            <div className="capabilities-heading">
              <h2 aria-label="What I work on">
                <SpellingText text="What I work on" />
              </h2>
              <p>
                The main areas I work in, with the tools I use to build them.
              </p>
            </div>
            <div className="capabilities-grid">
              <article className="capability-card" data-reveal>
                <span className="capability-index">01</span>
                <h3>Full-stack product development</h3>
                <p>
                  Web applications and e-commerce products built across
                  responsive interfaces, APIs, and data layers.
                </p>
                <ul className="capability-tags" aria-label="Related technologies">
                  <li>Next.js</li>
                  <li>React</li>
                  <li>FastAPI</li>
                  <li>PostgreSQL</li>
                </ul>
              </article>
              <article className="capability-card" data-reveal>
                <span className="capability-index">02</span>
                <h3>AI &amp; workflow automation</h3>
                <p>
                  Document metadata extraction, concurrent batch processing,
                  validation, and human-review workflows.
                </p>
                <ul className="capability-tags" aria-label="Related technologies">
                  <li>Python</li>
                  <li>OpenAI API</li>
                  <li>PyMuPDF</li>
                  <li>Celery</li>
                </ul>
              </article>
              <article className="capability-card" data-reveal>
                <span className="capability-index">03</span>
                <h3>Healthcare &amp; data integrations</h3>
                <p>
                  Patient-file validation, duplicate checks, license
                  synchronization, and integration-heavy backend services.
                </p>
                <ul className="capability-tags" aria-label="Related technologies">
                  <li>FastAPI</li>
                  <li>PostgreSQL</li>
                  <li>Kafka</li>
                  <li>AWS S3</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-shell">
            <div className="section-kicker">
              <span>04 / PROFESSIONAL APPROACH</span>
            </div>
            <div className="about-content">
              <div className="about-copy">
                <h2 aria-label="How I work">
                  <SpellingText text="How I work" />
                </h2>
                <p>
                  I&apos;m Arun, a software engineer focused on dependable
                  backend systems and useful product experiences. My work
                  combines hands-on Python development with an understanding
                  of the people and operational steps behind each system.
                </p>
              </div>
              <div className="approach-list">
                <article>
                  <span>01</span>
                  <div>
                    <h3>Understand the process</h3>
                    <p>Start with the real workflow, its users, inputs, and edge cases.</p>
                  </div>
                </article>
                <article>
                  <span>02</span>
                  <div>
                    <h3>Build for reliability</h3>
                    <p>Make validation, testing, failure handling, and clear feedback part of the system.</p>
                  </div>
                </article>
                <article>
                  <span>03</span>
                  <div>
                    <h3>Deliver the whole product</h3>
                    <p>Connect APIs, data, automation, and interfaces into a usable experience.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-shell">
            <div className="contact-kicker">
              <span className="status-dot" /> GET IN TOUCH
            </div>
            <h2 aria-label="Let's build something useful">
              <SpellingText text="Let's build something useful" />
            </h2>
            <a
              className="button button-contact"
              href="mailto:arunkumarbhardwaj1999@gmail.com?subject=Project%20inquiry"
            >
              Send me an email <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-email" href="mailto:arunkumarbhardwaj1999@gmail.com">
              arunkumarbhardwaj1999@gmail.com
            </a>
            <nav className="social-links" aria-label="Social profiles">
              <a href="https://github.com/arunkumarbhardwaj1999" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/arunkumarbhardwaj1999/" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </nav>
            <span className="contact-orbit contact-orbit--one" aria-hidden="true" />
            <span className="contact-orbit contact-orbit--two" aria-hidden="true" />
            <span className="contact-spark contact-spark--one" aria-hidden="true">✳</span>
            <span className="contact-spark contact-spark--two" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-about">
            <a className="footer-brand" href="#home">ARUN KUMAR<span>.</span></a>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#capabilities">Expertise</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Arun Kumar</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

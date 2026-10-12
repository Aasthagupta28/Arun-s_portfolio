const focusAreas = [
  {
    number: "01",
    title: "Full-stack development",
    description:
      "From thoughtful interfaces to dependable backend systems, building across the complete product experience.",
    tags: ["Frontend", "Backend", "Product thinking"],
    className: "focus-card--build",
  },
  {
    number: "02",
    title: "Workflow automation",
    description:
      "Making repetitive processes simpler with connected tools, clear logic, and automation that fits the way teams work.",
    tags: ["Process design", "Integrations", "Efficiency"],
    className: "focus-card--automation",
  },
  {
    number: "03",
    title: "Healthcare domain",
    description:
      "Bringing healthcare domain knowledge into software experiences where clarity, trust, and people matter.",
    tags: ["Healthcare", "Domain knowledge", "Human-centred"],
    className: "focus-card--health",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand the workflow",
    description:
      "Start with the people, the process, and the problem—not just the feature request.",
  },
  {
    number: "02",
    title: "Build with intention",
    description:
      "Connect the right pieces of a product into a clear, reliable experience.",
  },
  {
    number: "03",
    title: "Make complexity feel simple",
    description:
      "Good software should make the next step obvious for the people using it.",
  },
];

const projects = [
  {
    number: "01",
    category: "AI & DOCUMENTS",
    title: "AI Document Metadata Pipeline",
    description:
      "A web platform that turns scanned magazine issues into structured metadata, with tools to review and export results.",
    highlights: [
      "Checks extracted names and subjects against 146K+ records and flags uncertain matches for review.",
      "Validated a 26-issue batch and added 440+ automated tests.",
    ],
    stack: ["Python", "FastAPI", "React", "OpenAI", "AWS"],
  },
  {
    number: "02",
    category: "FILM & MEDIA",
    title: "ONE WORLD 3D",
    description:
      "Contributed to a platform for turning written stories into AI-assisted production plans and media.",
    highlights: [
      "Built script parsing and production-planning workflows.",
      "Integrated AI services for text, voice, video, and 3D assets.",
    ],
    link: "https://oneworld3d.ai/",
    linkLabel: "Visit ONE WORLD 3D",
    stack: [
      "Django",
      "React",
      "Celery",
      "OpenAI",
      "fal.ai",
    ],
  },
  {
    number: "03",
    category: "E-COMMERCE",
    title: "Artroom by Artjazz",
    description:
      "Built an online art store with a customer storefront and product-management tools.",
    highlights: [
      "Added a responsive gallery, wishlist, cart, and PayPal checkout.",
      "Built artwork enquiries and image uploads.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "AWS S3",
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
      "Built a CRM that brings agency sales, client delivery, finance, and team operations into one workspace.",
    highlights: [
      "Added kanban pipelines for leads, deals, clients, and projects.",
      "Built GST invoicing and finance reporting.",
    ],
    link: "https://agencyflow-frontend-lac.vercel.app/",
    linkLabel: "Visit AgencyFlow",
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  {
    number: "05",
    category: "HR & ADMIN",
    title: "Smart HR Management System",
    description:
      "Developed a role-based dashboard for everyday employee and HR operations.",
    highlights: [
      "Covers employee records, attendance, leave, recruitment, and payroll.",
      "Built with Next.js, React, and Django APIs.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Python", "Django"],
  },
  {
    number: "06",
    category: "E-COMMERCE",
    title: "Wildwood Carvings — Handicraft Store",
    description:
      "Created an online storefront for handcrafted wooden showpieces.",
    highlights: [
      "Built product browsing with Next.js and Tailwind CSS.",
      "Used Django for product data and store logic.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Python", "Django"],
    link: "https://www.wildwoodcarvings.com/",
    linkLabel: "Visit Wildwood Carvings",
  },
  {
    number: "07",
    category: "HEALTHCARE & DATA",
    title: "Batch Patient Management Loader",
    description:
      "Improved a healthcare service that validates patient files and delivers processing results.",
    highlights: [
      "Aligned 25+ processing rules with Oracle, fixing file status, duplicate checks, and concurrent loads.",
      "Corrected notifications and SFTP retries, and added 22 unit tests.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Kafka", "AWS S3", "Elasticsearch"],
  },
  {
    number: "08",
    category: "HEALTHCARE & INTEGRATIONS",
    title: "License Management Sync Service",
    description:
      "Modernized a legacy PHP and Oracle system into a Python service that syncs contract, practice, and license data between an ERP and healthcare platform.",
    highlights: [
      "Reverse-engineered and verified a 48-table PostgreSQL schema with no existing DDL.",
      "Rebuilt sync workflows and added API-key security, with 135 tests at 99% coverage.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Alembic", "pytest"],
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Arun Kumar, home">
          <span className="wordmark-mark">A<span>.</span></span>
          <span className="wordmark-name">ARUN KUMAR</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#focus">What I do</a>
          <a href="#approach">Approach</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="home">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              FULL-STACK DEVELOPER <span className="eyebrow-divider">/</span>{" "}
              AUTOMATION
            </p>
            <h1>
              Arun Kumar
            </h1>
            <p className="hero-tagline">
              Thoughtful code. <span>Better workflows.</span>
            </p>
            <p className="hero-description">
              I build full-stack web applications, APIs, and automation that
              make complex workflows easier to use.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="#about">
                A little about me <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <span>Building for people, not just processes.</span>
            </div>
          </div>

          <div
            className="hero-art"
            role="img"
            aria-label="Illustration of connected steps in an automated workflow"
          >
            <div className="art-orbit art-orbit--outer" />
            <div className="art-orbit art-orbit--inner" />
            <div className="art-crosshair art-crosshair--one" />
            <div className="art-crosshair art-crosshair--two" />
            <div className="workflow-card">
              <div className="workflow-topline">
                <span>HOW I WORK</span>
              </div>
              <div className="workflow-flow">
                <div className="workflow-node workflow-node--start">
                  <span className="node-icon node-icon--spark" aria-hidden="true">✳</span>
                  <span>Input</span>
                </div>
                <span className="flow-connector"><i /></span>
                <div className="workflow-node workflow-node--active">
                  <span className="node-icon node-icon--gear" aria-hidden="true">◈</span>
                  <span>Automate</span>
                </div>
                <span className="flow-connector"><i /></span>
                <div className="workflow-node workflow-node--end">
                  <span className="node-icon node-icon--check" aria-hidden="true">✓</span>
                  <span>Done</span>
                </div>
              </div>
              <div className="workflow-footer">
                <span>LESS REPETITION</span>
                <span>MORE FLOW</span>
              </div>
            </div>
            <div className="floating-label floating-label--top">
              <span>Human-first engineering</span>
            </div>
            <div className="floating-label floating-label--bottom">
              <span>Ideas into systems</span>
            </div>
          </div>

        </section>

        <section className="about-section section-shell" id="about">
          <div className="section-kicker">
            <span>01 / A BIT ABOUT ME</span>
            <span className="kicker-rule" />
            <span>FULL-STACK DEVELOPER</span>
          </div>
          <div className="about-grid">
            <h2>
              I build useful
              <br />
              <span>things, end to end.</span>
            </h2>
            <div className="about-copy">
              <p>
                I&apos;m Arun, a full-stack developer. I build practical
                software across frontend, backend, APIs, and integrations.
              </p>
              <p>
                My work includes healthcare systems, automation, and client
                products. I focus on clear workflows and reliable,
                easy-to-use solutions.
              </p>
              <a className="inline-link" href="#projects">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
          <div className="about-values">
            <div className="value-item" data-reveal>
              <span className="value-index">01</span>
              <span>Frontend to backend</span>
            </div>
            <div className="value-item" data-reveal>
              <span className="value-index">02</span>
              <span>APIs &amp; integrations</span>
            </div>
            <div className="value-item" data-reveal>
              <span className="value-index">03</span>
              <span>Practical product thinking</span>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-shell">
            <div className="section-kicker">
              <span>02 / EXPERIENCE</span>
              <span className="kicker-rule" />
              <span>PROFESSIONAL EXPERIENCE</span>
            </div>
            <div className="experience-heading">
              <h2>
                Where I&apos;ve
                <br />
                <span>worked.</span>
              </h2>
              <p>
                Building web applications, APIs, and automation for client
                products and businesses.
              </p>
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
                  <p>
                    Build APIs, AI automations, PostgreSQL databases, and AWS
                    deployments for client products.
                  </p>
                </div>
              </article>
              <article className="experience-card" data-reveal>
                <div className="experience-card-top">
                  <span className="experience-period">Oct 2024 — Aug 2025 · On-site</span>
                </div>
                <div className="experience-details">
                  <h3>Python Developer</h3>
                  <p className="experience-company">Nath Outsourcing Solutions Pvt. Ltd.</p>
                  <p>
                    Developed Django REST APIs and automation tools, connecting
                    React apps to backend services.
                  </p>
                </div>
              </article>
              <article className="experience-card" data-reveal>
                <div className="experience-card-top">
                  <span className="experience-period">Aug 2023 — Sep 2024 · On-site</span>
                </div>
                <div className="experience-details">
                  <h3>Python Developer</h3>
                  <p className="experience-company">Vqcodes Software Solutions LLP</p>
                  <p>
                    Built Django and React applications, REST APIs, and
                    automation; maintained AWS and Heroku deployments.
                  </p>
                </div>
              </article>
              <article className="experience-card" data-reveal>
                <div className="experience-card-top">
                  <span className="experience-period">Aug 2021 — Jul 2023 · Remote</span>
                </div>
                <div className="experience-details">
                  <h3>Freelance Python Developer</h3>
                  <p className="experience-company">Self-employed</p>
                  <p>
                    Created Django apps, REST APIs, web scrapers, and browser
                    automation for small businesses.
                  </p>
                </div>
              </article>
            </div>

            <div className="education-block" id="education">
              <div className="education-heading">
                <h3>Education</h3>
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

        <section className="projects-section" id="projects">
          <div className="section-shell">
            <div className="section-kicker">
              <span>03 / SELECTED PROJECTS</span>
              <span className="kicker-rule" />
              <span>A FEW THINGS I&apos;VE BUILT</span>
            </div>
            <div className="projects-heading">
              <h2>
                A few things
                <br />
                <span>I&apos;ve built.</span>
              </h2>
              <p>
                Different products, same focus: useful features, clear
                workflows, and dependable implementation. Here&apos;s what I
                built, contributed, and delivered.
              </p>
            </div>
            <article className="project-featured" data-reveal>
              <div className="project-featured-main">
                <div className="project-card-top">
                  <span className="project-category">{projects[0].category}</span>
                </div>
                <h3>{projects[0].title}</h3>
                <p>{projects[0].description}</p>
                <ul className="project-highlights" aria-label={`${projects[0].title} key work`}>
                  {projects[0].highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <ul className="project-stack" aria-label={`${projects[0].title} technologies`}>
                  {projects[0].stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
              <aside className="project-metrics" aria-label="Project results">
                <div>
                  <strong>146K+</strong>
                  <span>member &amp; chapter records checked</span>
                </div>
                <div>
                  <strong>26 issues</strong>
                  <span>1,670 pages processed in a client batch</span>
                </div>
                <div>
                  <strong>440+</strong>
                  <span>automated tests written</span>
                </div>
              </aside>
              <div className="project-featured-art" aria-hidden="true" />
            </article>
            <div className="projects-grid">
              {projects.slice(1).map((project) => (
                <article className="project-card" key={project.number} data-reveal>
                  <div className="project-card-top">
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-highlights" aria-label={`${project.title} key work`}>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <ul className="project-stack" aria-label={`${project.title} technologies`}>
                    {project.stack.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  {project.link ? (
                    <div className="project-card-footer">
                      <a className="button button-sm" href={project.link} target="_blank" rel="noreferrer">
                        {project.linkLabel ?? 'View live'} <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="focus-section" id="focus">
          <div className="section-shell">
            <div className="section-kicker section-kicker--light">
              <span>04 / WHAT I DO</span>
              <span className="kicker-rule" />
              <span>THREE CONNECTED PERSPECTIVES</span>
            </div>
            <div className="focus-heading">
              <h2>
                Different disciplines.
                <br />
                <span>One connected view.</span>
              </h2>
              <p>
                A useful product is more than its code. It understands its
                context, removes friction, and works for the people who rely
                on it.
              </p>
            </div>
            <div className="focus-grid">
              {focusAreas.map((area) => (
                <article className={`focus-card ${area.className}`} key={area.number} data-reveal>
                  <div className="focus-card-top">
                    <span>{area.number} / FOCUS AREA</span>
                    <span className="card-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="card-visual" aria-hidden="true">
                    {area.number === "01" && (
                      <div className="visual-code">
                        <span className="code-line code-line--short" />
                        <span className="code-line" />
                        <span className="code-line code-line--medium" />
                        <span className="code-line code-line--long" />
                        <span className="code-cursor" />
                      </div>
                    )}
                    {area.number === "02" && (
                      <div className="visual-automation">
                        <span className="auto-node auto-node--one">01</span>
                        <span className="auto-path auto-path--one" />
                        <span className="auto-node auto-node--two">02</span>
                        <span className="auto-path auto-path--two" />
                        <span className="auto-node auto-node--three">✓</span>
                      </div>
                    )}
                    {area.number === "03" && (
                      <div className="visual-health">
                        <span className="health-ring health-ring--one" />
                        <span className="health-ring health-ring--two" />
                        <span className="health-cross">+</span>
                        <span className="health-dot health-dot--one" />
                        <span className="health-dot health-dot--two" />
                      </div>
                    )}
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <ul className="tag-list" aria-label={`${area.title} themes`}>
                    {area.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section section-shell" id="approach">
          <div className="section-kicker">
            <span>05 / HOW I THINK</span>
            <span className="kicker-rule" />
            <span>A SIMPLE, HUMAN APPROACH</span>
          </div>
          <div className="approach-layout">
            <div className="approach-heading">
              <h2>
                Make it work.
                <br />
                <span>Make it make sense.</span>
              </h2>
              <p>
                A few principles that guide how I approach building useful
                software.
              </p>
              <span className="approach-mark" aria-hidden="true">A<span>.</span></span>
            </div>
            <div className="principle-list">
              {principles.map((principle) => (
                <article className="principle-row" key={principle.number} data-reveal>
                  <span className="principle-number">{principle.number}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                  <span className="principle-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-shell">
            <div className="contact-kicker">
              <span className="status-dot" /> 06 / GET IN TOUCH
            </div>
            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>
            <p>
              Tell me a little about what you&apos;re working on. Email me and
              I&apos;ll get back to you.
            </p>
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
            <p>Full-stack developer building web products from idea to release.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#focus">What I do</a>
            <a href="#approach">Approach</a>
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

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
    role: "Freelance · Full-stack developer",
    title: "AI Document Metadata Pipeline",
    description:
      "A client-facing archive workflow for turning OCR'd magazine issues into structured, reviewable metadata. I built the web platform and processing pipeline, from project-specific authority data through batch runs and downloadable QA outputs.",
    highlights: [
      "Extracts names, chapters, page titles, and subjects from OCR magazine PDFs, then checks them against 146K+ member and chapter records.",
      "Flags uncertain matches for human review instead of silently accepting weak results.",
      "Processes hundreds of PDFs with concurrent jobs and crash-safe resume; quota exhaustion stops cleanly so unfinished issues can be resumed.",
      "Includes 10 pre-run blocker checks, a usage-based cost estimate, per-PDF outputs, combined QA and usage reports, and one-click ZIP export.",
      "Stamped outputs with processor/config fingerprints for reproducibility; validated a 26-issue, 1,670-page client batch and wrote 440+ automated tests.",
    ],
    stack: ["Python", "FastAPI", "React", "OpenAI", "PyMuPDF", "pandas", "AWS"],
  },
  {
    number: "02",
    category: "FILM & MEDIA",
    role: "Full-stack contribution",
    title: "ONE WORLD 3D",
    description:
      "Contributed to a cinematic production platform that takes a written story through AI-assisted planning and media generation. Work covered backend workflows and the creator-facing studio, alongside integrations with multiple AI and billing providers.",
    highlights: [
      "Built story parsing flows to identify characters, locations, scenes, and shots from scripts.",
      "Integrated OpenAI and Gemini for language tasks, ElevenLabs for voice, and fal.ai for video generation.",
      "Worked on studio agents for production planning, budget, continuity, and sound-effects workflows.",
      "Contributed to 3D asset generation through Meshy AI, role-based permissions, Stripe/PayPal billing, and Celery/Redis jobs with S3 media storage.",
    ],
    link: "https://oneworld3d.ai/",
    linkLabel: "Visit ONE WORLD 3D",
    stack: [
      "Django",
      "React",
      "Redux",
      "Celery",
      "Redis",
      "MySQL",
      "OpenAI",
      "Gemini",
      "ElevenLabs",
      "fal.ai",
      "Meshy AI",
      "Stripe",
      "PayPal",
      "AWS S3",
    ],
  },
  {
    number: "03",
    category: "E-COMMERCE",
    role: "Full-stack developer",
    title: "Artroom by Artjazz",
    description:
      "Built a production e-commerce site for a US-based artist, covering the customer storefront and the admin tools used to manage products and collections. The live store supports direct purchases as well as enquiries for selected artwork.",
    highlights: [
      "Created a responsive gallery, product pages, wishlist, and shopping cart.",
      "Integrated live PayPal checkout and AWS S3 image uploads.",
      "Added a “Price on Request” option and email-lead flow for artwork enquiries.",
      "Deployed a FastAPI/PostgreSQL backend on AWS EC2 with RDS and a Next.js 15 frontend on Hostinger.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "AWS EC2",
      "AWS S3",
      "PayPal",
      "SQLAlchemy",
      "Nginx",
    ],
    link: "https://artroombyartjazz.com",
    linkLabel: "Visit live store",
  },
  {
    number: "04",
    category: "CRM & AGENCY TOOLS",
    role: "Full-stack developer",
    title: "AgencyFlow CRM",
    description:
      "Built a multi-tenant CRM for Indian digital agencies, bringing sales, client delivery, finance, and team operations into one workspace. The interface connects day-to-day pipeline work with practical finance and owner reporting.",
    highlights: [
      "Organized leads, deals, clients, and projects with kanban-based pipelines.",
      "Built GST invoicing with PDF generation and finance views for revenue, expenses, and profit.",
      "Added role-based access and team workflows across client and internal operations.",
      "Focused on reliable API integration, useful error handling, and clear confirmation flows.",
    ],
    link: "https://agencyflow-frontend-lac.vercel.app/",
    linkLabel: "Visit AgencyFlow",
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  {
    number: "05",
    category: "HR & ADMIN",
    role: "Full-stack developer",
    title: "Smart HR Management System",
    description:
      "Developed a role-based HRMS dashboard to bring everyday people operations into one place, from employee records and attendance to leave, recruitment, and payroll structures.",
    highlights: [
      "Structured employee and department information for day-to-day administration.",
      "Covered attendance, leave management, and recruitment workflows.",
      "Included payroll structures and internal company announcements.",
      "Built with a Next.js/React interface and Django APIs.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Python", "Django"],
  },
  {
    number: "06",
    category: "E-COMMERCE",
    role: "Full-stack developer",
    title: "Wildwood Carvings — Handicraft Store",
    description:
      "Created a responsive online storefront for handcrafted wooden showpieces. The project pairs a product-focused browsing experience with a Django backend for catalog data and store logic.",
    highlights: [
      "Designed product browsing for a distinct, handcrafted catalog.",
      "Built the storefront with Next.js, React, and Tailwind CSS.",
      "Implemented Django backend functionality for product data and business rules.",
      "Live site: Wildwood Carvings.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Python", "Django"],
    link: "https://www.wildwoodcarvings.com/",
    linkLabel: "Visit Wildwood Carvings",
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
              Thoughtful code.
              <br />
              <span className="headline-accent">Better</span> workflows.
            </h1>
            <p className="hero-description">
              I&apos;m Arun Kumar—a full-stack developer working across
              automation and healthcare. I turn complex workflows into
              thoughtful, useful digital experiences.
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
                <span>WORKFLOW / 001</span>
                <span className="workflow-live"><i /> IN MOTION</span>
              </div>
              <div className="workflow-flow">
                <div className="workflow-node workflow-node--start">
                  <span className="node-icon node-icon--spark">✳</span>
                  <span>Input</span>
                </div>
                <span className="flow-connector"><i /></span>
                <div className="workflow-node workflow-node--active">
                  <span className="node-icon node-icon--gear">◈</span>
                  <span>Automate</span>
                </div>
                <span className="flow-connector"><i /></span>
                <div className="workflow-node workflow-node--end">
                  <span className="node-icon node-icon--check">✓</span>
                  <span>Done</span>
                </div>
              </div>
              <div className="workflow-footer">
                <span>LESS REPETITION</span>
                <span className="footer-signal"><i /><i /><i /><i /><i /></span>
                <span>MORE FLOW</span>
              </div>
            </div>
            <div className="floating-label floating-label--top">
              <span className="label-symbol">↗</span>
              <span>Human-first<br />engineering</span>
            </div>
            <div className="floating-label floating-label--bottom">
              <span className="label-pulse" />
              <span>Ideas into systems</span>
            </div>
            <span className="art-coordinate art-coordinate--one">26° / 73°</span>
            <span className="art-coordinate art-coordinate--two">AK—01</span>
          </div>

          <a className="scroll-cue" href="#about">
            <span className="scroll-cue-line" />
            SCROLL TO EXPLORE
          </a>
          <span className="hero-index" aria-hidden="true">01 — 06</span>
        </section>

        <section className="intro-strip" aria-label="Areas of experience">
          <div className="intro-strip-inner">
            <span>THE SWEET SPOT</span>
            <p>
              <b>Software</b> <i>×</i> <b>Automation</b> <i>×</i>{" "}
              <b>Healthcare</b>
            </p>
            <span className="strip-caption">CONNECTED BY GOOD ENGINEERING</span>
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
                I&apos;m Arun, a full-stack developer who enjoys turning a
                client&apos;s idea into software they can actually use. I work
                across frontend and backend, and stay involved from
                understanding the requirement through implementation and
                delivery.
              </p>
              <p>
                I&apos;ve handled client communication across multiple
                projects—clarifying what is needed, sharing progress, and
                incorporating feedback as the work takes shape. The projects
                span an AI-assisted archive tool, e-commerce, agency
                operations, HR, and a story-to-video platform.
              </p>
              <p>
                I care about making software straightforward to use and
                dependable behind the scenes. That usually means understanding
                the day-to-day workflow first, then building only what helps
                move it forward.
              </p>
              <a className="inline-link" href="#projects">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
          <div className="about-values">
            <div className="value-item">
              <span className="value-index">01</span>
              <span>Frontend to backend</span>
            </div>
            <div className="value-item">
              <span className="value-index">02</span>
              <span>APIs &amp; integrations</span>
            </div>
            <div className="value-item">
              <span className="value-index">03</span>
              <span>Practical product thinking</span>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-shell">
            <div className="section-kicker">
              <span>02 / CLIENT &amp; PROJECT EXPERIENCE</span>
              <span className="kicker-rule" />
              <span>FROM BRIEF TO DELIVERY</span>
            </div>
            <div className="experience-heading">
              <h2>
                Good work starts
                <br />
                <span>with listening.</span>
              </h2>
              <p>
                I&apos;ve worked directly with clients across different
                products—not just on code, but on understanding the brief,
                communicating progress, and getting the finished work ready
                for use.
              </p>
            </div>
            <div className="experience-grid">
              <article className="experience-card">
                <span className="experience-number">01 / CLIENT COLLABORATION</span>
                <h3>Clear communication, throughout</h3>
                <p>
                  Discuss requirements early, share progress, work through
                  feedback, and keep expectations clear from the first
                  conversation to handover.
                </p>
                <span className="experience-note">Freelance &amp; client projects</span>
              </article>
              <article className="experience-card">
                <span className="experience-number">02 / END-TO-END DELIVERY</span>
                <h3>Taking features beyond the screen</h3>
                <p>
                  Work across UI, APIs, data, third-party services, testing,
                  and deployment—so the pieces come together as a usable
                  product, not just a mock-up.
                </p>
                <span className="experience-note">Build · integrate · test · deliver</span>
              </article>
              <article className="experience-card">
                <span className="experience-number">03 / DIFFERENT DOMAINS</span>
                <h3>Adapting to the product</h3>
                <p>
                  Client work has ranged from archive metadata and online
                  stores to agency operations, HR tools, and AI-assisted
                  media production.
                </p>
                <span className="experience-note">Six projects featured below</span>
              </article>
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
            <article className="project-featured">
              <div className="project-featured-main">
                <div className="project-card-top">
                  <span className="project-number">{projects[0].number}</span>
                  <span className="project-category">{projects[0].category}</span>
                  <span className="project-role">{projects[0].role}</span>
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
                <div className="project-ctas">
                  {projects[0].link ? (
                    <a className="project-cta project-cta--primary" href={projects[0].link} target="_blank" rel="noreferrer">
                      View live <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  <a className="project-cta project-cta--outline" href="#contact">
                    Discuss a similar project
                  </a>
                </div>
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
                <article className="project-card" key={project.number}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-category">{project.category}</span>
                    <span className="project-role">{project.role}</span>
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
                  <div className="project-card-footer">
                    {project.link ? (
                      <a className="button button-sm" href={project.link} target="_blank" rel="noreferrer">
                        {project.linkLabel ?? 'View live'} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <a className="button button-sm button-outline" href="#contact">
                        Discuss a similar project
                      </a>
                    )}
                  </div>
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
                <article className={`focus-card ${area.className}`} key={area.number}>
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
                <article className="principle-row" key={principle.number}>
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
            <a href="#focus">What I do</a>
            <a href="#approach">Approach</a>
          </nav>
          <a className="footer-live-link" href="https://artroombyartjazz.com" target="_blank" rel="noreferrer">
            Live project: Artroom by Artjazz <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Arun Kumar</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

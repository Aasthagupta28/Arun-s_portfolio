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

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Arun Kumar, home">
          <span className="wordmark-mark">A<span>.</span></span>
          <span className="wordmark-name">ARUN KUMAR</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
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
              <a className="button button-primary" href="#focus">
                Explore what I do <span aria-hidden="true">↘</span>
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
          <span className="hero-index" aria-hidden="true">01 — 04</span>
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
            <span>THE PERSON BEHIND THE CODE</span>
          </div>
          <div className="about-grid">
            <h2>
              I like the part where
              <br />
              <span>complex gets clear.</span>
            </h2>
            <div className="about-copy">
              <p>
                I&apos;m a full-stack developer with experience in automation
                and healthcare domain knowledge. I enjoy connecting technology
                to real-world workflows—and making the result feel simple to
                use.
              </p>
              <p>
                The details of my experience and the tools I work with are
                coming soon. For now, this is the kind of work and thinking
                I&apos;m excited to bring to a team.
              </p>
              <a className="inline-link" href="#contact">
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="about-values">
            <div className="value-item">
              <span className="value-index">A</span>
              <span>Curious by default</span>
            </div>
            <div className="value-item">
              <span className="value-index">B</span>
              <span>Practical with technology</span>
            </div>
            <div className="value-item">
              <span className="value-index">C</span>
              <span>Focused on people</span>
            </div>
          </div>
        </section>

        <section className="focus-section" id="focus">
          <div className="section-shell">
            <div className="section-kicker section-kicker--light">
              <span>02 / WHAT I DO</span>
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
            <p className="focus-footnote">
              Specific projects, technologies, and outcomes will be added as
              your experience details are ready.
            </p>
          </div>
        </section>

        <section className="approach-section section-shell" id="approach">
          <div className="section-kicker">
            <span>03 / HOW I THINK</span>
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
              <span className="status-dot" /> 04 / NEXT CHAPTER
            </div>
            <h2>
              Have a good
              <br />
              <span>problem to solve?</span>
            </h2>
            <p>
              I&apos;d love to hear what you&apos;re working on. Contact and
              profile details can be added here when you&apos;re ready to share
              them.
            </p>
            <a className="button button-contact" href="#home">
              Back to the top <span aria-hidden="true">↑</span>
            </a>
            <span className="contact-orbit contact-orbit--one" aria-hidden="true" />
            <span className="contact-orbit contact-orbit--two" aria-hidden="true" />
            <span className="contact-spark contact-spark--one" aria-hidden="true">✳</span>
            <span className="contact-spark contact-spark--two" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">ARUN KUMAR<span>.</span></a>
        <p>Built around good ideas and useful software.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

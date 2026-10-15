"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  getDomain,
  type Project,
  type ProjectDetails,
  type ProjectImage,
} from "./projects-data";

type DetailedProject = Project & { details: ProjectDetails };

const step = (index: number) => ({ "--i": index }) as CSSProperties;

function Gallery({ images, domain }: { images: ProjectImage[]; domain: string }) {
  const [active, setActive] = useState(0);
  const image = images[active];
  const count = images.length;
  const go = (offset: number) => setActive((current) => (current + offset + count) % count);

  return (
    <section className="modal-gallery modal-anim" style={step(5)} aria-label="Project screenshots">
      <div className="gallery-frame">
        <div className="gallery-bar">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="gallery-url">{domain}</span>
          {count > 1 ? (
            <span className="gallery-count">
              {active + 1} / {count}
            </span>
          ) : null}
        </div>
        <div className="gallery-screen">
          <Image
            key={image.src}
            className="gallery-image"
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 760px) 100vw, 800px"
          />
          {count > 1 ? (
            <>
              <button
                type="button"
                className="gallery-arrow gallery-arrow--prev"
                onClick={() => go(-1)}
                aria-label="Previous screenshot"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className="gallery-arrow gallery-arrow--next"
                onClick={() => go(1)}
                aria-label="Next screenshot"
              >
                <span aria-hidden="true">→</span>
              </button>
            </>
          ) : null}
        </div>
      </div>
      <p className="gallery-caption" key={image.caption}>
        {image.caption}
      </p>
      {count > 1 ? (
        <div className="gallery-thumbs">
          {images.map((item, index) => (
            <button
              type="button"
              key={item.src}
              className={`gallery-thumb${index === active ? " is-active" : ""}`}
              onClick={() => setActive(index)}
              aria-label={`Show screenshot ${index + 1}: ${item.caption}`}
              aria-current={index === active ? "true" : undefined}
            >
              <Image src={item.src} alt="" fill sizes="160px" />
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default function ProjectModal({
  projects,
  index,
  onChange,
}: {
  projects: DetailedProject[];
  index: number | null;
  onChange: (index: number | null) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [closing, setClosing] = useState(false);
  const isOpen = index !== null;
  const project = index === null ? null : projects[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    if (!dialog.open) dialog.showModal();
    document.documentElement.classList.add("modal-open");
    return () => document.documentElement.classList.remove("modal-open");
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [index]);

  function finishClose() {
    document.documentElement.classList.remove("modal-open");
    dialogRef.current?.close();
    setClosing(false);
    onChange(null);
  }

  function requestClose() {
    if (closing) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishClose();
      return;
    }
    setClosing(true);
  }

  const total = projects.length;
  const nextIndex = index === null || total < 2 ? null : (index + 1) % total;
  const next = nextIndex === null ? null : projects[nextIndex];

  return (
    <dialog
      ref={dialogRef}
      className={`project-modal${closing ? " is-closing" : ""}`}
      aria-labelledby="project-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClose={() => {
        if (isOpen) onChange(null);
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      {project ? (
        <div
          className="modal-shell"
          onAnimationEnd={(event) => {
            if (closing && event.target === event.currentTarget) finishClose();
          }}
        >
          <button
            type="button"
            className="modal-close"
            onClick={requestClose}
            aria-label="Close project details"
          >
            <span aria-hidden="true">×</span>
          </button>

          <div className="modal-scroll" ref={scrollRef} key={project.title}>
            <header className="modal-hero">
              <div className="modal-window modal-anim" style={step(0)}>
                <span className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="modal-domain">
                  {project.link ? getDomain(project.link) : "Private client project"}
                </span>
              </div>

              <p className="modal-category modal-anim" style={step(1)}>
                {project.category}
              </p>
              <h2 id="project-modal-title" className="modal-anim" style={step(2)}>
                {project.title}
              </h2>
              <p className="modal-tagline modal-anim" style={step(3)}>
                {project.details.tagline}
              </p>

              <dl className="modal-meta modal-anim" style={step(4)}>
                <div>
                  <dt>Role</dt>
                  <dd>{project.details.role}</dd>
                </div>
                <div>
                  <dt>Type</dt>
                  <dd>{project.details.type}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>
                    {project.link ? <span className="status-dot" /> : null}
                    {project.details.status}
                  </dd>
                </div>
              </dl>

              {project.link ? (
                <a
                  className="button button-lime modal-anim"
                  style={step(5)}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit live site <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </header>

            <div className="modal-body">
              {project.images?.length ? (
                <Gallery
                  images={project.images}
                  domain={project.link ? getDomain(project.link) : project.title}
                />
              ) : null}

              {project.details.metrics ? (
                <div className="modal-metrics modal-anim" style={step(5)}>
                  {project.details.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              <section className="modal-section modal-anim" style={step(6)}>
                <h3>Overview</h3>
                <p>{project.details.overview}</p>
              </section>

              {project.details.challenge ? (
                <section className="modal-section modal-challenge modal-anim" style={step(7)}>
                  <h3>The challenge</h3>
                  <p>{project.details.challenge}</p>
                </section>
              ) : null}

              <section className="modal-section modal-anim" style={step(8)}>
                <h3>{project.details.featuresTitle}</h3>
                <ol className="modal-features">
                  {project.details.features.map((feature, featureIndex) => (
                    <li
                      key={feature.title}
                      className="modal-anim"
                      style={step(9 + featureIndex)}
                    >
                      <span className="modal-feature-index">
                        {String(featureIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {project.details.result ? (
                <section className="modal-result modal-anim" style={step(12)}>
                  <h3>{project.details.result.title}</h3>
                  <ul>
                    {project.details.result.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <section className="modal-section modal-anim" style={step(13)}>
                <h3>Tech stack</h3>
                <ul className="tags">
                  {project.details.stack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </section>

              <footer className="modal-footer modal-anim" style={step(14)}>
                <a className="button button-primary" href="#contact" onClick={finishClose}>
                  Start a similar project <span aria-hidden="true">→</span>
                </a>
                {next ? (
                  <button
                    type="button"
                    className="modal-next"
                    onClick={() => onChange(nextIndex)}
                  >
                    <small>Next project</small>
                    <span>
                      {next.title} <span aria-hidden="true">→</span>
                    </span>
                  </button>
                ) : null}
              </footer>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}

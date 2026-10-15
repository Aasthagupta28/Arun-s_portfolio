"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./project-modal";
import {
  getDomain,
  type Project,
  type ProjectDetails,
  type ProjectGroup,
} from "./projects-data";

type FilterId = "all" | "live" | ProjectGroup;

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "live", label: "Live sites" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "business", label: "Business tools" },
  { id: "healthcare", label: "Healthcare" },
];

function initials(title: string) {
  return title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

function matches(project: Project, filter: FilterId) {
  if (filter === "all") return true;
  if (filter === "live") return Boolean(project.link);
  return project.group === filter;
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<FilterId>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const visible = projects.filter((project) => matches(project, filter));
  const detailed = projects.filter(
    (project): project is Project & { details: ProjectDetails } => Boolean(project.details),
  );

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map(({ id, label }) => {
          const count = projects.filter((project) => matches(project, id)).length;
          if (count === 0) return null;

          return (
            <button
              type="button"
              key={id}
              className={`filter-chip${filter === id ? " is-active" : ""}`}
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
            >
              {label}
              <span>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="projects-grid">
        {visible.map((project) => {
          const detailIndex = detailed.findIndex((item) => item.title === project.title);
          const hasDetails = detailIndex !== -1;
          const isClickable = hasDetails || Boolean(project.link);

          return (
            <article
              className={`card project-card${isClickable ? " is-link" : ""}`}
              key={project.title}
              data-reveal
            >
              <div className="project-window">
                <span className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="project-domain">
                  {project.link ? getDomain(project.link) : "Private client project"}
                </span>
              </div>
              <div className={`project-screen${project.images?.length ? "" : " is-empty"}`}>
                {project.images?.length ? (
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 960px) 50vw, 400px"
                  />
                ) : (
                  <span aria-hidden="true">{initials(project.title)}</span>
                )}
                {project.images && project.images.length > 1 ? (
                  <span className="project-photo-count">{project.images.length} photos</span>
                ) : null}
              </div>
              <div className="project-body">
                <p className="category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-text">{project.description}</p>
                <ul className="tags">
                  {project.stack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-footer">
                  {project.link ? (
                    <span className="live-badge">
                      <span className="status-dot" /> Live
                    </span>
                  ) : (
                    <span className="private-badge">Private project</span>
                  )}

                  {hasDetails ? (
                    <button
                      type="button"
                      className="project-action"
                      aria-haspopup="dialog"
                      onClick={() => setOpenIndex(detailIndex)}
                    >
                      View details <span aria-hidden="true">→</span>
                    </button>
                  ) : project.link ? (
                    <a
                      className="project-action"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.title} (opens in a new tab)`}
                    >
                      Visit site <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <ProjectModal projects={detailed} index={openIndex} onChange={setOpenIndex} />
    </>
  );
}

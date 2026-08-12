import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { SkillIcon } from "../utils/skillIcons";
import { cardReveal } from "../utils/motionVariants";
import { useTiltValues, isCoarsePointer } from "../utils/useTilt";

const gradients = [
  "linear-gradient(135deg, #8b5cf6, #4c1d95)",
  "linear-gradient(135deg, #22d3c0, #0f766e)",
  "linear-gradient(135deg, #f97316, #7c2d12)",
  "linear-gradient(135deg, #60a5fa, #1e3a8a)",
  "linear-gradient(135deg, #f472b6, #831843)",
];

export default function Projects() {
  const { t } = useLanguage();
  const { label, heading, items } = t.projects;

  return (
    <section id="projects" className="section">
      <div className="section-head">
        <motion.span
          className="section-glow"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          aria-hidden="true"
        />
        <span className="section-label">{label}</span>
        <h2>{heading}</h2>
      </div>

      <div className="projects-grid">
        {items.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p, i }) {
  const cardRef = useRef(null);
  const coarse = isCoarsePointer();
  const { x, y, rotateX, rotateY } = useTiltValues({ max: 7 });

  function onPointerMove(e) {
    if (coarse || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function onPointerLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  function handleCardClick() {
    if (p.url) {
      window.open(p.url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      style={{
        ...(coarse ? undefined : { rotateX, rotateY }),
        cursor: p.url ? "pointer" : "default",
      }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={handleCardClick}
      whileHover={coarse ? undefined : { scale: 1.015 }}
      {...cardReveal(i)}
    >
      <div
        className="project-thumb"
        style={
          !p.image ? { background: gradients[i % gradients.length] } : undefined
        }
      >
        {p.image ?
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="project-thumb-img"
          />
        : <span>
            {p.title
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </span>
        }
      </div>
      <div className="project-body">
        <h3>
          {p.url ?
            <span className="project-link">
              {p.title}
              <span className="project-link-icon" aria-hidden="true">
                ↗
              </span>
            </span>
          : p.title}
        </h3>
        <p>{p.desc}</p>
        <div className="project-tags">
          {p.tags.map((tag) => (
            <span key={tag} className="tag-pill tag-pill--icon">
              <SkillIcon name={tag} className="tag-pill-icon" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

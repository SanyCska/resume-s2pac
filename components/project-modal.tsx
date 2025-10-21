"use client"

import { useEffect } from "react"
import { X, Github, ExternalLink } from "lucide-react"
import type { Project } from "./projects-section"

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  useEffect(() => {
    // Close on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl glass-card rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-secondary/80 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-primary" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">{project.title}</h2>
            <p className="text-muted-foreground">{project.date}</p>
          </div>

          {/* Image */}
          <div className="relative h-80 bg-muted rounded-xl overflow-hidden mb-6">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{project.fullDescription}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground rounded-full border border-border/50 hover:bg-secondary/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-colors border border-border/50"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors shadow-lg shadow-primary/20"
              >
                <ExternalLink className="w-5 h-5" />
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

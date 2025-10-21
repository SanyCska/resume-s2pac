"use client"

import { ExternalLink, Github } from "lucide-react"
import type { Project } from "./projects-section"

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-64 bg-muted overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{project.date}</span>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-background/80 text-foreground rounded-full border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details */}
        <div className="flex items-center justify-between">
          <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors flex items-center gap-2">
            View Details
            <ExternalLink className="w-4 h-4" />
          </button>
          {project.githubUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.githubUrl, "_blank")
              }}
              className="p-2 hover:bg-background/50 rounded-lg transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

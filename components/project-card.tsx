"use client"

import { ExternalLink, Github } from "lucide-react"
import type { Project } from "./projects-section"

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

// Function to generate consistent random colors for skills
const getSkillColor = (skill: string) => {
  const colors = [
    { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
    { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30" },
    { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
    { bg: "bg-pink-500/20", text: "text-pink-400", border: "border-pink-500/30" },
    { bg: "bg-orange-500/20", text: "text-orange-400", border: "border-orange-500/30" },
    { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30" },
    { bg: "bg-yellow-500/20", text: "text-yellow-400", border: "border-yellow-500/30" },
    { bg: "bg-red-500/20", text: "text-red-400", border: "border-red-500/30" },
    { bg: "bg-indigo-500/20", text: "text-indigo-400", border: "border-indigo-500/30" },
    { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" },
  ]
  
  // Use skill name to get consistent color
  const hash = skill.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  
  return colors[Math.abs(hash) % colors.length]
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const basePath = process.env.NODE_ENV === 'production' ? '/resume-s2pac' : ''
  const imageSrc = project.image ? `${basePath}${project.image}` : `${basePath}/placeholder.svg`
  
  return (
    <div
      className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
      style={{ zIndex: 2 }}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-64 bg-muted overflow-hidden">
        <img
          src={imageSrc}
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
          {project.technologies.map((tech) => {
            const color = getSkillColor(tech)
            return (
              <span
                key={tech}
                className={`px-3 py-1 text-xs font-medium rounded-full border ${color.bg} ${color.text} ${color.border}`}
              >
                {tech}
              </span>
            )
          })}
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

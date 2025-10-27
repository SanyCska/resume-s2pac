"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"

export interface Project {
  id: string
  title: string
  date: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: "bloom-scrolling",
    title: "Bloom Scrolling",
    date: "October 2024 - Present",
    description:
      "AI-powered microlearning platform that generates personalized learning tracks from short-form videos. ThinkTok allows users to input any topic and instantly get a 10-video learning track built from curated clips across the internet.",
    fullDescription:
      "AI-powered microlearning platform that generates personalized learning tracks from short-form videos. ThinkTok allows users to input any topic and instantly get a 10-video learning track built from curated clips across the internet. The platform can also cut long educational videos into short, engaging fragments, optimized for Reels, Shorts, and TikTok. Beyond the mobile app, the project includes a series of Telegram bots for quick testing and user acquisition. Built with React Native and Firebase, ThinkTok combines AI-driven content discovery with an intuitive mobile experience. 🏆 Winner of the Cyprus Hackathon 2024",
    image: "/bloom-scrolling.jpg",
    technologies: ["TypeScript", "React Native", "React", "Python", "ChatGPT API", "FFmpeg", "Telegram Bot API", "PostgreSQL"],
    liveUrl: "https://bloomscrolling.framer.website/",
  },
    {
        id: "fantasy-igaming-league",
        title: "Fantasy iGaming League",
        date: "August 2025 - Present",
        description:
            "A fantasy league platform inspired by FPL mechanics but tailored for the iGaming industry. Users can draft teams, compete on leaderboards, and earn points based on real-time performance metrics and dynamic player valuations.",
        fullDescription:
            "A fantasy league platform inspired by FPL mechanics but tailored for the iGaming industry. Users can draft teams, compete on leaderboards, and earn points based on real-time performance metrics and dynamic player valuations. The platform includes an internal economy system and advanced data models for calculating player impact and market value. Built with modern web technologies and real-time data processing capabilities.",
        image: "/fantasy.png",
        technologies: ["Python", "Next.js", "PostgreSQL", "Redis", "FastAPI", "Prisma", "Docker"],
    },
    {
        id: "jobly-ai",
        title: "Jobly.AI",
        date: "October 2025 - Present",
        description:
            "An intelligent job aggregator that collects and analyzes vacancies from Telegram channels, specialized job boards, and other open sources - all displayed in a unified Telegram WebApp.",
        fullDescription:
            "An intelligent job aggregator that collects and analyzes vacancies from Telegram channels, specialized job boards, and other open sources - all displayed in a unified Telegram WebApp. Custom-built AI agents handle continuous parsing and classification of job posts, while LLM-powered tools generate structured and well-designed job cards. Users can select from multiple description styles - from concise corporate summaries to engaging startup-style intros - all generated in real time. The system aims to simplify job discovery by bringing together the fragmented job market inside a clean, conversational interface.",
        image: "/jobs.png",
        technologies: ["Python", "Telegram Bot API", "WebApp SDK", "Tailwind CSS", "Asyncio", "ChatGPT API", "Next.js"],
        liveUrl: "https://v0-hr-2.vercel.app/",
    },
  {
    id: "bauman-united",
    title: "Bauman United Automation System",
    date: "July 2022 - Present",
    description:
      "Development of a set of automation scripts for Bauman United, a student football team. The system identifies and analyzes potential players through social media data, public sources, and university entrant lists, using scraping, VK API, and Telegram integrations.",
    fullDescription:
      "Development of a comprehensive automation system for Bauman United, a student football team. The system identifies and analyzes potential players through social media data, public sources, and university entrant lists, using advanced scraping techniques, VK API, and Telegram integrations. Includes tools for automating social media management, player database updates, and AI-based content generation. The system streamlines recruitment processes and enhances team management efficiency through intelligent data processing and automated workflows.",
    image: "/bauman-united-team.jpg",
    technologies: ["Python", "VK API", "Telegram API", "Google Sheets API", "BeautifulSoup", "Asyncio", "ChatGPT API"],
    githubUrl: "https://github.com/Bauman-United",
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

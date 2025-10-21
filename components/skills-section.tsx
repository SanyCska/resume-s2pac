"use client"

import { useState } from "react"
import { Code2, Server, Lightbulb } from "lucide-react"

const skillCategories = {
  frontend: {
    icon: Code2,
    title: "Frontend",
    skills: [
      "React",
      "Next.js 13",
      "TypeScript",
      "JavaScript (ES6+)",
      "Vite",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "React Native",
      "Tailwind CSS",
      "Framer Motion",
      "Webpack",
      "ESLint",
      "Prettier",
      "Storybook",
      "React Testing Library",
    ],
  },
  backend: {
    icon: Server,
    title: "Backend",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "AWS Lambda",
      "AWS S3",
      "Docker",
      "CI/CD",
      "REST",
      "GraphQL",
      "WebSockets",
      "Celery",
      "RabbitMQ",
      "AI agents",
    ],
  },
  product: {
    icon: Lightbulb,
    title: "Product Management",
    skills: [
      "Agile / Scrum / Kanban",
      "Stakeholder Management",
      "Roadmapping",
      "MVP Design",
      "Feature Prioritization",
      "User Research",
      "Market Research",
      "A/B Testing",
      "Analytics",
      "Team Coordination",
      "Technical Writing",
      "Cross-functional Planning",
    ],
  },
}

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof skillCategories>("frontend")

  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-12 text-balance">
          Skills
        </h2>

        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="flex flex-wrap gap-4 mb-8">
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as keyof typeof skillCategories)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === key
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.title}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skillCategories[activeTab].skills.map((skill, index) => (
              <div
                key={skill}
                className="px-4 py-3 rounded-lg bg-secondary/50 text-center text-sm font-medium hover:bg-secondary transition-colors"
                style={{
                  animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

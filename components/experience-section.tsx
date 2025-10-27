import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "iGaming Platform",
    period: "2020 – Present",
    description:
      "Leading frontend architecture and development for high-traffic iGaming platforms across Europe and Latin America. Responsible for migrating legacy React projects to Next.js 13 + TypeScript, implementing real-time data features, and optimizing application performance. Collaborated with distributed teams and mentored junior developers to ensure technical excellence and consistency across products.",
  },
  {
    role: "Product Manager",
    company: "Crypto Startup",
    period: "2021 – 2022",
    description:
      "Defined and executed product strategy for CeFi & DeFi applications. Led cross-functional teams, coordinated development using Scrum/Kanban, and managed product delivery from concept to MVP and ICO launch. Combined technical and business perspectives to create user-focused crypto solutions.",
  },
  {
    role: "Python Team Lead",
    company: "Energy Software Systems",
    period: "2018 – 2020",
    description:
      "Led a team developing enterprise-grade software for major energy companies. Designed backend architecture in Python/Django, managed integrations, and oversaw successful real-world deployments. Built a reliable monitoring system for relay protection and automation equipment adopted in large-scale industrial environments.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-4" style={{ zIndex: 1 }}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-12 text-balance">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
              style={{ zIndex: 2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)]">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="text-primary font-medium mb-3">{exp.company}</div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

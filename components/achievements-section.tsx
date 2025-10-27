import { Trophy } from "lucide-react"

export function AchievementsSection() {
  return (
    <section className="relative py-32 px-4" style={{ zIndex: 1 }}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-12 text-balance">
          Achievements
        </h2>

        <div className="glass-card p-8 md:p-12 rounded-2xl gradient-glow border-2 border-primary/20" style={{ zIndex: 2 }}>
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-2xl bg-primary/10 text-primary">
              <Trophy className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-3">
                HackTech'24 Winner - Cyprus Hackathon 2024
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Won first place at HackTech'24, one of Cyprus's leading hackathons, with the project ThinkTok (Bloom Scrolling) - an AI-powered microlearning app that helps users escape the dopamine trap of endless scrolling. The product generates custom short-video learning tracks from across the web and can cut long educational videos into concise clips.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Developed from scratch in 48 hours by the Databulls team, competing against 50+ international teams, and recognized for innovation, execution speed, and real-world potential.
              </p>
              <a 
                href="https://adtechholding.com/blog/hacktech24-winners-interview-with-databulls-team-captain/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Read the full interview →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

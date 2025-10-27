export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-4" style={{ zIndex: 1 }}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-12 text-balance">
          About
        </h2>
        <div className="glass-card p-8 md:p-12 rounded-2xl space-y-6 text-lg leading-relaxed" style={{ zIndex: 2 }}>
          <p className="text-muted-foreground">
            I'm a software engineer with a strong technical background and a passion for building meaningful digital products.
          </p>
          <p className="text-muted-foreground">
            Graduated from <span className="text-foreground font-medium">Bauman Moscow State Technical University</span>, one of the top engineering universities in Russia. My journey in tech has been diverse and hands-on - from backend systems for energy companies to high-load web apps in the iGaming industry.
          </p>
          <p className="text-muted-foreground">
            I started my career at <span className="text-foreground font-medium">RTSoft</span>, where I developed Python-based software for major energy enterprises and quickly grew into a team lead role, managing a cross-functional team and delivering production-ready industrial systems.
          </p>
          <p className="text-muted-foreground">
            Later, I shifted focus to frontend development, joining <span className="text-foreground font-medium">Offside Gaming</span>, where I've been building modern, scalable web applications for international B2B clients in the iGaming space - using React, Next.js, and TypeScript to create performant, user-centric experiences.
          </p>
          <p className="text-muted-foreground">
            I also spent a year as a <span className="text-foreground font-medium">Product Manager at a crypto startup (Zam.io)</span>, leading distributed teams, defining product strategy, and helping the project reach the MVP and ICO stages.
          </p>
          <p className="text-muted-foreground">
            Alongside my main work, I keep experimenting with projects that combine frontend, backend, and product design - from internal tools to experimental web platforms.
          </p>
          <p className="text-muted-foreground">
            This blend of engineering depth and product vision helps me approach development not just as code, but as a way to build useful, elegant, and impactful products.
          </p>
        </div>
      </div>
    </section>
  )
}

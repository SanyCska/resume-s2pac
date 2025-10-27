"use client"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden" style={{ zIndex: 1 }}>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] leading-tight text-balance animate-glitch">
            Senior Frontend Developer
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-light">
            Product-minded Engineer | Ex-Tech Lead
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building digital experiences that merge creativity and technology
          </p>
        </div>
      </div>
    </section>
  )
}

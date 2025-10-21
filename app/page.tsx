import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingShapes } from "@/components/floating-shapes"
import { BinaryRain } from "@/components/binary-rain"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <BinaryRain />
      <FloatingShapes />
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

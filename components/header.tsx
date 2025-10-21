"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card py-4" : "py-6"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold font-[family-name:var(--font-heading)]">a.stupak</div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download Resume</span>
        </Button>
      </div>
    </header>
  )
}

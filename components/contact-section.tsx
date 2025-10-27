"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function ContactSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume/resume.pdf'
    link.download = 'Alexander_Stupak_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-16 rounded-2xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-balance">
            {"Let's build something great together"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 active:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/SanyCska"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aleksandr-stupak-2136b81a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sany.cska1996@gmail.com"
              className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2025 a.stupak. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}

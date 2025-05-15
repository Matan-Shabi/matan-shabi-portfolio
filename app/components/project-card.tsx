"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  demoUrl?: string
  image?: string
}

export default function ProjectCard({ title, description, techStack, githubUrl, demoUrl, image }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up", "opacity-100")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-br from-[#232F3E] to-[#1A2433] rounded-lg overflow-hidden hover:shadow-xl hover:shadow-[#FF9900]/20 transition-all duration-500 flex flex-col h-full border border-[#FF9900]/20 transform hover:scale-[1.03] opacity-0"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2433] to-transparent z-10"></div>
          <Image  src={image || "/placeholder.svg"}
                  alt={title}
                  fill
                  unoptimized // <-- add this
                  className="object-cover" />
        </div>
      )}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-[#FF9900]">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-[#0F1924] text-[#FF9900] text-xs px-3 py-1 rounded-full border border-[#FF9900]/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-[#FF9900]/20 p-4 flex justify-between">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#FF9900] transition-colors group"
        >
          <div className="bg-[#0F1924] p-1 rounded-full group-hover:bg-[#FF9900]/20 transition-colors">
            <Github size={16} />
          </div>
          <span>GitHub</span>
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#FF9900] transition-colors group"
          >
            <div className="bg-[#0F1924] p-1 rounded-full group-hover:bg-[#FF9900]/20 transition-colors">
              <ExternalLink size={16} />
            </div>
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  )
}

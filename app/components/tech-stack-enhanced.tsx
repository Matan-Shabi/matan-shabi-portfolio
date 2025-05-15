"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface TechItem {
  name: string
  icon: string
  description: string
}

interface TechCategory {
  name: string
  color: string
  items: TechItem[]
}

export default function TechStackEnhanced() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Define the tech stack categories and items
  const categories: TechCategory[] = [
    {
      name: "Infrastructure",
      color: "#FF9900",
      items: [
        { name: "AWS", icon: "/aws-logo.png", description: "Amazon Web Services cloud infrastructure" },
        { name: "Terraform", icon: "/terraform-logo.png", description: "Infrastructure as Code" },
        { name: "Docker", icon: "/docker-logo.png", description: "Containerization platform" },
        { name: "Kubernetes", icon: "/kubernetes-logo.png", description: "Container orchestration" },
        { name: "Linux", icon: "/linux-logo.png", description: "Operating system" },
        { name: "Ansible", icon: "/ansible-logo.png", description: "Configuration management" },
      ],
    },
    {
      name: "CI/CD",
      color: "#FF5757",
      items: [
        { name: "Jenkins", icon: "/jenkins-logo.png", description: "CI/CD automation server" },
        { name: "GitLab", icon: "/gitlab-logo.png", description: "DevOps platform" },
        { name: "GitHub Actions", icon: "/github-actions-logo.png", description: "CI/CD automation" },
        { name: "Git", icon: "/git-logo.png", description: "Version control system" },
        { name: "GitHub", icon: "/github-logo.png", description: "Git repository hosting" },
      ],
    },
    {
      name: "Monitoring",
      color: "#36D399",
      items: [
        { name: "Prometheus", icon: "/prometheus-logo.png", description: "Monitoring system" },
        { name: "Grafana", icon: "/grafana-logo.png", description: "Observability platform" },
      ],
    },
    {
      name: "Data",
      color: "#3F8FFC",
      items: [
        { name: "MySQL", icon: "/mysql-logo.png", description: "Relational database" },
        { name: "MongoDB", icon: "/mongodb-logo.png", description: "NoSQL database" },
      ],
    },
    {
      name: "Programming",
      color: "#9B5DE5",
      items: [
        { name: "Python", icon: "/python-logo.png", description: "Programming language" },
        { name: "Java", icon: "/java-logo.png", description: "Programming language" },
        { name: "TypeScript", icon: "/typescript-logo.png", description: "Programming language" },
        { name: "Bash", icon: "/bash-logo.png", description: "Shell scripting" },
        { name: "Next.js", icon: "/nextjs-logo.png", description: "React framework" },
        { name: "Express", icon: "/express-logo.png", description: "Node.js web framework" },
        { name: "Spring Boot", icon: "/spring-logo.png", description: "Java framework" },
      ],
    },
  ]

  // Draw connecting lines between categories
  useEffect(() => {
    const drawConnections = () => {
      const container = containerRef.current
      if (!container) return

      const svg = document.getElementById("connections-svg")
      if (!svg) return

      // Clear existing lines
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild)
      }

      // Get category elements
      const categoryElements: { [key: string]: DOMRect } = {}
      categories.forEach((category) => {
        const element = document.getElementById(`category-${category.name.toLowerCase().replace(/\s+/g, "-")}`)
        if (element) {
          categoryElements[category.name] = element.getBoundingClientRect()
        }
      })

      // Define connections between categories
      const connections = [
        { from: "Infrastructure", to: "CI/CD" },
        { from: "Infrastructure", to: "Monitoring" },
        { from: "CI/CD", to: "Programming" },
        { from: "Programming", to: "Data" },
        { from: "Monitoring", to: "Data" },
      ]

      // Calculate container offset
      const containerRect = container.getBoundingClientRect()

      // Draw connections
      connections.forEach((connection) => {
        const fromRect = categoryElements[connection.from]
        const toRect = categoryElements[connection.to]

        if (fromRect && toRect) {
          // Calculate center points relative to the container
          const fromX = fromRect.left + fromRect.width / 2 - containerRect.left
          const fromY = fromRect.top + fromRect.height / 2 - containerRect.top
          const toX = toRect.left + toRect.width / 2 - containerRect.left
          const toY = toRect.top + toRect.height / 2 - containerRect.top

          // Create line
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
          line.setAttribute("x1", fromX.toString())
          line.setAttribute("y1", fromY.toString())
          line.setAttribute("x2", toX.toString())
          line.setAttribute("y2", toY.toString())
          line.setAttribute("stroke", "url(#connection-gradient)")
          line.setAttribute("stroke-width", "2")
          line.setAttribute("stroke-dasharray", "5,5")
          line.classList.add("animate-pulse-slow")

          svg.appendChild(line)
        }
      })
    }

    // Draw connections initially and on window resize
    drawConnections()
    window.addEventListener("resize", drawConnections)

    return () => {
      window.removeEventListener("resize", drawConnections)
    }
  }, [categories])

  return (
    <div className="relative" ref={containerRef}>
      {/* SVG for connections */}
      <svg id="connections-svg" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <defs>
          <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF9900" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF5757" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Tech categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {categories.map((category) => (
          <div
            key={category.name}
            id={`category-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="bg-[#232F3E]/80 rounded-xl border border-[#FF9900]/20 overflow-hidden shadow-lg animate-fade-in"
          >
            <div className="py-3 px-4 text-center font-bold text-black" style={{ backgroundColor: category.color }}>
              {category.name}
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="relative flex flex-col items-center p-2 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer"
                    onMouseEnter={() => setActiveTooltip(tech.name)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center bg-white/10 rounded-lg p-2">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-xs text-center">{tech.name}</span>

                    {activeTooltip === tech.name && (
                      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-[calc(100%+5px)] bg-gradient-to-r from-[#232F3E] to-[#1A2433] text-white text-xs py-2 px-3 rounded-md whitespace-nowrap z-20 border border-[#FF9900]/20 shadow-lg animate-fade-in">
                        {tech.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

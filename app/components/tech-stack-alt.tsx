"use client"

import { useState, useRef } from "react"

interface TechItem {
  name: string
  icon: string
  description: string
  category: string
  level?: number // 1-3 for skill level
  related?: string[] // related technologies
}

export default function TechStackAlt() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const containerRef = useRef<HTMLDivElement>(null)

  const techStack: TechItem[] = [
    {
      name: "AWS",
      icon: "/aws-logo.png",
      description: "Amazon Web Services cloud infrastructure",
      category: "cloud",
      level: 3,
      related: ["Terraform", "Docker", "Kubernetes"],
    },
    {
      name: "Python",
      icon: "/python-logo.png",
      description: "Programming language",
      category: "programming",
      level: 3,
      related: ["Bash", "Jenkins"],
    },
    {
      name: "Java",
      icon: "/java-logo.png",
      description: "Programming language",
      category: "programming",
      level: 2,
      related: ["Spring Boot"],
    },
    {
      name: "TypeScript",
      icon: "/typescript-logo.png",
      description: "Programming language",
      category: "programming",
      level: 3,
      related: ["Next.js", "Express"],
    },
    {
      name: "Bash",
      icon: "/bash-logo.png",
      description: "Shell scripting",
      category: "programming",
      level: 2,
      related: ["Linux", "Git"],
    },
    {
      name: "Jenkins",
      icon: "/jenkins-logo.png",
      description: "CI/CD automation server",
      category: "cicd",
      level: 3,
      related: ["GitLab", "GitHub Actions", "Docker"],
    },
    {
      name: "GitLab",
      icon: "/gitlab-logo.png",
      description: "DevOps platform",
      category: "cicd",
      level: 2,
      related: ["Git", "GitHub"],
    },
    {
      name: "GitHub Actions",
      icon: "/github-actions-logo.png",
      description: "CI/CD automation",
      category: "cicd",
      level: 2,
      related: ["GitHub", "Docker"],
    },
    {
      name: "Docker",
      icon: "/docker-logo.png",
      description: "Containerization platform",
      category: "container",
      level: 3,
      related: ["Kubernetes", "AWS"],
    },
    {
      name: "Kubernetes",
      icon: "/kubernetes-logo.png",
      description: "Container orchestration",
      category: "container",
      level: 3,
      related: ["Docker", "Terraform"],
    },
    {
      name: "Terraform",
      icon: "/terraform-logo.png",
      description: "Infrastructure as Code",
      category: "infrastructure",
      level: 3,
      related: ["AWS", "Ansible"],
    },
    {
      name: "Ansible",
      icon: "/ansible-logo.png",
      description: "Configuration management",
      category: "infrastructure",
      level: 2,
      related: ["Terraform", "Linux"],
    },
    {
      name: "Git",
      icon: "/git-logo.png",
      description: "Version control system",
      category: "version-control",
      level: 3,
      related: ["GitHub", "GitLab"],
    },
    {
      name: "GitHub",
      icon: "/github-logo.png",
      description: "Git repository hosting",
      category: "version-control",
      level: 3,
      related: ["Git", "GitHub Actions"],
    },
    {
      name: "Prometheus",
      icon: "/prometheus-logo.png",
      description: "Monitoring system",
      category: "monitoring",
      level: 2,
      related: ["Grafana"],
    },
    {
      name: "Grafana",
      icon: "/grafana-logo.png",
      description: "Observability platform",
      category: "monitoring",
      level: 2,
      related: ["Prometheus"],
    },
    {
      name: "Linux",
      icon: "/linux-logo.png",
      description: "Operating system",
      category: "os",
      level: 3,
      related: ["Bash", "Ansible"],
    },
    {
      name: "MySQL",
      icon: "/mysql-logo.png",
      description: "Relational database",
      category: "database",
      level: 2,
      related: ["MongoDB"],
    },
    {
      name: "MongoDB",
      icon: "/mongodb-logo.png",
      description: "NoSQL database",
      category: "database",
      level: 2,
      related: ["MySQL"],
    },
    {
      name: "Next.js",
      icon: "/nextjs-logo.png",
      description: "React framework",
      category: "programming",
      level: 3,
      related: ["TypeScript", "Express"],
    },
    {
      name: "Express",
      icon: "/express-logo.png",
      description: "Node.js web framework",
      category: "programming",
      level: 3,
      related: ["TypeScript", "Next.js", "MongoDB"],
    },
    {
      name: "Spring Boot",
      icon: "/spring-logo.png",
      description: "Java framework",
      category: "programming",
      level: 2,
      related: ["Java", "MySQL"],
    },
  ]

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "programming", name: "Programming" },
    { id: "cloud", name: "Cloud" },
    { id: "cicd", name: "CI/CD Tools" },
    { id: "container", name: "Containerization" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "version-control", name: "Version Control" },
    { id: "monitoring", name: "Monitoring" },
    { id: "os", name: "OS & Virtualization" },
    { id: "database", name: "Databases" },
  ]

  const filteredTech =
    activeCategory === "all" ? techStack : techStack.filter((tech) => tech.category === activeCategory)

  // Calculate positions for the bubbles
  const calculatePositions = () => {
    const positions: { [key: string]: { x: number; y: number; size: number } } = {}
    const centerX = 50 // percentage
    const centerY = 50 // percentage

    // Arrange in a spiral pattern
    filteredTech.forEach((tech, index) => {
      const angle = index * 0.5
      const distance = 5 + index * 1.5
      const size = tech.level ? 10 + tech.level * 2 : 12

      positions[tech.name] = {
        x: centerX + distance * Math.cos(angle),
        y: centerY + distance * Math.sin(angle),
        size,
      }
    })

    return positions
  }

  const positions = calculatePositions()

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-[#FF9900] to-[#FF5757] text-black font-medium shadow-lg"
                : "bg-[#232F3E] text-gray-300 hover:bg-[#2d3b4d]"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="relative h-[600px] bg-[#0F1924] rounded-xl overflow-hidden" ref={containerRef}>
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-70">
          {filteredTech.map((source) =>
            (source.related || []).map((targetName, idx) => {
              const target = filteredTech.find((t) => t.name === targetName)
              if (!target || !positions[source.name] || !positions[targetName]) return null

              return (
                <line
                  key={`${source.name}-${targetName}-${idx}`}
                  x1={`${positions[source.name].x}%`}
                  y1={`${positions[source.name].y}%`}
                  x2={`${positions[targetName].x}%`}
                  y2={`${positions[targetName].y}%`}
                  stroke="url(#connection-gradient)"
                  strokeWidth="1"
                  className="animate-draw-line"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                  }}
                />
              )
            }),
          )}
          <defs>
            <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF9900" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF5757" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Skill bubbles */}
        {filteredTech.map((tech, index) => {
          const pos = positions[tech.name]
          if (!pos) return null

          return (
            <div
              key={tech.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-500 animate-fade-in"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: `${pos.size}rem`,
                height: `${pos.size}rem`,
                animationDelay: `${index * 50}ms`,
                zIndex: tech.name === activeTooltip ? 10 : 1,
              }}
              onMouseEnter={() => setActiveTooltip(tech.name)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <div
                className={`w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-[#232F3E] to-[#1A2433] border transition-all duration-300 ${
                  tech.name === activeTooltip ? "border-[#FF9900] scale-110" : "border-[#FF9900]/30"
                }`}
              >
                <span className="text-center text-sm font-medium">{tech.name}</span>
              </div>

              {activeTooltip === tech.name && (
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-[calc(100%+10px)] bg-gradient-to-r from-[#232F3E] to-[#1A2433] text-white text-xs py-2 px-3 rounded-md whitespace-nowrap z-20 border border-[#FF9900]/20 shadow-lg animate-fade-in">
                  <div className="font-bold mb-1">{tech.name}</div>
                  <div>{tech.description}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

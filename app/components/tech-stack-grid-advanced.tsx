"use client"

import { useState } from "react"
import Image from "next/image"

interface TechItem {
  name: string
  icon: string
  description: string
}

interface TechCategory {
  id: string
  name: string
  color: string
  items: TechItem[]
}

export default function TechStackGridAdvanced() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  // Define the tech stack categories and items
  const categories: TechCategory[] = [
    {
      id: "client",
      name: "Client",
      color: "#FF9900",
      items: [
        { name: "TypeScript", icon: "/typescript-logo.png", description: "Typed JavaScript language" },
        { name: "Next.js", icon: "/nextjs-logo.png", description: "React framework" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      color: "#FF5757",
      items: [
        { name: "Python", icon: "/python-logo.png", description: "Programming language" },
        { name: "Java", icon: "/java-logo.png", description: "Programming language" },
        { name: "Express", icon: "/express-logo.png", description: "Node.js web framework" },
        { name: "Spring Boot", icon: "/spring-logo.png", description: "Java framework" },
      ],
    },
    {
      id: "data",
      name: "Data",
      color: "#3F8FFC",
      items: [
        { name: "MySQL", icon: "/mysql-logo.png", description: "Relational database" },
        { name: "MongoDB", icon: "/mongodb-logo.png", description: "NoSQL database" },
      ],
    },
    {
      id: "infra",
      name: "Infrastructure",
      color: "#36D399",
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
      id: "cicd",
      name: "CI/CD",
      color: "#9B5DE5",
      items: [
        { name: "Jenkins", icon: "/jenkins-logo.png", description: "CI/CD automation server" },
        { name: "GitLab", icon: "/gitlab-logo.png", description: "DevOps platform" },
        { name: "GitHub Actions", icon: "/github-actions-logo.png", description: "CI/CD automation" },
        { name: "Git", icon: "/git-logo.png", description: "Version control system" },
        { name: "GitHub", icon: "/github-logo.png", description: "Git repository hosting" },
      ],
    },
    {
      id: "monitoring",
      name: "Monitoring",
      color: "#F2994A",
      items: [
        { name: "Prometheus", icon: "/prometheus-logo.png", description: "Monitoring system" },
        { name: "Grafana", icon: "/grafana-logo.png", description: "Observability platform" },
      ],
    },
  ]

  return (
    <div className="space-y-1">
      {/* Tech Stack Grid */}
      <div className="grid grid-cols-1 gap-1">
        {categories.map((category) => (
          <div key={category.id} className="relative">
            {/* Category Label */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[120px] flex items-center justify-center p-2 font-bold text-black z-10"
              style={{ backgroundColor: category.color }}
            >
              <span className="transform -rotate-90 text-lg whitespace-nowrap">{category.name}</span>
            </div>

            {/* Tech Items */}
            <div
              className="ml-[120px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-1 bg-[#232F3E]/80 border-l-4"
              style={{ borderColor: category.color }}
            >
              {category.items.map((tech) => (
                <div
                  key={tech.name}
                  className="relative flex flex-col items-center p-4 bg-[#1A2433] rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onMouseEnter={() => setActiveTooltip(`${category.id}-${tech.name}`)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="w-12 h-12 mb-3 flex items-center justify-center bg-white/10 rounded-lg p-2">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-center">{tech.name}</span>

                  {activeTooltip === `${category.id}-${tech.name}` && (
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-[calc(100%+5px)] bg-gradient-to-r from-[#232F3E] to-[#1A2433] text-white text-xs py-2 px-3 rounded-md whitespace-nowrap z-20 border border-[#FF9900]/20 shadow-lg animate-fade-in">
                      {tech.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

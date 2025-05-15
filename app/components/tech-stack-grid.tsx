"use client"

import { useState } from "react"
import Image from "next/image"

interface TechItem {
  name: string
  icon: string
  description: string
  category: string
  subcategory?: string
}

export default function TechStackGrid() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const techStack: TechItem[] = [
    // Infrastructure
    {
      name: "AWS",
      icon: "/aws-logo.png",
      description: "Amazon Web Services cloud infrastructure",
      category: "infrastructure",
      subcategory: "cloud",
    },
    {
      name: "Terraform",
      icon: "/terraform-logo.png",
      description: "Infrastructure as Code",
      category: "infrastructure",
      subcategory: "iac",
    },
    {
      name: "Docker",
      icon: "/docker-logo.png",
      description: "Containerization platform",
      category: "infrastructure",
      subcategory: "container",
    },
    {
      name: "Kubernetes",
      icon: "/kubernetes-logo.png",
      description: "Container orchestration",
      category: "infrastructure",
      subcategory: "container",
    },
    {
      name: "Linux",
      icon: "/linux-logo.png",
      description: "Operating system",
      category: "infrastructure",
      subcategory: "os",
    },
    {
      name: "Ansible",
      icon: "/ansible-logo.png",
      description: "Configuration management",
      category: "infrastructure",
      subcategory: "iac",
    },

    // CI/CD
    {
      name: "Jenkins",
      icon: "/jenkins-logo.png",
      description: "CI/CD automation server",
      category: "cicd",
      subcategory: "automation",
    },
    {
      name: "GitLab",
      icon: "/gitlab-logo.png",
      description: "DevOps platform",
      category: "cicd",
      subcategory: "platform",
    },
    {
      name: "GitHub Actions",
      icon: "/github-actions-logo.png",
      description: "CI/CD automation",
      category: "cicd",
      subcategory: "automation",
    },
    {
      name: "Git",
      icon: "/git-logo.png",
      description: "Version control system",
      category: "cicd",
      subcategory: "version-control",
    },
    {
      name: "GitHub",
      icon: "/github-logo.png",
      description: "Git repository hosting",
      category: "cicd",
      subcategory: "platform",
    },

    // Monitoring
    {
      name: "Prometheus",
      icon: "/prometheus-logo.png",
      description: "Monitoring system",
      category: "monitoring",
      subcategory: "metrics",
    },
    {
      name: "Grafana",
      icon: "/grafana-logo.png",
      description: "Observability platform",
      category: "monitoring",
      subcategory: "visualization",
    },

    // Data
    {
      name: "MySQL",
      icon: "/mysql-logo.png",
      description: "Relational database",
      category: "data",
      subcategory: "database",
    },
    {
      name: "MongoDB",
      icon: "/mongodb-logo.png",
      description: "NoSQL database",
      category: "data",
      subcategory: "database",
    },

    // Programming
    {
      name: "Python",
      icon: "/python-logo.png",
      description: "Programming language",
      category: "programming",
      subcategory: "backend",
    },
    {
      name: "Java",
      icon: "/java-logo.png",
      description: "Programming language",
      category: "programming",
      subcategory: "backend",
    },
    {
      name: "TypeScript",
      icon: "/typescript-logo.png",
      description: "Programming language",
      category: "programming",
      subcategory: "frontend",
    },
    {
      name: "Bash",
      icon: "/bash-logo.png",
      description: "Shell scripting",
      category: "programming",
      subcategory: "scripting",
    },
    {
      name: "Next.js",
      icon: "/nextjs-logo.png",
      description: "React framework",
      category: "programming",
      subcategory: "frontend",
    },
    {
      name: "Express",
      icon: "/express-logo.png",
      description: "Node.js web framework",
      category: "programming",
      subcategory: "backend",
    },
    {
      name: "Spring Boot",
      icon: "/spring-logo.png",
      description: "Java framework",
      category: "programming",
      subcategory: "backend",
    },
  ]

  // Define the grid structure
  const gridStructure = [
    {
      title: "Infrastructure & Cloud",
      category: "infrastructure",
      color: "#FF9900",
    },
    {
      title: "CI/CD & Version Control",
      category: "cicd",
      color: "#FF5757",
    },
    {
      title: "Monitoring & Observability",
      category: "monitoring",
      color: "#36D399",
    },
    {
      title: "Data Storage",
      category: "data",
      color: "#3F8FFC",
    },
    {
      title: "Programming & Development",
      category: "programming",
      color: "#9B5DE5",
    },
  ]

  return (
    <div className="space-y-8">
      {gridStructure.map((section) => {
        const sectionTech = techStack.filter((tech) => tech.category === section.category)

        return (
          <div key={section.category} className="animate-fade-in">
            <div className="mb-4 pb-2 border-b-2" style={{ borderColor: section.color }}>
              <h3 className="text-xl font-bold" style={{ color: section.color }}>
                {section.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {sectionTech.map((tech) => (
                <div
                  key={tech.name}
                  className="relative flex flex-col items-center p-4 bg-[#232F3E]/80 rounded-lg border border-[#FF9900]/20 hover:border-[#FF9900]/60 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onMouseEnter={() => setActiveTooltip(tech.name)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-center">{tech.name}</span>

                  {activeTooltip === tech.name && (
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-[calc(100%+10px)] bg-gradient-to-r from-[#232F3E] to-[#1A2433] text-white text-xs py-2 px-3 rounded-md whitespace-nowrap z-10 border border-[#FF9900]/20 shadow-lg animate-fade-in">
                      {tech.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

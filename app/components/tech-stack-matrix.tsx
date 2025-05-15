"use client"

import { useState } from "react"
import Image from "next/image"

interface TechItem {
  name: string
  icon: string
  description: string
  category: string
  subcategory: string
}

export default function TechStackMatrix() {
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

  // Define the matrix structure
  const matrixRows = [
    { id: "programming", label: "Programming" },
    { id: "cicd", label: "CI/CD" },
    { id: "data", label: "Data" },
    { id: "infrastructure", label: "Infrastructure" },
  ]

  const matrixColumns = [
    { id: "backend", label: "Backend" },
    { id: "frontend", label: "Frontend" },
    { id: "container", label: "Containers" },
    { id: "cloud", label: "Cloud" },
    { id: "monitoring", label: "Monitoring" },
  ]

  // Group tech items by row and column
  const getItemsForCell = (rowId: string, colId: string) => {
    return techStack.filter(
      (tech) =>
        tech.category === rowId &&
        (tech.subcategory === colId ||
          // Handle special cases for better grid layout
          (rowId === "infrastructure" && colId === "backend" && tech.subcategory === "os") ||
          (rowId === "cicd" && colId === "backend" && tech.subcategory === "version-control") ||
          (rowId === "cicd" && colId === "cloud" && tech.subcategory === "platform") ||
          (rowId === "infrastructure" && colId === "cloud" && tech.subcategory === "iac")),
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border border-[#FF9900]/20 bg-[#232F3E]/80"></th>
            {matrixColumns.map((col) => (
              <th key={col.id} className="p-2 border border-[#FF9900]/20 bg-[#232F3E]/80 text-[#FF9900] font-bold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrixRows.map((row) => (
            <tr key={row.id}>
              <th className="p-2 border border-[#FF9900]/20 bg-[#232F3E]/80 text-[#FF9900] font-bold whitespace-nowrap">
                {row.label}
              </th>
              {matrixColumns.map((col) => {
                const cellItems = getItemsForCell(row.id, col.id)
                return (
                  <td key={`${row.id}-${col.id}`} className="p-2 border border-[#FF9900]/20 bg-[#1A2433]/60">
                    <div className="flex flex-wrap gap-3 justify-center">
                      {cellItems.map((tech) => (
                        <div
                          key={tech.name}
                          className="relative flex flex-col items-center p-2 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer"
                          onMouseEnter={() => setActiveTooltip(tech.name)}
                          onMouseLeave={() => setActiveTooltip(null)}
                        >
                          <div className="w-10 h-10 mb-1 flex items-center justify-center">
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
                            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-[calc(100%+5px)] bg-gradient-to-r from-[#232F3E] to-[#1A2433] text-white text-xs py-2 px-3 rounded-md whitespace-nowrap z-10 border border-[#FF9900]/20 shadow-lg animate-fade-in">
                              {tech.description}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

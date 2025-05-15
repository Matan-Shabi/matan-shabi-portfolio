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

  const categories: TechCategory[] = [
    {
      id: "client",
      name: "Client",
      color: "#FF9900",
      items: [
        {
          name: "TypeScript",
          icon: "https://cdn.simpleicons.org/typescript",
          description: "Typed JavaScript language",
        },
        {
          name: "Next.js",
          icon: "https://cdn.simpleicons.org/nextdotjs",
          description: "React framework",
        },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      color: "#FF5757",
      items: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python", description: "Programming language" },
        {
          name: "Java",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
          description: "Programming language",
        },
        { name: "Express", icon: "https://cdn.simpleicons.org/express", description: "Node.js web framework" },
        { name: "Nest.js", icon: "https://cdn.simpleicons.org/nestjs", description: "Progressive Node.js framework" },
        { name: "Flask", icon: "https://cdn.simpleicons.org/flask", description: "Python web micro-framework" },

      ],
    },
    {
      id: "data",
      name: "Data",
      color: "#3F8FFC",
      items: [
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql", description: "Relational database" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb", description: "NoSQL database" },
        { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq", description: "Message broker" },
      ],
    },
    {
      id: "infra",
      name: "Infrastructure",
      color: "#36D399",
      items: [
        {
          name: "AWS",
          icon: "https://cdn.simpleicons.org/amazon/FF9900",
          description: "Cloud provider",
        },
        { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform", description: "Infrastructure as Code" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker", description: "Containerization" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes", description: "Orchestration" },
        { name: "Linux", icon: "https://cdn.simpleicons.org/linux", description: "Operating System" },
        { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible", description: "Configuration management" },
      ],
    },
    {
      id: "cicd",
      name: "CI/CD",
      color: "#9B5DE5",
      items: [
        { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins", description: "CI/CD automation" },
        { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab", description: "DevOps platform" },
        { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions", description: "Workflow automation" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git", description: "Version control" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github", description: "Repository hosting" },
        { name: "Azure DevOps", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azuredevops/azuredevops-original.svg", description: "CI/CD & project management" },
      ],
    },
    {
      id: "monitoring",
      name: "Monitoring",
      color: "#F2994A",
      items: [
        { name: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus", description: "Monitoring system" },
        { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana", description: "Visualization platform" },
      ],
    },
    {
    id: "tools",
      name: "Tools",
      color: "#9999FF",
      items: [
        {
          name: "NGINX",
          icon: "https://cdn.simpleicons.org/nginx",
          description: "Web server & reverse proxy",
        },
        {
          name: "Playwright",
          icon: "https://playwright.dev/img/playwright-logo.svg",
          description: "End-to-end testing framework",
        },
        {
          name: "Selenium",
          icon: "https://cdn.simpleicons.org/selenium",
          description: "Test automation framework",
        },
  ],
},
  ]

  return (
      <div className="space-y-1">
        <div className="grid grid-cols-1 gap-1">
          {categories.map((category) => (
              <div key={category.id} className="relative">
                <div
                    className="absolute left-0 top-0 bottom-0 w-[120px] flex items-center justify-center p-2 font-bold text-black z-10"
                    style={{ backgroundColor: category.color }}
                >
                  <span className="transform -rotate-90 text-lg whitespace-nowrap">{category.name}</span>
                </div>

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
                              src={tech.icon}
                              alt={tech.name}
                              width={40}
                              height={40}
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg"
                              }}
                              loading="lazy"
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

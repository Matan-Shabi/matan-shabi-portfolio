"use client"

import { useState, useEffect, useRef } from "react"

interface TechItem {
  name: string
  icon: string
  description: string
  category: string
  level?: number // 1-3 for skill level
  related?: string[] // related technologies
}

export default function TechStack() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

  useEffect(() => {
    // Draw the skill cluster visualization
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = containerRef.current
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = 600 // Fixed height for the cluster visualization
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Calculate positions for the tech items in a bubble cluster layout
    const nodes: {
      tech: TechItem
      x: number
      y: number
      radius: number
      angle?: number
      distance?: number
    }[] = []

    // Create nodes for the filtered tech items
    filteredTech.forEach((tech) => {
      const radius = tech.level ? 40 + tech.level * 5 : 45
      nodes.push({
        tech,
        x: 0,
        y: 0,
        radius,
      })
    })

    // Position nodes in a spiral pattern
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const spiralFactor = 0.3
    const angleIncrement = 2.4

    nodes.forEach((node, index) => {
      const angle = index * angleIncrement
      const distance = 30 + spiralFactor * angle
      node.x = centerX + distance * Math.cos(angle)
      node.y = centerY + distance * Math.sin(angle)
      node.angle = angle
      node.distance = distance
    })

    // Adjust positions to avoid overlaps
    const resolveCollisions = () => {
      for (let i = 0; i < 100; i++) {
        let moved = false
        for (let a = 0; a < nodes.length; a++) {
          for (let b = a + 1; b < nodes.length; b++) {
            const nodeA = nodes[a]
            const nodeB = nodes[b]
            const dx = nodeB.x - nodeA.x
            const dy = nodeB.y - nodeA.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = nodeA.radius + nodeB.radius + 5

            if (distance < minDistance) {
              moved = true
              const moveX = ((minDistance - distance) / distance) * dx * 0.5
              const moveY = ((minDistance - distance) / distance) * dy * 0.5

              nodeA.x -= moveX
              nodeA.y -= moveY
              nodeB.x += moveX
              nodeB.y += moveY
            }
          }
        }
        if (!moved) break
      }
    }

    resolveCollisions()

    // Ensure all nodes are within canvas bounds
    nodes.forEach((node) => {
      node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x))
      node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y))
    })

    // Animation variables
    let animationProgress = 0
    const animationDuration = 100

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update animation progress
      if (animationProgress < animationDuration) {
        animationProgress++
      }

      // Draw connections between related nodes
      ctx.strokeStyle = "rgba(255, 153, 0, 0.3)"
      ctx.lineWidth = 1

      if (animationProgress > animationDuration * 0.3) {
        nodes.forEach((source) => {
          const relatedTechs = source.tech.related || []
          relatedTechs.forEach((relatedName) => {
            const target = nodes.find((n) => n.tech.name === relatedName)
            if (target) {
              const connectionProgress = Math.min(
                1,
                (animationProgress - animationDuration * 0.3) / (animationDuration * 0.7),
              )

              // Draw connection line with gradient
              const gradient = ctx.createLinearGradient(source.x, source.y, target.x, target.y)
              gradient.addColorStop(0, "rgba(255, 153, 0, 0.6)")
              gradient.addColorStop(1, "rgba(255, 87, 87, 0.6)")

              ctx.beginPath()
              ctx.strokeStyle = gradient
              ctx.moveTo(source.x, source.y)

              // Calculate the end point based on animation progress
              const endX = source.x + (target.x - source.x) * connectionProgress
              const endY = source.y + (target.y - source.y) * connectionProgress

              ctx.lineTo(endX, endY)
              ctx.stroke()
            }
          })
        })
      }

      // Draw nodes
      nodes.forEach((node, index) => {
        // Skip if not yet visible in animation
        if (index > animationProgress / (animationDuration / nodes.length)) return

        // Calculate node appearance progress
        const nodeProgress = Math.min(
          1,
          (animationProgress - (index * animationDuration) / nodes.length) / (animationDuration / nodes.length),
        )

        // Draw node circle with gradient
        const currentRadius = node.radius * nodeProgress

        // Create radial gradient
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, currentRadius)
        gradient.addColorStop(0, "#232F3E")
        gradient.addColorStop(1, "#1A2433")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2)
        ctx.fill()

        // Draw border
        ctx.strokeStyle = node.tech.name === activeTooltip ? "#FF9900" : "rgba(255, 153, 0, 0.3)"
        ctx.lineWidth = node.tech.name === activeTooltip ? 3 : 1
        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2)
        ctx.stroke()

        // Draw node text if animation is far enough
        if (nodeProgress > 0.7) {
          const textOpacity = (nodeProgress - 0.7) / 0.3
          ctx.fillStyle = `rgba(255, 255, 255, ${textOpacity})`
          ctx.font = "bold 14px Arial"
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(node.tech.name, node.x, node.y)
        }

        // Store node position in DOM for interaction
        const element = document.getElementById(`tech-node-${node.tech.name}`)
        if (element) {
          element.style.left = `${node.x - node.radius}px`
          element.style.top = `${node.y - node.radius}px`
          element.style.width = `${node.radius * 2}px`
          element.style.height = `${node.radius * 2}px`
        }
      })

      if (animationProgress < animationDuration) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [filteredTech, activeTooltip])

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

      <div className="relative" ref={containerRef}>
        <canvas ref={canvasRef} className="w-full h-[600px]"></canvas>

        {/* Interactive elements positioned over the canvas */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              id={`tech-node-${tech.name}`}
              className="absolute rounded-full pointer-events-auto cursor-pointer"
              style={{
                backgroundColor: "transparent",
              }}
              onMouseEnter={() => setActiveTooltip(tech.name)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {activeTooltip === tech.name && (
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-[calc(100%+10px)] bg-gradient-to-r from-[#232F3E] to-[#1A2433] text-white text-xs py-2 px-3 rounded-md whitespace-nowrap z-10 border border-[#FF9900]/20 shadow-lg animate-fade-in">
                  <div className="font-bold mb-1">{tech.name}</div>
                  <div>{tech.description}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

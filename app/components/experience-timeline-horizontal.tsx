"use client"

import { useEffect, useRef } from "react"
import { CalendarDays, Building2, ArrowRight } from "lucide-react"

export default function ExperienceTimelineHorizontal() {
  const experiences = [
   
    {
      title: "IT Technician",
      company: "Poria Hospital",
      period: "2019-2020",
      description: [
        "Managed computer and network systems",
        "Resolved hardware and software issues",
        "Provided technical support to end-users",
      ],
    },
    {
      title: "Software Engineer",
      company: "Kinneret Innovation Center",
      period: "2021-2023",
      description: [
        "Led software development projects using PHP and Python",
        "Created a real-time performance dashboard using Python",
        "Managed client communication and project updates",
        "Collaborated on UI development with design teams",
        "Optimized website for organic Google search ranking",
      ],
    },
    {
      title: "Software Engineer",
      company: "Accadia Software Technologies",
      period: "2024 - 2025",
      description: [
        "Architected and launched a scalable, modular admin panel frontend with Next.js, TypeScript and Feature-Sliced Design, delivering reusable UI components and dynamic role-based access control (RBAC).",
        "Built and optimized a backend API using Express.js, Prisma & SQL Server, modeling fine-grained permissions and tuning database indices for fast, secure data access.",
        "Deployed the full stack on Windows Server 2022, configuring IIS for hosting and PM2 for process management enabling zero-downtime restarts, auto-recovery, and centralized log collection.",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "MSD Animal Health Technology Labs",
      period: "2025 - Present",
      description: [
        "Planned and implemented terraform modules migration to reduce by 15% cloud resources costs at production environment.",
        "Led a team in a hackathon and won 5th place and implemented the outcomes as internal tools to migrate the organization from AZDO to Github.",
        "Maintained AZDO legacy pipelines at production environment.",
        "Authored ADRs, Onboarding guides,deployment.",
        "Developed an automated policy enforcing system on the organizational github."
      ],
    },
  ]

  const timelineRef = useRef<HTMLDivElement>(null)
  const pipelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animation for timeline items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-right", "opacity-100")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item")
    timelineItems?.forEach((item) => {
      observer.observe(item)
    })

    // Animation for pipeline
    const animatePipeline = () => {
      const pipeline = pipelineRef.current
      if (!pipeline) return

      let position = 0
      const pipelineLength = pipeline.offsetWidth

      const animate = () => {
        position = (position + 1) % (pipelineLength * 2)

        const dots = pipeline.querySelectorAll(".pipeline-dot")
        dots.forEach((dot, index) => {
          const dotElement = dot as HTMLElement
          const dotPosition = (position + index * 50) % (pipelineLength * 2)

          if (dotPosition < pipelineLength) {
            const xPos = dotPosition
            dotElement.style.transform = `translateX(${xPos}px)`
            dotElement.style.opacity = "1"
          } else {
            dotElement.style.opacity = "0"
            dotElement.style.transform = `translateX(0)`
          }
        })

        requestAnimationFrame(animate)
      }

      animate()
    }

    animatePipeline()

    return () => {
      timelineItems?.forEach((item) => {
        observer.unobserve(item)
      })
    }
  }, [])

  return (
    <div className="relative" ref={timelineRef}>
      {/* Horizontal Timeline Pipeline */}
      <div
        ref={pipelineRef}
        className="relative h-2 w-full bg-gradient-to-r from-[#FF9900] to-[#FF5757] mb-8 rounded-full overflow-hidden"
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="pipeline-dot absolute top-1/2 w-4 h-4 rounded-full bg-white transform -translate-y-1/2 opacity-0"
            style={{ left: 0 }}
          ></div>
        ))}
      </div>

      {/* Timeline Items */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="timeline-item opacity-0 transition-all duration-700 relative md:flex-1"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="bg-gradient-to-br from-[#232F3E] to-[#1A2433] rounded-lg p-6 border border-[#FF9900]/20 shadow-lg hover:shadow-[#FF9900]/10 transition-all duration-300 transform hover:scale-[1.02] h-full">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex items-center text-[#FF9900] mb-1">
                    <CalendarDays size={18} className="mr-2" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Building2 size={18} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-[#FF9900]">{exp.title}</h3>
                  <ul className="list-none space-y-3 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-[#FF9900] mr-2">•</div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Connecting arrows between timeline items */}
            {index < experiences.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2">
                <ArrowRight size={24} className="text-[#FF9900]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

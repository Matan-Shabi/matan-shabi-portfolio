"use client"

import { useEffect, useRef } from "react"
import { CalendarDays, GraduationCap, Award } from "lucide-react"

export default function EducationTimeline() {
  const education = [
    {
      title: "DevOps Engineer",
      institution: "DevOps Experts",
      location: "Ramat Gan",
      period: "2024",
      description: [
        "Hands-on experience with key DevOps tools and practices, including Python scripting, API integration, and building CI pipelines with Jenkins.",
        "Gained practical skills in version control with Git, Linux administration, and provisioning cloud resources using AWS and Terraform.",
        "Worked with Docker, Kubernetes, and Ansible for containerization, orchestration, and infrastructure automation.",
        "Projects: Building a Python RESTful API, CI/CD pipeline, and orchestrating containerized deployment of production-ready products.",
      ],
      link: {
        text: "Matan-Shabi/WorldOfGame",
        url: "https://github.com/Matan-Shabi/WorldOfGame",
      },
    },
    {
      title: "B.Sc. in Software Engineering",
      institution: "Kinneret Academic College",
      period: "2020-2025",
      description: [],
    },
    {
      title: "Practical Engineer in Electronics",
      institution: "Kinneret Academic College",
      period: "2015-2017",
      description: [],
    },
    {
      title: "CCNA Course - Cisco Network",
      institution: "",
      period: "",
      description: [],
    },
  ]

  const timelineRef = useRef<HTMLDivElement>(null)

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

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item")
    timelineItems?.forEach((item) => {
      observer.observe(item)
    })

    return () => {
      timelineItems?.forEach((item) => {
        observer.unobserve(item)
      })
    }
  }, [])

  return (
    <div className="space-y-12" ref={timelineRef}>
      {education.map((edu, index) => (
        <div
          key={index}
          className="relative pl-8 md:pl-0 timeline-item opacity-0 transition-all duration-700"
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <div className="md:col-span-1 flex flex-col mb-4 md:mb-0">
              {edu.period && (
                <div className="flex items-center text-[#FF9900] mb-1">
                  <CalendarDays size={18} className="mr-2" />
                  <span className="font-medium">{edu.period}</span>
                </div>
              )}
              {edu.institution && (
                <div className="flex items-center text-gray-400">
                  <GraduationCap size={18} className="mr-2" />
                  <span>{edu.institution}</span>
                </div>
              )}
              {edu.location && <div className="text-gray-400 ml-6 mt-1">{edu.location}</div>}
            </div>
            <div className="md:col-span-4 bg-gradient-to-br from-[#232F3E] to-[#1A2433] rounded-lg p-6 border border-[#FF9900]/20 shadow-lg hover:shadow-[#FF9900]/10 transition-all duration-300 transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-4 text-[#FF9900]">{edu.title}</h3>
              {edu.description.length > 0 && (
                <ul className="list-none space-y-3 text-gray-300 mb-4">
                  {edu.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-[#FF9900] mr-2">•</div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {edu.link && (
                <a
                  href={edu.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#FF9900] hover:text-[#FF5757] transition-colors"
                >
                  <Award size={16} className="mr-1" />
                  {edu.link.text}
                </a>
              )}
            </div>
          </div>
          {index < education.length - 1 && (
            <div className="absolute left-3 top-8 h-full w-0.5 bg-gradient-to-b from-[#FF9900] to-[#FF5757]/30 md:hidden"></div>
          )}
        </div>
      ))}
    </div>
  )
}

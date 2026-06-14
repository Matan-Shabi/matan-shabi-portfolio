"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, Mail, Github, Linkedin, Phone, ChevronDown, Menu, X, Users } from "lucide-react"
import { useState, useEffect } from "react"
import QRCode from "./components/qr-code"
import TechStackGridAdvanced from "./components/tech-stack-grid-advanced"
import ProjectCard from "./components/project-card"
import ExperienceTimelineHorizontal from "./components/experience-timeline-horizontal"
import EducationTimeline from "./components/education-timeline"
import AnimatedBackground from "./components/animated-background"
import CICDPipelineAnimation from "./components/cicd-pipeline-animation"
import PipelineBackground from "./components/pipeline-background"
import ContactDownloadButton from "./components/contact-download-button"
import WhatsAppButton from "./components/whatsapp-button"
import { CONTACT } from "./constants/contact"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
      <div className="min-h-screen bg-gradient-to-b from-[#0F1924] to-[#1A1A1A] text-white">
        {/* Skip navigation – keyboard accessibility (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#FF9900] focus:text-black focus:font-semibold focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        >
          Skip to main content
        </a>

        {/* Pipeline Background */}
        <PipelineBackground />

        {/* Navigation */}
        <nav aria-label="Main" className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#232F3E]/90 to-[#0F1924]/90 backdrop-blur-sm border-b border-[#FF9900]/20">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bold text-xl text-[#FF9900]">
              <span className="text-white">Matan</span> Shabi
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white hover:text-[#FF9900] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1924] rounded-sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {([ ["#about","about","About"], ["#experience","experience","Experience"], ["#education","education","Education"], ["#tech-stack","tech-stack","Skills"], ["#projects","projects","Projects"], ["#contact","contact","Contact"] ] as const).map(([href, id, label]) => (
                <Link key={id} href={href} className={`text-sm transition-colors pb-0.5 ${activeSection === id ? "text-[#FF9900] border-b border-[#FF9900]" : "text-gray-300 hover:text-[#FF9900]"}`}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
              <div id="mobile-menu" className="md:hidden bg-[#0F1924]/95 backdrop-blur-md border-b border-[#FF9900]/20 animate-fade-down">
                <div className="flex flex-col space-y-4 p-4">
                  {([ ["#about","about","About"], ["#experience","experience","Experience"], ["#education","education","Education"], ["#tech-stack","tech-stack","Skills"], ["#projects","projects","Projects"], ["#contact","contact","Contact"] ] as const).map(([href, id, label]) => (
                    <Link
                      key={id}
                      href={href}
                      className={`text-base py-2 px-4 rounded-md transition-colors ${activeSection === id ? "bg-[#FF9900]/20 text-[#FF9900]" : "hover:bg-[#232F3E]/50 hover:text-[#FF9900]"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
          )}
        </nav>

        <main id="main-content">

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:pt-32 md:pb-24 overflow-hidden">
          <AnimatedBackground />
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
              {/* Profile Image for Mobile (at the top) */}
              <div className="mb-8 md:hidden flex justify-center animate-fade-in">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#FF9900] shadow-xl shadow-[#FF9900]/20 animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/20 to-transparent z-10"></div>
                  <Image src="/profile-photo.jpeg" alt="Matan Shabi" fill sizes="192px" className="object-cover" priority />
                </div>
              </div>

              <div className="w-full md:w-3/5 animate-fade-in text-center md:text-left">
                <div className="text-[1.25rem] inline-block bg-gradient-to-r from-[#FF9900] to-[#FFCC44] text-black font-medium px-4 py-1 rounded-full mb-2 animate-bounce-subtle">
                  Available for DevOps, DevSecOps, Platform Engineering Positions
                </div>
                <p className="text-sm text-gray-400 mb-4">Open to remote · hybrid </p>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 text-gradient">Matan Shabi</h1>
                <h2 className="text-[1.35rem] md:text-xl lg:text-2xl text-[#FF9900] font-mono mb-3 animate-pulse-slow">
                  DevOps &amp; Cloud-Security Engineer
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 max-w-lg mx-auto md:mx-0">
                  From Terraform modules to GitHub policies - building the infrastructure that lets engineering teams ship faster and more securely.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 mb-6">
                  {([
                    { value: "15%", label: "Cloud cost reduction" },
                    { value: "30+", label: "Team members led" },
                    { value: "1M₪", label: "Budget managed" },
                  ] as const).map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-[#FF9900]">{stat.value}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <a
                      href="/Matan-Shabi-CV.pdf"
                      className="flex items-center gap-2 bg-gradient-to-r from-[#232F3E] to-[#2d3b4d] hover:from-[#2d3b4d] hover:to-[#3a4a5e] text-white px-4 py-2 md:px-6 md:py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <Eye size={16} className="md:w-[18px] md:h-[18px]" />
                    View Resume
                  </a>
                  <a
                      href="#contact"
                      className="flex items-center gap-2 bg-gradient-to-r from-[#FF9900] to-[#FFCC44] hover:from-[#FFCC44] hover:to-[#FF9900] text-black font-medium px-4 py-2 md:px-6 md:py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
                  >
                    <Mail size={16} className="md:w-[18px] md:h-[18px]" />
                    Contact Me
                  </a>
                </div>

                {/* Secondary icon row */}
                <div className="flex justify-center md:justify-start gap-3 mt-4">
                  <a
                      href={CONTACT.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Matan Shabi on GitHub"
                      className="w-10 h-10 flex items-center justify-center bg-[#232F3E] hover:bg-[#2d3b4d] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    <Github size={18} aria-hidden="true" />
                  </a>
                  <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Matan Shabi on LinkedIn"
                      className="w-10 h-10 flex items-center justify-center bg-[#0077B5] hover:bg-[#0A66C2] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    <Linkedin size={18} aria-hidden="true" />
                  </a>
                  <ContactDownloadButton
                      contactDetails={{
                        name: CONTACT.name,
                        phoneNumber: CONTACT.phoneDisplay,
                        email: CONTACT.email,
                        website: CONTACT.website,
                        linkedin: CONTACT.linkedin,
                        jobTitle: CONTACT.jobTitle,
                      }}
                      variant="icon-only"
                  />
                  <WhatsAppButton
                      phoneNumber={CONTACT.phone}
                      message={CONTACT.whatsappMessage}
                  />
                </div>

                <div className="mt-10 animate-bounce-slow hidden md:flex justify-center md:justify-start">
                  <a
                      href="#about"
                      className="flex flex-col items-center text-gray-400 hover:text-[#FF9900] transition-colors"
                  >
                    <span className="text-sm mb-2">Scroll Down</span>
                    <ChevronDown size={24} />
                  </a>
                </div>
              </div>

              {/* Profile Image for Desktop (on the right) */}
              <div className="hidden md:block md:w-2/5 flex justify-center animate-fade-in-delayed">
                <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#FF9900] shadow-xl shadow-[#FF9900]/20 animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/20 to-transparent z-10"></div>
                  <Image src="/profile-photo.jpeg" alt="Matan Shabi" fill sizes="(max-width: 1023px) 224px, 256px" className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CI/CD Pipeline Visualization */}
        <section className="py-12 px-4 md:py-16 bg-gradient-to-b from-[#1A1A1A] to-[#0F1924] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 inline-block text-gradient">DevOps in Action</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FFCC44] mx-auto"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                The kind of pipeline I build — automated from code push to production, including tests, security scans, and zero-downtime deployments.
              </p>
            </div>
            <CICDPipelineAnimation />
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-[#FFCC44]/5 rounded-full blur-3xl"></div>
        </section>

        {/* About Me */}
        <section
            id="about"
            className="py-12 px-4 md:py-20 bg-gradient-to-b from-[#0F1924] to-[#1A1A1A] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 inline-block text-gradient">About Me</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FFCC44] mx-auto"></div>
            </div>
            <div className="prose prose-invert max-w-none bg-[#232F3E]/50 p-4 md:p-8 rounded-xl border border-[#FF9900]/20 shadow-xl backdrop-blur-sm animate-fade-in">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                DevOps &amp; Cloud-Security engineer with 5+ years across cloud infrastructure, full-stack development,
                and IT operations. Most recently at MSD Animal Health (Merck), where I reduced cloud costs by 15%
                through Terraform module migrations and built automated GitHub policy enforcement at the organisation
                level. Experienced with AWS, Kubernetes, Terraform, Jenkins, GitHub Actions, and DevSecOps practices.
                Actively seeking my next DevOps, DevSecOps, or Platform Engineering role.
              </p>
              <div className="mt-6 md:mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-[#0F1924]/50 p-4 md:p-6 rounded-lg border border-[#FF9900]/10 hover:border-[#FF9900]/30 transition-all duration-300 transform hover:scale-[1.03]">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#FF9900]">Contact Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 group">
                      <div className="bg-[#FF9900]/20 p-2 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                        <Mail size={16} className="text-[#FF9900]" />
                      </div>
                      <a href={`mailto:${CONTACT.email}`} className="hover:underline text-sm md:text-base">
                        {CONTACT.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="bg-[#FF9900]/20 p-2 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                        <Phone size={16} className="text-[#FF9900]" />
                      </div>
                      <a href={`tel:${CONTACT.phone}`} className="hover:underline text-sm md:text-base">
                        {CONTACT.phoneDisplay}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="bg-[#FF9900]/20 p-2 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                        <Linkedin size={16} className="text-[#FF9900]" />
                      </div>
                      <a
                          href={CONTACT.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#FF9900] transition-colors text-sm md:text-base"
                      >
                        {CONTACT.linkedinDisplay}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="bg-[#FF9900]/20 p-2 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                        <Github size={16} className="text-[#FF9900]" />
                      </div>
                      <a
                          href={CONTACT.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#FF9900] transition-colors text-sm md:text-base"
                      >
                        {CONTACT.githubDisplay}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="bg-[#0F1924]/50 p-4 md:p-6 rounded-lg border border-[#FF9900]/10 hover:border-[#FF9900]/30 transition-all duration-300 mb-6 transform hover:scale-105">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#FF9900]">Languages</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between">
                        <span className="text-sm md:text-base">English</span>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 text-xs md:text-sm">Proficient</span>
                          <div className="w-16 md:w-24 h-2 bg-[#232F3E] rounded-full overflow-hidden">
                            <div className="h-full w-4/5 bg-gradient-to-r from-[#FF9900] to-[#FFCC44]"></div>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-sm md:text-base">Hebrew</span>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 text-xs md:text-sm">Native</span>
                          <div className="w-16 md:w-24 h-2 bg-[#232F3E] rounded-full overflow-hidden">
                            <div className="h-full w-full bg-gradient-to-r from-[#FF9900] to-[#FFCC44]"></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0F1924]/50 p-4 md:p-6 rounded-lg border border-[#FF9900]/10 hover:border-[#FF9900]/30 transition-all duration-300 transform hover:scale-[1.03]">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#FF9900]">Military Service</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Team Leader and Electronics Instructor, Air Force Military Service (2017-2019)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-[#FFCC44]/5 rounded-full blur-3xl"></div>
        </section>

        {/* Professional Experience */}
        <section
            id="experience"
            className="py-12 px-4 md:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0F1924] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 inline-block text-gradient">Professional Experience</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FFCC44] mx-auto"></div>
            </div>
            <ExperienceTimelineHorizontal />
          </div>
          <div className="absolute top-1/2 right-0 w-1/4 h-1/4 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-[#FFCC44]/5 rounded-full blur-3xl"></div>
        </section>

        {/* Education */}
        <section
            id="education"
            className="py-12 px-4 md:py-20 bg-gradient-to-b from-[#0F1924] to-[#1A1A1A] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 inline-block text-gradient">
                Education & Certifications
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FFCC44] mx-auto"></div>
            </div>
            <EducationTimeline />
          </div>
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-0 w-1/4 h-1/4 bg-[#FFCC44]/5 rounded-full blur-3xl"></div>
        </section>

        {/* Tech Stack */}
        <section
            id="tech-stack"
            className="py-12 px-4 md:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0F1924] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 inline-block text-gradient">Technical Skills</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FFCC44] mx-auto"></div>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                My technical expertise organized by domain and function.
              </p>
            </div>
            <div className="bg-[#232F3E]/30 p-4 md:p-8 rounded-xl border border-[#FF9900]/20 shadow-xl">
              <TechStackGridAdvanced />
            </div>
          </div>
          <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#FFCC44]/5 rounded-full blur-3xl"></div>
        </section>

        {/* Featured Projects */}
        <section
            id="projects"
            className="py-12 px-4 md:py-20 bg-gradient-to-b from-[#0F1924] to-[#1A1A1A] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 inline-block text-gradient">Featured Projects</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FFCC44] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
              <ProjectCard
                  title="WorldOfGame"
                  description="A Python-based mini-games platform showcasing an advanced DevOps and CI/CD workflow with automated deployments and comprehensive testing."
                  techStack={["Python", "CI/CD", "Docker", "Selenium"]}
                  githubUrl="https://github.com/Matan-Shabi/WorldOfGame"
                  image="https://cdn-icons-png.flaticon.com/512/354/354637.png"
              />
              <ProjectCard
                  title="Essentia User Management System"
                  description="Built a modular admin panel with dynamic role-based permissions. Developed scalable frontend components using Feature-Sliced Design (Next.js) and a robust Express.js backend."
                  techStack={["Next.js", "PM2", "Express.js", "IIS"]}
                  image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              />
              <ProjectCard
                  title="Mulligan Parking System"
                  description="A distributed parking management system using RabbitMQ, MongoDB, and AI-powered recommendations. Fully distributed and fault-tolerant parking system."
                  techStack={["Java", "MongoDB", "RabbitMQ"]}
                  image="https://cdn-icons-png.flaticon.com/512/263/263115.png"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-[#FFCC44]/5 rounded-full blur-3xl"></div>
        </section>

        {/* Leadership */}
        <section className="py-12 px-4 md:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0F1924] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 inline-block text-gradient">Leadership & Strategy</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FFCC44] mx-auto"></div>
            </div>
            <div className="bg-gradient-to-br from-[#232F3E] to-[#1A2433] rounded-lg p-4 md:p-8 border border-[#FF9900]/20 border-l-4 border-l-[#FF9900] shadow-xl hover:shadow-[#FF9900]/10 transition-all duration-300 transform hover:scale-[1.03] animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#FF9900]/20 p-2 rounded-full shrink-0">
                  <Users size={20} className="text-[#FF9900]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#FF9900]">
                    Vice Chairman — Kinneret Student Association
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">2022–2025</p>
                </div>
              </div>
              <div className="h-px bg-[#FF9900]/20 mb-4" />
              <ul className="list-none space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                <li className="flex items-start">
                  <div className="text-[#FF9900] mr-2">•</div>
                  <span>Led a team of 30, managing recruitment, training, and development</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#FF9900] mr-2">•</div>
                  <span>Oversaw a 1M NIS budget and long-term economic strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#FF9900] mr-2">•</div>
                  <span>Organized large-scale cultural events</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#FF9900] mr-2">•</div>
                  <span>Developed a centralized Moodle system to enhance learning resource accessibility</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#FF9900] mr-2">•</div>
                  <span>Managed a major job fair, including logistics, budget, and marketing</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 w-1/4 h-1/4 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#FFCC44]/5 rounded-full blur-3xl"></div>
        </section>

        {/* Contact */}
        <section
            id="contact"
            className="py-12 px-4 md:py-20 bg-gradient-to-b from-[#0F1924] to-[#1A1A1A] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 inline-block text-gradient">Get In Touch</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FFCC44] mx-auto"></div>
            </div>
            <div className="max-w-lg mx-auto">
              <div className="bg-gradient-to-br from-[#232F3E]/80 to-[#1A2433]/80 p-4 md:p-8 rounded-xl border border-[#FF9900]/20 shadow-xl backdrop-blur-sm animate-fade-in">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-[#FF9900]">Contact Information</h3>
                <div className="space-y-4 md:space-y-6">
                  <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-3 md:gap-4 text-gray-300 hover:text-[#FF9900] group transition-colors"
                  >
                    <div className="bg-[#FF9900]/20 p-2 md:p-3 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                      <Mail size={18} className="md:w-6 md:h-6 text-[#FF9900]" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Email</p>
                      <p className="text-xs md:text-sm">{CONTACT.email}</p>
                    </div>
                  </a>
                  <a
                      href={`tel:${CONTACT.phone}`}
                      className="flex items-center gap-3 md:gap-4 text-gray-300 hover:text-[#FF9900] group transition-colors"
                  >
                    <div className="bg-[#FF9900]/20 p-2 md:p-3 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                      <Phone size={18} className="md:w-6 md:h-6 text-[#FF9900]" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Phone</p>
                      <p className="text-xs md:text-sm">{CONTACT.phoneDisplay}</p>
                    </div>
                  </a>
                  <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 md:gap-4 text-gray-300 hover:text-[#FF9900] group transition-colors"
                  >
                    <div className="bg-[#FF9900]/20 p-2 md:p-3 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                      <Linkedin size={18} className="md:w-6 md:h-6 text-[#FF9900]" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">LinkedIn</p>
                      <p className="text-xs md:text-sm">{CONTACT.linkedinDisplay}</p>
                    </div>
                  </a>
                  <a
                      href={CONTACT.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 md:gap-4 text-gray-300 hover:text-[#FF9900] group transition-colors"
                  >
                    <div className="bg-[#FF9900]/20 p-2 md:p-3 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                      <Github size={18} className="md:w-6 md:h-6 text-[#FF9900]" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">GitHub</p>
                      <p className="text-xs md:text-sm">{CONTACT.githubDisplay}</p>
                    </div>
                  </a>
                </div>
                <div className="mt-6 md:mt-8 flex justify-center">
                  <QRCode />
                </div>
                <div className="flex justify-center mt-3">
                  <div className="flex space-x-3">
                    <ContactDownloadButton
                        contactDetails={{
                          name: CONTACT.name,
                          phoneNumber: CONTACT.phoneDisplay,
                          email: CONTACT.email,
                          website: CONTACT.website,
                          linkedin: CONTACT.linkedin,
                        }}
                        variant="icon-only"
                    />
                    <WhatsAppButton
                        phoneNumber={CONTACT.phone}
                        message={CONTACT.whatsappMessage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-0 w-1/4 h-1/4 bg-[#FFCC44]/5 rounded-full blur-3xl"></div>
        </section>

        </main>

        {/* Footer */}
        <footer className="py-6 md:py-8 px-4 border-t border-[#FF9900]/20 bg-[#0F1924]">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-xs md:text-sm">
                © {new Date().getFullYear()} Matan Shabi. All rights reserved. · Updated June 2026
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Matan Shabi on LinkedIn"
                    className="bg-[#232F3E] p-2 rounded-full text-gray-400 hover:text-[#FF9900] hover:bg-[#2d3b4d] transition-colors"
                >
                  <Linkedin size={16} className="md:w-5 md:h-5" aria-hidden="true" />
                </a>
                <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Matan Shabi on GitHub"
                    className="bg-[#232F3E] p-2 rounded-full text-gray-400 hover:text-[#FF9900] hover:bg-[#2d3b4d] transition-colors"
                >
                  <Github size={16} className="md:w-5 md:h-5" aria-hidden="true" />
                </a>
                <a
                    href={`mailto:${CONTACT.email}`}
                    aria-label="Send email to Matan Shabi"
                    className="bg-[#232F3E] p-2 rounded-full text-gray-400 hover:text-[#FF9900] hover:bg-[#2d3b4d] transition-colors"
                >
                  <Mail size={16} className="md:w-5 md:h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}

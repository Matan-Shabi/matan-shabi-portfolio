import Image from "next/image"
import Link from "next/link"
import { Download, Mail, Github, Linkedin, Phone, ChevronDown } from "lucide-react"
import QRCode from "./components/qr-code"
import TechStackGridAdvanced from "./components/tech-stack-grid-advanced"
import ProjectCard from "./components/project-card"
import ContactForm from "./components/contact-form"
import ExperienceTimelineHorizontal from "./components/experience-timeline-horizontal"
import EducationTimeline from "./components/education-timeline"
import AnimatedBackground from "./components/animated-background"
import CICDPipelineAnimation from "./components/cicd-pipeline-animation"
import PipelineBackground from "./components/pipeline-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1924] to-[#1A1A1A] text-white">
      {/* Pipeline Background */}
      <PipelineBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#232F3E]/90 to-[#0F1924]/90 backdrop-blur-sm border-b border-[#FF9900]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-[#FF9900]">
            <span className="text-white">Matan</span> Shabi
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm hover:text-[#FF9900] transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm hover:text-[#FF9900] transition-colors">
              Experience
            </Link>
            <Link href="#education" className="text-sm hover:text-[#FF9900] transition-colors">
              Education
            </Link>
            <Link href="#tech-stack" className="text-sm hover:text-[#FF9900] transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm hover:text-[#FF9900] transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm hover:text-[#FF9900] transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-[#FF9900]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:pt-40 md:pb-32 overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 animate-fade-in">
              <div className="inline-block bg-gradient-to-r from-[#FF9900] to-[#FF5757] text-black font-medium px-4 py-1 rounded-full mb-4 animate-bounce-subtle">
                Available for DevOps Positions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">Matan Shabi</h1>
              <h2 className="text-xl md:text-2xl text-[#FF9900] font-mono mb-4 animate-pulse-slow">DevOps Engineer</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                "Automating the cloud, one pipeline at a time. Building robust, scalable, and secure infrastructure."
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/matan-shabi-resume.pdf"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#232F3E] to-[#2d3b4d] hover:from-[#2d3b4d] hover:to-[#3a4a5e] text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                  download
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#FF9900] to-[#FF5757] hover:from-[#FF5757] hover:to-[#FF9900] text-black font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Mail size={18} />
                  Contact Me
                </a>
                <a
                  href="https://github.com/Matan-Shabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#333] to-[#444] hover:from-[#444] hover:to-[#555] text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/matan-shabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#0077B5] to-[#0A66C2] hover:from-[#0A66C2] hover:to-[#0077B5] text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
              <div className="mt-12 animate-bounce-slow">
                <a
                  href="#about"
                  className="flex flex-col items-center text-gray-400 hover:text-[#FF9900] transition-colors"
                >
                  <span className="text-sm mb-2">Scroll Down</span>
                  <ChevronDown size={24} />
                </a>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-2/5 flex justify-center animate-fade-in-delayed">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#FF9900] shadow-xl shadow-[#FF9900]/20 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/20 to-transparent z-10"></div>
                <Image src="/profile-photo.jpeg" alt="Matan Shabi" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD Pipeline Visualization */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#1A1A1A] to-[#0F1924] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-block text-gradient">DevOps in Action</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FF5757] mx-auto"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Watch a live CI/CD pipeline in action - from code commit to production deployment
            </p>
          </div>
          <CICDPipelineAnimation />
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-[#FF5757]/5 rounded-full blur-3xl"></div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-[#0F1924] to-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-block text-gradient">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FF5757] mx-auto"></div>
          </div>
          <div className="prose prose-invert max-w-none bg-[#232F3E]/50 p-8 rounded-xl border border-[#FF9900]/20 shadow-xl backdrop-blur-sm animate-fade-in">
            <p className="text-lg text-gray-300 leading-relaxed">
              Detail-oriented DevOps Engineer with a strong foundation in cloud technologies (AWS), CI/CD pipelines
              (Jenkins, Git), and container orchestration (Docker, Kubernetes). Skilled in Python, Java, and automation
              tools. Seeking a DevOps role to leverage my technical expertise and problem-solving abilities to build and
              maintain robust, scalable, and secure infrastructure.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0F1924]/50 p-6 rounded-lg border border-[#FF9900]/10 hover:border-[#FF9900]/30 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 text-[#FF9900]">Contact Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 group">
                    <div className="bg-[#FF9900]/20 p-2 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                      <Mail size={18} className="text-[#FF9900]" />
                    </div>
                    <a href="mailto:matan.shabi20@gmail.com" className="hover:underline">
                      matan.shabi20@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="bg-[#FF9900]/20 p-2 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                      <Phone size={18} className="text-[#FF9900]" />
                    </div>
                    <a href="tel:+972528885896" className="hover:underline">
                      +972-52-8885896
                    </a>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="bg-[#FF9900]/20 p-2 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                      <Linkedin size={18} className="text-[#FF9900]" />
                    </div>
                    <a
                        href="https://linkedin.com/in/matan-shabi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#FF9900] transition-colors"
                    >
                      linkedin.com/in/matan-shabi
                    </a>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="bg-[#FF9900]/20 p-2 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                      <Github size={18} className="text-[#FF9900]" />
                    </div>
                    <a
                        href="https://github.com/Matan-Shabi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#FF9900] transition-colors"
                    >
                      github.com/Matan-Shabi
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-[#0F1924]/50 p-6 rounded-lg border border-[#FF9900]/10 hover:border-[#FF9900]/30 transition-all duration-300 mb-6 transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-[#FF9900]">Languages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span>English</span>
                      <div className="flex items-center">
                        <span className="text-gray-400 mr-2">Proficient</span>
                        <div className="w-24 h-2 bg-[#232F3E] rounded-full overflow-hidden">
                          <div className="h-full w-4/5 bg-gradient-to-r from-[#FF9900] to-[#FF5757]"></div>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Hebrew</span>
                      <div className="flex items-center">
                        <span className="text-gray-400 mr-2">Native</span>
                        <div className="w-24 h-2 bg-[#232F3E] rounded-full overflow-hidden">
                          <div className="h-full w-full bg-gradient-to-r from-[#FF9900] to-[#FF5757]"></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0F1924]/50 p-6 rounded-lg border border-[#FF9900]/10 hover:border-[#FF9900]/30 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-[#FF9900]">Military Service</h3>
                  <p className="text-gray-300">
                    Team Leader and Electronics Instructor, Air Force Military Service (2017-2019)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-[#FF5757]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Professional Experience */}
      <section
        id="experience"
        className="py-20 px-4 bg-gradient-to-b from-[#1A1A1A] to-[#0F1924] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-block text-gradient">Professional Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FF5757] mx-auto"></div>
          </div>
          <ExperienceTimelineHorizontal />
        </div>
        <div className="absolute top-1/2 right-0 w-1/4 h-1/4 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-[#FF5757]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="py-20 px-4 bg-gradient-to-b from-[#0F1924] to-[#1A1A1A] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-block text-gradient">Education & Certifications</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FF5757] mx-auto"></div>
          </div>
          <EducationTimeline />
        </div>
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-1/4 h-1/4 bg-[#FF5757]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Tech Stack */}
      <section
        id="tech-stack"
        className="py-20 px-4 bg-gradient-to-b from-[#1A1A1A] to-[#0F1924] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-block text-gradient">Technical Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FF5757] mx-auto"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              My technical expertise organized by domain and function.
            </p>
          </div>
          <div className="bg-[#232F3E]/30 p-6 md:p-8 rounded-xl border border-[#FF9900]/20 shadow-xl">
            <TechStackGridAdvanced />
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#FF5757]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="py-20 px-4 bg-gradient-to-b from-[#0F1924] to-[#1A1A1A] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-block text-gradient">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FF5757] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="WorldOfGame"
              description="A Python-based mini-games platform showcasing an advanced DevOps and CI/CD workflow with automated deployments and comprehensive testing."
              techStack={["Python", "CI/CD", "Docker"]}
              githubUrl="https://github.com/Matan-Shabi/WorldOfGame"
              image="/worldofgame-project.png"
            />
            <ProjectCard
              title="Essentia User Management System"
              description="Built a modular admin panel with dynamic role-based permissions. Developed scalable frontend components using Feature-Sliced Design (Next.js) and a robust Next.js backend."
              techStack={["Next.js", "Docker", "Jenkins"]}
              githubUrl="https://github.com/Matan-Shabi"
              image="/essentia-project.png"
            />
            <ProjectCard
              title="Mulligan Parking System"
              description="A distributed parking management system using RabbitMQ, MongoDB, and AI-powered recommendations. Fully distributed and fault-tolerant parking system."
              techStack={["Spring Boot", "Express.js", "MongoDB", "RabbitMQ"]}
              githubUrl="https://github.com/Matan-Shabi"
              image="/mulligan-project.png"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-[#FF5757]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1A1A1A] to-[#0F1924] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-block text-gradient">Leadership & Strategy</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FF5757] mx-auto"></div>
          </div>
          <div className="bg-gradient-to-br from-[#232F3E] to-[#1A2433] rounded-lg p-6 md:p-8 border border-[#FF9900]/20 shadow-xl hover:shadow-[#FF9900]/10 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in">
            <h3 className="text-xl font-bold mb-2 text-[#FF9900]">Vice Chairman | Kinneret Student Association</h3>
            <p className="text-gray-400 mb-4">2022-2025</p>
            <ul className="list-none space-y-3 text-gray-300">
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
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#FF5757]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-b from-[#0F1924] to-[#1A1A1A] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-block text-gradient">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#FF9900] to-[#FF5757] mx-auto"></div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div className="bg-gradient-to-br from-[#232F3E]/80 to-[#1A2433]/80 p-8 rounded-xl border border-[#FF9900]/20 shadow-xl backdrop-blur-sm animate-fade-in">
              <h3 className="text-xl font-semibold mb-6 text-[#FF9900]">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:matan.shabi20@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#FF9900] group transition-colors"
                >
                  <div className="bg-[#FF9900]/20 p-3 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                    <Mail size={24} className="text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>matan.shabi20@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+97252-8885896"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#FF9900] group transition-colors"
                >
                  <div className="bg-[#FF9900]/20 p-3 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                    <Phone size={24} className="text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+972-52-8885896</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/matan-shabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#FF9900] group transition-colors"
                >
                  <div className="bg-[#FF9900]/20 p-3 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                    <Linkedin size={24} className="text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p>linkedin.com/in/matan-shabi</p>
                  </div>
                </a>
                <a
                  href="https://github.com/Matan-Shabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#FF9900] group transition-colors"
                >
                  <div className="bg-[#FF9900]/20 p-3 rounded-full group-hover:bg-[#FF9900]/40 transition-colors">
                    <Github size={24} className="text-[#FF9900]" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p>github.com/Matan-Shabi</p>
                  </div>
                </a>
              </div>
              <div className="mt-8 flex justify-center">
                <QRCode />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-1/4 h-1/4 bg-[#FF5757]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#FF9900]/20 bg-[#0F1924]">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Matan Shabi. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://linkedin.com/in/matan-shabi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#232F3E] p-2 rounded-full text-gray-400 hover:text-[#FF9900] hover:bg-[#2d3b4d] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Matan-Shabi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#232F3E] p-2 rounded-full text-gray-400 hover:text-[#FF9900] hover:bg-[#2d3b4d] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:matan.shabi20@gmail.com"
                className="bg-[#232F3E] p-2 rounded-full text-gray-400 hover:text-[#FF9900] hover:bg-[#2d3b4d] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

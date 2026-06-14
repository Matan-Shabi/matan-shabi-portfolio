import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "CV – Matan Shabi | DevOps & Cloud Security Engineer",
  description:
    "Curriculum vitae of Matan Shabi — DevOps & Cloud-Security engineer. AWS, Kubernetes, Terraform, CI/CD, DevSecOps. Available for hire.",
  alternates: {
    canonical: "https://matan-shabi.com/cv",
    types: { "text/plain": "https://matan-shabi.com/llms-full.txt" },
  },
  openGraph: {
    url: "https://matan-shabi.com/cv",
    title: "CV – Matan Shabi | DevOps & Cloud Security Engineer",
    description:
      "Curriculum vitae of Matan Shabi — DevOps & Cloud-Security engineer specialising in AWS, Kubernetes, Terraform, and CI/CD.",
  },
}

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#0F1924] text-white">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        {/* Back link */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/"
            className="text-[#FF9900] hover:underline text-sm"
          >
            ← Back to Portfolio
          </Link>
        </nav>

        <main>
          {/* Header */}
          <header className="mb-10 border-b border-[#FF9900]/30 pb-8">
            <h1 className="text-4xl font-bold text-white mb-1">Matan Shabi</h1>
            <p className="text-xl text-[#FF9900] font-mono mb-4">DevOps &amp; Cloud-Security Engineer</p>
            <address className="not-italic text-gray-300 text-sm space-y-1">
              <p>
                <a href="mailto:matan.shabi20@gmail.com" className="hover:text-[#FF9900] transition-colors">
                  matan.shabi20@gmail.com
                </a>
                {" · "}
                <a href="tel:+972528885896" className="hover:text-[#FF9900] transition-colors">
                  +972-52-8885896
                </a>
              </p>
              <p>
                <a href="https://matan-shabi.com" className="hover:text-[#FF9900] transition-colors">
                  matan-shabi.com
                </a>
                {" · "}
                <a
                  href="https://linkedin.com/in/matan-shabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9900] transition-colors"
                >
                  linkedin.com/in/matan-shabi
                </a>
                {" · "}
                <a
                  href="https://github.com/Matan-Shabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9900] transition-colors"
                >
                  github.com/Matan-Shabi
                </a>
              </p>
              <p className="mt-2">
                <span className="inline-block bg-[#FF9900]/20 text-[#FF9900] text-xs font-semibold px-3 py-1 rounded-full">
                  Available for DevOps · DevSecOps · Platform Engineering roles
                </span>
              </p>
            </address>
          </header>

          {/* Summary */}
          <section aria-labelledby="summary-heading" className="mb-10">
            <h2 id="summary-heading" className="text-lg font-bold text-[#FF9900] uppercase tracking-widest mb-3">
              Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Detail-oriented DevOps &amp; Cloud-Security engineer with a strong foundation in cloud platforms (AWS),
              CI/CD automation (Jenkins, GitHub Actions, GitLab CI, Azure DevOps), and container orchestration
              (Docker, Kubernetes). Skilled in Python, Bash, and infrastructure-as-code (Terraform, AWS CDK).
              Experienced in DevSecOps practices, penetration testing, RBAC policy enforcement, and platform
              engineering. Holds a B.Sc. in Software Engineering from Kinneret Academic College (2020–2025).
            </p>
          </section>

          {/* Experience */}
          <section aria-labelledby="experience-heading" className="mb-10">
            <h2 id="experience-heading" className="text-lg font-bold text-[#FF9900] uppercase tracking-widest mb-6">
              Professional Experience
            </h2>

            <article className="mb-8">
              <header className="mb-2">
                <h3 className="text-white font-semibold text-lg">DevOps Engineer</h3>
                <p className="text-gray-400 text-sm">
                  MSD Animal Health Technology Labs (Merck) · <time dateTime="2025">2025</time> – Present
                </p>
              </header>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Terraform modules migration reducing cloud resource costs by 15% in production.</li>
                <li>Led hackathon team to 5th place; shipped outcomes as internal AZDO-to-GitHub migration tooling.</li>
                <li>Developed automated policy enforcement system on the organisational GitHub.</li>
                <li>Maintained AZDO legacy CI/CD pipelines in the production environment.</li>
                <li>Authored ADRs, onboarding guides, and deployment playbooks.</li>
              </ul>
              <p className="text-gray-500 text-xs mt-2">Terraform · AWS · GitHub · Azure DevOps · Python</p>
            </article>

            <article className="mb-8">
              <header className="mb-2">
                <h3 className="text-white font-semibold text-lg">Software Engineer</h3>
                <p className="text-gray-400 text-sm">
                  Accadia Software Technologies · <time dateTime="2024">2024</time> – <time dateTime="2025">2025</time>
                </p>
              </header>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Architected modular admin panel frontend with Next.js, TypeScript, and Feature-Sliced Design (RBAC).</li>
                <li>Built Express.js / Prisma / SQL Server backend with fine-grained permission modelling and index optimisation.</li>
                <li>Deployed on Windows Server 2022 with IIS and PM2 for zero-downtime restarts and centralised logging.</li>
              </ul>
              <p className="text-gray-500 text-xs mt-2">Next.js · TypeScript · Express.js · Prisma · SQL Server · IIS · PM2</p>
            </article>

            <article className="mb-8">
              <header className="mb-2">
                <h3 className="text-white font-semibold text-lg">Software Engineer</h3>
                <p className="text-gray-400 text-sm">
                  Kinneret Innovation Center · <time dateTime="2021">2021</time> – <time dateTime="2023">2023</time>
                </p>
              </header>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Led PHP and Python software development projects.</li>
                <li>Built a real-time performance dashboard with Python.</li>
                <li>Managed client communication and optimised web applications for organic SEO.</li>
              </ul>
              <p className="text-gray-500 text-xs mt-2">PHP · Python · MySQL · SEO</p>
            </article>

            <article className="mb-8">
              <header className="mb-2">
                <h3 className="text-white font-semibold text-lg">IT Technician</h3>
                <p className="text-gray-400 text-sm">
                  Poria Hospital · <time dateTime="2019">2019</time> – <time dateTime="2020">2020</time>
                </p>
              </header>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Managed hospital computer and network infrastructure.</li>
                <li>Resolved hardware and software issues; provided technical support to clinical staff.</li>
              </ul>
            </article>

            <article>
              <header className="mb-2">
                <h3 className="text-white font-semibold text-lg">Team Leader &amp; Electronics Instructor</h3>
                <p className="text-gray-400 text-sm">
                  Israeli Air Force · <time dateTime="2017">2017</time> – <time dateTime="2019">2019</time>
                </p>
              </header>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Mandatory military service; led a team and instructed personnel in electronics systems.</li>
              </ul>
            </article>
          </section>

          {/* Education */}
          <section aria-labelledby="education-heading" className="mb-10">
            <h2 id="education-heading" className="text-lg font-bold text-[#FF9900] uppercase tracking-widest mb-6">
              Education &amp; Certifications
            </h2>

            <article className="mb-6">
              <h3 className="text-white font-semibold">B.Sc. in Software Engineering</h3>
              <p className="text-gray-400 text-sm">
                Kinneret Academic College · <time dateTime="2020">2020</time> – <time dateTime="2025">2025</time>
              </p>
            </article>

            <article className="mb-6">
              <h3 className="text-white font-semibold">DevOps Engineer Certification</h3>
              <p className="text-gray-400 text-sm">DevOps Experts, Ramat Gan · <time dateTime="2024">2024</time></p>
              <p className="text-gray-300 text-sm mt-1">
                Hands-on: Jenkins, Docker, Kubernetes, Terraform, AWS, Ansible, Python, CI/CD pipelines.
              </p>
              <p className="mt-1">
                <a
                  href="https://github.com/Matan-Shabi/WorldOfGame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF9900] hover:underline text-sm"
                >
                  Capstone project →
                </a>
              </p>
            </article>

            <article className="mb-6">
              <h3 className="text-white font-semibold">Practical Engineer in Electronics</h3>
              <p className="text-gray-400 text-sm">
                Kinneret Academic College · <time dateTime="2015">2015</time> – <time dateTime="2017">2017</time>
              </p>
            </article>

            <article>
              <h3 className="text-white font-semibold">CCNA – Cisco Networking</h3>
            </article>
          </section>

          {/* Skills */}
          <section aria-labelledby="skills-heading" className="mb-10">
            <h2 id="skills-heading" className="text-lg font-bold text-[#FF9900] uppercase tracking-widest mb-4">
              Technical Skills
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-gray-400 font-medium">Cloud</dt>
                <dd className="text-gray-300">AWS (EC2, S3, Lambda, EKS, IAM, CloudFront, Amplify, CDK)</dd>
              </div>
              <div>
                <dt className="text-gray-400 font-medium">Containers &amp; Orchestration</dt>
                <dd className="text-gray-300">Docker, Kubernetes</dd>
              </div>
              <div>
                <dt className="text-gray-400 font-medium">CI/CD</dt>
                <dd className="text-gray-300">Jenkins, GitHub Actions, GitLab CI, Azure DevOps</dd>
              </div>
              <div>
                <dt className="text-gray-400 font-medium">Infrastructure as Code</dt>
                <dd className="text-gray-300">Terraform, AWS CDK, Ansible</dd>
              </div>
              <div>
                <dt className="text-gray-400 font-medium">Security</dt>
                <dd className="text-gray-300">DevSecOps, Penetration Testing, IAM, RBAC</dd>
              </div>
              <div>
                <dt className="text-gray-400 font-medium">Languages</dt>
                <dd className="text-gray-300">Python, Bash, Java, PHP, TypeScript</dd>
              </div>
              <div>
                <dt className="text-gray-400 font-medium">Monitoring</dt>
                <dd className="text-gray-300">Datadog, Grafana</dd>
              </div>
              <div>
                <dt className="text-gray-400 font-medium">Other</dt>
                <dd className="text-gray-300">JFrog Artifactory, PM2, IIS, Windows Server 2022, RabbitMQ</dd>
              </div>
            </dl>
          </section>

          {/* Projects */}
          <section aria-labelledby="projects-heading" className="mb-10">
            <h2 id="projects-heading" className="text-lg font-bold text-[#FF9900] uppercase tracking-widest mb-6">
              Featured Projects
            </h2>

            <article className="mb-6">
              <h3 className="text-white font-semibold">
                <a
                  href="https://github.com/Matan-Shabi/WorldOfGame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9900] transition-colors"
                >
                  WorldOfGame
                </a>
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Python mini-games platform with a full production-grade DevOps workflow: Jenkins CI/CD, Docker
                containerisation, Selenium end-to-end tests.
              </p>
              <p className="text-gray-500 text-xs mt-1">Python · Docker · Jenkins · Selenium</p>
            </article>

            <article className="mb-6">
              <h3 className="text-white font-semibold">Essentia User Management System</h3>
              <p className="text-gray-300 text-sm mt-1">
                Modular enterprise admin panel with dynamic RBAC, Feature-Sliced Design frontend, and
                Express.js/Prisma backend. Deployed on Windows Server 2022.
              </p>
              <p className="text-gray-500 text-xs mt-1">Next.js · TypeScript · Express.js · SQL Server · IIS · PM2</p>
            </article>

            <article>
              <h3 className="text-white font-semibold">Mulligan Parking System</h3>
              <p className="text-gray-300 text-sm mt-1">
                Distributed, fault-tolerant parking management system with RabbitMQ message queuing, MongoDB
                storage, and AI-powered recommendations.
              </p>
              <p className="text-gray-500 text-xs mt-1">Java · MongoDB · RabbitMQ</p>
            </article>
          </section>

          {/* Leadership */}
          <section aria-labelledby="leadership-heading" className="mb-10">
            <h2 id="leadership-heading" className="text-lg font-bold text-[#FF9900] uppercase tracking-widest mb-4">
              Leadership
            </h2>
            <article>
              <h3 className="text-white font-semibold">Vice Chairman — Kinneret Student Association</h3>
              <p className="text-gray-400 text-sm mb-2">
                <time dateTime="2022">2022</time> – <time dateTime="2025">2025</time>
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>Led a team of 30, managing recruitment, training, and professional development.</li>
                <li>Managed a 1,000,000 NIS annual budget and long-term economic strategy.</li>
                <li>Organised large-scale cultural events and managed a major campus job fair.</li>
                <li>Built a centralised Moodle learning management system for the college.</li>
              </ul>
            </article>
          </section>

          {/* Languages */}
          <section aria-labelledby="languages-heading" className="mb-10">
            <h2 id="languages-heading" className="text-lg font-bold text-[#FF9900] uppercase tracking-widest mb-4">
              Languages
            </h2>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><span className="text-white font-medium">Hebrew</span> — Native</li>
              <li><span className="text-white font-medium">English</span> — Proficient</li>
            </ul>
          </section>

          {/* Download */}
          <footer className="border-t border-[#FF9900]/20 pt-6 flex flex-wrap gap-4">
            <a
              href="/Matan-Shabi-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF9900] text-black font-semibold px-5 py-2 rounded-md hover:bg-[#FF5757] transition-colors text-sm"
            >
              Download PDF Resume
            </a>
            <a
              href="/llms-full.txt"
              className="inline-flex items-center gap-2 border border-[#FF9900]/40 text-[#FF9900] px-5 py-2 rounded-md hover:border-[#FF9900] transition-colors text-sm"
            >
              Plain-text version (AI/agents)
            </a>
          </footer>
        </main>
      </div>
    </div>
  )
}

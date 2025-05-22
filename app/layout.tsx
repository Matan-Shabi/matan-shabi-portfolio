import type React from "react"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
})

export const metadata: Metadata = {
  title: "Matan Shabi | DevOps, Cloud Security & CI/CD",
  description:
      "Cloud & DevOps Engineer with hands-on experience in AWS, CI/CD, Kubernetes, and cybersecurity. Specialized in cloud infrastructure, automation, and vulnerability research.",
  keywords: [
    "DevOps",
    "Cloud Security",
    "DevSecOps",
    "AWS",
    "Kubernetes",
    "CI/CD",
    "Jenkins",
    "Docker",
    "Terraform",
    "Cybersecurity",
    "OWASP",
    "Penetration Testing",
    "Heartbleed",
    "Unsigned JWT",
    "Vulnerable Library",
    "Python",
    "GitHub Actions",
    "Matan Shabi"
  ],
  generator: "Next.js | v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>)
{
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  )
}

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
  title: "Matan Shabi | DevOps & Cloud Engineer",
  description:
    "DevOps Engineer specializing in AWS, Kubernetes, and CI/CD pipelines. Automating the cloud, one pipeline at a time.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Kubernetes", "CI/CD", "Terraform", "Docker"],
    generator: 'v0.dev'
}

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

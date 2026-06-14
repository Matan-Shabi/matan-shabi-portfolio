import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";


const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const fira = Fira_Code({ subsets: ["latin"], display: "swap", variable: "--font-fira-code" });


export const metadata: Metadata = {
  metadataBase: new URL("https://matan-shabi.com"),

  title: {
    default: "מתן שאבי | Matan Shabi – DevOps & Cloud Security",
    template: "%s • מתן שאבי | Matan Shabi",
  },
  description:
      "מתן שאבי (Matan Shabi) – DevOps & Cloud-Security engineer (AWS, Kubernetes, CI/CD). Builds secure, automated cloud platforms.",
  keywords: [
    "Matan Shabi","מתן שאבי",
    "DevOps","Cloud Security","AWS","Kubernetes","CI/CD","Terraform","Docker","Platform",
    "Jenkins","Cybersecurity","Pen-testing",
    "Python","GitHub Actions","git","Cloud","Infrastructure","DevEx","Production",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://matan-shabi.com",
    title: "Matan Shabi – DevOps & Cloud Security Engineer",
    description:
      "Portfolio of Matan Shabi (מתן שאבי) – DevOps & Cloud-Security engineer specializing in AWS, Kubernetes, and CI/CD.",
    images: [
      {
        url: "/profile-photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Matan Shabi – DevOps & Cloud Security Engineer",
      },
    ],
    siteName: "Matan Shabi Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Matan Shabi – DevOps & Cloud Security Engineer",
    description:
      "Portfolio of Matan Shabi – DevOps & Cloud-Security engineer specializing in AWS, Kubernetes, and CI/CD.",
    images: ["/profile-photo.jpeg"],
  },
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF9900" },
    { media: "(prefers-color-scheme: dark)",  color: "#1F2937" },
  ],
};

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://matan-shabi.com/#person",
      name: "Matan Shabi",
      alternateName: "מתן שאבי",
      jobTitle: "DevOps & Cloud-Security Engineer",
      url: "https://matan-shabi.com",
      image: "https://matan-shabi.com/profile-photo.jpeg",
      email: "matan.shabi20@gmail.com",
      telephone: "+972528885896",
      sameAs: [
        "https://www.linkedin.com/in/matan-shabi/",
        "https://github.com/Matan-Shabi",
      ],
      knowsAbout: [
        "DevOps Engineering",
        "Cloud Security",
        "Amazon Web Services",
        "Kubernetes",
        "Docker",
        "Terraform",
        "CI/CD Pipelines",
        "Jenkins",
        "GitHub Actions",
        "GitLab CI",
        "Azure DevOps",
        "Python",
        "Bash",
        "DevSecOps",
        "Platform Engineering",
        "Infrastructure as Code",
        "AWS CDK",
        "Ansible",
        "Datadog",
        "Grafana",
        "JFrog Artifactory",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "DevOps Engineer",
        occupationalCategory: "15-1244.00",
        skills: "AWS, Kubernetes, Terraform, CI/CD, Docker, Python, DevSecOps, Platform Engineering, Infrastructure as Code",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://matan-shabi.com/#website",
      url: "https://matan-shabi.com",
      name: "Matan Shabi – DevOps & Cloud Security",
      description:
        "Portfolio of Matan Shabi, DevOps & Cloud-Security engineer specializing in AWS, Kubernetes, and CI/CD.",
      publisher: { "@id": "https://matan-shabi.com/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://matan-shabi.com/#profilepage",
      url: "https://matan-shabi.com",
      name: "Matan Shabi – DevOps & Cloud Security Engineer Portfolio",
      description:
        "Personal portfolio and resume of Matan Shabi, a DevOps & Cloud-Security engineer available for hire. Specialises in AWS, Kubernetes, CI/CD, Terraform, and DevSecOps.",
      mainEntity: { "@id": "https://matan-shabi.com/#person" },
      dateModified: "2026-06-14",
    },
    {
      "@type": "WebPage",
      "@id": "https://matan-shabi.com/#webpage",
      url: "https://matan-shabi.com",
      isPartOf: { "@id": "https://matan-shabi.com/#website" },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2"],
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </head>
      <body className={`${inter.variable} ${fira.variable} font-sans`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

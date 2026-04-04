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
    "DevOps","Cloud Security","AWS","Kubernetes","CI/CD","Terraform","Docker","DevSecOps",
    "Jenkins","Cybersecurity","Pen-testing",
    "Python","GitHub Actions",
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
      sameAs: [
        "https://www.linkedin.com/in/matan-shabi/",
        "https://github.com/Matan-Shabi",
      ],
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

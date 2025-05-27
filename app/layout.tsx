import type { Metadata, Viewport } from "next";
import Script from "next/script";
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

};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF9900" },
    { media: "(prefers-color-scheme: dark)",  color: "#1F2937" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matan Shabi",
    alternateName: "מתן שאבי",
    jobTitle: "DevOps & Cloud-Security Engineer",
    url: "https://matan-shabi.com",
    sameAs: ["https://www.linkedin.com/in/matan-shabi/","https://github.com/Matan-Shabi"],
  };

  return (
      <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${fira.variable} font-sans`}>
      {children}
      <Script id="ld-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SpeedInsights />
      <Analytics />
      </body>
      </html>
  );
}

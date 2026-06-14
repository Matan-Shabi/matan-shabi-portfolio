import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://matan-shabi.com",
      lastModified: new Date("2026-06-14"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}

import type { MetadataRoute } from "next";

const SITE_URL = "https://utopiagroup.com.my";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/how-we-charge`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/masterclass`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/masterclass/individual`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/career`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/results`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-03-28"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}

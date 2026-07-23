import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: "https://greenfilament.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: "https://greenfilament.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://greenfilament.com/connect", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://greenfilament.com/projects", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://greenfilament.com/schemes", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Product pages
    { url: "https://greenfilament.com/rooftop-solar", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/solar-street-lighting", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/solar-water-pump", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/solar-cooking", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Blog listing + posts
    { url: "https://greenfilament.com/blogs", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: "https://greenfilament.com/blogs/solar-street-lights-rural-india", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/rooftop-solar-vs-electricity-bills-2026", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/solar-water-systems-rural-villages", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/future-of-solar-cooking-battery-free", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/why-solar-street-light-stops-working-at-night", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/3kw-solar-price-odisha-after-subsidy-2026", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    // Location pages
    { url: "https://greenfilament.com/solar-company-odisha", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/rooftop-solar-bhubaneswar", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/rooftop-solar-cuttack", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // Legal
    { url: "https://greenfilament.com/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://greenfilament.com/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
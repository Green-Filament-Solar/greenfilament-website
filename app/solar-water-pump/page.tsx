/* ============================================================
   SOLAR WATER PUMP PAGE — /products/solar-water-pump/page.tsx
   - Server component: metadata only
   - All JSX lives in SolarWaterPumpClient.tsx
   ============================================================ */

import type { Metadata } from "next";
import SolarWaterPumpClient from "./SolarWaterPumpClient";

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
    title: "Solar Water Pump Installation | Solar Pump Solutions for Agriculture & Borewell | Green Filament",
    description: "Get efficient solar water pump solutions for agriculture, borewell, irrigation, and water supply in Odisha. Save electricity costs with reliable solar pump installation and expert support by Green Filament.",
    keywords: [
        "Solar Water Pump",
        "Solar Pump System",
        "Solar Pump for Agriculture",
        "Solar Borewell Pump",
        "Solar Irrigation Pump",
        "Solar Water Pump Installation",
        "Agriculture Solar Pump",
        "solar water pump Odisha",
        "submersible solar pump",
        "surface solar pump",
        "solar pump Bhubaneswar",
        "PM-KUSUM solar pump",
    ],
    openGraph: {
        title: "Solar Water Pump Installation | Green Filament",
        description: "Efficient solar water pump solutions for agriculture, borewell, irrigation, and water supply in Odisha. Expert installation and after-sales support.",
        url: "https://greenfilament.com/solar-water-pump",
        siteName: "Green Filament",
        images: [
            {
                url: "/images/products/solar-water-pump.jpg",
                width: 1200,
                height: 630,
                alt: "Green Filament Solar Water Pump — Agriculture and Borewell Solutions",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Solar Water Pump Installation | Green Filament",
        description: "Zero electricity cost. Reliable water supply. Solar pump solutions for agriculture and borewell across Odisha.",
        images: ["/images/products/solar-water-pump.jpg"],
    },
    alternates: {
        canonical: "https://greenfilament.com/solar-water-pump",
    },
};

/* ============================================================
   PAGE
   ============================================================ */
export default function Page() {
    return <SolarWaterPumpClient />;
}

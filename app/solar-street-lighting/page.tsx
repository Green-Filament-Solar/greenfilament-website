/* ============================================================
   SOLAR STREET LIGHTING PAGE — /products/solar-street-lighting/page.tsx
   - Server component: metadata only
   - All JSX lives in SolarStreetLightingClient.tsx
   ============================================================ */

import type { Metadata } from "next";
import SolarStreetLightingClient from "./SolarStreetLightingClient";

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
    title: "Solar Street Lights — Non-Integrated & Semi-Integrated | Green Filament",
    description: "10,000+ solar street lights installed across Odisha. Zero complaints on non-integrated units. Available in 30W to 90W. SMF and LiFePO4 battery options. Custom orders for villages, gram panchayats and govt schemes.",
    keywords: [
        "solar street light Odisha",
        "solar street light manufacturer",
        "non integrated solar street light",
        "semi integrated solar street light",
        "solar street light gram panchayat",
        "solar street light village",
        "solar street light 30W 45W 60W 90W",
        "SMF solar street light",
        "LiFePO4 solar street light",
        "dusk to dawn solar street light",
        "Green Filament solar street light",
        "solar street light bulk order",
    ],
    openGraph: {
        title: "Solar Street Lights — 10,000+ Installed | Green Filament",
        description: "10,000+ solar street lights installed across Odisha. Zero complaints. Non-integrated and semi-integrated options. Custom orders welcome.",
        url: "https://greenfilament.com/solar-street-lighting",
        siteName: "Green Filament",
        images: [
            {
                url: "/images/products/street-light.jpg",
                width: 1200,
                height: 630,
                alt: "Green Filament Solar Street Lights — Non-Integrated and Semi-Integrated",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Solar Street Lights — 10,000+ Installed | Green Filament",
        description: "Lighting every road. Powering every village. 10,000+ units. Zero complaints.",
        images: ["/images/products/street-light.jpg"],
    },
    alternates: {
        canonical: "https://greenfilament.com/solar-street-lighting",
    },
};

/* ============================================================
   PAGE
   ============================================================ */
export default function Page() {
    return <SolarStreetLightingClient />;
}

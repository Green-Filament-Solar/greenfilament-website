/* ============================================================
   ROOFTOP SOLAR PAGE — /products/rooftop-solar
   - Server component for SEO metadata
   - Renders RooftopSolarClient for full UI
   ============================================================ */

import type { Metadata } from "next";
import RooftopSolarClient from "./RooftopSolarClient";

export const metadata: Metadata = {
  title: "Rooftop Solar Systems — On-Grid, Off-Grid & Hybrid | Green Filament",
  description: "Rooftop solar systems for homes, businesses and industries in Odisha. On-Grid, Off-Grid and Hybrid options. 500+ installations. Get up to ₹1,38,000 subsidy. Free site assessment.",
  keywords: [
    "rooftop solar Odisha",
    "solar panel installation Odisha",
    "on grid solar system",
    "off grid solar system",
    "hybrid solar system",
    "rooftop solar for home",
    "commercial solar Odisha",
    "solar subsidy Odisha",
    "reduce electricity bill solar",
    "Green Filament rooftop solar",
  ],
  openGraph: {
    title: "Rooftop Solar Systems — On-Grid, Off-Grid & Hybrid | Green Filament",
    description: "500+ rooftop solar installations across Odisha. On-Grid, Off-Grid and Hybrid systems for homes and businesses. Free site assessment.",
    url: "https://greenfilament.com/products/rooftop-solar",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooftop Solar Systems | Green Filament Odisha",
    description: "On-Grid, Off-Grid & Hybrid rooftop solar for homes and businesses. 500+ installations. Free site assessment.",
  },
  alternates: {
    canonical: "https://greenfilament.com/rooftop-solar",
  },
};

export default function RooftopSolarPage() {
  return <RooftopSolarClient />;
}

import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services",
  description: "End-to-end solar services across Odisha — site assessment, system design, installation, net metering, subsidy advisory, AMC and preventive maintenance.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}

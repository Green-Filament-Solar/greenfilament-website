import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "500+ solar projects delivered across Odisha and beyond. Real work. Real impact. Explore Green Filament's project portfolio.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
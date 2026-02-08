import { Metadata } from "next";

import { VisionContent } from "@/components/vision/vision-content";

export const metadata: Metadata = {
  title: "Vision & Engagement — SOFARAU S.R.L",
  description:
    "L'humain au cœur de la haute performance. Philosophie, valeurs et engagement partenaire de SOFARAU.",
};

export default function VisionPage() {
  return <VisionContent />;
}

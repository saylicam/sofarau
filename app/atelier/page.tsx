import { Metadata } from "next";

import { AtelierContent } from "@/components/atelier/atelier-content";

export const metadata: Metadata = {
  title: "L'Atelier — SOFARAU S.R.L",
  description:
    "Process, capacité et approche qualité d'un atelier de fabrication B2B à Wavre.",
};

export default function AtelierPage() {
  return <AtelierContent />;
}


import { Metadata } from "next";

import { AtelierContent } from "@/components/atelier/atelier-content";

export const metadata: Metadata = {
  title: "L'Atelier",
  description:
    "Process, capacité et approche qualité d'un atelier de fabrication B2B à Wavre.",
};

export default function AtelierPage() {
  return <AtelierContent />;
}


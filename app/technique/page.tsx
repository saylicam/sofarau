import { Metadata } from "next";

import { TechniqueContentV2 } from "@/components/technique/technique-content-v2";

export const metadata: Metadata = {
  title: "Technique — SOFARAU S.R.L",
  description:
    "Tableaux de performances et accès aux fiches techniques (réservé aux professionnels).",
};

export default function TechniquePage() {
  return <TechniqueContentV2 />;
}


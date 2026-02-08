import { Metadata } from "next";

import { SolutionsContentV2 } from "@/components/solutions/solutions-content-v2";

export const metadata: Metadata = {
  title: "Solutions Techniques — SOFARAU S.R.L",
  description:
    "Systèmes et ensembles techniques fournis aux professionnels (B2B) : Schüco Living 82 MD, quincaillerie Roto NX, moustiquaires Feneko.",
};

export default function SolutionsPage() {
  return <SolutionsContentV2 />;
}


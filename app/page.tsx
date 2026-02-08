import { Hero } from "@/components/hero";
import { AtelierSectionV2 } from "@/components/home/atelier-v2";
import { ContactInlineV2 } from "@/components/home/contact-inline-v2";
import { EngineeringPrecision } from "@/components/home/engineering-precision";
import { EspritSofarau } from "@/components/home/esprit-sofarau";
import { TechBentoV2 } from "@/components/home/tech-bento-v2";
import { ZeroConcurrenceV2 } from "@/components/home/zero-concurrence-v2";
import { FlowDiagram } from "@/components/industrial-capacity/flow-diagram";
import { PerformanceGrid } from "@/components/performance-cards/performance-grid";

export default function Home() {
  return (
    <div>
      <Hero />
      <EngineeringPrecision />
      <PerformanceGrid />
      <ZeroConcurrenceV2 />
      <TechBentoV2 />
      <FlowDiagram />
      <EspritSofarau />
      <AtelierSectionV2 />
      <ContactInlineV2 />
    </div>
  );
}

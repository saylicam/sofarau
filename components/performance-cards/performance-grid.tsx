"use client";

import { ThermalCard } from "./thermal-card";
import { SecurityCard } from "./security-card";
import { AcousticCard } from "./acoustic-card";

export function PerformanceGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-32 md:py-48">
        <div className="mb-16 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Performances Mesurées
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Données Techniques Validées
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            Chaque performance est mesurée, chaque donnée est validée. Process
            reproductible, certification européenne, tolérances millimétrées.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <ThermalCard />
          <SecurityCard />
          <AcousticCard />
        </div>
      </div>
    </section>
  );
}

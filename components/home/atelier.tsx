"use client";

import { motion } from "framer-motion";
import { Clock, Crosshair, Factory } from "lucide-react";

export function AtelierSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid gap-6 rounded-3xl border bg-white p-8 hairline soft-shadow md:grid-cols-12 md:p-10"
      >
        <div className="md:col-span-7">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Atelier
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
            La puissance de fabrication, à Wavre.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
            Un atelier conçu pour la précision, la répétabilité et des délais
            maîtrisés. Vous obtenez un partenaire industriel fiable, capable de
            produire proprement et de documenter clairement.
          </p>
        </div>

        <div className="grid gap-3 md:col-span-5">
          {[
            {
              icon: <Crosshair className="h-5 w-5" aria-hidden="true" />,
              title: "Précision",
              desc: "Tolérances et finitions cohérentes, process reproductible.",
            },
            {
              icon: <Clock className="h-5 w-5" aria-hidden="true" />,
              title: "Délais",
              desc: "Organisation atelier orientée planning & fiabilité.",
            },
            {
              icon: <Factory className="h-5 w-5" aria-hidden="true" />,
              title: "Capacité",
              desc: "Production B2B, adaptée à vos volumes et configurations.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-3 rounded-2xl border bg-muted/30 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-semibold">{item.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


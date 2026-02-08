"use client";

import { motion } from "framer-motion";
import { Factory, CheckCircle2, Gauge, MapPin, Camera, Cpu } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

function PlaceholderMedia({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative flex h-full min-h-[400px] items-center justify-center rounded-3xl border-2 border-dashed border-primary/20 bg-muted/20">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function AtelierContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            L'Atelier
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Capacité de Production
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground md:text-lg">
            Atelier de fabrication à Wavre. Process optimisé, contrôles qualité
            stricts, exécution reproductible. Approche B2B neutre et orientée
            technique.
          </p>
        </motion.div>
      </section>

      {/* Section Localisation */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border bg-white p-8 soft-shadow md:p-12"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Atelier Wavre
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Capacité de production optimisée pour répondre aux exigences
                  des professionnels. Process de fabrication reproductible,
                  contrôles qualité à chaque étape.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid pour les médias */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Plan Drone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <PlaceholderMedia
              title="Plan Drone"
              description="Zone réservée pour vue aérienne de l'atelier"
              icon={<Camera className="h-8 w-8" aria-hidden="true" />}
            />
          </motion.div>

          {/* Machines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <PlaceholderMedia
              title="Machines & Équipements"
              description="Zone réservée pour photos des machines de production"
              icon={<Cpu className="h-8 w-8" aria-hidden="true" />}
            />
          </motion.div>
        </div>
      </section>

      {/* Section Process */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Process & Qualité
            </h2>
            <p className="mt-4 text-muted-foreground">
              Approche rigoureuse, contrôles à chaque étape, exécution
              reproductible.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Factory,
                  title: "Fabrication",
                  description:
                    "Process optimisé, machines précises, exécution reproductible.",
                },
                {
                  icon: CheckCircle2,
                  title: "Contrôles Qualité",
                  description:
                    "Vérifications à chaque étape, tolérances respectées, finition soignée.",
                },
                {
                  icon: Gauge,
                  title: "Performance",
                  description:
                    "Données techniques validées, conformité aux exigences projet.",
                },
              ].map((item, index) => (
                <Card key={index} className="border-0 bg-white soft-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Gauge, Layers3, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const hover = {
  rest: { y: 0, boxShadow: "0 1px 0 rgba(15,23,42,0.03), 0 12px 24px rgba(15,23,42,0.06)" },
  hover: { y: -2, boxShadow: "0 1px 0 rgba(15,23,42,0.03), 0 18px 38px rgba(15,23,42,0.10)" },
};

function BentoCard({
  title,
  description,
  icon,
  className,
  bullets,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  bullets?: string[];
}) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={hover}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn(
        "group rounded-2xl border bg-white p-6",
        "hairline",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold tracking-tight">{title}</div>
          <div className="mt-2 text-sm leading-6 text-muted-foreground">
            {description}
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-primary">
          {icon}
        </div>
      </div>
      {bullets?.length ? (
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6 h-px w-full bg-border/60" />
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Données techniques & exécution atelier
        </span>
        <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
      </div>
    </motion.div>
  );
}

export function TechBento() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Vitrine technique (Bento Grid)
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
              Systèmes reconnus, intégration propre, et une approche orientée
              performance. Aucun discours grand public, aucune promesse vague.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full bg-white/70">
            <Link href="/solutions">Voir les solutions</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <BentoCard
              title="Schüco Living 82 MD"
              description="Base de fabrication premium, pensée pour la performance et la stabilité."
              icon={<Layers3 className="h-5 w-5" aria-hidden="true" />}
              className="h-full"
              bullets={[
                "Conception multi-chambres (orientation thermique).",
                "Compatibilité configurations double vitrage (advanced).",
                "Finition & tolérances : exécution propre, reproductible.",
              ]}
            />
          </div>
          <div className="md:col-span-5">
            <BentoCard
              title="ROTO NX"
              description="Précision mécanique, sécurité, réglages. Le détail qui se ressent à l’usage."
              icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
              className="h-full"
              bullets={[
                "Fiabilité des cinématiques d’ouverture.",
                "Options sécurité selon exigences chantier.",
              ]}
            />
          </div>
          <div className="md:col-span-5">
            <BentoCard
              title="Moustiquaires Feneko"
              description="Sur mesure, intégration discrète, cohérence esthétique."
              icon={<Gauge className="h-5 w-5" aria-hidden="true" />}
              className="h-full"
              bullets={[
                "Fabrication adaptée aux cotes réelles.",
                "Intégration pensée pour une pose pro.",
              ]}
            />
          </div>
          <div className="md:col-span-7">
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={hover}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="rounded-2xl border bg-white p-6 hairline"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold tracking-tight">
                    Performances (extraits)
                  </div>
                  <div className="mt-2 text-sm leading-6 text-muted-foreground">
                    Tableaux détaillés disponibles sur la page Technique (et
                    fiches PDF sur demande).
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-primary">
                  <Gauge className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Thermique", v: "Optimisé" },
                  { k: "Acoustique", v: "Sur configuration" },
                  { k: "Sécurité", v: "Selon besoin" },
                ].map((row) => (
                  <div key={row.k} className="rounded-xl border bg-muted/30 p-4">
                    <div className="text-xs text-muted-foreground">{row.k}</div>
                    <div className="mt-1 text-sm font-semibold">{row.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-full">
                  <Link href="/technique">Accéder aux tableaux</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-white/70">
                  <Link href="/contact-pro">Demander des PDF</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


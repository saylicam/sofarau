"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers3,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Volume2,
  Lock,
  Grid3x3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const hover = {
  rest: { y: 0, boxShadow: "0 1px 0 rgba(15,23,42,0.03), 0 12px 24px rgba(15,23,42,0.06)" },
  hover: { y: -4, boxShadow: "0 1px 0 rgba(15,23,42,0.03), 0 24px 48px rgba(15,23,42,0.12)" },
};

function BentoCard({
  title,
  description,
  icon,
  className,
  bullets,
  features,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  bullets?: string[];
  features?: { label: string; value: string }[];
  link?: { href: string; label: string };
}) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={hover}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group rounded-3xl border bg-white p-8 soft-shadow",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-2xl font-bold tracking-tight">{title}</div>
          <div className="mt-3 text-sm leading-6 text-muted-foreground">
            {description}
          </div>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>
      </div>

      {bullets?.length ? (
        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {features?.length ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.map((feature, i) => (
            <div key={i} className="rounded-xl border bg-muted/30 p-4">
              <div className="text-xs text-muted-foreground">{feature.label}</div>
              <div className="mt-1 text-sm font-semibold">{feature.value}</div>
            </div>
          ))}
        </div>
      ) : null}

      {link ? (
        <div className="mt-8">
          <Button asChild variant="outline" className="w-full rounded-full">
            <Link href={link.href}>{link.label}</Link>
          </Button>
        </div>
      ) : null}
    </motion.div>
  );
}

export function SolutionsContent() {
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
            Solutions Techniques
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Systèmes & Ensembles
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground md:text-lg">
            Approche factuelle et orientée données. Systèmes reconnus, intégration
            propre, performance mesurable. Aucun discours grand public, aucune
            promesse vague.
          </p>
        </motion.div>
      </section>

      {/* Bento Grid Principal */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-12">
            {/* Schüco Living 82 MD - Grande carte */}
            <div className="md:col-span-8">
              <BentoCard
                title="Schüco Living 82 MD"
                description="Base de fabrication premium, pensée pour la performance thermique et la stabilité structurelle. Conception multi-chambres optimisée."
                icon={<Layers3 className="h-7 w-7" aria-hidden="true" />}
                className="h-full"
                bullets={[
                  "Conception multi-chambres (orientation thermique optimisée).",
                  "Compatibilité configurations double vitrage advanced.",
                  "Finition & tolérances : exécution propre, reproductible.",
                  "Stabilité dimensionnelle et résistance aux déformations.",
                ]}
                features={[
                  { label: "Profil", value: "82 mm" },
                  { label: "Type", value: "Multi-chambres" },
                  { label: "Finition", value: "Sur mesure" },
                ]}
                link={{ href: "/technique", label: "Voir les performances" }}
              />
            </div>

            {/* Roto NX - Carte moyenne */}
            <div className="md:col-span-4">
              <BentoCard
                title="Quincaillerie Roto NX"
                description="Précision mécanique, sécurité renforcée, réglages fins. Le détail qui se ressent à l'usage quotidien."
                icon={<ShieldCheck className="h-7 w-7" aria-hidden="true" />}
                className="h-full"
                bullets={[
                  "Fiabilité des cinématiques d'ouverture.",
                  "Options sécurité selon exigences chantier.",
                  "Réglages précis et durabilité éprouvée.",
                ]}
                link={{ href: "/technique", label: "Détails techniques" }}
              />
            </div>

            {/* Moustiquaires Feneko */}
            <div className="md:col-span-5">
              <BentoCard
                title="Moustiquaires Feneko"
                description="Sur mesure, intégration discrète, cohérence esthétique. Fabrication adaptée aux cotes réelles du projet."
                icon={<Grid3x3 className="h-7 w-7" aria-hidden="true" />}
                className="h-full"
                bullets={[
                  "Fabrication adaptée aux cotes réelles.",
                  "Intégration pensée pour une pose professionnelle.",
                  "Cohérence esthétique avec le système principal.",
                ]}
                link={{ href: "/contact-pro", label: "Demander un devis" }}
              />
            </div>

            {/* Double Vitrage Advanced */}
            <div className="md:col-span-7">
              <BentoCard
                title="Double Vitrage Advanced"
                description="Configurations optimisées selon les exigences : thermique, acoustique, sécurité. Compatibilité avec Schüco Living 82 MD."
                icon={<Sparkles className="h-7 w-7" aria-hidden="true" />}
                className="h-full"
                features={[
                  { label: "Thermique", value: "Optimisé" },
                  { label: "Acoustique", value: "Sur configuration" },
                  { label: "Sécurité", value: "Selon besoin" },
                ]}
                bullets={[
                  "Configurations sur mesure selon exigences projet.",
                  "Optimisation thermique et acoustique.",
                  "Options sécurité (vitrage feuilleté, renforcé).",
                ]}
                link={{ href: "/technique", label: "Tableaux de performances" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Performances */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Performances Clés
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tableaux détaillés disponibles sur la page Technique. Fiches PDF sur
            demande via le portail pro.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Thermometer,
                title: "Performance Thermique",
                description: "Coefficients U optimisés selon configuration.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: Volume2,
                title: "Isolation Acoustique",
                description: "Réduction sonore adaptée aux contraintes projet.",
                color: "text-slate-600",
                bg: "bg-slate-50",
              },
              {
                icon: Lock,
                title: "Sécurité",
                description: "Options renforcées selon exigences chantier.",
                color: "text-primary",
                bg: "bg-primary/10",
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 bg-white soft-shadow">
                <CardContent className="p-6">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-4 rounded-full"
                  >
                    <Link href="/technique">Voir les données</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

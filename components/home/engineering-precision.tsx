"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, Layers3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SchucoBlueprintInteractive } from "@/components/blueprints/schuco-blueprint-interactive";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function EngineeringPrecision() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Texture de grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-48">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Ingénierie de Précision
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Schémas Techniques & Expertise
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              L&apos;alliance de la robotique allemande et du savoir-faire belge
              pour une menuiserie sans compromis. Chaque millimètre compte, chaque
              détail est pensé pour la performance et la durabilité.
            </p>
          </motion.div>

          {/* Schéma Blueprint en grand format */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 rounded-2xl border border-slate-200/60 bg-white p-8 shadow-2xl md:p-12"
            style={{
              boxShadow:
                "0 1px 0 rgba(15,23,42,0.02), 0 20px 60px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.02)",
            }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Ruler className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Schüco Living 82 MD</h3>
                  <p className="text-sm text-muted-foreground">
                    Schéma technique détaillé
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <SchucoBlueprintInteractive />
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Survolez les points d&apos;ancrage pour découvrir les détails
              techniques
            </p>
          </motion.div>

          {/* Contenu textuel dense en deux colonnes */}
          <div className="mt-20 grid gap-12 md:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Layers3 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Précision Millimétrée
                </h3>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-base leading-7 text-slate-700">
                L&apos;optimisation des flux logistiques et le respect rigoureux
                des délais de production sont au cœur de notre approche. Chaque
                châssis Schüco Living 82 MD est fabriqué selon des tolérances
                strictes, avec des contrôles qualité à chaque étape du processus.
              </p>
              <p className="text-base leading-7 text-slate-700">
                Notre atelier de Wavre intègre des machines de précision
                allemandes, mais c&apos;est l&apos;expertise de nos équipes qui
                fait la différence. Chaque projet bénéficie d&apos;un suivi
                personnalisé, d&apos;une documentation technique complète, et
                d&apos;un engagement sans faille sur la qualité d&apos;exécution.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Ruler className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Expertise Technique
                </h3>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-base leading-7 text-slate-700">
                Les schémas techniques que vous voyez ne sont pas de simples
                illustrations. Ils représentent des années d&apos;expérience dans
                la fabrication de menuiserie haut de gamme. Chaque dimension,
                chaque joint, chaque renfort a été pensé pour optimiser la
                performance thermique, acoustique et structurelle.
              </p>
              <p className="text-base leading-7 text-slate-700">
                Nous ne nous contentons pas de fabriquer. Nous concevons, nous
                testons, nous validons. Chaque configuration est documentée, chaque
                performance est mesurée. C&apos;est cette rigueur qui fait de
                SOFARAU un partenaire de confiance pour les professionnels les
                plus exigeants du Benelux.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          >
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full px-8 text-base font-semibold"
            >
              <Link href="/technique" className="flex items-center gap-2">
                Voir les performances détaillées
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-indigo-200 bg-white/80 px-8 text-base font-semibold hover:border-indigo-400 hover:bg-indigo-50"
            >
              <Link href="/solutions" className="flex items-center gap-2">
                Découvrir nos solutions
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

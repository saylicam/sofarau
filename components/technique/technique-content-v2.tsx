"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FileText,
  Download,
  Thermometer,
  Volume2,
  Lock,
  ArrowRight,
  FileCode,
  Award,
  FileCheck,
  Wind,
  Droplets,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SchucoBlueprintInteractive } from "@/components/blueprints/schuco-blueprint-interactive";
import { PMRThresholdBlueprint } from "@/components/blueprints/pmr-threshold-blueprint";
import { SlidingLiftBlueprint } from "@/components/blueprints/sliding-lift-blueprint";
import { AcousticGlassBlueprint } from "@/components/blueprints/acoustic-glass-blueprint";
import { RotoNXBlueprint } from "@/components/blueprints/roto-nx-blueprint";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

// Composant Progress Bar animée
function AnimatedProgressBar({
  label,
  value,
  max,
  color = "indigo",
  unit = "",
}: {
  label: string;
  value: number;
  max: number;
  color?: "indigo" | "blue" | "green";
  unit?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [progress, setProgress] = useState(0);

  const colorClasses = {
    indigo: "bg-indigo-600",
    blue: "bg-blue-600",
    green: "bg-green-600",
  };

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressValue = Math.min((elapsed / duration) * value, value);
      setProgress(progressValue);
      if (progressValue < value) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [isInView, value]);

  const percentage = (progress / max) * 100;

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-mono font-bold text-indigo-600">
          {Math.round(progress)}
          {unit}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className={`h-full ${colorClasses[color]}`}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function TechniqueContentV2() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Dot Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
            >
              Technique
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              Performances & Fiches Techniques
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl"
            >
              Tableaux de performances détaillés (isolation, vitrage, sécurité,
              acoustique) et accès aux fiches techniques PDF. Données précises
              pour professionnels exigeants. Précision Industrielle garantie.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Tableaux */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 to-white">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Tableaux de Performances
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                Données Techniques Validées
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Valeurs clés et conditions de mesure, présentées de manière
                claire et comparable. Partenaire Exclusif pour données fiables.
              </p>
            </motion.div>

            {/* Grid de Performances */}
            <div className="mt-20 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Thermometer,
                  title: "Performance Thermique",
                  description:
                    "Coefficients U optimisés selon configuration. Isolation renforcée, ponts thermiques minimisés.",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                  border: "border-blue-200",
                },
                {
                  icon: Volume2,
                  title: "Isolation Acoustique",
                  description:
                    "Réduction sonore adaptée aux contraintes projet. Configurations sur mesure selon exigences.",
                  color: "text-slate-600",
                  bg: "bg-slate-50",
                  border: "border-slate-200",
                },
                {
                  icon: Lock,
                  title: "Sécurité",
                  description:
                    "Options renforcées selon exigences chantier. Vitrage feuilleté, renforcement structurel.",
                  color: "text-indigo-600",
                  bg: "bg-indigo-50",
                  border: "border-indigo-200",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                >
                  <Card
                    className={`h-full border-2 ${item.border} bg-white shadow-2xl transition-all hover:border-indigo-400/60`}
                    style={{
                      boxShadow:
                        "0 1px 0 rgba(15,23,42,0.02), 0 20px 60px rgba(15,23,42,0.08)",
                    }}
                  >
                    <CardContent className="p-8">
                      <div className="relative">
                        <div
                          className={`absolute -left-2 -top-2 h-14 w-14 rounded-xl ${item.bg} blur-lg opacity-50`}
                        />
                        <div
                          className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                        >
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <h3 className="mt-6 text-xl font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                      <Button
                        asChild
                        variant="ghost"
                        className="mt-6 w-full rounded-full"
                      >
                        <Link href="/contact-pro">
                          Voir les données
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Schémas Techniques Diversifiés */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Schémas Techniques
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                Blueprints & Détails Techniques
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Schémas techniques détaillés pour chaque système. Documentation
                précise pour professionnels exigeants.
              </p>
            </motion.div>

            <div className="mt-20 grid gap-8 md:grid-cols-2">
              {/* Schéma Profilé Schüco */}
              <motion.div variants={fadeInUp}>
                <div className="mb-4 text-sm font-semibold text-indigo-600">
                  Profilé Schüco Living 82 MD
                </div>
                <SchucoBlueprintInteractive />
              </motion.div>

              {/* Schéma Seuil PMR */}
              <motion.div variants={fadeInUp}>
                <div className="mb-4 text-sm font-semibold text-indigo-600">
                  Système de Seuil PMR
                </div>
                <PMRThresholdBlueprint />
              </motion.div>

              {/* Schéma Coulissant Levant */}
              <motion.div variants={fadeInUp}>
                <div className="mb-4 text-sm font-semibold text-indigo-600">
                  Coulissant Levant
                </div>
                <SlidingLiftBlueprint />
              </motion.div>

              {/* Schéma Vitrage Acoustique */}
              <motion.div variants={fadeInUp}>
                <div className="mb-4 text-sm font-semibold text-indigo-600">
                  Vitrage Acoustique
                </div>
                <AcousticGlassBlueprint />
              </motion.div>

              {/* Schéma Roto NX */}
              <motion.div variants={fadeInUp} className="md:col-span-2">
                <div className="mb-4 text-sm font-semibold text-indigo-600">
                  Roto NX - Point de Verrouillage Haute Sécurité
                </div>
                <RotoNXBlueprint />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Tableau de Calcul Uw */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Simulateur Visuel
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                Tableau de Calcul U<sub>w</sub>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Visualisez l&apos;impact du vitrage sur le coefficient U<sub>w</sub> global.
                Simulateur simple pour architectes.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 rounded-3xl border border-indigo-200/60 bg-white p-8 shadow-2xl md:p-12"
              style={{
                boxShadow:
                  "0 1px 0 rgba(15,23,42,0.02), 0 20px 60px rgba(15,23,42,0.08)",
              }}
            >
              <div className="grid gap-8 md:grid-cols-2">
                {/* Configuration vitrage */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Configuration Vitrage</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Double vitrage standard", uw: 1.4 },
                      { label: "Double vitrage low-e", uw: 1.1 },
                      { label: "Triple vitrage", uw: 0.8 },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-slate-200 bg-slate-50/50 p-4"
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-medium">{item.label}</span>
                          <span className="font-mono text-base font-bold text-indigo-600">
                            U<sub>w</sub> = {item.uw} W/m²K
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                          <motion.div
                            className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${((2 - item.uw) / 1.2) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact visuel */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Impact sur Performance</h3>
                  <div className="rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Isolation</span>
                        <span className="font-mono text-lg font-bold text-indigo-600">
                          Optimisée
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Confort thermique</span>
                        <span className="font-mono text-lg font-bold text-indigo-600">
                          Amélioré
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Économies énergétiques</span>
                        <span className="font-mono text-lg font-bold text-green-600">
                          +30%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Animations de Performance */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Performances Validées
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                Jauges de Performance
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Résistance au vent, étanchéité à l&apos;eau. Données mesurées selon normes
                européennes.
              </p>
            </motion.div>

            <div className="mt-20 grid gap-8 md:grid-cols-2">
              {/* Résistance au vent */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border-2 border-indigo-200 bg-white p-8 shadow-xl transition-all hover:border-indigo-400 hover:shadow-2xl"
                style={{
                  boxShadow:
                    "0 1px 0 rgba(15,23,42,0.02), 0 12px 24px rgba(15,23,42,0.08)",
                }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Wind className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Résistance au Vent</h3>
                    <p className="text-sm text-muted-foreground">Classe C5/B5</p>
                  </div>
                </div>
                <AnimatedProgressBar
                  label="Pression de test"
                  value={2400}
                  max={3000}
                  color="indigo"
                  unit=" Pa"
                />
                <div className="mt-4 text-sm text-muted-foreground">
                  Conforme aux exigences les plus strictes pour bâtiments de grande hauteur.
                </div>
              </motion.div>

              {/* Étanchéité à l'eau */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border-2 border-blue-200 bg-white p-8 shadow-xl transition-all hover:border-blue-400 hover:shadow-2xl"
                style={{
                  boxShadow:
                    "0 1px 0 rgba(15,23,42,0.02), 0 12px 24px rgba(15,23,42,0.08)",
                }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Droplets className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Étanchéité à l&apos;Eau</h3>
                    <p className="text-sm text-muted-foreground">Classe E900</p>
                  </div>
                </div>
                <AnimatedProgressBar
                  label="Pression d&apos;eau"
                  value={900}
                  max={1000}
                  color="blue"
                  unit=" Pa"
                />
                <div className="mt-4 text-sm text-muted-foreground">
                  Protection optimale contre les infiltrations, même en conditions extrêmes.
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Zone Téléchargement Premium */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 to-white">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Documentation Premium
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                Zone de Téléchargement
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Accès aux dossiers techniques complets. Plans CAD, certificats, fiches
                environnementales.
              </p>
            </motion.div>

            <div className="mt-20 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: FileCode,
                  title: "Plans CAD",
                  description: "Fichiers DWG, DXF. Cotes précises, détails d&apos;exécution.",
                  color: "indigo",
                },
                {
                  icon: Award,
                  title: "Certificats d&apos;Essais",
                  description: "Rapports de tests validés. Conformité européenne garantie.",
                  color: "blue",
                },
                {
                  icon: FileCheck,
                  title: "Fiches Environnementales",
                  description: "Données environnementales. ACV, recyclabilité, impact carbone.",
                  color: "green",
                },
              ].map((item, index) => {
                const colorClasses = {
                  indigo: {
                    bg: "bg-indigo-50",
                    border: "border-indigo-200",
                    text: "text-indigo-600",
                    hover: "hover:border-indigo-400",
                  },
                  blue: {
                    bg: "bg-blue-50",
                    border: "border-blue-200",
                    text: "text-blue-600",
                    hover: "hover:border-blue-400",
                  },
                  green: {
                    bg: "bg-green-50",
                    border: "border-green-200",
                    text: "text-green-600",
                    hover: "hover:border-green-400",
                  },
                };
                const colors = colorClasses[item.color as keyof typeof colorClasses];

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    <Card
                      className={`h-full border-2 ${colors.border} ${colors.hover} bg-white shadow-xl transition-all`}
                      style={{
                        boxShadow:
                          "0 1px 0 rgba(15,23,42,0.02), 0 12px 24px rgba(15,23,42,0.08)",
                      }}
                    >
                      <CardContent className="p-8">
                        <div className="relative mb-6">
                          <div
                            className={`absolute -left-2 -top-2 h-14 w-14 rounded-xl ${colors.bg} blur-lg opacity-50`}
                          />
                          <div
                            className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}
                          >
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                        </div>
                        <h3 className="mb-3 text-xl font-bold tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mb-6 text-sm leading-7 text-muted-foreground">
                          {item.description}
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className={`w-full rounded-full ${colors.border} ${colors.hover}`}
                        >
                          <Link href="/contact-pro" className="flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Télécharger
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Fiches PDF (conservée) */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/50 p-12 shadow-2xl md:p-16"
            style={{
              boxShadow:
                "0 1px 0 rgba(15,23,42,0.02), 0 20px 60px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.02)",
            }}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
                <div className="absolute -left-2 -top-2 h-16 w-16 rounded-2xl bg-indigo-500/10 blur-xl" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-600">
                  <FileText className="h-7 w-7" aria-hidden="true" />
                </div>
              </div>
              <h2 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl">
                Fiches Techniques (PDF)
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Les documents techniques détaillés peuvent être fournis sur
                demande via le portail professionnel. Soutien Logistique pour
                accès rapide aux données.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
            >
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full px-8 text-base font-semibold"
              >
                <Link href="/contact-pro" className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Demander des PDF
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-full border-indigo-200 bg-white/80 px-8 text-base font-semibold hover:border-indigo-400 hover:bg-indigo-50"
              >
                <Link href="/solutions" className="flex items-center gap-2">
                  Voir les solutions
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

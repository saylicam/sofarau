"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Thermometer,
  Volume2,
  Lock,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function TechniqueContent() {
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

        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
            >
              Technique
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              Performances & Fiches Techniques
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl"
            >
              Tableaux de performances détaillés (isolation, vitrage, sécurité,
              acoustique) et accès aux fiches techniques PDF. Données précises
              pour professionnels exigeants.
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

        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Tableaux de Performances
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                Données Techniques Validées
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Valeurs clés et conditions de mesure, présentées de manière
                claire et comparable.
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
                  variants={itemVariants}
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

      {/* Section Fiches PDF */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-40">
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
            <motion.div variants={itemVariants} className="text-center">
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
                demande via le portail professionnel.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
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

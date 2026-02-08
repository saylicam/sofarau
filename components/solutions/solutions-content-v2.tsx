"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Sparkles, Thermometer, Volume2, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ChassisIcon,
  CoulissantIcon,
  PorteIcon,
  PorteGarageIcon,
} from "@/components/icons/architectural-icons";

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

function BentoCardV2({
  title,
  description,
  icon,
  className,
  bullets,
  features,
  link,
  height = "md:h-[450px]",
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  bullets?: string[];
  features?: { label: string; value: string }[];
  link?: { href: string; label: string };
  height?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className={cn(
        "group relative rounded-2xl border-2 border-indigo-200 bg-white p-8 transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]",
        height,
        className,
      )}
      style={{
        boxShadow:
          "0 1px 0 rgba(15,23,42,0.02), 0 20px 60px rgba(15,23,42,0.08)",
      }}
    >
      {/* Halo Bleu derrière l'icône */}
      <div className="relative">
        <div className="absolute -left-2 -top-2 h-16 w-16 rounded-2xl bg-indigo-500/10 blur-xl" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-600">
          {icon}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
          {description}
        </p>
      </div>

      {bullets?.length ? (
        <ul className="mt-6 space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {features?.length ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-xl border border-indigo-100 bg-indigo-50/30 p-4"
            >
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {feature.label}
              </div>
              <div className="mt-1.5 font-mono text-base font-bold text-indigo-600">
                {feature.value}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {link ? (
        <div className="absolute bottom-8 left-8 right-8">
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
          <Button
            asChild
            variant="outline"
            className="w-full rounded-full border-indigo-200 bg-white/80 transition-all hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-[0_0_10px_rgba(99,102,241,0.2)]"
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        </div>
      ) : null}
    </motion.div>
  );
}

export function SolutionsContentV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-32 md:py-48">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={containerVariants}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Solutions Techniques
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Systèmes & Ensembles
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base leading-8 text-muted-foreground md:text-lg"
          >
            Approche factuelle et orientée données. Systèmes reconnus, intégration
            propre, performance mesurable. Partenaire Exclusif pour professionnels
            exigeants.
          </motion.p>
        </motion.div>
      </section>

      {/* Bento Grid Principal avec parallaxe */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 to-white"
      >
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <motion.div
          style={{ y: parallaxY }}
          className="relative mx-auto max-w-7xl px-4 py-32 md:py-48"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-12"
          >
            {/* Schüco Living 82 MD - Grande carte */}
            <div className="md:col-span-8">
              <BentoCardV2
                title="Schüco Living 82 MD"
                description="Base de fabrication premium, pensée pour la performance thermique et la stabilité structurelle. Conception multi-chambres optimisée."
                icon={<ChassisIcon className="h-7 w-7" />}
                height="md:h-[520px]"
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
              <BentoCardV2
                title="Quincaillerie Roto NX"
                description="Précision mécanique, sécurité renforcée, réglages fins. Le détail qui se ressent à l'usage quotidien."
                icon={<ShieldCheck className="h-7 w-7" aria-hidden="true" />}
                height="md:h-[520px]"
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
              <BentoCardV2
                title="Moustiquaires Feneko"
                description="Sur mesure, intégration discrète, cohérence esthétique. Fabrication adaptée aux cotes réelles du projet."
                icon={<Sparkles className="h-7 w-7" aria-hidden="true" />}
                height="md:h-[450px]"
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
              <BentoCardV2
                title="Double Vitrage Advanced"
                description="Configurations optimisées selon les exigences : thermique, acoustique, sécurité. Compatibilité avec Schüco Living 82 MD."
                icon={<Sparkles className="h-7 w-7" aria-hidden="true" />}
                height="md:h-[450px]"
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
          </motion.div>
        </motion.div>
      </section>

      {/* Section Types de produits avec icônes architecturales */}
      <section className="mx-auto max-w-7xl px-4 py-32 md:py-48">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Types de Produits
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
              Précision Industrielle
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Fabrication sur mesure pour tous types d'ouvertures. Soutien
              Logistique adapté à vos besoins.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-4">
            {[
              {
                icon: ChassisIcon,
                title: "Châssis",
                description: "Fenêtres fixes et ouvrantes, toutes dimensions.",
              },
              {
                icon: CoulissantIcon,
                title: "Coulissants",
                description: "Systèmes coulissants haute performance.",
              },
              {
                icon: PorteIcon,
                title: "Portes",
                description: "Portes d'entrée et portes intérieures.",
              },
              {
                icon: PorteGarageIcon,
                title: "Portes de Garage",
                description: "Solutions sur mesure pour portes de garage.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-2xl bg-indigo-500/10 blur-2xl" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/60 bg-white">
                      <item.icon className="h-7 w-7 text-indigo-600" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section Performances */}
      <section className="bg-gradient-to-b from-white to-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Performances Clés
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tableaux détaillés disponibles sur la page Technique. Fiches PDF sur
                demande via le portail pro.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                  color: "text-indigo-600",
                  bg: "bg-indigo-50",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-0 bg-white shadow-2xl">
                    <CardContent className="p-6">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                      >
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

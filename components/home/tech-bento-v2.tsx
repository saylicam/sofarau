"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ChevronRight,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
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

function BentoCardV2({
  title,
  description,
  icon,
  className,
  bullets,
  features,
  link,
  height = "md:h-[400px]",
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
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className={cn(
        "group relative rounded-3xl border border-slate-200/60 bg-white p-8 transition-all duration-300 hover:border-indigo-400/60",
        height,
        className,
      )}
      style={{
        boxShadow:
          "0 1px 0 rgba(15,23,42,0.02), 0 20px 60px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.02)",
      }}
    >
      {/* Halo Bleu derrière l'icône */}
      <div className="relative">
        <div className="absolute -left-2 -top-2 h-16 w-16 rounded-2xl bg-indigo-500/10 blur-xl" />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-600">
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
              className="rounded-xl border border-slate-100 bg-slate-50/50 p-4"
            >
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {feature.label}
              </div>
              <div className="mt-1.5 text-base font-bold">{feature.value}</div>
            </div>
          ))}
        </div>
      ) : null}

      {link ? (
        <div className="absolute bottom-8 left-8 right-8">
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <Button
            asChild
            variant="outline"
            className="w-full rounded-full border-indigo-200 bg-white/80 hover:border-indigo-400 hover:bg-indigo-50"
          >
            <Link href={link.href} className="flex items-center justify-center gap-2">
              {link.label}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      ) : null}
    </motion.div>
  );
}

export function TechBentoV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 to-white"
    >
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-40">
        {/* Header avec parallax subtil */}
        <motion.div
          style={{ y: parallaxY }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={containerVariants}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            {/* Label Architectural */}
            <motion.div
              variants={cardVariants}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
            >
              Vitrine Technique
            </motion.div>
            <motion.h2
              variants={cardVariants}
              className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              Systèmes & Ensembles
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl"
            >
              Systèmes reconnus, intégration propre, et une approche orientée
              performance. Aucun discours grand public, aucune promesse vague.
            </motion.p>
          </div>
          <motion.div variants={cardVariants}>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-indigo-200 bg-white/80 px-6 hover:border-indigo-400 hover:bg-indigo-50"
            >
              <Link href="/solutions" className="flex items-center gap-2">
                Voir les solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Bento Grid 2.0 avec hauteurs variées */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-20 grid gap-6 md:grid-cols-12"
        >
          {/* Schüco - Grande carte */}
          <div className="md:col-span-8">
            <BentoCardV2
              title="Schüco Living 82 MD"
              description="Base de fabrication premium, pensée pour la performance thermique et la stabilité structurelle. Conception multi-chambres optimisée."
              icon={<Layers3 className="h-6 w-6" aria-hidden="true" />}
              height="md:h-[500px]"
              bullets={[
                "Conception multi-chambres (orientation thermique optimisée).",
                "Compatibilité configurations double vitrage advanced.",
                "Finition & tolérances : exécution propre, reproductible.",
                "Stabilité dimensionnelle et résistance aux déformations.",
              ]}
              link={{ href: "/technique", label: "Voir les performances" }}
            />
          </div>

          {/* Roto NX - Carte moyenne */}
          <div className="md:col-span-4">
            <BentoCardV2
              title="Quincaillerie Roto NX"
              description="Précision mécanique, sécurité renforcée, réglages fins. Le détail qui se ressent à l'usage quotidien."
              icon={<ShieldCheck className="h-6 w-6" aria-hidden="true" />}
              height="md:h-[500px]"
              bullets={[
                "Fiabilité des cinématiques d'ouverture.",
                "Options sécurité selon exigences chantier.",
                "Réglages précis et durabilité éprouvée.",
              ]}
              link={{ href: "/technique", label: "Détails techniques" }}
            />
          </div>

          {/* Feneko */}
          <div className="md:col-span-5">
            <BentoCardV2
              title="Moustiquaires Feneko"
              description="Sur mesure, intégration discrète, cohérence esthétique. Fabrication adaptée aux cotes réelles du projet."
              icon={<Sparkles className="h-6 w-6" aria-hidden="true" />}
              height="md:h-[420px]"
              bullets={[
                "Fabrication adaptée aux cotes réelles.",
                "Intégration pensée pour une pose professionnelle.",
                "Cohérence esthétique avec le système principal.",
              ]}
              link={{ href: "/contact-pro", label: "Demander un devis" }}
            />
          </div>

          {/* Performances - Grande carte */}
          <div className="md:col-span-7">
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="relative h-full rounded-3xl border border-slate-200/60 bg-white p-8 transition-all duration-300 hover:border-indigo-400/60 md:h-[420px]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(15,23,42,0.02), 0 20px 60px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.02)",
              }}
            >
              {/* Halo Bleu */}
              <div className="relative">
                <div className="absolute -left-2 -top-2 h-16 w-16 rounded-2xl bg-indigo-500/10 blur-xl" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-600">
                  <Gauge className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold tracking-tight">
                  Performances (extraits)
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                  Tableaux détaillés disponibles sur la page Technique (et fiches
                  PDF sur demande).
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { k: "Thermique", v: "Optimisé" },
                  { k: "Acoustique", v: "Sur configuration" },
                  { k: "Sécurité", v: "Selon besoin" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="rounded-xl border border-slate-100 bg-slate-50/50 p-4"
                  >
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {row.k}
                    </div>
                    <div className="mt-1.5 text-base font-bold">{row.v}</div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="mb-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1 rounded-full">
                    <Link href="/technique">Accéder aux tableaux</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 rounded-full border-indigo-200 bg-white/80 hover:border-indigo-400 hover:bg-indigo-50"
                  >
                    <Link href="/contact-pro">Demander des PDF</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

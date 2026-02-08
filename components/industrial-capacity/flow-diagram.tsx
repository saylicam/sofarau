"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  Cpu,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Analyse Technique & Devis",
    description: "Étude des contraintes, validation des tolérances, devis détaillé",
    color: "indigo",
  },
  {
    icon: Cpu,
    title: "Débitage & Usinage CNC",
    description: "Précision millimétrée, machines allemandes, process reproductible",
    color: "blue",
  },
  {
    icon: Wrench,
    title: "Soudage & Ébavurage",
    description: "Automatisation complète, contrôle qualité à chaque étape",
    color: "purple",
  },
  {
    icon: CheckCircle2,
    title: "Contrôle & Logistique",
    description: "Vérification finale, documentation, livraison dédiée",
    color: "green",
  },
];

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function FlowDiagram() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Texture de grain */}
      <div
        className="absolute inset-0 opacity-[0.02]"
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
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Capacité Industrielle
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Process de Fabrication
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              Flux tendu, certification européenne, tolérances millimétrées. Votre
              commande suit un parcours optimisé de l&apos;analyse technique à la
              livraison dédiée.
            </p>
          </motion.div>

          {/* Process Cards - Layout responsive */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const colorMap = {
                  indigo: {
                    bg: "bg-indigo-50",
                    border: "border-indigo-200",
                    text: "text-indigo-600",
                    glow: "hover:border-indigo-400",
                  },
                  blue: {
                    bg: "bg-blue-50",
                    border: "border-blue-200",
                    text: "text-blue-600",
                    glow: "hover:border-blue-400",
                  },
                  purple: {
                    bg: "bg-purple-50",
                    border: "border-purple-200",
                    text: "text-purple-600",
                    glow: "hover:border-purple-400",
                  },
                  green: {
                    bg: "bg-green-50",
                    border: "border-green-200",
                    text: "text-green-600",
                    glow: "hover:border-green-400",
                  },
                };
                const colors = colorMap[step.color as keyof typeof colorMap];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative"
                  >
                    {/* Flèche entre les cartes (desktop uniquement) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 z-10 -translate-y-1/2">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.15 }}
                        >
                          <ArrowRight className="h-6 w-6 text-indigo-400" />
                        </motion.div>
                      </div>
                    )}

                    {/* Carte avec min-height pour éviter le chevauchement */}
                    <div
                      className={`relative h-full min-h-[280px] rounded-2xl border-2 ${colors.border} ${colors.glow} bg-white p-6 transition-all duration-300 shadow-lg`}
                      style={{
                        boxShadow:
                          "0 1px 0 rgba(15,23,42,0.02), 0 12px 24px rgba(15,23,42,0.08)",
                      }}
                    >
                      {/* Badge numéro d'étape */}
                      <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow-lg">
                        {index + 1}
                      </div>

                      {/* Icône avec animation check au scroll */}
                      <motion.div
                        className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: 0.3 + index * 0.1,
                        }}
                      >
                        <Icon className="h-8 w-8" />
                        {/* Check animé qui apparaît au scroll */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{
                            delay: 0.8 + index * 0.1,
                            type: "spring",
                            stiffness: 300,
                          }}
                        >
                          <CheckCircle2
                            className={`h-10 w-10 ${colors.text} opacity-80`}
                          />
                        </motion.div>
                      </motion.div>

                      {/* Titre */}
                      <h3
                        className={`mb-3 text-lg font-bold leading-tight ${colors.text}`}
                      >
                        {step.title}
                      </h3>

                      {/* Description avec espacement suffisant */}
                      <p className="text-sm leading-6 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Texte explicatif */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid gap-8 md:grid-cols-2"
          >
            <div>
              <h3 className="text-xl font-bold tracking-tight">
                Process Reproductible
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Chaque étape est documentée, chaque contrôle est tracé. Notre
                atelier de Wavre intègre des machines de précision allemandes,
                mais c&apos;est l&apos;expertise de nos équipes qui garantit la
                qualité d&apos;exécution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">
                Certification Européenne
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Tolérances millimétrées, flux tendu, traçabilité complète. Nous
                ne nous contentons pas de fabriquer. Nous concevons, nous testons,
                nous validons selon les normes européennes les plus strictes.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

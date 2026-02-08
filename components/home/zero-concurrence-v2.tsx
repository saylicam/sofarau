"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, Target, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

export function ZeroConcurrenceV2() {
  return (
    <section className="relative overflow-hidden bg-white">
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
          className="text-center"
        >
          {/* Label Architectural */}
          <motion.div
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Neutralité Partenaire
          </motion.div>

          {/* Titre Principal */}
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Partenaire Exclusif
          </motion.h2>

          {/* Sous-titre Fin */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
          >
            Votre succès est notre seule priorité. Nous sommes un partenaire
            neutre et exclusif : nous fabriquons, vous installez et vous
            développez votre activité.
          </motion.p>
        </motion.div>

        {/* Bento Grid 2.0 avec hauteurs variées */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: Package,
              title: "Soutien Logistique",
              description:
                "Chaîne de production rationalisée, livraisons coordonnées, traçabilité complète. Votre planning respecté, vos contraintes intégrées.",
              height: "md:h-[420px]",
              delay: 0,
            },
            {
              icon: Target,
              title: "Précision Industrielle",
              description:
                "Tolérances strictes, contrôles qualité à chaque étape, finition soignée. Exécution reproductible, données techniques validées.",
              height: "md:h-[380px]",
              delay: 0.1,
            },
            {
              icon: Users,
              title: "Partenaire Exclusif",
              description:
                "Équipe à l'écoute, documentation claire, support projet. Votre développement, notre engagement continu. Neutralité garantie.",
              height: "md:h-[400px]",
              delay: 0.2,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className={`group relative ${item.height} rounded-3xl border border-slate-200/60 bg-white p-8 shadow-2xl transition-all duration-300 hover:border-indigo-400/60`}
              style={{
                boxShadow:
                  "0 1px 0 rgba(15,23,42,0.02), 0 20px 60px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.02)",
              }}
            >
              {/* Halo Bleu derrière l'icône */}
              <div className="relative">
                <div className="absolute -left-2 -top-2 h-16 w-16 rounded-2xl bg-indigo-500/10 blur-xl" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-600">
                  <item.icon className="h-7 w-7" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                {item.description}
              </p>

              {/* Ligne de séparation fine */}
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

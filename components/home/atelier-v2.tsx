"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Clock, Crosshair, Factory, ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

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

export function AtelierSectionV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
    >
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
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Atelier
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              La Puissance de Fabrication
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
              Un atelier conçu pour la précision, la répétabilité et des délais
              maîtrisés. Vous obtenez un partenaire industriel fiable, capable de
              produire proprement et de documenter clairement.
            </p>
          </motion.div>

          {/* Grid avec parallax */}
          <motion.div
            style={{ y: parallaxY }}
            variants={itemVariants}
            className="mt-16 grid gap-6 md:grid-cols-12"
          >
            {/* Contenu Principal */}
            <div className="md:col-span-7">
              <div className="grid gap-6">
                {[
                  {
                    icon: Crosshair,
                    title: "Précision Millimétrée",
                    desc: "Tolérances strictes, contrôles qualité à chaque étape, finition soignée. Exécution reproductible, données techniques validées.",
                  },
                  {
                    icon: Clock,
                    title: "Délais Maîtrisés",
                    desc: "Organisation atelier orientée planning & fiabilité. Respect des engagements, communication proactive.",
                  },
                  {
                    icon: Factory,
                    title: "Capacité de Production",
                    desc: "Production B2B, adaptée à vos volumes et configurations. Flexibilité et réactivité selon vos besoins.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="group rounded-2xl border border-slate-200/60 bg-white p-6 shadow-lg transition-all hover:border-indigo-400/60"
                    style={{
                      boxShadow:
                        "0 1px 0 rgba(15,23,42,0.02), 0 12px 40px rgba(15,23,42,0.06)",
                    }}
                  >
                    <div className="flex gap-4">
                      <div className="relative">
                        <div className="absolute -left-1 -top-1 h-12 w-12 rounded-xl bg-indigo-500/10 blur-lg" />
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-600">
                          <item.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Placeholder Glassmorphism */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative h-full min-h-[500px] overflow-hidden rounded-3xl"
              >
                {/* Glassmorphism Effect */}
                <div
                  className="absolute inset-0 backdrop-blur-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow:
                      "0 8px 32px 0 rgba(31, 38, 135, 0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
                  }}
                >
                  <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                    <div className="relative">
                      <div className="absolute -left-4 -top-4 h-16 w-16 rounded-2xl bg-indigo-500/20 blur-2xl" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-indigo-600 backdrop-blur-sm">
                        <MapPin className="h-7 w-7" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-bold">Atelier Wavre</h3>
                    <p className="mt-3 text-sm text-slate-600">
                      Zone réservée pour vue aérienne et photos machines
                    </p>
                    <div className="mt-6 text-xs text-slate-500">
                      Intégration médias à venir
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center"
          >
            <Button
              asChild
              variant="outline"
              className="rounded-full border-indigo-200 bg-white/80 px-8 hover:border-indigo-400 hover:bg-indigo-50"
            >
              <Link href="/atelier" className="flex items-center gap-2">
                Découvrir l'atelier
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

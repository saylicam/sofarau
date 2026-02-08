"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Eye, Handshake, ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

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

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slowFadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function VisionContent() {
  return (
    <div className="bg-white">
      {/* Hero Section - Ultra épuré */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1
              variants={textVariants}
              className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
            >
              L&apos;humain au cœur de la haute performance.
            </motion.h1>
            <motion.p
              variants={slowFadeVariants}
              className="mx-auto mt-12 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed"
            >
              L&apos;expertise de Wavre au service du Benelux. La technologie
              n&apos;est rien sans l&apos;expertise des artisans. Chaque projet
              porte la signature d&apos;un savoir-faire transmis, d&apos;une
              attention portée aux détails, d&apos;un engagement humain qui fait
              la différence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Nos Valeurs - 3 colonnes aérées */}
      <section className="relative overflow-hidden bg-slate-50/30">
        <div className="mx-auto max-w-7xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={slowFadeVariants}
              className="mb-20 text-center"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Nos Valeurs
              </div>
            </motion.div>

            <div className="grid gap-16 md:grid-cols-3 md:gap-12">
              {[
                {
                  icon: Target,
                  title: "Rigueur",
                  description:
                    "Parce que chaque millimètre compte pour votre réputation. Nous ne transigeons pas sur la précision, la reproductibilité, la qualité d'exécution.",
                  quote: "L'excellence est dans les détails.",
                },
                {
                  icon: Eye,
                  title: "Transparence",
                  description:
                    "Des délais respectés et une communication directe. Pas de promesses vagues, pas de surprises. Vous savez où vous en êtes, toujours.",
                  quote: "La confiance se construit dans la clarté.",
                },
                {
                  icon: Handshake,
                  title: "Neutralité",
                  description:
                    "Nous sommes votre atelier, pas votre concurrent. Votre développement est notre mission. Aucune ambiguïté, aucun conflit d'intérêt.",
                  quote: "Votre succès, notre engagement.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={slowFadeVariants}
                  className="text-center"
                >
                  {/* Icône minimaliste */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-indigo-500/5 blur-2xl" />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-slate-200/60 bg-white">
                        <value.icon className="h-7 w-7 text-slate-700" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl">
                    {value.title}
                  </h3>
                  <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                    {value.description}
                  </p>
                  <p className="mt-6 text-sm italic leading-relaxed text-slate-600 md:text-base">
                    &ldquo;{value.quote}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Engagement Partenaire - Storytelling */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-4xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px" }}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={slowFadeVariants} className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Engagement Partenaire
              </div>
            </motion.div>

            <motion.div
              variants={slowFadeVariants}
              className="space-y-8 text-lg leading-relaxed text-slate-700 md:text-xl md:leading-relaxed"
            >
              <p>
                Chez SOFARAU, nous croyons que la haute performance industrielle
                ne se construit pas seulement avec des machines de précision,
                mais avec des hommes et des femmes qui comprennent votre
                métier, vos contraintes, vos ambitions. L&apos;alliance de la
                robotique allemande et du savoir-faire belge pour une menuiserie
                sans compromis.
              </p>

              <p className="italic text-slate-600">
                L&apos;expertise de Wavre au service du Benelux. Nous sommes le
                bras droit industriel des menuisiers et des architectes. Pas un
                simple fournisseur, mais un partenaire qui prend le temps de
                comprendre votre projet, vos exigences, votre vision. Votre
                atelier externalisé, votre partenaire de confiance.
              </p>

              <p>
                Chaque commande est traitée avec la même attention, qu&apos;il
                s&apos;agisse d&apos;une fenêtre unique ou d&apos;un projet
                complexe. Chaque livraison est préparée avec soin, documentée
                avec précision, suivie avec rigueur. L&apos;optimisation des
                flux logistiques et le respect rigoureux des délais de production
                sont au cœur de notre approche. La confiance se construit dans
                la proximité et la neutralité.
              </p>

              <p>
                Notre engagement ? Vous permettre de vous concentrer sur ce que
                vous faites le mieux : installer, conseiller, développer votre
                activité. Nous, nous fabriquons. Avec passion, avec expertise,
                avec cette rigueur qui fait que vous pouvez nous faire
                confiance les yeux fermés. Chaque dimension, chaque joint, chaque
                renfort a été pensé pour optimiser la performance thermique,
                acoustique et structurelle.
              </p>

              <p>
                Nous ne nous contentons pas de fabriquer. Nous concevons, nous
                testons, nous validons. Chaque configuration est documentée,
                chaque performance est mesurée. C&apos;est cette rigueur qui fait
                de SOFARAU un partenaire de confiance pour les professionnels les
                plus exigeants du Benelux.
              </p>

              <p className="font-medium text-slate-900">
                Parce que derrière chaque fenêtre, il y a un projet. Derrière
                chaque projet, il y a des hommes. Et c&apos;est pour eux que
                nous travaillons, chaque jour, à Wavre, au service du Benelux.
                Votre succès est notre mission. Votre développement, notre
                engagement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Ultra épuré */}
      <section className="relative overflow-hidden bg-slate-50/30">
        <div className="mx-auto max-w-4xl px-4 py-32 md:py-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px" }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={slowFadeVariants}>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Venez nous rencontrer à l&apos;atelier
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Parce que la confiance se construit aussi dans la rencontre.
                Découvrez nos process, nos machines, notre équipe. Voyez de vos
                propres yeux ce qui fait la différence SOFARAU.
              </p>
            </motion.div>

            <motion.div
              variants={slowFadeVariants}
              className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
            >
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full border-2 border-indigo-200 bg-white px-8 text-base font-semibold shadow-lg transition-all hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-xl"
              >
                <Link href="/atelier" className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Découvrir l&apos;atelier
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-full border-2 border-slate-200 bg-white/80 px-8 text-base font-semibold hover:border-slate-300 hover:bg-white"
              >
                <Link href="/contact-pro" className="flex items-center gap-2">
                  Prendre rendez-vous
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

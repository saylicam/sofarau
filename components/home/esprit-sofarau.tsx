"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function EspritSofarau() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Texture de grain subtile */}
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
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >
          {/* Colonne gauche - Titre */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                L&apos;Esprit Sofarau
              </div>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Votre Atelier Externalisé
            </h2>
          </motion.div>

          {/* Colonne droite - Contenu narratif */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-base leading-8 text-slate-700 md:text-lg">
              Chez SOFARAU, nous ne sommes pas simplement un fournisseur. Nous
              sommes votre atelier externalisé, votre partenaire industriel de
              confiance. Chaque commande est traitée avec la même attention,
              qu&apos;il s&apos;agisse d&apos;une fenêtre unique ou d&apos;un
              projet complexe.
            </p>
            <p className="text-base leading-8 text-slate-700 md:text-lg">
              L&apos;expertise de Wavre au service du Benelux. Nous comprenons
              vos contraintes, vos délais, vos exigences techniques. Notre
              mission ? Vous permettre de vous concentrer sur ce que vous faites
              le mieux : installer, conseiller, développer votre activité.
            </p>
            <p className="text-base leading-8 text-slate-700 md:text-lg">
              Nous fabriquons. Avec passion, avec expertise, avec cette rigueur
              qui fait que vous pouvez nous faire confiance les yeux fermés.
              Parce que derrière chaque fenêtre, il y a un projet. Derrière
              chaque projet, il y a des hommes. Et c&apos;est pour eux que nous
              travaillons, chaque jour.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-6 rounded-full border-indigo-200 bg-white/80 hover:border-indigo-400 hover:bg-indigo-50"
            >
              <Link href="/vision" className="flex items-center gap-2">
                Découvrir notre philosophie
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

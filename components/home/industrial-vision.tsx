"use client";

import { motion } from "framer-motion";
import { MapPin, Layers3, Handshake } from "lucide-react";

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

export function IndustrialVision() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Titre principal */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              L&apos;excellence manufacturière, de la conception à la livraison.
            </h2>
          </motion.div>

          {/* Layout deux colonnes */}
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {/* Colonne gauche : Texte fort */}
            <motion.div variants={fadeInUp} className="flex items-center">
              <p className="text-xl leading-8 text-slate-700 md:text-2xl md:leading-10">
                Nous ne nous contentons pas de fabriquer. Nous concevons les
                standards de demain pour les professionnels du bâtiment.
              </p>
            </motion.div>

            {/* Colonne droite : Bento Grid de 3 cartes */}
            <div className="space-y-4">
              {/* Carte 1 : Expertise Wavre */}
              <motion.div
                variants={fadeInUp}
                className="group rounded-xl border border-slate-200/60 bg-slate-50/30 p-6 transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <MapPin className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold tracking-tight">
                      Expertise Wavre
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">
                      Fabrication 100% locale.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Carte 2 : Standard Schüco */}
              <motion.div
                variants={fadeInUp}
                className="group rounded-xl border border-slate-200/60 bg-slate-50/30 p-6 transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Layers3 className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold tracking-tight">
                      Standard Schüco
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">
                      La technologie allemande au service de vos projets.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Carte 3 : Engagement Neutre */}
              <motion.div
                variants={fadeInUp}
                className="group rounded-xl border border-slate-200/60 bg-slate-50/30 p-6 transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <Handshake className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold tracking-tight">
                      Engagement Neutre
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">
                      Votre partenaire industriel, jamais votre concurrent.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

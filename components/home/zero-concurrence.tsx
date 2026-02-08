"use client";

import { motion } from "framer-motion";
import { Factory, Handshake, Shield } from "lucide-react";

export function ZeroConcurrence() {
  return (
    <section className="bg-gradient-to-b from-white to-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Neutralité Partenaire
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            0% Pose. 100% Usine.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Votre succès est notre seule priorité. Nous sommes un partenaire
            neutre et exclusif : nous fabriquons, vous installez et vous
            développez votre activité.
          </p>
        </motion.div>

        {/* Bento Grid pour les 3 piliers */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Factory,
              title: "100% Usine",
              description:
                "Fabrication industrielle à Wavre. Capacité de production optimisée, contrôles qualité stricts, exécution reproductible.",
              color: "text-primary",
              bg: "bg-primary/5",
            },
            {
              icon: Handshake,
              title: "0% Pose",
              description:
                "Aucune concurrence avec les poseurs et revendeurs. Nous fabriquons, vous installez. Votre développement, notre mission.",
              color: "text-slate-700",
              bg: "bg-slate-50",
            },
            {
              icon: Shield,
              title: "Partenaire Neutre",
              description:
                "Exécution industrielle fiable, données techniques claires, support professionnel. Votre croissance, notre engagement.",
              color: "text-primary",
              bg: "bg-primary/5",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group rounded-3xl border bg-white p-8 soft-shadow transition-all hover:soft-shadow-hover"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}>
                <item.icon className="h-7 w-7" aria-hidden="true" />
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
      </div>
    </section>
  );
}


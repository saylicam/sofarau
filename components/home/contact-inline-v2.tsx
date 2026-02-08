"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, IdCard, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

export function ContactInlineV2() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 to-white">
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={containerVariants}
          className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-2xl md:p-12 lg:p-16"
          style={{
            boxShadow:
              "0 1px 0 rgba(15,23,42,0.02), 0 20px 60px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.02)",
          }}
        >
          <div className="grid gap-12 md:grid-cols-12 lg:gap-16">
            {/* Header */}
            <motion.div variants={itemVariants} className="md:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Contact B2B
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Accès Réservé aux Professionnels
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                Pour filtrer les demandes, nous demandons le nom de société et
                le numéro de TVA. Pas de pose chez le client final. Aucun prix
                affiché en ligne.
              </p>
            </motion.div>

            {/* Formulaire Massif */}
            <motion.div variants={itemVariants} className="md:col-span-7">
              <form className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <label
                      className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                      htmlFor="companyInline"
                    >
                      Société
                    </label>
                    <div className="relative">
                      <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <Input
                        id="companyInline"
                        name="company"
                        className="h-14 rounded-xl border-2 border-slate-200 bg-white pl-12 text-base transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        autoComplete="organization"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <label
                      className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                      htmlFor="vatInline"
                    >
                      N° TVA
                    </label>
                    <div className="relative">
                      <IdCard className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <Input
                        id="vatInline"
                        name="vat"
                        className="h-14 rounded-xl border-2 border-slate-200 bg-white pl-12 text-base transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="BE0123456789"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-3">
                  <label
                    className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                    htmlFor="messageInline"
                  >
                    Besoin Technique
                  </label>
                  <Textarea
                    id="messageInline"
                    name="message"
                    className="min-h-[160px] rounded-xl border-2 border-slate-200 bg-white p-4 text-base transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    placeholder="Ex : Schüco Living 82 MD, dimensions, performance, vitrage, quincaillerie, délais…"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button
                    type="button"
                    className="h-14 rounded-full px-8 text-base font-semibold"
                  >
                    Envoyer la demande
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    Ou utilisez la page{" "}
                    <Link
                      className="font-medium text-primary underline-offset-4 hover:underline"
                      href="/contact-pro"
                    >
                      Contact pro
                    </Link>
                    .
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

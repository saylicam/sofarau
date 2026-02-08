"use client";

import { motion } from "framer-motion";
import { Building2, IdCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactInline() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-3xl border bg-white p-8 hairline soft-shadow md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Contact B2B
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                Accès réservé aux professionnels.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                Pour filtrer les demandes, nous demandons le nom de société et
                le numéro de TVA. Pas de pose chez le client final. Aucun prix
                affiché en ligne.
              </p>
            </div>

            <div className="md:col-span-7">
              <form className="grid gap-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="companyInline">
                      Société
                    </label>
                    <div className="relative">
                      <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="companyInline"
                        name="company"
                        className="pl-10"
                        autoComplete="organization"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="vatInline">
                      N° TVA
                    </label>
                    <div className="relative">
                      <IdCard className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="vatInline"
                        name="vat"
                        className="pl-10"
                        placeholder="BE0…"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="messageInline">
                    Besoin technique
                  </label>
                  <Textarea
                    id="messageInline"
                    name="message"
                    placeholder="Ex : Schüco Living 82 MD, dimensions, performance, vitrage, quincaillerie, délais…"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button type="button" className="rounded-full px-6">
                    Envoyer (à connecter)
                  </Button>
                  <div className="text-xs text-muted-foreground">
                    Ou utilisez la page{" "}
                    <a className="text-primary underline-offset-4 hover:underline" href="/contact-pro">
                      Contact pro
                    </a>
                    .
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


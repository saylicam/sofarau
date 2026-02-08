import { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Espace Pro & Sécurité — SOFARAU S.R.L",
  description:
    "Formulaire réservé aux professionnels (poseurs, revendeurs, architectes, entreprises) avec validation du numéro de TVA.",
};

export default function ContactProPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          Espace Pro & Sécurité
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Contact Professionnel
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground md:text-lg">
          Formulaire réservé aux professionnels. Pour une demande pertinente,
          précisez votre société, le contexte (chantier / projet) et les
          contraintes techniques.
        </p>
      </div>

      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}


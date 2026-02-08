"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, FileText, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Composant pour les compteurs animés
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white">
      {/* Container vidéo plein écran avec placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full bg-gradient-to-br from-slate-50 via-white to-slate-50">
          {/* Placeholder vidéo - Zone réservée pour intégration vidéo */}
          <div className="flex h-full w-full items-center justify-center">
            <div className="relative flex h-full w-full max-w-7xl items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl border-2 border-dashed border-primary/20 bg-muted/30 p-16 text-center">
                  <Play className="mx-auto h-16 w-16 text-primary/40" aria-hidden="true" />
                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    Zone réservée pour vidéo Hero
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground/70">
                    Intégration vidéo plein écran à venir
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay avec gradient subtil */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, hsl(var(--primary) / 0.08), transparent 50%), radial-gradient(circle at 80% 30%, hsl(var(--primary) / 0.06), transparent 50%)",
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
              Light Mode Premium
            </Badge>
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
              B2B uniquement
            </Badge>
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
              Partenaire neutre
            </Badge>
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            L&rsquo;ING&Eacute;NIERIE DU REGARD
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
            Manufacture industrielle B2B. Partenaire exclusif Sch&uuml;co pour
            les professionnels exigeants.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="gap-2 rounded-full px-8 py-6 text-base">
              <Link href="/contact-pro">
                Acc&egrave;s Portail Pro
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="gap-2 rounded-full bg-white/90 backdrop-blur-sm px-8 py-6 text-base"
            >
              <Link href="/technique">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Performances & fiches
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Compteurs de stats animés */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            { value: 100, suffix: "%", label: "Fabrication usine" },
            { value: 0, suffix: "%", label: "Pose client" },
            { value: 15, suffix: "+", label: "Années d'expertise" },
            { value: 500, suffix: "+", label: "Projets livrés" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white/90 backdrop-blur-sm p-6 soft-shadow"
            >
              <div className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Factory, FileText, Mail, Layers3, Wrench, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/solutions", label: "Solutions", icon: Layers3 },
    { href: "/technique", label: "Technique", icon: FileText },
    { href: "/atelier", label: "Atelier", icon: Wrench },
    { href: "/vision", label: "Vision", icon: Eye },
    { href: "/contact-pro", label: "Contact pro", icon: Mail, primary: true },
  ];

  return (
    <>
      {/* Bouton Burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-white/80 backdrop-blur-sm transition-colors hover:bg-white"
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <div className="relative h-5 w-5">
          <motion.span
            className="absolute left-0 top-0 h-0.5 w-5 bg-foreground"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute left-0 top-2 h-0.5 w-5 bg-foreground"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute left-0 top-4 h-0.5 w-5 bg-foreground"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </button>

      {/* Overlay et Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b p-6">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-muted">
                      <Factory className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold tracking-tight">
                        SOFARAU S.R.L
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Atelier / fabricant B2B
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
                    aria-label="Fermer le menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-2">
                    {menuItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Button
                            asChild
                            variant={item.primary ? "default" : "ghost"}
                            className={`w-full justify-start gap-3 rounded-xl ${
                              item.primary ? "" : "h-auto py-4"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Link href={item.href}>
                              <Icon className="h-5 w-5" aria-hidden="true" />
                              {item.label}
                            </Link>
                          </Button>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="border-t p-6 text-xs text-muted-foreground">
                  <p>© {new Date().getFullYear()} SOFARAU S.R.L</p>
                  <p className="mt-1">Atelier / fabricant B2B</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

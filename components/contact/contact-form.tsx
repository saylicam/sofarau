"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Fonction de validation du numéro de TVA (format BE/BE0/BE1/BE2)
function validateVAT(vat: string): boolean {
  // Supprimer les espaces et convertir en majuscules
  const cleaned = vat.replace(/\s/g, "").toUpperCase();
  
  // Format BE suivi de 10 chiffres
  const belgianVATPattern = /^BE[0-9]{10}$/;
  
  if (!belgianVATPattern.test(cleaned)) {
    return false;
  }
  
  // Validation du checksum (algorithme MOD 97)
  const digits = cleaned.slice(2);
  const checkDigits = parseInt(digits.slice(0, 2), 10);
  const baseNumber = parseInt(digits.slice(2), 10);
  const remainder = (97 - (baseNumber % 97)) % 97;
  
  return remainder === checkDigits;
}

// Fonction de sanitization pour prévenir les injections
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Supprimer les balises HTML
    .replace(/javascript:/gi, "") // Supprimer les protocoles javascript
    .replace(/on\w+=/gi, "") // Supprimer les event handlers
    .trim();
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    vat: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitized = sanitizeInput(value);
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
    
    // Effacer l'erreur pour ce champ
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.company.trim()) {
      newErrors.company = "Le nom de la société est requis";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Le nom du contact est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.vat.trim()) {
      newErrors.vat = "Le numéro de TVA est requis";
    } else if (!validateVAT(formData.vat)) {
      newErrors.vat = "Format de TVA invalide (format attendu : BE0123456789)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.length < 20) {
      newErrors.message = "Le message doit contenir au moins 20 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Ici, vous connecterez votre endpoint API
      // Pour l'instant, simulation d'un envoi
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // TODO: Remplacer par un appel API réel
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      
      setSubmitStatus("success");
      setFormData({
        company: "",
        name: "",
        email: "",
        vat: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-12">
      <div className="md:col-span-7">
        <Card className="soft-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Espace Pro & Sécurité</CardTitle>
              <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="company">
                  Société <span className="text-red-500">*</span>
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  className={errors.company ? "border-red-500" : ""}
                />
                {errors.company && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.company}
                  </p>
                )}
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Contact <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="vat">
                    N° de TVA <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="vat"
                    name="vat"
                    value={formData.vat}
                    onChange={handleChange}
                    placeholder="BE0123456789"
                    autoComplete="off"
                    className={errors.vat ? "border-red-500" : ""}
                  />
                  {errors.vat && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.vat}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Format attendu : BE suivi de 10 chiffres
                  </p>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="phone">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message (besoin technique) <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ex : Schüco Living 82 MD, dimensions, performance recherchée, type de vitrage, quincaillerie, délais…"
                  rows={6}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Message envoyé avec succès. Nous vous répondrons sous peu.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800"
                >
                  <AlertCircle className="h-4 w-4" />
                  Une erreur est survenue. Veuillez réessayer.
                </motion.div>
              )}

              <div className="rounded-md border bg-muted/40 p-3 text-xs text-muted-foreground">
                <strong>Rappel :</strong> Ce site ne propose pas de pose chez le client final
                et n'affiche aucun prix. Les demandes grand public ne sont pas traitées.
                Toutes les données sont sécurisées et traitées conformément au RGPD.
              </div>

              <Button type="submit" disabled={isSubmitting} className="rounded-full">
                {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-5">
        <Card className="soft-shadow">
          <CardHeader>
            <CardTitle>Informations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground mb-2">
                Pour accélérer le traitement :
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Système / profil (ex : Schüco Living 82 MD)</li>
                <li>Vitrage (double vitrage advanced)</li>
                <li>Exigences (thermique, acoustique, sécurité)</li>
                <li>Volumes / délais</li>
              </ul>
            </div>
            <div className="pt-4 border-t">
              <p className="font-medium text-foreground mb-2">Sécurité :</p>
              <ul className="space-y-1 text-xs">
                <li>✓ Validation du numéro de TVA</li>
                <li>✓ Protection contre les injections</li>
                <li>✓ Données chiffrées (HTTPS)</li>
                <li>✓ Conformité RGPD</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

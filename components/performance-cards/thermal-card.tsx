"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function ThermalCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const curveProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-indigo-200/40 bg-gradient-to-br from-white/80 via-blue-50/30 to-white/80 p-8 backdrop-blur-xl md:p-10"
      style={{
        boxShadow:
          "0 1px 0 rgba(15,23,42,0.02), 0 20px 60px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-md" />
      
      <div className="relative">
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Performance Thermique
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight">
            Isolation Avancée
          </h3>
        </div>

        {/* Graphique de courbe thermique animé */}
        <div className="mb-6 h-48 w-full">
          <svg viewBox="0 0 200 120" className="h-full w-full">
            <defs>
              <linearGradient id="thermalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            
            {/* Axes */}
            <line
              x1="20"
              y1="100"
              x2="180"
              y2="100"
              stroke="rgb(99, 102, 241)"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="20"
              y1="20"
              x2="20"
              y2="100"
              stroke="rgb(99, 102, 241)"
              strokeWidth="1"
              opacity="0.3"
            />
            
            {/* Courbe thermique animée */}
            <motion.path
              d="M 20 100 Q 60 60, 100 40 T 180 30"
              fill="none"
              stroke="rgb(99, 102, 241)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Zone sous la courbe */}
            <motion.path
              d="M 20 100 Q 60 60, 100 40 T 180 30 L 180 100 Z"
              fill="url(#thermalGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            />
            
            {/* Points de mesure */}
            {[
              { x: 60, y: 60, label: "Standard" },
              { x: 100, y: 40, label: "Optimisé" },
              { x: 140, y: 35, label: "Passif" },
            ].map((point, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.5 + i * 0.2 }}
              >
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="3"
                  fill="rgb(99, 102, 241)"
                  stroke="white"
                  strokeWidth="1"
                />
                <text
                  x={point.x}
                  y={point.y - 8}
                  textAnchor="middle"
                  fill="rgb(99, 102, 241)"
                  fontSize="8"
                  fontFamily="var(--font-mono)"
                  fontWeight="600"
                >
                  {point.label}
                </text>
              </motion.g>
            ))}
          </svg>
        </div>

        {/* Texte technique avec formule */}
        <div className="space-y-2">
          <p className="text-sm leading-6 text-slate-700">
            <span className="font-semibold">Thermique avancée :</span>{" "}
            <span className="font-mono text-indigo-600">U<sub>f</sub></span>{" "}
            jusqu&apos;à{" "}
            <span className="font-mono font-bold text-indigo-600">
              1.0 W/(m²K)
            </span>
            .
          </p>
          <p className="text-xs leading-5 text-slate-600">
            Tolérances millimétrées, process reproductible. Certification
            européenne pour bâtiments passifs.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

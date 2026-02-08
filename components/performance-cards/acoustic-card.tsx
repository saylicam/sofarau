"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function AcousticCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const waveProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-indigo-200/40 bg-gradient-to-br from-white/80 via-purple-50/30 to-white/80 p-8 backdrop-blur-xl md:p-10"
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
            Isolation Acoustique
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight">
            Réduction Sonore
          </h3>
        </div>

        {/* Schéma d'atténuation sonore */}
        <div className="mb-6 h-48 w-full">
          <svg viewBox="0 0 200 120" className="h-full w-full">
            {/* Vitrage (barrière) */}
            <rect
              x="90"
              y="20"
              width="20"
              height="80"
              fill="rgba(99, 102, 241, 0.3)"
              stroke="rgb(99, 102, 241)"
              strokeWidth="1.5"
            />
            <text
              x="100"
              y="65"
              textAnchor="middle"
              fill="rgb(99, 102, 241)"
              fontSize="8"
              fontFamily="var(--font-mono)"
              fontWeight="600"
            >
              Vitrage
            </text>
            
            {/* Onde avant (forte) */}
            <motion.path
              d="M 20 60 Q 40 40, 60 60 T 85 60"
              fill="none"
              stroke="rgb(239, 68, 68)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <text
              x="50"
              y="35"
              textAnchor="middle"
              fill="rgb(239, 68, 68)"
              fontSize="7"
              fontFamily="var(--font-mono)"
              fontWeight="600"
            >
              70 dB
            </text>
            
            {/* Onde après (atténuée) */}
            <motion.path
              d="M 110 60 Q 130 75, 150 60 T 180 60"
              fill="none"
              stroke="rgb(99, 102, 241)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="2,1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            <text
              x="150"
              y="50"
              textAnchor="middle"
              fill="rgb(99, 102, 241)"
              fontSize="7"
              fontFamily="var(--font-mono)"
              fontWeight="600"
            >
              23 dB
            </text>
            
            {/* Flèche d'atténuation */}
            <motion.line
              x1="100"
              y1="40"
              x2="100"
              y2="80"
              stroke="rgb(99, 102, 241)"
              strokeWidth="1"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="5"
                refY="5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 5, 0 10"
                  fill="rgb(99, 102, 241)"
                />
              </marker>
            </defs>
            
            {/* Valeur d'atténuation */}
            <motion.text
              x="100"
              y="95"
              textAnchor="middle"
              fill="rgb(99, 102, 241)"
              fontSize="10"
              fontFamily="var(--font-mono)"
              fontWeight="700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              -47 dB
            </motion.text>
          </svg>
        </div>

        {/* Texte technique */}
        <div className="space-y-2">
          <p className="text-sm leading-6 text-slate-700">
            <span className="font-semibold">Réduction sonore</span> jusqu&apos;à{" "}
            <span className="font-mono font-bold text-indigo-600">47 dB</span>.
            Configuration sur mesure selon contraintes acoustiques.
          </p>
          <p className="text-xs leading-5 text-slate-600">
            Vitrage feuilleté, chambres d&apos;air optimisées. Process
            reproductible, certification européenne.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

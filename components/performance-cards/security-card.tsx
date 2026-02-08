"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export function SecurityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-indigo-200/40 bg-gradient-to-br from-white/80 via-indigo-50/30 to-white/80 p-8 backdrop-blur-xl md:p-10"
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
            Sécurité
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight">
            Protection Renforcée
          </h3>
        </div>

        {/* Schéma d'ancrage Roto NX */}
        <div className="mb-6 h-48 w-full">
          <svg viewBox="0 0 200 120" className="h-full w-full">
            {/* Fenêtre avec quincaillerie */}
            <motion.rect
              x="30"
              y="30"
              width="140"
              height="60"
              fill="none"
              stroke="rgb(99, 102, 241)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Points d'ancrage */}
            {[
              { x: 50, y: 50, label: "RC2" },
              { x: 100, y: 50, label: "RC3" },
              { x: 150, y: 50, label: "RC2" },
            ].map((anchor, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.2 }}
              >
                {/* Point d'ancrage */}
                <circle
                  cx={anchor.x}
                  cy={anchor.y}
                  r="4"
                  fill="rgb(99, 102, 241)"
                  stroke="white"
                  strokeWidth="1"
                />
                {/* Lignes de renfort */}
                <line
                  x1={anchor.x - 8}
                  y1={anchor.y}
                  x2={anchor.x + 8}
                  y2={anchor.y}
                  stroke="rgb(99, 102, 241)"
                  strokeWidth="1"
                  strokeDasharray="2,1"
                />
                <line
                  x1={anchor.x}
                  y1={anchor.y - 8}
                  x2={anchor.x}
                  y2={anchor.y + 8}
                  stroke="rgb(99, 102, 241)"
                  strokeWidth="1"
                  strokeDasharray="2,1"
                />
                {/* Label */}
                <text
                  x={anchor.x}
                  y={anchor.y - 12}
                  textAnchor="middle"
                  fill="rgb(99, 102, 241)"
                  fontSize="9"
                  fontFamily="var(--font-mono)"
                  fontWeight="700"
                >
                  {anchor.label}
                </text>
              </motion.g>
            ))}
            
            {/* Quincaillerie centrale */}
            <motion.rect
              x="90"
              y="70"
              width="20"
              height="15"
              fill="rgba(99, 102, 241, 0.2)"
              stroke="rgb(99, 102, 241)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
            <text
              x="100"
              y="80"
              textAnchor="middle"
              fill="rgb(99, 102, 241)"
              fontSize="7"
              fontFamily="var(--font-mono)"
              fontWeight="600"
            >
              Roto NX
            </text>
          </svg>
        </div>

        {/* Texte technique */}
        <div className="space-y-2">
          <p className="text-sm leading-6 text-slate-700">
            <span className="font-semibold">Protection RC2/RC3</span> intégrée
            de série. Quincaillerie Roto NX certifiée,{" "}
            <span className="font-mono text-indigo-600">flux tendu</span> pour
            livraisons rapides.
          </p>
          <p className="text-xs leading-5 text-slate-600">
            Renforts acier galvanisé, ancrages renforcés. Certification
            européenne pour sécurité renforcée.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

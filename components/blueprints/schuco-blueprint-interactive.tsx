"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
  technical: string;
}

const hotspots: Hotspot[] = [
  {
    id: "joint-md",
    x: 50,
    y: 50,
    label: "Joint Central (MD)",
    description: "Étanchéité maximale et isolation acoustique renforcée",
    technical: "Joint EPDM triple étanchéité, résistance > 30 ans",
  },
  {
    id: "multi-chambres",
    x: 50,
    y: 35,
    label: "Parois Multi-Chambres",
    description: "Optimisation thermique pour bâtiments passifs",
    technical: "5 chambres d'isolation, coefficient U optimisé",
  },
  {
    id: "renfort-acier",
    x: 25,
    y: 50,
    label: "Renforts Acier",
    description: "Stabilité structurelle pour grandes dimensions",
    technical: "Acier galvanisé 1.5mm, résistance aux déformations",
  },
  {
    id: "vitrage",
    x: 50,
    y: 70,
    label: "Double Vitrage Advanced",
    description: "Configuration sur mesure selon exigences",
    technical: "Gaz argon, traitement low-e, épaisseur variable",
  },
];

export function SchucoBlueprintInteractive() {
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ["start end", "end start"],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 1]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-indigo-200/40 bg-gradient-to-br from-white via-indigo-50/20 to-white p-8 backdrop-blur-sm md:p-12">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-md" />
      
      <div className="relative">
        <svg
          ref={svgRef}
          viewBox="0 0 100 100"
          className="w-full h-auto"
          style={{ maxHeight: "700px", minHeight: "500px" }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Grille technique fine */}
            <pattern
              id="technical-grid"
              width="2"
              height="2"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 2 0 L 0 0 0 2"
                fill="none"
                stroke="rgba(99, 102, 241, 0.15)"
                strokeWidth="0.2"
              />
            </pattern>
            
            {/* Gradient pour les lignes */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="1" />
            </linearGradient>
            
            {/* Filtre de blur pour glassmorphism */}
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>

          {/* Fond avec grille */}
          <rect width="100" height="100" fill="url(#technical-grid)" />

          {/* Schéma de coupe technique - Lignes principales animées */}
          <motion.g
            style={{
              opacity: pathProgress,
            }}
          >
            {/* Contour extérieur */}
            <motion.rect
              x="15"
              y="20"
              width="70"
              height="60"
              fill="none"
              stroke="rgb(99, 102, 241)"
              strokeWidth="0.4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            {/* Chambres d'isolation détaillées */}
            {[25, 35, 45, 55, 65].map((y, i) => (
              <motion.rect
                key={i}
                x="20"
                y={y}
                width="60"
                height="5"
                fill="rgba(99, 102, 241, 0.1)"
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
                strokeDasharray="0.5,0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeInOut" }}
              />
            ))}

            {/* Renforts acier */}
            <motion.rect
              x="20"
              y="45"
              width="8"
              height="10"
              fill="rgba(99, 102, 241, 0.2)"
              stroke="rgb(99, 102, 241)"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
            />
            <motion.rect
              x="72"
              y="45"
              width="8"
              height="10"
              fill="rgba(99, 102, 241, 0.2)"
              stroke="rgb(99, 102, 241)"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
            />

            {/* Joint central MD */}
            <motion.line
              x1="50"
              y1="20"
              x2="50"
              y2="80"
              stroke="rgb(99, 102, 241)"
              strokeWidth="0.5"
              strokeDasharray="1,1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            />

            {/* Lignes de cotation détaillées */}
            <motion.g>
              {/* Cotation horizontale 82mm */}
              <motion.line
                x1="15"
                y1="12"
                x2="85"
                y2="12"
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
              />
              <motion.line
                x1="15"
                y1="9"
                x2="15"
                y2="15"
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.8 }}
              />
              <motion.line
                x1="85"
                y1="9"
                x2="85"
                y2="15"
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.8 }}
              />
              <motion.text
                x="50"
                y="10"
                textAnchor="middle"
                fill="rgb(99, 102, 241)"
                fontSize="2.5"
                fontFamily="var(--font-mono)"
                fontWeight="600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                82mm
              </motion.text>
            </motion.g>
          </motion.g>

          {/* Hotspots interactifs avec animation pulsante */}
          {hotspots.map((hotspot) => (
            <g key={hotspot.id}>
              {/* Cercle pulsant */}
              <motion.circle
                cx={hotspot.x}
                cy={hotspot.y}
                r="3"
                fill="rgb(99, 102, 241)"
                stroke="white"
                strokeWidth="0.5"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredHotspot(hotspot.id)}
                onMouseLeave={() => setHoveredHotspot(null)}
                animate={{
                  scale: hoveredHotspot === hotspot.id ? [1, 1.3, 1] : 1,
                  opacity: hoveredHotspot === hotspot.id ? [0.8, 1, 0.8] : 0.8,
                }}
                transition={{
                  duration: 1.5,
                  repeat: hoveredHotspot === hotspot.id ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />
              
              {/* Ligne de référence */}
              <line
                x1={hotspot.x}
                y1={hotspot.y}
                x2={hotspot.x + 12}
                y2={hotspot.y - 12}
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
                strokeDasharray="0.5,0.5"
                opacity={hoveredHotspot === hotspot.id ? 1 : 0.4}
              />
              
              {/* Info-bulle futuriste */}
              {hoveredHotspot === hotspot.id && (
                <motion.g
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Fond glassmorphism */}
                  <rect
                    x={hotspot.x + 14}
                    y={hotspot.y - 20}
                    width="32"
                    height="18"
                    fill="rgba(255, 255, 255, 0.9)"
                    stroke="rgb(99, 102, 241)"
                    strokeWidth="0.3"
                    rx="2"
                    filter="url(#blur)"
                  />
                  
                  {/* Titre */}
                  <text
                    x={hotspot.x + 30}
                    y={hotspot.y - 12}
                    textAnchor="middle"
                    fill="rgb(99, 102, 241)"
                    fontSize="2"
                    fontFamily="var(--font-mono)"
                    fontWeight="700"
                  >
                    {hotspot.label}
                  </text>
                  
                  {/* Description */}
                  <text
                    x={hotspot.x + 30}
                    y={hotspot.y - 6}
                    textAnchor="middle"
                    fill="rgb(71, 85, 105)"
                    fontSize="1.3"
                    fontFamily="var(--font-sans)"
                  >
                    {hotspot.description}
                  </text>
                  
                  {/* Détail technique */}
                  <text
                    x={hotspot.x + 30}
                    y={hotspot.y + 1}
                    textAnchor="middle"
                    fill="rgb(100, 116, 139)"
                    fontSize="1.1"
                    fontFamily="var(--font-mono)"
                    fontStyle="italic"
                  >
                    {hotspot.technical}
                  </text>
                </motion.g>
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

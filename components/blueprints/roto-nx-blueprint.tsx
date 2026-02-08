"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function RotoNXBlueprint() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ["start end", "end start"],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 1]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-indigo-200/40 bg-gradient-to-br from-white via-indigo-50/20 to-white p-8 backdrop-blur-sm md:p-12">
      <div className="absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-md" />
      
      <div className="relative">
        <svg
          ref={svgRef}
          viewBox="0 0 100 100"
          className="w-full h-auto"
          style={{ maxHeight: "600px", minHeight: "400px" }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <pattern
              id="roto-grid"
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
          </defs>

          {/* Fond avec grille */}
          <rect width="100" height="100" fill="url(#roto-grid)" />

          <motion.g
            style={{
              opacity: pathProgress,
            }}
          >
            {/* Schéma éclaté du point de verrouillage Roto NX */}
            
            {/* Corps principal */}
            <motion.rect
              x="35"
              y="40"
              width="30"
              height="20"
              fill="rgba(99, 102, 241, 0.15)"
              stroke="rgb(99, 102, 241)"
              strokeWidth="0.4"
              rx="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Pêne principal (éclaté vers le haut) */}
            <motion.rect
              x="47"
              y="25"
              width="6"
              height="18"
              fill="rgba(34, 197, 94, 0.2)"
              stroke="rgb(34, 197, 94)"
              strokeWidth="0.4"
              rx="0.5"
              initial={{ pathLength: 0, y: 40 }}
              whileInView={{ pathLength: 1, y: 25 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />

            {/* Pêne secondaire (éclaté vers la droite) */}
            <motion.rect
              x="65"
              y="47"
              width="12"
              height="6"
              fill="rgba(168, 85, 247, 0.2)"
              stroke="rgb(168, 85, 247)"
              strokeWidth="0.4"
              rx="0.5"
              initial={{ pathLength: 0, x: 50 }}
              whileInView={{ pathLength: 1, x: 65 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            />

            {/* Goupille de sécurité (éclaté vers le bas) */}
            <motion.circle
              cx="50"
              cy="68"
              r="2.5"
              fill="rgba(239, 68, 68, 0.2)"
              stroke="rgb(239, 68, 68)"
              strokeWidth="0.4"
              initial={{ pathLength: 0, cy: 60 }}
              whileInView={{ pathLength: 1, cy: 68 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
            />

            {/* Lignes de référence (éclaté) */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              {/* Ligne vers pêne principal */}
              <line
                x1="50"
                y1="40"
                x2="50"
                y2="25"
                stroke="rgba(99, 102, 241, 0.3)"
                strokeWidth="0.2"
                strokeDasharray="0.5,0.5"
              />
              {/* Ligne vers pêne secondaire */}
              <line
                x1="50"
                y1="50"
                x2="65"
                y2="50"
                stroke="rgba(99, 102, 241, 0.3)"
                strokeWidth="0.2"
                strokeDasharray="0.5,0.5"
              />
              {/* Ligne vers goupille */}
              <line
                x1="50"
                y1="60"
                x2="50"
                y2="68"
                stroke="rgba(99, 102, 241, 0.3)"
                strokeWidth="0.2"
                strokeDasharray="0.5,0.5"
              />
            </motion.g>

            {/* Labels */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
            >
              <text
                x="50"
                y="20"
                textAnchor="middle"
                fill="rgb(34, 197, 94)"
                fontSize="1.8"
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                Pêne Principal
              </text>
              <text
                x="75"
                y="52"
                textAnchor="start"
                fill="rgb(168, 85, 247)"
                fontSize="1.8"
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                Pêne Secondaire
              </text>
              <text
                x="50"
                y="75"
                textAnchor="middle"
                fill="rgb(239, 68, 68)"
                fontSize="1.8"
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                Goupille Sécurité
              </text>
            </motion.g>

            {/* Légende */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
            >
              <rect
                x="10"
                y="10"
                width="30"
                height="18"
                fill="rgba(255, 255, 255, 0.9)"
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
                rx="1"
              />
              <text
                x="25"
                y="18"
                textAnchor="middle"
                fill="rgb(99, 102, 241)"
                fontSize="2.5"
                fontFamily="var(--font-mono)"
                fontWeight="700"
              >
                Roto NX
              </text>
              <text
                x="25"
                y="23"
                textAnchor="middle"
                fill="rgb(71, 85, 105)"
                fontSize="1.8"
                fontFamily="var(--font-sans)"
              >
                Schéma éclaté
              </text>
              <text
                x="25"
                y="27"
                textAnchor="middle"
                fill="rgb(100, 116, 139)"
                fontSize="1.5"
                fontFamily="var(--font-mono)"
              >
                Haute Sécurité
              </text>
            </motion.g>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}

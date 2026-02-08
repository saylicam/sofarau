"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AcousticGlassBlueprint() {
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
              id="acoustic-grid"
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
          <rect width="100" height="100" fill="url(#acoustic-grid)" />

          <motion.g
            style={{
              opacity: pathProgress,
            }}
          >
            {/* Vue en coupe du vitrage acoustique */}
            
            {/* Verre extérieur (épais) */}
            <motion.rect
              x="20"
              y="30"
              width="60"
              height="8"
              fill="rgba(59, 130, 246, 0.2)"
              stroke="rgb(59, 130, 246)"
              strokeWidth="0.4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Espacement (argon) */}
            <motion.rect
              x="20"
              y="38"
              width="60"
              height="4"
              fill="rgba(168, 85, 247, 0.15)"
              stroke="rgb(168, 85, 247)"
              strokeWidth="0.3"
              strokeDasharray="0.5,0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />

            {/* Verre intérieur (feuilleté) */}
            <motion.rect
              x="20"
              y="42"
              width="60"
              height="6"
              fill="rgba(34, 197, 94, 0.2)"
              stroke="rgb(34, 197, 94)"
              strokeWidth="0.4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            />

            {/* Film PVB (couche intermédiaire) */}
            <motion.line
              x1="20"
              y1="45"
              x2="80"
              y2="45"
              stroke="rgba(34, 197, 94, 0.5)"
              strokeWidth="0.2"
              strokeDasharray="0.3,0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
            />

            {/* Cotation épaisseurs */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              {/* Cotation verre extérieur */}
              <line
                x1="15"
                y1="30"
                x2="15"
                y2="38"
                stroke="rgb(59, 130, 246)"
                strokeWidth="0.3"
                strokeDasharray="0.5,0.5"
              />
              <text
                x="12"
                y="34"
                textAnchor="end"
                fill="rgb(59, 130, 246)"
                fontSize="1.8"
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                8mm
              </text>

              {/* Cotation espacement */}
              <line
                x1="15"
                y1="38"
                x2="15"
                y2="42"
                stroke="rgb(168, 85, 247)"
                strokeWidth="0.3"
                strokeDasharray="0.5,0.5"
              />
              <text
                x="12"
                y="40"
                textAnchor="end"
                fill="rgb(168, 85, 247)"
                fontSize="1.8"
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                Argon
              </text>

              {/* Cotation verre intérieur */}
              <line
                x1="15"
                y1="42"
                x2="15"
                y2="48"
                stroke="rgb(34, 197, 94)"
                strokeWidth="0.3"
                strokeDasharray="0.5,0.5"
              />
              <text
                x="12"
                y="45"
                textAnchor="end"
                fill="rgb(34, 197, 94)"
                fontSize="1.8"
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                6mm
              </text>
            </motion.g>

            {/* Légende */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
            >
              <rect
                x="15"
                y="60"
                width="35"
                height="25"
                fill="rgba(255, 255, 255, 0.9)"
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
                rx="1"
              />
              <text
                x="32.5"
                y="68"
                textAnchor="middle"
                fill="rgb(99, 102, 241)"
                fontSize="2.5"
                fontFamily="var(--font-mono)"
                fontWeight="700"
              >
                Vitrage Acoustique
              </text>
              <text
                x="32.5"
                y="72"
                textAnchor="middle"
                fill="rgb(71, 85, 105)"
                fontSize="1.8"
                fontFamily="var(--font-sans)"
              >
                Coupe technique
              </text>
              <text
                x="32.5"
                y="76"
                textAnchor="middle"
                fill="rgb(100, 116, 139)"
                fontSize="1.5"
                fontFamily="var(--font-mono)"
              >
                Rw: 42-48 dB
              </text>
            </motion.g>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PMRThresholdBlueprint() {
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
              id="pmr-grid"
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
            <linearGradient id="pmrGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Fond avec grille */}
          <rect width="100" height="100" fill="url(#pmr-grid)" />

          <motion.g
            style={{
              opacity: pathProgress,
            }}
          >
            {/* Sol (ligne horizontale) */}
            <motion.line
              x1="10"
              y1="80"
              x2="90"
              y2="80"
              stroke="rgb(99, 102, 241)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Seuil PMR - Vue de profil */}
            <motion.rect
              x="35"
              y="70"
              width="30"
              height="10"
              fill="rgba(99, 102, 241, 0.15)"
              stroke="rgb(99, 102, 241)"
              strokeWidth="0.4"
              rx="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />

            {/* Joint d'étanchéité au sol */}
            <motion.rect
              x="38"
              y="78"
              width="24"
              height="2"
              fill="rgba(34, 197, 94, 0.3)"
              stroke="rgb(34, 197, 94)"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            />

            {/* Flèche d'étanchéité */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <line
                x1="50"
                y1="82"
                x2="50"
                y2="85"
                stroke="rgb(34, 197, 94)"
                strokeWidth="0.3"
                markerEnd="url(#arrowGreen)"
              />
              <text
                x="52"
                y="87"
                fill="rgb(34, 197, 94)"
                fontSize="2"
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                Etanchéité E900
              </text>
            </motion.g>

            {/* Cotation hauteur seuil */}
            <motion.g>
              <line
                x1="32"
                y1="70"
                x2="32"
                y2="80"
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
                strokeDasharray="0.5,0.5"
              />
              <line
                x1="30"
                y1="70"
                x2="34"
                y2="70"
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
              />
              <line
                x1="30"
                y1="80"
                x2="34"
                y2="80"
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
              />
              <text
                x="28"
                y="75"
                textAnchor="end"
                fill="rgb(99, 102, 241)"
                fontSize="2"
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                ≤ 2cm
              </text>
            </motion.g>

            {/* Légende */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <rect
                x="15"
                y="15"
                width="25"
                height="12"
                fill="rgba(255, 255, 255, 0.9)"
                stroke="rgb(99, 102, 241)"
                strokeWidth="0.3"
                rx="1"
              />
              <text
                x="27.5"
                y="22"
                textAnchor="middle"
                fill="rgb(99, 102, 241)"
                fontSize="2.5"
                fontFamily="var(--font-mono)"
                fontWeight="700"
              >
                Seuil PMR
              </text>
              <text
                x="27.5"
                y="26"
                textAnchor="middle"
                fill="rgb(71, 85, 105)"
                fontSize="1.8"
                fontFamily="var(--font-sans)"
              >
                Etanchéité au sol
              </text>
            </motion.g>
          </motion.g>

          <defs>
            <marker
              id="arrowGreen"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 6 3, 0 6"
                fill="rgb(34, 197, 94)"
              />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}

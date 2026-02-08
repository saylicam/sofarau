"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SlidingLiftBlueprint() {
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
              id="sliding-grid"
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
            <linearGradient id="slidingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Fond avec grille */}
          <rect width="100" height="100" fill="url(#sliding-grid)" />

          <motion.g
            style={{
              opacity: pathProgress,
            }}
          >
            {/* Rail supérieur */}
            <motion.rect
              x="15"
              y="25"
              width="70"
              height="4"
              fill="rgba(99, 102, 241, 0.2)"
              stroke="rgb(99, 102, 241)"
              strokeWidth="0.4"
              rx="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Rail inférieur */}
            <motion.rect
              x="15"
              y="70"
              width="70"
              height="4"
              fill="rgba(99, 102, 241, 0.2)"
              stroke="rgb(99, 102, 241)"
              strokeWidth="0.4"
              rx="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />

            {/* Panneau fixe (gauche) */}
            <motion.rect
              x="20"
              y="30"
              width="25"
              height="40"
              fill="rgba(99, 102, 241, 0.1)"
              stroke="rgb(99, 102, 241)"
              strokeWidth="0.4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Panneau coulissant (droite) */}
            <motion.rect
              x="55"
              y="30"
              width="25"
              height="40"
              fill="rgba(168, 85, 247, 0.15)"
              stroke="rgb(168, 85, 247)"
              strokeWidth="0.4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            />

            {/* Mécanisme de levage (roues) */}
            {[30, 50, 70].map((y, i) => (
              <motion.circle
                key={i}
                cx={67.5}
                cy={y}
                r="2"
                fill="rgba(168, 85, 247, 0.3)"
                stroke="rgb(168, 85, 247)"
                strokeWidth="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: "easeInOut" }}
              />
            ))}

            {/* Flèche de mouvement */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <path
                d="M 55 50 L 50 50 L 50 45 L 45 50 L 50 55 Z"
                fill="rgb(168, 85, 247)"
                opacity="0.7"
              />
              <text
                x="45"
                y="48"
                textAnchor="end"
                fill="rgb(168, 85, 247)"
                fontSize="2"
                fontFamily="var(--font-mono)"
                fontWeight="600"
              >
                Cinématique
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
                y="5"
                width="30"
                height="12"
                fill="rgba(255, 255, 255, 0.9)"
                stroke="rgb(168, 85, 247)"
                strokeWidth="0.3"
                rx="1"
              />
              <text
                x="30"
                y="12"
                textAnchor="middle"
                fill="rgb(168, 85, 247)"
                fontSize="2.5"
                fontFamily="var(--font-mono)"
                fontWeight="700"
              >
                Coulissant Levant
              </text>
              <text
                x="30"
                y="16"
                textAnchor="middle"
                fill="rgb(71, 85, 105)"
                fontSize="1.8"
                fontFamily="var(--font-sans)"
              >
                Cinématique robuste
              </text>
            </motion.g>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}

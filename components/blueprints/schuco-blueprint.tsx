"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface BlueprintPoint {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
}

const blueprintPoints: BlueprintPoint[] = [
  {
    id: "epdm",
    x: 15,
    y: 30,
    label: "Joint EPDM",
    description: "Étanchéité optimale, résistance aux intempéries, durée de vie > 30 ans",
  },
  {
    id: "renfort",
    x: 50,
    y: 25,
    label: "Renfort Acier",
    description: "Renforcement structurel en acier galvanisé pour stabilité dimensionnelle",
  },
  {
    id: "isolation",
    x: 50,
    y: 50,
    label: "Isolation 82mm",
    description: "Chambre d'isolation multi-compartiments, coefficient U optimisé",
  },
  {
    id: "vitrage",
    x: 50,
    y: 75,
    label: "Double Vitrage",
    description: "Configuration advanced avec gaz argon, traitement low-e",
  },
];

export function SchucoBlueprint() {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ["start end", "end start"],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div className="relative w-full overflow-x-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        className="w-full h-auto min-w-[600px] md:min-w-0"
        style={{ maxHeight: "600px" }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Fond avec grille technique */}
        <defs>
          <pattern
            id="grid"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 5 0 L 0 0 0 5"
              fill="none"
              stroke="rgba(30, 64, 175, 0.1)"
              strokeWidth="0.3"
            />
          </pattern>
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0.5"
            />
          </filter>
        </defs>

        {/* Fond avec grille */}
        <rect width="100" height="100" fill="url(#grid)" opacity="0.3" />

        {/* Schéma technique du châssis - Lignes principales */}
        <motion.g
          style={{
            pathLength: pathProgress,
            opacity: pathProgress,
          }}
        >
          {/* Contour principal */}
          <motion.rect
            x="10"
            y="20"
            width="80"
            height="60"
            fill="none"
            stroke="rgb(30, 64, 175)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Séparations internes */}
          <motion.line
            x1="10"
            y1="50"
            x2="90"
            y2="50"
            stroke="rgb(30, 64, 175)"
            strokeWidth="0.4"
            strokeDasharray="1,1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          />

          {/* Chambres d'isolation */}
          <motion.rect
            x="15"
            y="25"
            width="70"
            height="20"
            fill="none"
            stroke="rgb(30, 64, 175)"
            strokeWidth="0.3"
            strokeDasharray="0.5,0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />

          <motion.rect
            x="15"
            y="55"
            width="70"
            height="20"
            fill="none"
            stroke="rgb(30, 64, 175)"
            strokeWidth="0.3"
            strokeDasharray="0.5,0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
          />

          {/* Lignes de cotation */}
          <motion.g>
            {/* Cotation horizontale */}
            <motion.line
              x1="10"
              y1="15"
              x2="90"
              y2="15"
              stroke="rgb(30, 64, 175)"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
            />
            <motion.line
              x1="10"
              y1="12"
              x2="10"
              y2="18"
              stroke="rgb(30, 64, 175)"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.2 }}
            />
            <motion.line
              x1="90"
              y1="12"
              x2="90"
              y2="18"
              stroke="rgb(30, 64, 175)"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.2 }}
            />
            <motion.text
              x="50"
              y="13"
              textAnchor="middle"
              fill="rgb(30, 64, 175)"
              fontSize="2"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              82mm
            </motion.text>

            {/* Cotation verticale */}
            <motion.line
              x1="5"
              y1="20"
              x2="5"
              y2="80"
              stroke="rgb(30, 64, 175)"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}
            />
            <motion.line
              x1="2"
              y1="20"
              x2="8"
              y2="20"
              stroke="rgb(30, 64, 175)"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.4 }}
            />
            <motion.line
              x1="2"
              y1="80"
              x2="8"
              y2="80"
              stroke="rgb(30, 64, 175)"
              strokeWidth="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.4 }}
            />
          </motion.g>
        </motion.g>

        {/* Points d'ancrage interactifs */}
        {blueprintPoints.map((point) => (
          <g key={point.id}>
            {/* Cercle de point */}
            <circle
              cx={point.x}
              cy={point.y}
              r="2"
              fill="rgb(30, 64, 175)"
              stroke="white"
              strokeWidth="0.5"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint(point.id)}
              onMouseLeave={() => setHoveredPoint(null)}
            />
            {/* Ligne de référence */}
            <line
              x1={point.x}
              y1={point.y}
              x2={point.x + 8}
              y2={point.y - 8}
              stroke="rgb(30, 64, 175)"
              strokeWidth="0.3"
              strokeDasharray="0.5,0.5"
              opacity={hoveredPoint === point.id ? 1 : 0.3}
            />
            {/* Tooltip */}
            {hoveredPoint === point.id && (
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <rect
                  x={point.x + 10}
                  y={point.y - 15}
                  width="25"
                  height="12"
                  fill="white"
                  stroke="rgb(30, 64, 175)"
                  strokeWidth="0.3"
                  rx="1"
                />
                <text
                  x={point.x + 22.5}
                  y={point.y - 10}
                  textAnchor="middle"
                  fill="rgb(30, 64, 175)"
                  fontSize="1.8"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {point.label}
                </text>
                <text
                  x={point.x + 22.5}
                  y={point.y - 6}
                  textAnchor="middle"
                  fill="rgb(100, 116, 139)"
                  fontSize="1.2"
                  fontFamily="monospace"
                >
                  {point.description}
                </text>
              </motion.g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

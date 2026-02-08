import React from "react";

interface IconProps {
  className?: string;
}

// Style architectural : traits fins, aspect plan technique
const iconBaseClass = "stroke-current stroke-[1.5] fill-none";

export function ChassisIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${iconBaseClass} ${className}`}
      aria-hidden="true"
    >
      {/* Châssis - représentation technique */}
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <rect x="5" y="5" width="14" height="14" rx="0.5" />
    </svg>
  );
}

export function CoulissantIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${iconBaseClass} ${className}`}
      aria-hidden="true"
    >
      {/* Coulissant - deux panneaux qui se chevauchent */}
      <rect x="2" y="4" width="10" height="16" rx="1" />
      <rect x="12" y="4" width="10" height="16" rx="1" />
      <line x1="2" y1="12" x2="12" y2="12" />
      <line x1="12" y1="12" x2="22" y2="12" />
      {/* Indicateurs de mouvement */}
      <path d="M8 8 L10 6 L8 4" />
      <path d="M16 8 L14 6 L16 4" />
    </svg>
  );
}

export function PorteIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${iconBaseClass} ${className}`}
      aria-hidden="true"
    >
      {/* Porte - représentation technique avec charnière */}
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <line x1="4" y1="12" x2="20" y2="12" />
      {/* Charnière */}
      <circle cx="4" cy="6" r="1" />
      <circle cx="4" cy="12" r="1" />
      <circle cx="4" cy="18" r="1" />
      {/* Poignée */}
      <circle cx="18" cy="12" r="1.5" />
    </svg>
  );
}

export function PorteGarageIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${iconBaseClass} ${className}`}
      aria-hidden="true"
    >
      {/* Porte de garage - sectionnelle avec panneaux */}
      <rect x="2" y="4" width="20" height="18" rx="1" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="2" y1="16" x2="22" y2="16" />
      {/* Indicateurs de rails latéraux */}
      <line x1="2" y1="4" x2="2" y2="22" strokeWidth="2" />
      <line x1="22" y1="4" x2="22" y2="22" strokeWidth="2" />
      {/* Panneau central */}
      <rect x="10" y="6" width="4" height="14" rx="0.5" />
    </svg>
  );
}

/**
 * Stylized vulture emblem — brand crest.
 * Spread-wing silhouette with centered YOD monogram, echoing the
 * launch-page creed: "patient, unflinching, decisive."
 */
export default function VultureEmblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-label="YOD vulture emblem"
    >
      <circle cx="250" cy="250" r="235" strokeDasharray="1 5" opacity="0.5" />
      <circle cx="250" cy="250" r="195" opacity="0.35" />

      {/* Wing — left */}
      <path d="M250 200
               L170 170 L90 190 L40 230 L80 230 L130 220 L170 230
               L120 250 L80 280 L130 275 L180 260 L220 250
               L170 290 L140 330 L200 300 L240 275 L250 260 Z" />

      {/* Wing — right (mirror) */}
      <path d="M250 200
               L330 170 L410 190 L460 230 L420 230 L370 220 L330 230
               L380 250 L420 280 L370 275 L320 260 L280 250
               L330 290 L360 330 L300 300 L260 275 L250 260 Z" />

      {/* Body + tail */}
      <path d="M240 200 L245 180 L255 180 L260 200
               L258 300 L268 360 L250 345 L232 360 L242 300 Z" />

      {/* Head + beak */}
      <path d="M245 180 Q240 165 248 158 Q256 165 255 180" />
      <path d="M248 158 L240 152 L246 162 Z" fill="currentColor" />
      <circle cx="252" cy="168" r="1.2" fill="currentColor" stroke="none" />

      {/* Center monogram */}
      <text
        x="250"
        y="420"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="11"
        letterSpacing="6"
        fill="currentColor"
        stroke="none"
      >
        WEAR YOUR DEFINITION
      </text>
    </svg>
  );
}

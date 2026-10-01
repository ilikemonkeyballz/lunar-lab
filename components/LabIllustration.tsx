type Props = { dark?: boolean; annotate?: boolean; className?: string };

/** Conceptual placeholder illustration. Not a finalized design. */
export default function LabIllustration({ dark = false, annotate = true, className = "" }: Props) {
  const line = dark ? "#E7E7E3" : "#243B53";
  const soft = dark ? "rgba(231,231,227,.35)" : "rgba(36,59,83,.35)";
  const glass = dark ? "rgba(231,231,227,.07)" : "rgba(36,59,83,.05)";
  const leaf = "#527A61";
  const gold = "#C7A96B";
  const px = [150, 200, 250, 300, 350];
  const hs = [62, 84, 56, 78, 66];

  return (
    <svg viewBox="0 0 640 510" className={className} role="img"
      aria-label="Conceptual illustration of a modular agricultural research laboratory"
      fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* base plate */}
      <polygon points="96,390 414,390 470,344 152,344" fill={glass} stroke={line} strokeWidth="1.5" />
      <polygon points="96,390 414,390 414,404 96,404" fill={soft} stroke={line} strokeWidth="1.5" />
      <polygon points="414,390 470,344 470,358 414,404" fill={soft} stroke={line} strokeWidth="1.5" />

      {/* hidden back edges */}
      <path d="M166 104V344M166 344H456M166 344L110 390" stroke={soft} strokeWidth="1" strokeDasharray="4 4" />

      {/* glass faces */}
      <polygon points="110,150 400,150 400,390 110,390" fill={glass} />
      <polygon points="400,150 456,104 456,344 400,390" fill={glass} />
      <polygon points="110,150 166,104 456,104 400,150" fill={glass} />

      {/* light cones + fixture */}
      {[170, 255, 340].map((x) => (
        <polygon key={x} points={`${x},172 ${x - 42},322 ${x + 42},322`} fill={gold} opacity=".12" />
      ))}
      <rect x="130" y="158" width="250" height="10" rx="2" fill={line} />
      {[170, 255, 340].map((x) => <circle key={x} cx={x} cy="172" r="3" fill={gold} />)}

      {/* resource delivery: reservoir + line + drips */}
      <rect x="30" y="292" width="44" height="98" rx="5" stroke={line} strokeWidth="1.5" fill={glass} />
      <rect x="34" y="336" width="36" height="50" rx="3" fill={leaf} opacity=".35" />
      <path d="M74 322H375" stroke={line} strokeWidth="1.5" />
      {px.map((x) => <circle key={x} cx={x} cy="330" r="1.8" fill={leaf} />)}

      {/* root zone tray */}
      <rect x="130" y="338" width="250" height="44" rx="3" fill={glass} stroke={line} strokeWidth="1.5" />
      {px.map((x) => (
        <path key={x} d={`M${x} 342q-9 14 -14 30M${x} 342q7 14 13 32`} stroke={leaf} strokeWidth="1" strokeDasharray="3 3" opacity=".8" />
      ))}

      {/* plants */}
      {px.map((x, i) => (
        <g key={x}>
          <path d={`M${x} 338V${338 - hs[i]}`} stroke={leaf} strokeWidth="2" />
          <ellipse cx={x - 10} cy={338 - hs[i] * 0.55} rx="11" ry="5" transform={`rotate(-30 ${x - 10} ${338 - hs[i] * 0.55})`} fill={leaf} opacity=".85" />
          <ellipse cx={x + 10} cy={338 - hs[i] * 0.85} rx="11" ry="5" transform={`rotate(30 ${x + 10} ${338 - hs[i] * 0.85})`} fill={leaf} opacity=".85" />
        </g>
      ))}

      {/* sensors */}
      {[[135, 235], [380, 250], [300, 200]].map(([x, y]) => (
        <g key={`${x}${y}`}>
          <circle cx={x} cy={y} r="4" fill={line} />
          <circle cx={x} cy={y} r="9" stroke={soft} strokeWidth="1" />
        </g>
      ))}

      {/* frame */}
      <g stroke={line} strokeLinecap="square">
        <path d="M110 150H400V390H110ZM400 150L456 104V344L400 390M110 150L166 104H456" strokeWidth="1.5" />
        <path d="M110 150V390M400 150V390M456 104V344" strokeWidth="3" />
      </g>

      {/* control module */}
      <rect x="488" y="338" width="100" height="66" rx="5" fill={glass} stroke={line} strokeWidth="1.5" />
      <rect x="500" y="350" width="44" height="22" rx="2" fill={line} opacity=".18" />
      {[506, 520, 534].map((x, i) => <circle key={x} cx={x} cy="388" r="3" fill={i === 0 ? gold : line} />)}
      <circle cx="566" cy="360" r="6" stroke={line} strokeWidth="1.2" />
      <circle cx="566" cy="384" r="6" stroke={line} strokeWidth="1.2" />
      <path d="M488 372H470" stroke={line} strokeWidth="1.5" />

      {annotate && (
        <g stroke={soft} strokeWidth="1" fontFamily="var(--font-geist-mono), monospace" fontSize="10" letterSpacing="1.5">
          <path d="M255 166V64" /><circle cx="255" cy="166" r="2.5" fill={line} stroke="none" />
          <text x="255" y="50" textAnchor="middle" fill={line} stroke="none">LIGHTING</text>
          <path d="M200 352V452" /><circle cx="200" cy="352" r="2.5" fill={line} stroke="none" />
          <text x="200" y="470" textAnchor="middle" fill={line} stroke="none">GROWTH AREA</text>
          <path d="M52 392V452" /><circle cx="52" cy="340" r="2.5" fill={line} stroke="none" />
          <text x="20" y="470" fill={line} stroke="none">RESOURCE DELIVERY</text>
          <path d="M538 404V452" />
          <text x="538" y="470" textAnchor="middle" fill={line} stroke="none">CONTROL SYSTEM</text>
          <text x="20" y="500" fill={line} stroke="none" opacity=".5" fontSize="9">FIG. 01 / CONCEPTUAL ARRANGEMENT</text>
        </g>
      )}
    </svg>
  );
}

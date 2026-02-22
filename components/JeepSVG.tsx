export default function JeepSVG() {
  return (
    <svg width="520" height="260" viewBox="0 0 520 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="260" cy="248" rx="200" ry="12" fill="rgba(0,0,0,0.5)" />

      {/* Body */}
      <rect x="60" y="120" width="400" height="100" rx="14" fill="#3A2E1A" />
      <rect x="60" y="120" width="400" height="50" rx="14" fill="#4A3C22" />

      {/* Roof/Cabin */}
      <path d="M120 120 L150 65 L370 65 L400 120 Z" fill="#2E2418" />
      <path d="M120 120 L155 68 L370 68 L400 120 Z" fill="#3A2E1A" />

      {/* Window Left */}
      <rect x="160" y="75" width="80" height="38" rx="4" fill="#1B3A5C" opacity="0.9" />
      <rect x="162" y="77" width="76" height="34" rx="3" fill="#1e4a70" />
      <line x1="200" y1="75" x2="200" y2="113" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <path d="M166 80 L174 80 L170 90 Z" fill="rgba(255,255,255,0.25)" />

      {/* Window Right */}
      <rect x="255" y="75" width="95" height="38" rx="4" fill="#1B3A5C" opacity="0.9" />
      <rect x="257" y="77" width="91" height="34" rx="3" fill="#1e4a70" />
      <path d="M261 80 L269 80 L265 90 Z" fill="rgba(255,255,255,0.25)" />

      {/* Hood */}
      <path d="M400 120 L460 130 L460 155 L400 160 Z" fill="#3A2E1A" />
      <path d="M400 120 L460 128 L460 133 L400 125 Z" fill="#4A3C22" />

      {/* Grille */}
      <rect x="445" y="133" width="28" height="30" rx="3" fill="#1a1208" />
      <line x1="445" y1="139" x2="473" y2="139" stroke="rgba(200,135,58,0.4)" strokeWidth="1.5" />
      <line x1="445" y1="145" x2="473" y2="145" stroke="rgba(200,135,58,0.4)" strokeWidth="1.5" />
      <line x1="445" y1="151" x2="473" y2="151" stroke="rgba(200,135,58,0.4)" strokeWidth="1.5" />
      <line x1="445" y1="157" x2="473" y2="157" stroke="rgba(200,135,58,0.4)" strokeWidth="1.5" />
      <line x1="453" y1="133" x2="453" y2="163" stroke="rgba(200,135,58,0.3)" strokeWidth="1.5" />
      <line x1="460" y1="133" x2="460" y2="163" stroke="rgba(200,135,58,0.3)" strokeWidth="1.5" />
      <line x1="467" y1="133" x2="467" y2="163" stroke="rgba(200,135,58,0.3)" strokeWidth="1.5" />

      {/* Headlights */}
      <rect x="460" y="130" width="18" height="12" rx="3" fill="#FFEE88" opacity="0.9" />
      <rect x="460" y="130" width="18" height="12" rx="3" fill="none" stroke="rgba(255,238,136,0.5)" strokeWidth="2" />
      <ellipse cx="469" cy="136" rx="25" ry="10" fill="rgba(255,238,136,0.15)" />

      {/* Bumpers */}
      <path d="M460 162 L488 168 L488 178 L460 175 Z" fill="#2a2010" />
      <rect x="485" y="165" width="12" height="14" rx="2" fill="#1a1208" />
      <path d="M60 155 L35 162 L35 175 L60 175 Z" fill="#2a2010" />

      {/* Roof Rack */}
      <rect x="155" y="60" width="210" height="8" rx="2" fill="#2a2010" />
      {[170, 200, 260, 320, 350].map(x => (
        <line key={x} x1={x} y1="60" x2={x} y2="68" stroke="rgba(200,135,58,0.4)" strokeWidth="2" />
      ))}

      {/* Spare Tire */}
      <circle cx="50" cy="155" r="32" fill="#2a2010" stroke="#1a1208" strokeWidth="3" />
      <circle cx="50" cy="155" r="24" fill="#1a1208" />
      <circle cx="50" cy="155" r="14" fill="#2a2010" />
      <circle cx="50" cy="155" r="5" fill="#3a3020" />

      {/* Door Lines */}
      <line x1="230" y1="120" x2="230" y2="220" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
      <line x1="350" y1="120" x2="350" y2="220" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />

      {/* Door Handles */}
      <rect x="275" y="162" width="24" height="5" rx="2" fill="#5A4A2A" />
      <rect x="390" y="162" width="24" height="5" rx="2" fill="#5A4A2A" />

      {/* Front Wheel */}
      <circle cx="390" cy="218" r="42" fill="#1a1208" stroke="#0d0b06" strokeWidth="3" />
      <circle cx="390" cy="218" r="34" fill="#222015" />
      <circle cx="390" cy="218" r="18" fill="#1a1208" />
      <circle cx="390" cy="218" r="10" fill="#2a2515" />
      <line x1="390" y1="184" x2="390" y2="200" stroke="rgba(200,135,58,0.6)" strokeWidth="3" />
      <line x1="390" y1="236" x2="390" y2="252" stroke="rgba(200,135,58,0.6)" strokeWidth="3" />
      <line x1="356" y1="218" x2="372" y2="218" stroke="rgba(200,135,58,0.6)" strokeWidth="3" />
      <line x1="408" y1="218" x2="424" y2="218" stroke="rgba(200,135,58,0.6)" strokeWidth="3" />
      <line x1="366" y1="194" x2="376" y2="204" stroke="rgba(200,135,58,0.5)" strokeWidth="2.5" />
      <line x1="404" y1="232" x2="414" y2="242" stroke="rgba(200,135,58,0.5)" strokeWidth="2.5" />
      <line x1="366" y1="242" x2="376" y2="232" stroke="rgba(200,135,58,0.5)" strokeWidth="2.5" />
      <line x1="404" y1="204" x2="414" y2="194" stroke="rgba(200,135,58,0.5)" strokeWidth="2.5" />
      <circle cx="390" cy="218" r="6" fill="rgba(200,135,58,0.8)" />

      {/* Rear Wheel */}
      <circle cx="130" cy="218" r="42" fill="#1a1208" stroke="#0d0b06" strokeWidth="3" />
      <circle cx="130" cy="218" r="34" fill="#222015" />
      <circle cx="130" cy="218" r="18" fill="#1a1208" />
      <circle cx="130" cy="218" r="10" fill="#2a2515" />
      <line x1="130" y1="184" x2="130" y2="200" stroke="rgba(200,135,58,0.6)" strokeWidth="3" />
      <line x1="130" y1="236" x2="130" y2="252" stroke="rgba(200,135,58,0.6)" strokeWidth="3" />
      <line x1="96" y1="218" x2="112" y2="218" stroke="rgba(200,135,58,0.6)" strokeWidth="3" />
      <line x1="148" y1="218" x2="164" y2="218" stroke="rgba(200,135,58,0.6)" strokeWidth="3" />
      <line x1="106" y1="194" x2="116" y2="204" stroke="rgba(200,135,58,0.5)" strokeWidth="2.5" />
      <line x1="144" y1="232" x2="154" y2="242" stroke="rgba(200,135,58,0.5)" strokeWidth="2.5" />
      <line x1="106" y1="242" x2="116" y2="232" stroke="rgba(200,135,58,0.5)" strokeWidth="2.5" />
      <line x1="144" y1="204" x2="154" y2="194" stroke="rgba(200,135,58,0.5)" strokeWidth="2.5" />
      <circle cx="130" cy="218" r="6" fill="rgba(200,135,58,0.8)" />

      {/* Body stripe */}
      <path d="M60 145 L460 145" stroke="rgba(200,135,58,0.15)" strokeWidth="1" />

      {/* Antenna */}
      <line x1="155" y1="65" x2="145" y2="30" stroke="rgba(200,135,58,0.5)" strokeWidth="1.5" />
      <circle cx="145" cy="28" r="3" fill="rgba(200,135,58,0.7)" />
    </svg>
  )
}

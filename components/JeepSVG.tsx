export default function JeepSVG() {
  return (
    <svg width="600" height="320" viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* ── WATER FOAM ── */}
      <ellipse cx="300" cy="308" rx="260" ry="12" fill="rgba(10,58,92,0.7)"/>
      <path d="M60 304 Q120 296 180 304 Q240 312 300 304 Q360 296 420 304 Q480 312 540 304" stroke="rgba(180,220,255,0.3)" strokeWidth="2" fill="none"/>

      {/* ── HULL ── */}
      <path d="M80 220 Q75 270 90 295 Q150 310 300 312 Q450 310 510 295 Q525 270 520 220 Z" fill="#3A1F0A"/>
      <path d="M80 220 Q75 265 88 290 Q148 305 300 307 Q452 305 512 290 Q525 265 520 220 Z" fill="#4A2810"/>
      {/* Hull planks */}
      {[230,245,260,275,290].map((y,i) => (
        <path key={i} d={`M${85+i*2} ${y} Q300 ${y+4} ${515-i*2} ${y}`} stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" fill="none"/>
      ))}
      {/* Copper bottom */}
      <path d="M90 290 Q150 308 300 310 Q450 308 510 290 Q505 298 300 302 Q95 298 90 290Z" fill="#6B3A10" opacity="0.7"/>
      {/* Gold trim */}
      <path d="M82 222 Q300 215 518 222" stroke="#8B6914" strokeWidth="3" fill="none"/>
      <path d="M85 235 Q300 228 515 235" stroke="rgba(139,105,20,0.4)" strokeWidth="1.5" fill="none"/>

      {/* ── MAIN DECK ── */}
      <rect x="88" y="180" width="424" height="42" rx="4" fill="#5C3010"/>
      <rect x="88" y="180" width="424" height="12" rx="4" fill="#6B3A14"/>
      {/* Deck planks */}
      {[100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500].map((x,i) => (
        <line key={i} x1={x} y1="180" x2={x} y2="222" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
      ))}
      {/* Railing */}
      <path d="M88 180 L512 180" stroke="#8B6914" strokeWidth="2"/>
      {[100,130,160,190,220,250,280,310,340,370,400,430,460,490].map((x,i) => (
        <rect key={i} x={x-2} y="162" width="4" height="18" rx="1" fill="#5C3010"/>
      ))}
      <path d="M88 162 L512 162" stroke="#8B4A18" strokeWidth="3"/>

      {/* ── FORECASTLE (front raised deck) ── */}
      <path d="M88 180 L88 140 Q100 130 160 128 L200 128 L200 180 Z" fill="#4A2810"/>
      <path d="M88 140 Q100 132 160 130 L200 130 L200 138 Q160 136 100 142Z" fill="#5C3010"/>

      {/* ── STERN CASTLE (back) ── */}
      <path d="M400 128 L440 128 Q512 130 512 140 L512 180 L400 180 Z" fill="#4A2810"/>
      <path d="M400 130 L440 130 Q510 132 510 140 L510 138 Q445 134 400 136 Z" fill="#5C3010"/>
      {/* Stern windows */}
      {[420,450,480].map((x,i) => (
        <g key={i}>
          <rect x={x} y="148" width="20" height="16" rx="2" fill="#0a2a40" stroke="#8B6914" strokeWidth="1.5"/>
          <line x1={x+10} y1="148" x2={x+10} y2="164" stroke="rgba(139,105,20,0.4)" strokeWidth="1"/>
          <line x1={x} y1="156" x2={x+20} y2="156" stroke="rgba(139,105,20,0.4)" strokeWidth="1"/>
          <circle cx={x+5} cy={x===420?152:x===450?152:152} r="2" fill="rgba(240,192,80,0.15)"/>
        </g>
      ))}

      {/* ── CANNON PORTS ── */}
      {[130,190,250,310,370,430].map((x,i) => (
        <g key={i}>
          <rect x={x} y="232" width="28" height="20" rx="2" fill="#1a0a04" stroke="rgba(139,105,20,0.3)" strokeWidth="1"/>
          <rect x={x+3} y="235" width="32" height="12" rx="2" fill="#2a1208"/>
          <ellipse cx={x+16} cy="241" rx="7" ry="5" fill="#111" stroke="rgba(80,80,80,0.4)" strokeWidth="1"/>
        </g>
      ))}

      {/* ── MAIN MAST ── */}
      <line x1="300" y1="20" x2="300" y2="175" stroke="#5C3010" strokeWidth="9"/>
      <line x1="300" y1="20" x2="300" y2="175" stroke="#3A1F0A" strokeWidth="6" strokeDasharray="60 3" strokeDashoffset="0"/>

      {/* ── FOREMAST ── */}
      <line x1="160" y1="50" x2="160" y2="162" stroke="#5C3010" strokeWidth="7"/>

      {/* ── BOWSPRIT ── */}
      <line x1="88" y1="155" x2="20" y2="105" stroke="#5C3010" strokeWidth="8"/>
      <line x1="88" y1="155" x2="20" y2="105" stroke="#3A1F0A" strokeWidth="5"/>

      {/* ── MAIN SAIL ── */}
      <path d="M220 25 L380 25 L390 145 L210 145 Z" fill="rgba(235,215,165,0.92)" stroke="#C8B07A" strokeWidth="1.5"/>
      {/* Sail shading */}
      <path d="M220 25 L240 25 L248 145 L210 145 Z" fill="rgba(0,0,0,0.06)"/>
      <path d="M360 25 L380 25 L390 145 L372 145 Z" fill="rgba(0,0,0,0.06)"/>
      {/* Skull & Crossbones on sail */}
      <circle cx="300" cy="75" r="22" fill="rgba(0,0,0,0.85)"/>
      <circle cx="300" cy="70" r="12" fill="#e8d5b0"/>
      <circle cx="295" cy="67" r="3.5" fill="#1a1208"/>
      <circle cx="305" cy="67" r="3.5" fill="#1a1208"/>
      <path d="M294 76 Q300 80 306 76" stroke="#1a1208" strokeWidth="2" fill="none"/>
      {/* Crossbones */}
      <line x1="284" y1="91" x2="316" y2="103" stroke="#e8d5b0" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="316" y1="91" x2="284" y2="103" stroke="#e8d5b0" strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="283" cy="91"  r="4" fill="#e8d5b0"/>
      <circle cx="317" cy="91"  r="4" fill="#e8d5b0"/>
      <circle cx="283" cy="103" r="4" fill="#e8d5b0"/>
      <circle cx="317" cy="103" r="4" fill="#e8d5b0"/>
      {/* Sail rope lines */}
      {[0.25,0.5,0.75].map((t,i) => (
        <line key={i} x1={220+t*160} y1="25" x2={210+t*180} y2="145" stroke="rgba(156,122,60,0.4)" strokeWidth="1"/>
      ))}
      {/* Yard arm */}
      <line x1="210" y1="32" x2="390" y2="32" stroke="#3A1F0A" strokeWidth="5"/>
      <line x1="210" y1="32" x2="390" y2="32" stroke="#5C3010" strokeWidth="3"/>

      {/* ── FORE SAIL ── */}
      <path d="M110 55 L210 55 L212 155 L108 155 Z" fill="rgba(220,200,150,0.88)" stroke="#C8B07A" strokeWidth="1.5"/>
      <line x1="108" y1="62" x2="212" y2="62" stroke="#3A1F0A" strokeWidth="4"/>
      {/* Fore crossbones small */}
      <line x1="148" y1="100" x2="172" y2="112" stroke="rgba(0,0,0,0.4)" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="172" y1="100" x2="148" y2="112" stroke="rgba(0,0,0,0.4)" strokeWidth="2.5" strokeLinecap="round"/>

      {/* ── JIB SAIL (bowsprit) ── */}
      <path d="M22 108 L88 155 L88 100 Z" fill="rgba(220,200,150,0.75)" stroke="#C8B07A" strokeWidth="1"/>

      {/* ── RIGGING ROPES ── */}
      <line x1="300" y1="25"  x2="512" y2="162" stroke="rgba(156,122,60,0.45)" strokeWidth="1.5"/>
      <line x1="300" y1="25"  x2="88"  y2="162" stroke="rgba(156,122,60,0.45)" strokeWidth="1.5"/>
      <line x1="160" y1="52"  x2="300" y2="28"  stroke="rgba(156,122,60,0.4)"  strokeWidth="1.5"/>
      <line x1="160" y1="52"  x2="88"  y2="155" stroke="rgba(156,122,60,0.4)"  strokeWidth="1.5"/>
      <line x1="300" y1="28"  x2="22"  y2="108" stroke="rgba(156,122,60,0.35)" strokeWidth="1"/>
      <line x1="160" y1="130" x2="300" y2="120" stroke="rgba(156,122,60,0.3)"  strokeWidth="1"/>
      <line x1="160" y1="100" x2="300" y2="90"  stroke="rgba(156,122,60,0.3)"  strokeWidth="1"/>

      {/* ── CROW'S NEST ── */}
      <rect x="280" y="15" width="40" height="18" rx="3" fill="#3A1F0A" stroke="#8B6914" strokeWidth="1.5"/>
      <path d="M278 15 L322 15 L318 8 L282 8 Z" fill="#3A1F0A" stroke="#8B6914" strokeWidth="1"/>
      {/* Lookout figure */}
      <circle cx="300" cy="10" r="5" fill="#C8A070"/>
      <line x1="300" y1="15" x2="300" y2="25" stroke="#8B6040" strokeWidth="3"/>

      {/* ── PIRATE FLAG (Jolly Roger) ── */}
      <line x1="300" y1="8"  x2="300" y2="20" stroke="#3A1F0A" strokeWidth="3"/>
      <path d="M300 2 L340 8 L340 20 L300 18 Z" fill="#1a1208"/>
      <circle cx="316" cy="9"  r="4"   fill="#e8d5b0"/>
      <line x1="308" y1="15" x2="324" y2="20" stroke="#e8d5b0" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="324" y1="15" x2="308" y2="20" stroke="#e8d5b0" strokeWidth="1.5" strokeLinecap="round"/>

      {/* ── ANCHOR ── */}
      <g transform="translate(102,188) scale(0.7)">
        <line x1="16" y1="0"  x2="16" y2="30" stroke="#8B6914" strokeWidth="3"/>
        <line x1="6"  y1="6"  x2="26" y2="6"  stroke="#8B6914" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 30 Q4 38 2 46 Q10 50 16 42 Q22 50 30 46 Q28 38 16 30Z" fill="none" stroke="#8B6914" strokeWidth="3"/>
        <circle cx="16" cy="0" r="4" fill="none" stroke="#8B6914" strokeWidth="2.5"/>
      </g>

      {/* ── LANTERN ── */}
      <g transform="translate(494,160)">
        <rect x="0" y="0" width="12" height="16" rx="2" fill="#8B6914" stroke="#D4A843" strokeWidth="1"/>
        <rect x="2" y="2" width="8"  height="12" rx="1" fill="rgba(255,200,50,0.7)"/>
        <ellipse cx="6" cy="7" rx="4" ry="4" fill="rgba(255,200,50,0.9)"/>
        <line x1="6" y1="0" x2="6" y2="-8" stroke="#8B6914" strokeWidth="1.5"/>
      </g>

      {/* ── TREASURE CHEST on deck ── */}
      <g transform="translate(330, 158)">
        <rect x="0" y="0" width="32" height="22" rx="2" fill="#5C3010" stroke="#8B6914" strokeWidth="1.5"/>
        <rect x="0" y="0" width="32" height="10" rx="2" fill="#6B3A14"/>
        <rect x="14" y="9" width="4"  height="6" rx="1" fill="#D4A843"/>
        <rect x="0" y="10" width="32" height="2"  fill="#8B6914"/>
        {/* Gems on lid */}
        {[6,16,26].map((x,i) => (
          <circle key={i} cx={x} cy="5" r="2" fill={['#E84040','#40B8E8','#50D860'][i]} opacity="0.9"/>
        ))}
      </g>

      {/* ── WHEEL (helm) ── */}
      <g transform="translate(355,130)">
        <circle cx="20" cy="20" r="20" fill="none" stroke="#5C3010" strokeWidth="5"/>
        <circle cx="20" cy="20" r="14" fill="none" stroke="#3A1F0A" strokeWidth="3"/>
        <circle cx="20" cy="20" r="6"  fill="#3A1F0A" stroke="#8B6914" strokeWidth="2"/>
        {[0,45,90,135,180,225,270,315].map((a,i) => {
          const rad = (a*Math.PI)/180
          return <line key={i} x1={20+6*Math.cos(rad)} y1={20+6*Math.sin(rad)} x2={20+20*Math.cos(rad)} y2={20+20*Math.sin(rad)} stroke="#5C3010" strokeWidth="3" strokeLinecap="round"/>
        })}
        {[0,45,90,135,180,225,270,315].map((a,i) => {
          const rad = (a*Math.PI)/180
          return <circle key={i} cx={20+20*Math.cos(rad)} cy={20+20*Math.sin(rad)} r="3.5" fill="#3A1F0A" stroke="#8B6914" strokeWidth="1.5"/>
        })}
      </g>

      {/* ── ROPE COIL ── */}
      <g transform="translate(230,162)" opacity="0.7">
        <circle cx="16" cy="10" r="10" fill="none" stroke="#9C7A3C" strokeWidth="3"/>
        <circle cx="16" cy="10" r="6"  fill="none" stroke="#9C7A3C" strokeWidth="2"/>
        <circle cx="16" cy="10" r="2"  fill="#9C7A3C"/>
      </g>
    </svg>
  )
}

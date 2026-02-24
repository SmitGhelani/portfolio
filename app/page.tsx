'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Stars from '@/components/Stars'
import JeepSVG from '@/components/JeepSVG'
import Window from '@/components/Window'
import Taskbar from '@/components/Taskbar'
import Toast from '@/components/Toast'
import {
  AboutContent, SkillsContent, ExperienceContent,
  ProjectsContent, EducationContent, ResearchContent,
  ContactContent
} from '@/components/WindowContents'

type WinId = 'about' | 'skills' | 'experience' | 'projects' | 'education' | 'certification' | 'contact'

interface WinConfig {
  id: WinId
  title: string
  icon: string
  defaultPos: { x: number; y: number }
  defaultSize: { w: number; h: number }
  content: React.ReactNode
}

const WINDOW_CONFIGS: WinConfig[] = [
  { id: 'about',         title: "Captain's Log",       icon: '☠️', defaultPos:{x:100,y:60},  defaultSize:{w:380,h:480}, content:<AboutContent/> },
  { id: 'skills',        title: "Crew's Arsenal",       icon: '⚔️', defaultPos:{x:510,y:70},  defaultSize:{w:400,h:420}, content:<SkillsContent/> },
  { id: 'experience',    title: "Voyages Taken",        icon: '🗺️', defaultPos:{x:130,y:110}, defaultSize:{w:420,h:460}, content:<ExperienceContent/> },
  { id: 'projects',      title: "Treasure Hunts",       icon: '💰', defaultPos:{x:560,y:80},  defaultSize:{w:440,h:500}, content:<ProjectsContent/> },
  { id: 'education',     title: "Navigator's Charts",   icon: '📜', defaultPos:{x:160,y:100}, defaultSize:{w:390,h:420}, content:<EducationContent/> },
  { id: 'certification', title: "Medals & Honours",     icon: '🏅', defaultPos:{x:370,y:85},  defaultSize:{w:460,h:380}, content:<ResearchContent/> },
  { id: 'contact',       title: "Send a Message",       icon: '🦜', defaultPos:{x:280,y:100}, defaultSize:{w:360,h:380}, content:<ContactContent/> },
]

interface WinState { isOpen:boolean; isMinimized:boolean; isFocused:boolean }

export default function Desktop() {
  const [winStates, setWinStates] = useState<Record<WinId, WinState>>(() => {
    const init: Record<string,WinState> = {}
    WINDOW_CONFIGS.forEach(w => { init[w.id] = { isOpen:false, isMinimized:false, isFocused:false } })
    return init as Record<WinId, WinState>
  })
  const [toast, setToast] = useState<string|null>(null)
  const [shipSailing, setShipSailing] = useState(false)
  const [shipOffset, setShipOffset] = useState(0)
  const animRef = useRef<number|null>(null)
  const focusCounter = useRef(100)

  const openWindow = useCallback((id: WinId) => {
    focusCounter.current++
    setWinStates(prev => {
      const next = {...prev}
      Object.keys(next).forEach(k => { next[k as WinId] = {...next[k as WinId], isFocused:false} })
      next[id] = { isOpen:true, isMinimized:false, isFocused:true }
      return next
    })
    const cfg = WINDOW_CONFIGS.find(w => w.id === id)
    if (cfg) setToast(`${cfg.icon} ${cfg.title} — unfurled!`)
  }, [])

  const closeWindow = useCallback((id: WinId) => {
    setWinStates(prev => ({...prev, [id]:{isOpen:false,isMinimized:false,isFocused:false}}))
  }, [])

  const minimizeWindow = useCallback((id: WinId) => {
    setWinStates(prev => ({...prev, [id]:{...prev[id],isMinimized:true,isFocused:false}}))
  }, [])

  const focusWindow = useCallback((id: WinId) => {
    setWinStates(prev => {
      const next = {...prev}
      Object.keys(next).forEach(k => { next[k as WinId] = {...next[k as WinId], isFocused:false} })
      next[id] = {...next[id], isFocused:true}
      return next
    })
  }, [])

  const handleTaskClick = useCallback((id: string) => {
    const wid = id as WinId
    setWinStates(prev => {
      const next = {...prev}
      Object.keys(next).forEach(k => { next[k as WinId] = {...next[k as WinId], isFocused:false} })
      next[wid] = { isOpen:true, isMinimized:false, isFocused:true }
      return next
    })
  }, [])

  const openAll = useCallback(() => {
    WINDOW_CONFIGS.forEach((cfg,i) => setTimeout(()=>openWindow(cfg.id), i*80))
  }, [openWindow])

  // Ship sailing on double-click
  const handleShipDblClick = useCallback(() => {
    if (shipSailing) return
    setShipSailing(true)
    setToast('⚓ Set sail! The Black Pearl departs!')
    // Fire cannonball
    const ball = document.createElement('div')
    ball.className = 'cannonball'
    ball.style.setProperty('--tx','280px')
    ball.style.setProperty('--ty','-110px')
    ball.style.setProperty('--tx2','560px')
    ball.style.setProperty('--ty2','60px')
    ball.style.left = (window.innerWidth/2) + 'px'
    ball.style.bottom = '220px'
    ball.style.position = 'fixed'
    document.body.appendChild(ball)
    setTimeout(()=>ball.remove(), 1000)

    let offset = 0
    const animate = () => {
      offset += 5
      setShipOffset(offset)
      if (offset < window.innerWidth * 0.6) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        setTimeout(() => {
          setShipOffset(-window.innerWidth * 0.7)
          setTimeout(() => { setShipOffset(0); setShipSailing(false) }, 120)
        }, 600)
      }
    }
    animRef.current = requestAnimationFrame(animate)
  }, [shipSailing])

  useEffect(() => {
    const timers = [
      setTimeout(()=>openWindow('about'), 800),
      setTimeout(()=>openWindow('projects'), 1100),
      setTimeout(()=>openWindow('skills'), 1400),
    ]
    return ()=>timers.forEach(clearTimeout)
  }, [openWindow])

  const icons: {id:WinId; icon:string; label:string}[] = [
    { id:'about',         icon:'☠️', label:"Captain's Log" },
    { id:'skills',        icon:'⚔️', label:'Arsenal'       },
    { id:'experience',    icon:'🗺️', label:'Voyages'       },
    { id:'projects',      icon:'💰', label:'Treasure'      },
    { id:'education',     icon:'📜', label:'Charts'        },
    { id:'certification', icon:'🏅', label:'Medals'        },
    { id:'contact',       icon:'🦜', label:'Parrot Post'   },
  ]

  return (
    <div id="desktop">
      <div className="sky-bg"/>
      <Stars/>

      {/* Ocean shimmer */}
      <div className="ocean-shimmer"/>
      <div className="moon-reflection"/>

      {/* Ocean waves */}
      <div className="dunes">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block',width:'100%'}}>
          <path d="M0 120 L0 70 Q80 30 180 55 Q280 80 380 45 Q480 10 580 40 Q680 70 780 38 Q880 6 980 35 Q1080 64 1180 38 Q1280 12 1380 45 L1440 50 L1440 120 Z" fill="#062034" opacity="0.9"/>
          <path d="M0 120 L0 85 Q60 60 150 72 Q260 86 360 64 Q460 42 560 68 Q660 94 760 68 Q860 42 960 65 Q1060 88 1160 68 Q1260 48 1360 72 L1440 78 L1440 120 Z" fill="#04111f" opacity="0.95"/>
          {/* Foam caps */}
          {[80,230,380,530,680,820,970,1120,1280].map((x,i)=>(
            <path key={i} d={`M${x} ${55+((i%3)*8)} Q${x+15} ${50+((i%3)*8)} ${x+30} ${55+((i%3)*8)}`} stroke="rgba(200,230,255,0.25)" strokeWidth="2" fill="none"/>
          ))}
        </svg>
      </div>

      {/* Ship */}
      <div
        className="jeep-wrap"
        style={{
          transform:`translateX(calc(-50% + ${shipOffset}px)) translateY(${shipSailing ? Math.sin(shipOffset/12)*5:0}px)`,
          animation: shipSailing ? 'none' : 'shipRock 5s ease-in-out infinite',
          filter: shipSailing ? 'drop-shadow(0 0 40px rgba(212,168,67,0.7))' : undefined,
          transition: shipOffset < 0 ? 'none' : undefined,
        }}
        onDoubleClick={handleShipDblClick}
        title="Double-click to set sail!"
      >
        {/* Spray particles */}
        {[
          {left:'-15px',bottom:'18px',w:7,h:7,dur:'2.5s',del:'0s',  dx:'-65px',dy:'-35px'},
          {left:'-28px',bottom:'8px', w:4,h:4,dur:'3.2s',del:'0.6s',dx:'-90px',dy:'-28px'},
          {left:'-40px',bottom:'22px',w:5,h:5,dur:'2.1s',del:'1.1s',dx:'-45px',dy:'-50px'},
          {left:'10px', bottom:'5px', w:3,h:3,dur:'2.8s',del:'0.3s',dx:'-55px',dy:'-20px'},
        ].map((p,i)=>(
          <div key={i} className="dust-particle" style={{
            left:p.left,bottom:p.bottom,width:p.w,height:p.h,
            ['--dur' as string]:p.dur,['--del' as string]:p.del,
            ['--dx' as string]:p.dx,['--dy' as string]:p.dy,
          }}/>
        ))}
        <JeepSVG/>
      </div>

      {/* Welcome bubble */}
      <div className="welcome-bubble">
        ☠️ Click icons to open flaps · Double-click ship to set sail!
      </div>

      {/* Desktop Icons */}
      <div className="desktop-icons">
        {icons.map(ic=>(
          <div
            key={ic.id}
            className={`icon ${winStates[ic.id].isOpen ? 'active' : ''}`}
            onClick={()=>openWindow(ic.id)}
            onDoubleClick={()=>openWindow(ic.id)}
          >
            <div className="icon-img">{ic.icon}</div>
            <div className="icon-label">{ic.label}</div>
          </div>
        ))}
      </div>

      {/* Windows */}
      {WINDOW_CONFIGS.map(cfg => {
        const state = winStates[cfg.id]
        return (
          <Window
            key={cfg.id}
            id={cfg.id}
            title={cfg.title}
            icon={cfg.icon}
            isOpen={state.isOpen && !state.isMinimized}
            isFocused={state.isFocused}
            defaultPos={cfg.defaultPos}
            defaultSize={cfg.defaultSize}
            onClose={id=>closeWindow(id as WinId)}
            onMinimize={id=>minimizeWindow(id as WinId)}
            onFocus={id=>focusWindow(id as WinId)}
          >
            {cfg.content}
          </Window>
        )
      })}

      {/* Taskbar */}
      <Taskbar
        windows={WINDOW_CONFIGS.map(cfg=>({
          id:cfg.id, title:cfg.title, icon:cfg.icon,
          isOpen:winStates[cfg.id].isOpen,
          isMinimized:winStates[cfg.id].isMinimized,
        }))}
        onTaskClick={handleTaskClick}
        onStartClick={openAll}
      />

      {toast && <Toast message={toast} onDone={()=>setToast(null)}/>}
    </div>
  )
}

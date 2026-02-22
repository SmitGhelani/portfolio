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
  GalleryContent, ContactContent
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
  { id: 'about',      title: 'about_me.txt',        icon: '👤', defaultPos: { x: 100, y: 60  }, defaultSize: { w: 380, h: 480 }, content: <AboutContent /> },
  { id: 'skills',     title: 'skills.json',          icon: '⚡', defaultPos: { x: 510, y: 70  }, defaultSize: { w: 400, h: 420 }, content: <SkillsContent /> },
  { id: 'experience', title: 'experience.log',       icon: '💼', defaultPos: { x: 130, y: 110 }, defaultSize: { w: 420, h: 460 }, content: <ExperienceContent /> },
  { id: 'projects',   title: 'projects/',            icon: '🚀', defaultPos: { x: 560, y: 80  }, defaultSize: { w: 440, h: 500 }, content: <ProjectsContent /> },
  { id: 'education',  title: 'qualifications.md',   icon: '🎓', defaultPos: { x: 160, y: 100 }, defaultSize: { w: 390, h: 420 }, content: <EducationContent /> },
  { id: 'certification',   title: 'publications.bib',    icon: '🔬', defaultPos: { x: 370, y: 85  }, defaultSize: { w: 460, h: 430 }, content: <ResearchContent /> },
  // { id: 'gallery',    title: 'gallery/desert-trip', icon: '📸', defaultPos: { x: 220, y: 95  }, defaultSize: { w: 400, h: 420 }, content: <GalleryContent /> },
  { id: 'contact',    title: 'contact.cfg',         icon: '📬', defaultPos: { x: 280, y: 100 }, defaultSize: { w: 360, h: 380 }, content: <ContactContent /> },
]

interface WinState {
  isOpen: boolean
  isMinimized: boolean
  isFocused: boolean
}

export default function Desktop() {
  const [winStates, setWinStates] = useState<Record<WinId, WinState>>(() => {
    const init: Record<string, WinState> = {}
    WINDOW_CONFIGS.forEach(w => {
      init[w.id] = { isOpen: false, isMinimized: false, isFocused: false }
    })
    return init as Record<WinId, WinState>
  })

  const [toast, setToast] = useState<string | null>(null)
  const [jeepDriving, setJeepDriving] = useState(false)
  const [jeepOffset, setJeepOffset] = useState(0)
  const jeepAnimRef = useRef<number | null>(null)
  const focusCounter = useRef(100)

  // ─── WINDOW OPS ───
  const openWindow = useCallback((id: WinId) => {
    focusCounter.current++
    setWinStates(prev => ({
      ...prev,
      [id]: { isOpen: true, isMinimized: false, isFocused: true }
    }))
    // Unfocus others
    setWinStates(prev => {
      const next = { ...prev }
      Object.keys(next).forEach(k => {
        if (k !== id) next[k as WinId] = { ...next[k as WinId], isFocused: false }
      })
      next[id] = { isOpen: true, isMinimized: false, isFocused: true }
      return next
    })
    const cfg = WINDOW_CONFIGS.find(w => w.id === id)
    if (cfg) setToast(`${cfg.icon} ${cfg.title} opened`)
  }, [])

  const closeWindow = useCallback((id: WinId) => {
    setWinStates(prev => ({
      ...prev,
      [id]: { isOpen: false, isMinimized: false, isFocused: false }
    }))
  }, [])

  const minimizeWindow = useCallback((id: WinId) => {
    setWinStates(prev => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true, isFocused: false }
    }))
  }, [])

  const focusWindow = useCallback((id: WinId) => {
    setWinStates(prev => {
      const next = { ...prev }
      Object.keys(next).forEach(k => {
        next[k as WinId] = { ...next[k as WinId], isFocused: false }
      })
      next[id] = { ...next[id], isFocused: true }
      return next
    })
  }, [])

  const handleTaskClick = useCallback((id: string) => {
    const wid = id as WinId
    setWinStates(prev => {
      const state = prev[wid]
      if (state.isMinimized || !state.isOpen) {
        // Restore
        const next = { ...prev }
        Object.keys(next).forEach(k => { next[k as WinId] = { ...next[k as WinId], isFocused: false } })
        next[wid] = { isOpen: true, isMinimized: false, isFocused: true }
        return next
      } else {
        // Focus
        const next = { ...prev }
        Object.keys(next).forEach(k => { next[k as WinId] = { ...next[k as WinId], isFocused: false } })
        next[wid] = { ...next[wid], isFocused: true }
        return next
      }
    })
  }, [])

  const openAll = useCallback(() => {
    WINDOW_CONFIGS.forEach((cfg, i) => {
      setTimeout(() => openWindow(cfg.id), i * 80)
    })
  }, [openWindow])

  // ─── JEEP DOUBLE-CLICK ───
  const handleJeepDblClick = useCallback(() => {
    if (jeepDriving) return
    setJeepDriving(true)
    setToast('🚗 Vroom vroom! Desert drive activated!')

    let offset = 0
    const animate = () => {
      offset += 7
      setJeepOffset(offset)
      if (offset < window.innerWidth * 0.55) {
        jeepAnimRef.current = requestAnimationFrame(animate)
      } else {
        // Reset
        setTimeout(() => {
          setJeepOffset(-window.innerWidth * 0.6)
          setTimeout(() => {
            setJeepOffset(0)
            setJeepDriving(false)
          }, 100)
        }, 500)
      }
    }
    jeepAnimRef.current = requestAnimationFrame(animate)
  }, [jeepDriving])

  // Auto-open 3 windows on load
  useEffect(() => {
    const timers = [
      setTimeout(() => openWindow('about'), 800),
      setTimeout(() => openWindow('projects'), 1100),
      setTimeout(() => openWindow('skills'), 1400),
    ]
    return () => timers.forEach(clearTimeout)
  }, [openWindow])

  // Desktop icons config
  const icons: { id: WinId; icon: string; label: string }[] = [
    { id: 'about',      icon: '👤', label: 'About Me' },
    { id: 'skills',     icon: '⚡', label: 'Skills' },
    { id: 'experience', icon: '💼', label: 'Experience' },
    { id: 'projects',   icon: '🚀', label: 'Projects' },
    { id: 'education',  icon: '🎓', label: 'Education' },
    { id: 'research',   icon: '📜', label: 'Certification' },
    // { id: 'gallery',    icon: '📸', label: 'Gallery' },
    { id: 'contact',    icon: '📬', label: 'Contact' },
  ]

  return (
    <div id="desktop">
      {/* Background */}
      <div className="sky-bg" />
      <Stars />

      {/* Dune silhouette */}
      <div className="dunes">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0 180 L0 130 Q120 60 240 100 Q360 140 480 90 Q600 40 720 80 Q840 120 960 70 Q1080 20 1200 65 Q1320 110 1440 80 L1440 180 Z" fill="#1a1008" opacity="0.9" />
          <path d="M0 180 L0 145 Q80 100 200 120 Q320 140 440 110 Q560 80 680 115 Q800 150 920 120 Q1040 90 1160 110 Q1280 130 1440 105 L1440 180 Z" fill="#0d0b06" opacity="0.95" />
        </svg>
      </div>

      {/* Big Jeep */}
      <div
        className="jeep-wrap"
        style={{
          transform: `translateX(calc(-50% + ${jeepOffset}px)) translateY(${jeepDriving ? Math.sin(jeepOffset / 10) * 4 : 0}px)`,
          animation: jeepDriving ? 'none' : 'jeepBounce 4s ease-in-out infinite',
          filter: jeepDriving ? 'drop-shadow(0 0 40px rgba(232,201,122,0.8))' : undefined,
          transition: jeepOffset < 0 ? 'none' : undefined,
        }}
        onDoubleClick={handleJeepDblClick}
        title="Double-click to drive!"
      >
        {/* Dust particles */}
        {[
          { left: '-10px', bottom: '20px', w: 8, h: 8, dur: '2.5s', del: '0s', dx: '-70px', dy: '-40px' },
          { left: '-20px', bottom: '10px', w: 5, h: 5, dur: '3s',   del: '0.5s', dx: '-100px', dy: '-30px' },
          { left: '-30px', bottom: '25px', w: 6, h: 6, dur: '2s',   del: '1s',  dx: '-50px',  dy: '-55px' },
        ].map((p, i) => (
          <div
            key={i}
            className="dust-particle"
            style={{
              left: p.left, bottom: p.bottom,
              width: p.w, height: p.h,
              ['--dur' as string]: p.dur,
              ['--del' as string]: p.del,
              ['--dx' as string]: p.dx,
              ['--dy' as string]: p.dy,
            }}
          />
        ))}
        <JeepSVG />
      </div>

      {/* Welcome bubble */}
      <div className="welcome-bubble">
        🏜️ Click icons to open windows · Double-click Jeep to drive!
      </div>

      {/* Desktop Icons */}
      <div className="desktop-icons">
        {icons.map(ic => (
          <div
            key={ic.id}
            className={`icon ${winStates[ic.id].isOpen ? 'active' : ''}`}
            onClick={() => openWindow(ic.id)}
            onDoubleClick={() => openWindow(ic.id)}
          >
            <div className="icon-img">{ic.icon}</div>
            <div className="icon-label">{ic.label}</div>
          </div>
        ))}
      </div>

      {/* Windows */}
      {WINDOW_CONFIGS.map(cfg => {
        const state = winStates[cfg.id]
        const isVisible = state.isOpen && !state.isMinimized
        return (
          <Window
            key={cfg.id}
            id={cfg.id}
            title={cfg.title}
            icon={cfg.icon}
            isOpen={isVisible}
            isFocused={state.isFocused}
            defaultPos={cfg.defaultPos}
            defaultSize={cfg.defaultSize}
            onClose={(id) => closeWindow(id as WinId)}
            onMinimize={(id) => minimizeWindow(id as WinId)}
            onFocus={(id) => focusWindow(id as WinId)}
          >
            {cfg.content}
          </Window>
        )
      })}

      {/* Taskbar */}
      <Taskbar
        windows={WINDOW_CONFIGS.map(cfg => ({
          id: cfg.id,
          title: cfg.title,
          icon: cfg.icon,
          isOpen: winStates[cfg.id].isOpen,
          isMinimized: winStates[cfg.id].isMinimized,
        }))}
        onTaskClick={handleTaskClick}
        onStartClick={openAll}
      />

      {/* Toast */}
      {toast && <Toast message={toast} onDone={() => setToast(null)} />}
    </div>
  )
}

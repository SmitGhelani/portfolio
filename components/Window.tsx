'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

interface WindowProps {
  id: string
  title: string
  icon: string
  isOpen: boolean
  isFocused: boolean
  defaultPos: { x: number; y: number }
  defaultSize: { w: number; h: number }
  onClose: (id: string) => void
  onMinimize: (id: string) => void
  onFocus: (id: string) => void
  children: React.ReactNode
}

export default function Window({
  id, title, icon, isOpen, isFocused,
  defaultPos, defaultSize,
  onClose, onMinimize, onFocus, children
}: WindowProps) {
  const winRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(defaultPos)
  const [size, setSize] = useState(defaultSize)
  const [maximized, setMaximized] = useState(false)
  const [prevState, setPrevState] = useState({ pos: defaultPos, size: defaultSize })
  const [visible, setVisible] = useState(false)

  // Animate open
  useEffect(() => {
    if (isOpen) {
      setVisible(false)
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
    }
  }, [isOpen])

  // Drag
  const dragState = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null)

  const onBarMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('win-btn')) return
    if (maximized) return
    onFocus(id)
    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y
    }
    e.preventDefault()
  }, [id, maximized, onFocus, pos])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragState.current) return
      const dx = e.clientX - dragState.current.startX
      const dy = e.clientY - dragState.current.startY
      setPos({
        x: Math.max(-size.w + 100, Math.min(window.innerWidth - 100, dragState.current.origX + dx)),
        y: Math.max(0, Math.min(window.innerHeight - 96, dragState.current.origY + dy))
      })
    }
    const onUp = () => { dragState.current = null; resizeState.current = null }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
  }, [size.w])

  // Resize
  const resizeState = useRef<{ startX: number; startY: number; origW: number; origH: number } | null>(null)

  const onResizeMouseDown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    resizeState.current = {
      startX: e.clientX,
      startY: e.clientY,
      origW: size.w,
      origH: size.h
    }
  }, [size])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!resizeState.current) return
      setSize({
        w: Math.max(300, resizeState.current.origW + e.clientX - resizeState.current.startX),
        h: Math.max(180, resizeState.current.origH + e.clientY - resizeState.current.startY)
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const toggleMax = () => {
    if (maximized) {
      setPos(prevState.pos)
      setSize(prevState.size)
      setMaximized(false)
    } else {
      setPrevState({ pos, size })
      setPos({ x: 0, y: 0 })
      setSize({ w: window.innerWidth, h: window.innerHeight - 48 })
      setMaximized(true)
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={winRef}
      className={`window open ${isFocused ? 'focused' : ''}`}
      style={{
        left: pos.x,
        top: pos.y,
        width: size.w,
        height: size.h,
        borderRadius: maximized ? 0 : undefined,
        zIndex: isFocused ? 500 : 100,
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(18px)',
        transition: 'opacity 0.22s cubic-bezier(0.34,1.56,0.64,1), transform 0.22s cubic-bezier(0.34,1.56,0.64,1)',
      }}
      onMouseDown={() => onFocus(id)}
    >
      {/* Title bar */}
      <div className="win-bar" onMouseDown={onBarMouseDown}>
        <div className="win-controls">
          <button className="win-btn close" onClick={() => onClose(id)} title="Close" />
          <button className="win-btn minimize" onClick={() => onMinimize(id)} title="Minimize" />
          <button className="win-btn maximize" onClick={toggleMax} title="Maximize" />
        </div>
        <span className="win-icon-sm">{icon}</span>
        <span className="win-title">{title}</span>
      </div>

      {/* Content */}
      <div className="win-body">{children}</div>

      {/* Resize */}
      {!maximized && <div className="resize-handle" onMouseDown={onResizeMouseDown} />}
    </div>
  )
}

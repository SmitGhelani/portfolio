'use client'
import { useEffect, useRef } from 'react'

export default function Stars() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const c = ref.current
    for (let i = 0; i < 90; i++) {
      const s = document.createElement('div')
      s.className = 'star'
      const size = Math.random() * 2.5 + 0.4
      s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*60}%;width:${size}px;height:${size}px;--op:${0.3+Math.random()*0.7};--d:${2+Math.random()*4}s;--delay:${Math.random()*6}s;`
      c.appendChild(s)
    }
  }, [])
  return <div className="stars" ref={ref} />
}

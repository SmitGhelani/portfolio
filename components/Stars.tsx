'use client'

import { useEffect, useRef } from 'react'

export default function Stars() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const container = ref.current
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      const size = Math.random() * 2.5 + 0.5
      star.style.cssText = `
        left:${Math.random() * 100}%;
        top:${Math.random() * 55}%;
        width:${size}px;
        height:${size}px;
        --op:${0.3 + Math.random() * 0.7};
        --d:${2 + Math.random() * 4}s;
        --delay:${Math.random() * 5}s;
      `
      container.appendChild(star)
    }
  }, [])

  return <div className="stars" ref={ref} />
}

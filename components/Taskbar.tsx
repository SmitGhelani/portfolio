'use client'
import { useEffect, useState } from 'react'

interface TaskbarProps {
  windows: Array<{ id:string; title:string; icon:string; isOpen:boolean; isMinimized:boolean }>
  onTaskClick: (id:string) => void
  onStartClick: () => void
}

export default function Taskbar({ windows, onTaskClick, onStartClick }: TaskbarProps) {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}))
      setDate(now.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'}))
    }
    tick()
    const id = setInterval(tick,1000)
    return ()=>clearInterval(id)
  }, [])

  const visible = windows.filter(w => w.isOpen || w.isMinimized)

  return (
    <div className="taskbar">
      <button className="taskbar-start" onClick={onStartClick} title="Unfurl all sails">☠️</button>
      <div className="taskbar-items">
        {visible.map(w => (
          <button
            key={w.id}
            className={`taskbar-btn ${w.isOpen && !w.isMinimized ? 'active' : ''}`}
            onClick={()=>onTaskClick(w.id)}
          >
            <span style={{fontSize:13}}>{w.icon}</span>
            {w.title}
          </button>
        ))}
      </div>
      <div className="taskbar-clock">
        <div>{time}</div>
        <div style={{fontSize:9,opacity:0.6}}>{date}</div>
      </div>
    </div>
  )
}

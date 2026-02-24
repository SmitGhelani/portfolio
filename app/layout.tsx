import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Smit Ghelani — Captain of Code",
  description: 'AI Engineer & DevOps Captain sailing the digital seas from Surat, Gujarat',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Pirata+One&family=IM+Fell+English:ital@0;1&family=IBM+Plex+Mono:wght@400;500;700&family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}

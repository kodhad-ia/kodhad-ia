"use client"

import { useEffect, useState } from 'react'

export default function Splash() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const displayDuration = 2500 // ms
    const fadeDuration = 500 // ms

    const t1 = setTimeout(() => setFadeOut(true), displayDuration)
    const t2 = setTimeout(() => setVisible(false), displayDuration + fadeDuration)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-black transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden="true"
    >
      <h1 className="splash-title text-white text-5xl sm:text-6xl font-extrabold tracking-tight">Kodhad IA</h1>
    </div>
  )
}

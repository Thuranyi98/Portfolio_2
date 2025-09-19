"use client"
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

type Props = {
  children: React.ReactNode
}

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      lerp: 0.14,
      wheelMultiplier: 0.75,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}



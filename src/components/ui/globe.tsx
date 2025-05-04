import { useRef, useEffect } from 'react'
import * as THREE from 'three'

declare global {
  interface Window {
    VANTA: any
  }
}

type VantaEffect = {
  destroy: () => void;
}

const GlobeBackground = () => {
  const vantaRef = useRef(null)
  const effectRef = useRef<VantaEffect | null>(null)

  useEffect(() => {
    const loadScript = async () => {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.globe.min.js'
      script.async = true
      script.onload = () => {
        if (window.VANTA && window.VANTA.GLOBE && !effectRef.current) {
          effectRef.current = window.VANTA.GLOBE({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3f82ff,
            backgroundColor: 0x111116
          })
        }
      }
      document.body.appendChild(script)
    }

    loadScript()

    return () => {
      if (effectRef.current?.destroy) effectRef.current.destroy()
    }
  }, [])

  return <div ref={vantaRef} style={{ position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0, }} />
}

export default GlobeBackground

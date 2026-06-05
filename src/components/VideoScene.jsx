import { useRef, useEffect, useMemo, memo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { HERO_1, HERO_2, HERO_3 } from '../config/media'

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uLoaded;
  varying vec2 vUv;

  float rand(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    float frame = floor(uTime * 24.0) / 24.0;
    float grain = rand(vUv + fract(frame * 0.137)) * 0.06;
    vec3 color = vec3(grain - 0.03);

    vec2 vig = (vUv - 0.5) * vec2(1.0, 1.5);
    float vignette = dot(vig, vig) * 1.2;
    color -= clamp(vignette, 0.0, 1.0) * 0.55;

    float darken = 0.30 * uLoaded;
    gl_FragColor = vec4(color - darken, uLoaded * 0.72);
  }
`

function GrainOverlay({ loaded }) {
  const meshRef = useRef()
  const { viewport } = useThree()
  const loadedRef = useRef(0)
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uLoaded: { value: 0 } }), [])

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime()
    if (loadedRef.current < 1 && loaded.current) {
      loadedRef.current = Math.min(1, loadedRef.current + 0.012)
      uniforms.uLoaded.value = loadedRef.current
    }
  })

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} transparent depthWrite={false} />
    </mesh>
  )
}

const MID1 = 1 / 3   // hero.mp4  → hero2.mp4 crossfade center
const MID2 = 2 / 3   // hero2.mp4 → hero3.mp4 crossfade center
const FADE = 0.04

export default memo(function VideoScene({ scrollProgress }) {
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)
  const video3Ref = useRef(null)
  const loadedRef = useRef(false)

  useEffect(() => {
    const tick = () => {
      const p = scrollProgress.current
      const v1 = video1Ref.current
      const v2 = video2Ref.current
      const v3 = video3Ref.current

      // hero.mp4: full until first crossfade
      const op1 = p < MID1 - FADE / 2 ? 1 : p > MID1 + FADE / 2 ? 0 : 1 - (p - (MID1 - FADE / 2)) / FADE

      // hero2.mp4: fades in at MID1, fades out at MID2
      const fadeIn2  = p < MID1 - FADE / 2 ? 0 : p > MID1 + FADE / 2 ? 1 : (p - (MID1 - FADE / 2)) / FADE
      const fadeOut2 = p < MID2 - FADE / 2 ? 1 : p > MID2 + FADE / 2 ? 0 : 1 - (p - (MID2 - FADE / 2)) / FADE
      const op2 = Math.min(fadeIn2, fadeOut2)

      // hero3.mp4: fades in at MID2
      const op3 = p < MID2 - FADE / 2 ? 0 : p > MID2 + FADE / 2 ? 1 : (p - (MID2 - FADE / 2)) / FADE

      if (v1) {
        v1.style.opacity = op1
        if (v1.readyState >= 2 && v1.duration) {
          const t = Math.min(1, p / MID1)
          if (Math.abs(v1.currentTime - t * v1.duration) > 0.016) v1.currentTime = t * v1.duration
          if (!loadedRef.current) loadedRef.current = true
        }
      }

      if (v2) {
        v2.style.opacity = op2
        if (v2.readyState >= 2 && v2.duration) {
          const t = Math.max(0, Math.min(1, (p - MID1) / (MID2 - MID1)))
          if (Math.abs(v2.currentTime - t * v2.duration) > 0.016) v2.currentTime = t * v2.duration
        }
      }

      if (v3) {
        v3.style.opacity = op3
        if (v3.readyState >= 2 && v3.duration) {
          const t = Math.max(0, Math.min(1, (p - MID2) / (1 - MID2)))
          if (Math.abs(v3.currentTime - t * v3.duration) > 0.016) v3.currentTime = t * v3.duration
        }
      }

      rafId = requestAnimationFrame(tick)
    }
    let rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [scrollProgress])

  const videoStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
    transition: 'opacity 0.1s linear',
  }

  return (
    <>
      <video ref={video1Ref} src={HERO_1} muted playsInline preload="auto" style={{ ...videoStyle, opacity: 1 }} />
      <video ref={video2Ref} src={HERO_2} muted playsInline preload="auto" style={{ ...videoStyle, opacity: 0 }} />
      <video ref={video3Ref} src={HERO_3} muted playsInline preload="auto" style={{ ...videoStyle, opacity: 0 }} />

      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], near: -100, far: 100 }}
        gl={{ antialias: false, alpha: true }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        <GrainOverlay loaded={loadedRef} />
      </Canvas>
    </>
  )
})

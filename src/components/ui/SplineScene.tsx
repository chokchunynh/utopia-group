'use client'

import { Suspense, lazy, Component, ReactNode } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const fallback = (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
    </div>
  )

  return (
    <SplineErrorBoundary fallback={<div className="w-full h-full" />}>
      <Suspense fallback={fallback}>
        <Spline scene={scene} className={className} />
      </Suspense>
    </SplineErrorBoundary>
  )
}

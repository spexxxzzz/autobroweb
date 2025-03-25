'use client'

import { useEffect, useRef } from 'react'

export default function BrainSignals() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Node class
    class Node {
      x: number
      y: number
      connections: Node[]
      signalTime: number
      active: boolean

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.connections = []
        this.signalTime = 0
        this.active = false
      }

      connect(node: Node) {
        this.connections.push(node)
      }
    }

    // Create nodes
    const nodes: Node[] = []
    const numNodes = 50
    const margin = 100

    for (let i = 0; i < numNodes; i++) {
      const x = margin + Math.random() * (canvas.width - margin * 2)
      const y = margin + Math.random() * (canvas.height - margin * 2)
      nodes.push(new Node(x, y))
    }

    // Connect nodes
    nodes.forEach(node => {
      const nearestNodes = nodes
        .filter(n => n !== node)
        .sort((a, b) => {
          const distA = Math.hypot(a.x - node.x, a.y - node.y)
          const distB = Math.hypot(b.x - node.x, b.y - node.y)
          return distA - distB
        })
        .slice(0, 3)

      nearestNodes.forEach(nearNode => {
        node.connect(nearNode)
      })
    })

    // Animation
    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Trigger random signals
      if (Math.random() < 0.02) {
        const node = nodes[Math.floor(Math.random() * nodes.length)]
        node.active = true
        node.signalTime = time
      }

      // Draw connections and signals
      nodes.forEach(node => {
        node.connections.forEach(connection => {
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connection.x, connection.y)
          ctx.strokeStyle = 'rgba(96, 165, 250, 0.2)'
          ctx.stroke()

          if (node.active) {
            const progress = (time - node.signalTime) * 0.002
            if (progress < 1) {
              const signalX = node.x + (connection.x - node.x) * progress
              const signalY = node.y + (connection.y - node.y) * progress

              ctx.beginPath()
              ctx.arc(signalX, signalY, 3, 0, Math.PI * 2)
              ctx.fillStyle = 'rgba(74, 222, 128, 0.8)'
              ctx.fill()

              if (progress > 0.9) {
                connection.active = true
                connection.signalTime = time
              }
            } else {
              node.active = false
            }
          }
        })
      })

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = node.active ? '#4ade80' : '#60a5fa'
        ctx.fill()
      })

      time++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
} 
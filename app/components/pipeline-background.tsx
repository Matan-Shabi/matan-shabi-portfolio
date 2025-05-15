"use client"

import { useEffect, useRef } from "react"

export default function PipelineBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Pipeline nodes
    class Node {
      x: number
      y: number
      radius: number
      color: string
      pulseSpeed: number
      pulseSize: number
      maxPulseSize: number
      connections: Node[]

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.pulseSpeed = 0.02 + Math.random() * 0.03
        this.pulseSize = 0
        this.maxPulseSize = radius * 2
        this.connections = []
      }

      update() {
        this.pulseSize += this.pulseSpeed
        if (this.pulseSize > this.maxPulseSize) {
          this.pulseSize = 0
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw pulse
        if (this.pulseSize > 0) {
          const gradient = ctx.createRadialGradient(
            this.x,
            this.y,
            this.radius,
            this.x,
            this.y,
            this.radius + this.pulseSize,
          )
          gradient.addColorStop(0, this.color)
          gradient.addColorStop(1, "rgba(255, 153, 0, 0)")

          ctx.beginPath()
          ctx.fillStyle = gradient
          ctx.arc(this.x, this.y, this.radius + this.pulseSize, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw node
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      connect(node: Node) {
        if (!this.connections.includes(node)) {
          this.connections.push(node)
        }
      }
    }

    // Data packet
    class DataPacket {
      startNode: Node
      endNode: Node
      progress: number
      speed: number
      size: number
      color: string
      completed: boolean

      constructor(startNode: Node, endNode: Node) {
        this.startNode = startNode
        this.endNode = endNode
        this.progress = 0
        this.speed = 0.005 + Math.random() * 0.01
        this.size = 2 + Math.random() * 3
        this.color = Math.random() > 0.7 ? "#FF5757" : "#FF9900"
        this.completed = false
      }

      update() {
        this.progress += this.speed
        if (this.progress >= 1) {
          this.completed = true
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const x = this.startNode.x + (this.endNode.x - this.startNode.x) * this.progress
        const y = this.startNode.y + (this.endNode.y - this.startNode.y) * this.progress

        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(x, y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create nodes along the sides of the page
    const nodes: Node[] = []
    const packets: DataPacket[] = []

    const createNodes = () => {
      nodes.length = 0

      // Number of nodes based on page height
      const nodeCount = Math.max(10, Math.floor(canvas.height / 300))

      // Left side nodes
      for (let i = 0; i < nodeCount; i++) {
        const y = (canvas.height / (nodeCount - 1)) * i
        const x = 50 + Math.random() * 100
        const radius = 3 + Math.random() * 2
        const color = Math.random() > 0.7 ? "#FF5757" : "#FF9900"

        nodes.push(new Node(x, y, radius, color))
      }

      // Right side nodes
      for (let i = 0; i < nodeCount; i++) {
        const y = (canvas.height / (nodeCount - 1)) * i
        const x = canvas.width - (50 + Math.random() * 100)
        const radius = 3 + Math.random() * 2
        const color = Math.random() > 0.7 ? "#FF5757" : "#FF9900"

        nodes.push(new Node(x, y, radius, color))
      }

      // Create connections between nodes
      nodes.forEach((node) => {
        // Find 2-3 closest nodes to connect to
        const otherNodes = [...nodes].filter((n) => n !== node)
        otherNodes.sort((a, b) => {
          const distA = Math.sqrt(Math.pow(a.x - node.x, 2) + Math.pow(a.y - node.y, 2))
          const distB = Math.sqrt(Math.pow(b.x - node.x, 2) + Math.pow(b.y - node.y, 2))
          return distA - distB
        })

        // Connect to 2-3 closest nodes
        const connectCount = 2 + Math.floor(Math.random() * 2)
        for (let i = 0; i < Math.min(connectCount, otherNodes.length); i++) {
          node.connect(otherNodes[i])
        }
      })
    }

    createNodes()
    window.addEventListener("resize", createNodes)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.lineWidth = 1
      nodes.forEach((node) => {
        node.connections.forEach((connectedNode) => {
          ctx.beginPath()
          ctx.strokeStyle = "rgba(77, 94, 119, 0.2)"
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()
        })
      })

      // Update and draw packets
      packets.forEach((packet, index) => {
        packet.update()
        packet.draw(ctx)

        // Remove completed packets
        if (packet.completed) {
          packets.splice(index, 1)
        }
      })

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw(ctx)
      })

      // Create new packets randomly
      if (Math.random() < 0.05 && packets.length < 50) {
        const randomNodeIndex = Math.floor(Math.random() * nodes.length)
        const startNode = nodes[randomNodeIndex]

        if (startNode.connections.length > 0) {
          const endNodeIndex = Math.floor(Math.random() * startNode.connections.length)
          const endNode = startNode.connections[endNodeIndex]

          packets.push(new DataPacket(startNode, endNode))
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", createNodes)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-10 z-0" />
}

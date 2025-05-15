"use client"

import { useEffect, useRef } from "react"

export default function DevOpsAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Colors
    const colors = {
      plan: "#FF9900",
      code: "#FF5757",
      build: "#3F8FFC",
      test: "#36D399",
      deploy: "#9B5DE5",
      operate: "#00B8D9",
      monitor: "#FF9900",
      security: "#FF0000",
      background: "#232F3E",
      text: "#FFFFFF",
      line: "#4D5E77",
    }

    // DevOps stages
    const stages = [
      { name: "PLAN", color: colors.plan, x: 0, y: 0, radius: 0, progress: 0 },
      { name: "CODE", color: colors.code, x: 0, y: 0, radius: 0, progress: 0 },
      { name: "BUILD", color: colors.build, x: 0, y: 0, radius: 0, progress: 0 },
      { name: "TEST", color: colors.test, x: 0, y: 0, radius: 0, progress: 0 },
      { name: "DEPLOY", color: colors.deploy, x: 0, y: 0, radius: 0, progress: 0 },
      { name: "OPERATE", color: colors.operate, x: 0, y: 0, radius: 0, progress: 0 },
      { name: "MONITOR", color: colors.monitor, x: 0, y: 0, radius: 0, progress: 0 },
    ]

    // Security elements
    const securityElements = [
      { name: "SEC", x: 0, y: 0, radius: 0, active: false, delay: 30 },
      { name: "SEC", x: 0, y: 0, radius: 0, active: false, delay: 120 },
      { name: "SEC", x: 0, y: 0, radius: 0, active: false, delay: 210 },
    ]

    // Animation variables
    let time = 0
    let activeStage = 0
    let securityPulse = 0

    // Calculate positions
    const calculatePositions = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.35
      const stageRadius = radius * 0.15

      stages.forEach((stage, i) => {
        const angle = (i * 2 * Math.PI) / stages.length - Math.PI / 2
        stage.x = centerX + radius * Math.cos(angle)
        stage.y = centerY + radius * Math.sin(angle)
        stage.radius = stageRadius
      })

      // Position security elements between stages
      securityElements.forEach((sec, i) => {
        const baseIndex = (i * 2) % stages.length
        const nextIndex = (baseIndex + 1) % stages.length
        sec.x = (stages[baseIndex].x + stages[nextIndex].x) / 2
        sec.y = (stages[baseIndex].y + stages[nextIndex].y) / 2
        sec.radius = stageRadius * 0.6
      })
    }

    // Draw function
    const draw = () => {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connecting lines
      ctx.lineWidth = 3
      ctx.strokeStyle = colors.line

      // Draw infinity loop
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const loopWidth = Math.min(canvas.width, canvas.height) * 0.35
      const loopHeight = loopWidth * 0.5

      ctx.beginPath()
      ctx.moveTo(centerX - loopWidth, centerY)
      ctx.bezierCurveTo(centerX - loopWidth, centerY - loopHeight, centerX, centerY - loopHeight, centerX, centerY)
      ctx.bezierCurveTo(
        centerX,
        centerY + loopHeight,
        centerX + loopWidth,
        centerY + loopHeight,
        centerX + loopWidth,
        centerY,
      )
      ctx.bezierCurveTo(centerX + loopWidth, centerY - loopHeight, centerX, centerY - loopHeight, centerX, centerY)
      ctx.bezierCurveTo(
        centerX,
        centerY + loopHeight,
        centerX - loopWidth,
        centerY + loopHeight,
        centerX - loopWidth,
        centerY,
      )
      ctx.stroke()

      // Draw flow particle
      const t = (time % 300) / 300
      let particleX, particleY

      if (t < 0.25) {
        // First quarter of the infinity loop
        const tt = t * 4
        particleX = centerX - loopWidth + loopWidth * tt
        particleY = centerY - loopHeight * Math.sin(Math.PI * tt)
      } else if (t < 0.5) {
        // Second quarter
        const tt = (t - 0.25) * 4
        particleX = centerX + loopWidth * (1 - tt)
        particleY = centerY + loopHeight * Math.sin(Math.PI * tt)
      } else if (t < 0.75) {
        // Third quarter
        const tt = (t - 0.5) * 4
        particleX = centerX - loopWidth * tt
        particleY = centerY + loopHeight * Math.sin(Math.PI * tt)
      } else {
        // Fourth quarter
        const tt = (t - 0.75) * 4
        particleX = centerX - loopWidth + loopWidth * tt
        particleY = centerY - loopHeight * Math.sin(Math.PI * tt)
      }

      // Draw flow particle
      ctx.fillStyle = "#FF9900"
      ctx.beginPath()
      ctx.arc(particleX, particleY, 8, 0, Math.PI * 2)
      ctx.fill()

      // Draw stages
      stages.forEach((stage, i) => {
        // Determine if this stage is active
        const stageTime = (time % 300) / 300
        const stageIndex = Math.floor(stageTime * stages.length)
        const isActive = i === stageIndex

        // Draw connecting lines between stages
        ctx.strokeStyle = colors.line
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(stage.x, stage.y)
        const nextStage = stages[(i + 1) % stages.length]
        ctx.lineTo(nextStage.x, nextStage.y)
        ctx.stroke()

        // Draw stage circle
        ctx.fillStyle = isActive ? stage.color : colors.background
        ctx.strokeStyle = stage.color
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.arc(stage.x, stage.y, stage.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // Draw stage name
        ctx.fillStyle = isActive ? colors.background : colors.text
        ctx.font = "bold 14px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(stage.name, stage.x, stage.y)
      })

      // Draw security elements
      securityPulse = (securityPulse + 1) % 120
      securityElements.forEach((sec, i) => {
        const isActive = securityPulse > sec.delay && securityPulse < sec.delay + 20

        // Draw security circle
        ctx.fillStyle = isActive ? colors.security : "rgba(255, 0, 0, 0.2)"
        ctx.strokeStyle = colors.security
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(sec.x, sec.y, sec.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // Draw security text
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 12px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(sec.name, sec.x, sec.y)
      })

      // Draw DevSecOps text
      ctx.fillStyle = "#FFFFFF"
      ctx.font = "bold 24px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("DevSecOps Pipeline", canvas.width / 2, 30)

      // Update animation variables
      time += 1
      activeStage = (activeStage + 1) % stages.length
    }

    // Animation loop
    const animate = () => {
      calculatePositions()
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <canvas
        ref={canvasRef}
        className="w-full max-w-3xl h-[300px] md:h-[400px] bg-gradient-to-br from-[#1A2433] to-[#0F1924] rounded-xl border border-[#FF9900]/20 shadow-lg"
      ></canvas>
    </div>
  )
}

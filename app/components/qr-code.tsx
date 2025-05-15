"use client"

import { useEffect, useRef } from "react"
import QRCodeLib from "qrcode"

export default function QRCode() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const qrData = "https://linkedin.com/in/matan-shabi"

    // Generate QR code to canvas
    QRCodeLib.toCanvas(canvas, qrData, {
      width: 200,
      margin: 1,
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    }, (error) => {
      if (error) {
        console.error("QR Code generation failed:", error)
        return
      }

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Add center logo (orange square)
      const logoSize = 40
      const logoX = (canvas.width - logoSize) / 2
      const logoY = (canvas.height - logoSize) / 2

      ctx.fillStyle = "#FF9900"
      ctx.fillRect(logoX, logoY, logoSize, logoSize)

      // Add text below
      ctx.fillStyle = "#232F3E"
      ctx.font = "bold 12px Arial"
      ctx.textAlign = "center"
      ctx.fillText("SCAN", canvas.width / 2, canvas.height - 20)
      ctx.fillText("ME", canvas.width / 2, canvas.height - 8)
    })
  }, [])

  return (
      <div className="flex flex-col items-center">
        <canvas ref={canvasRef} className="border-4 border-[#FF9900] rounded-lg shadow-lg" />
        <p className="mt-2 text-sm text-gray-400">Scan to connect</p>
      </div>
  )
}

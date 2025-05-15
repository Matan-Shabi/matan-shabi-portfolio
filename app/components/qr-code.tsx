"use client"

import { useEffect, useRef } from "react"

export default function QRCode() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 200
    canvas.height = 200

    // QR code data (URL to your website or LinkedIn profile)
    const qrData = "https://linkedin.com/in/matan-shabi"

    // Generate QR code
    const qrCode = generateQRCode(qrData)

    // Draw QR code
    const cellSize = Math.floor(canvas.width / qrCode.length)
    const margin = Math.floor((canvas.width - cellSize * qrCode.length) / 2)

    // Clear canvas
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw cells
    for (let y = 0; y < qrCode.length; y++) {
      for (let x = 0; x < qrCode[y].length; x++) {
        if (qrCode[y][x]) {
          ctx.fillStyle = "#000000"
          ctx.fillRect(margin + x * cellSize, margin + y * cellSize, cellSize, cellSize)
        }
      }
    }

    // Add AWS logo in the center
    const logoSize = Math.floor(canvas.width * 0.2)
    const logoX = Math.floor((canvas.width - logoSize) / 2)
    const logoY = Math.floor((canvas.height - logoSize) / 2)

    // Draw orange background for logo
    ctx.fillStyle = "#FF9900"
    ctx.fillRect(logoX, logoY, logoSize, logoSize)

    // Add text
    ctx.fillStyle = "#232F3E"
    ctx.font = "bold 10px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("SCAN", canvas.width / 2, canvas.height - 15)
    ctx.fillText("ME", canvas.width / 2, canvas.height - 5)
  }, [])

  // Simple QR code generator (placeholder)
  // In a real application, you would use a proper QR code library
  function generateQRCode(data: string) {
    // This is a simplified placeholder that creates a pattern
    // In a real app, use a library like qrcode.js
    const size = 25
    const qr = Array(size)
      .fill(0)
      .map(() => Array(size).fill(0))

    // Create a simple pattern (not a real QR code)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        // Border pattern
        if ((x < 7 && y < 7) || (x > size - 8 && y < 7) || (x < 7 && y > size - 8)) {
          qr[y][x] = 1
        }
        // Inner border
        else if (x === 7 || y === 7 || x === size - 8 || y === size - 8) {
          qr[y][x] = (x + y) % 2
        }
        // Data pattern (simplified)
        else {
          // Use the data string to influence the pattern
          const charIndex = (x * y) % data.length
          qr[y][x] = data.charCodeAt(charIndex) % 2
        }
      }
    }

    // Add finder patterns
    addFinderPattern(qr, 0, 0)
    addFinderPattern(qr, size - 7, 0)
    addFinderPattern(qr, 0, size - 7)

    return qr
  }

  function addFinderPattern(qr: number[][], x: number, y: number) {
    // Outer square
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (
          i === 0 ||
          i === 6 ||
          j === 0 ||
          j === 6 ||
          (i === 2 && j >= 2 && j <= 4) ||
          (i === 3 && (j === 2 || j === 4)) ||
          (i === 4 && j >= 2 && j <= 4)
        ) {
          qr[y + i][x + j] = 1
        } else {
          qr[y + i][x + j] = 0
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} className="border-4 border-[#FF9900] rounded-lg shadow-lg" width={200} height={200} />
      <p className="mt-2 text-sm text-gray-400">Scan to connect</p>
    </div>
  )
}

"use client"

import { useEffect, useRef } from "react"

export function GeometricShapes() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles
    const particles  = []
    const particleCount = 15

    class Particle {
     

      constructor() { 
        // Distribute particles more evenly across the entire viewport
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 60 + 20
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = this.getRandomColor()
        this.type = Math.random() > 0.5 ? "circle" : "ring"
        this.opacity = Math.random() * 0.5 + 0.2

        // Ensure particles are distributed across the entire viewport
        // by placing them in different quadrants
        const quadrant = Math.floor(Math.random() * 4)
        switch (quadrant) {
          case 0: // top-left
            this.x = Math.random() * (canvas.width / 2)
            this.y = Math.random() * (canvas.height / 2)
            break
          case 1: // top-right
            this.x = canvas.width / 2 + Math.random() * (canvas.width / 2)
            this.y = Math.random() * (canvas.height / 2)
            break
          case 2: // bottom-left
            this.x = Math.random() * (canvas.width / 2)
            this.y = canvas.height / 2 + Math.random() * (canvas.height / 2)
            break
          case 3: // bottom-right
            this.x = canvas.width / 2 + Math.random() * (canvas.width / 2)
            this.y = canvas.height / 2 + Math.random() * (canvas.height / 2)
            break
        }
      }

      getRandomColor() {
        const colors = [
          "rgba(139, 92, 246, 0.7)", // Purple
          "rgba(236, 72, 153, 0.7)", // Pink
          "rgba(34, 211, 238, 0.7)", // Cyan
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges with a small buffer to prevent sticking
        if (this.x > canvas.width - this.size || this.x < this.size) {
          this.speedX = -this.speedX
          // Push away from edge slightly to prevent sticking
          this.x += this.speedX * 2
        }

        if (this.y > canvas.height - this.size || this.y < this.size) {
          this.speedY = -this.speedY
          // Push away from edge slightly to prevent sticking
          this.y += this.speedY * 2
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity

        if (this.type === "circle") {
          // Draw circle with gradient
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
          gradient.addColorStop(0, this.color)
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        } else {
          // Draw ring
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.strokeStyle = this.color
          ctx.lineWidth = 4
          ctx.stroke()
        }

        ctx.restore()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    // Draw initial state before animation starts
    particles.forEach((particle) => {
      particle.draw()
    })

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />
}


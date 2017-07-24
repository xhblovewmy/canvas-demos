class Particles {
  constructor (width, height) {
    this.particles = []
    this.width = width
    this.height = height
  }

  push (particle) {
    let vx = Math.random() * 4 - 2
    let vy = Math.random() * 4 - 2
    particle.setSpeed(vx, vy)
    this.particles.push(particle)
  }

  impactChecking (particle) {
    if (particle.x > this.width || particle.x <= 0) {
      particle.vx = -particle.vx
    }
    if (particle.y > this.height || particle.y <= 0) {
      particle.vy = -particle.vy
    }
  }

  drawLines (context) {
    for (var i = 0; i < this.particles.length; i++) {
      for (var j = i + 1; j < this.particles.length; j++) {
        let p1 = this.particles[i]
        let p2 = this.particles[j]
        var color = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
        color.addColorStop(0, p1.color)
        color.addColorStop(1, p2.color)
        context.strokeStyle = color
        if (p1.circleCollision(p2)) {
          context.beginPath()
          context.moveTo(p1.x, p1.y)
          context.lineTo(p2.x, p2.y)
          context.stroke()
        }
      }
    }
  }
  render (context) {
    this.drawLines(context)
    this.particles.forEach(particle => {
      this.impactChecking(particle)
      particle.render(ctx)
    })
  }
}
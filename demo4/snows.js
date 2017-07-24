class Snow {
  constructor (x, y, size) {
    this.x = x
    this.y = y
    this.size = size
    this.rotate = 0
    this.active = true
  }
  animate () {
    this.y += Math.random() * 2 + 1
    this.rotate += Math.PI / 60
    if (!this.active && Math.random() > 0.99) {
      this.x = Math.random() * 1400 + 200
      this.y = Math.random() * 10 + 100
      this.size = Math.random() * 5 + 5
      this.active = true
    }
  }
  render (context) {
    if (!this.active) return
    context.save()
    context.translate(this.x, this.y)
    context.rotate(this.rotate)
    for(var i = 0; i < 6; i++) {
      context.beginPath()
      context.lineTo(0, 0)
      context.lineTo(0, -this.size)
      context.stroke()

      context.save()
      context.translate(0, -this.size * 0.75)
      for (var j = 0; j < 6; j++) {
        context.beginPath()
        context.lineTo(0, 0)
        context.lineTo(0, -this.size / 4)
        context.stroke()
        context.rotate(Math.PI / 3)
      }
      context.restore()
      context.rotate(Math.PI / 3)
    }
    context.restore()
  }
}
class Snows {
  constructor (count, width, height) {
    this.count = count
    this.width = width
    this.height = height
    this.snows = []
    for (var i = 0; i < count; i++) {
      let x = Math.random() * 1400 + 200
      let y = Math.random() * 600 + 100
      let size = Math.random() * 5 + 5
      this.snows.push(new Snow(x, y, size))
    }
  }

  render (context) {
    context.save()
    this.snows.forEach(snow => {
      if (snow.y > this.height) {
        snow.active = false
      }
      snow.animate()
      snow.render(context)
    })
    context.restore()
  }
}
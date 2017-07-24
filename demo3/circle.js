class Circle {
  constructor (x, y, radius, color = '#f44336') {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.scaleX = 1
    this.scaleY = 1
  }
  render (context) {
    context.save()
    context.scale(this.scaleX, this.scaleY)
    context.fillStyle = this.color
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    context.closePath()
    context.fill()
    context.restore()
  }
}
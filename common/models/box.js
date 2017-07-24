class Box {
  constructor (x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.scaleX = 1
    this.scaleY = 1
  }
  render (context) {
    context.save()
    context.scale(this.scaleX, this.scaleY)
    context.fillStyle = this.color
    context.beginPath()
    context.rect(this.x, this.y, this.width, this.height)
    context.closePath()
    context.fill()
    context.restore()
  }
}
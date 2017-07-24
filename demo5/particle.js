let  colors = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722'
]
let getRandomColor = () => {
  let index = ~~(Math.random() * colors.length)
  return colors[index]
}
class Particle {
  constructor (x, y, radius, vx = 0, vy = 0, color = getRandomColor()) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.radius = radius
    this.color = color
    this.scaleX = 1
    this.scaleY = 1
  }
  setSpeed (vx, vy) {
    this.vx = vx
    this.vy = vy
  }
  circleCollision (particle) {
    let distance = utils.distance(this, particle)
    return distance - this.radius - particle.radius > 0 && distance - this.radius - particle.radius < 100
  }
  render (context) {
    this.x += this.vx
    this.y += this.vy
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
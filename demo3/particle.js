 colors = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722'
  ]
class Particle {
  constructor (x, y, type = 1) {
    let color = colors[Math.floor(Math.random() * colors.length)]
    this.base = {x, y, color}
    let rx = Math.floor(Math.random() * 1000 + 200)
    let ry = Math.floor(Math.random() * 600 + 100)
    if ( type === 1 ) {
      this.point = new Circle(rx, ry, 5)
    }
  }
  calcDistance(x1, y1, x2, y2) {
    let res =  (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)
    return Math.sqrt(res)
  }
  render (context) {
    let {x, y, color} = this.base
    let distance = 10
    let speed = 5
    this.point.color = colors[Math.floor(Math.random() * colors.length)]
    this.point.radius = Math.floor(Math.random() * 6)
    if (this.calcDistance(x, y, this.point.x, this.point.y) <= distance) {
      this.point.x = x
      this.point.y = y
      this.point.radius = 2
      this.point.color = color
    } else if (this.point.x < x) {
      let angle = Math.atan((this.point.y - y) / (this.point.x - x))
      this.point.x += (speed * Math.cos(angle))
      this.point.y += (speed * Math.sin(angle))
    } else {
       let angle = Math.atan((this.point.y - y) / (this.point.x - x))
      this.point.x -= (speed * Math.cos(angle))
      this.point.y -= (speed * Math.sin(angle))
    }
    this.point.render(context)
  }
}
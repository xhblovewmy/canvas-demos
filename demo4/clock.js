class Clock {
  constructor (x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius || 100
  }
  drawCircle (context) {
    context.save()
    context.translate(this.x, this.y)
    context.beginPath()
    context.arc(0, 0, this.radius, 0, 2 * Math.PI)
    context.closePath()
    context.stroke()
    context.restore()
  }
  drawScales (context) {
    let sw = 8
    let sh = 20
    context.save()
    context.translate(this.x, this.y)
    for(var i = 1; i <= 12; i++) {
      context.save()
      context.rotate(Math.PI / 6 * i)
      context.fillRect(-(sw / 2), -this.radius, sw, sh)
      context.fillText(i, -(sw / 2), -this.radius + sh + 15)
      context.restore()
    }
    context.restore()
  }
  drawCenter (context) {
    context.save()
    context.translate(this.x, this.y)
    context.beginPath()
    context.arc(0, 0, this.radius / 15, 0, 2 * Math.PI)
    context.closePath()
    context.fill()  
    context.restore()
  }
  drawPointer (context, loc, w, h) {
    let angle = Math.PI * 2 * (loc / 60)
    context.save()
    context.translate(this.x, this.y)
    context.rotate(angle)
    context.fillRect(-(w / 2), -h, w, h)
    context.restore()
  }
  drawPointers (context) {
    let date = new Date()
    let [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    let [hw, hh] = [8, 50]
    let [mw, mh] = [4, 60]
    let [sw, sh] = [2, 70]
    this.drawPointer(context, (hours % 12) * 5 + (minutes / 60) * 5, hw, hh) 
    this.drawPointer(context, minutes, mw, mh) 
    this.drawPointer(context, seconds, sw, sh) 
  }
  render (context) {
    this.drawCircle(context)
    this.drawScales(context)
    this.drawPointers(context)
    this.drawCenter(context)
  }
}
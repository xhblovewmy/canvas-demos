const canvas = document.querySelector('#canvas')
const winWidth = document.documentElement.clientWidth
const winHeight = document.documentElement.clientHeight

canvas.width = winWidth
canvas.height = winHeight

const context = canvas.getContext('2d')

let particles = [] // 粒子集合

function renderScene () {
  window.requestAnimationFrame(renderScene)
  // setTimeout(renderScene, 2000)
  context.clearRect(0, 0, canvas.width, canvas.height)
  // 获取粒子
  if (particles.length === 0) {
    let text = '饿了么，和你一起拼！'
    context.font = '180px serif'
    context.fillText(text, 80, 550)
    let _data = context.getImageData(0, 0, canvas.width, canvas.height)
    let data = new Uint32Array(_data.data.buffer)
    let radius = 5
    context.clearRect(0, 0, canvas.width, canvas.height)
    for (let y = 0; y < canvas.height; y += radius) {
      for (let x = 0; x < canvas.width; x += radius) {
        // 筛选有意义的粒子
        let sum = 0
        for (let j = 0; j < radius; j++) {
          for (let i = 0; i < radius; i++) {
            sum += data[(y + j) * canvas.width + x + i]
          }
        }
        if (180 * radius * radius < sum) {
          let particle = new Particle(x, y, 1)
          particles.push(particle)
        }
      }
    }
  }
  particles.forEach((particle, index) => {
    particle.render(context)
  })
  // context.fillText(text, 100, 300)
}

renderScene()
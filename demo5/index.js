var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
let particles = null
function init () {
  canvas.width = document.documentElement.offsetWidth
  canvas.height = document.documentElement.offsetHeight
  particles = new Particles(canvas.width, canvas.height)
  requestAnimationFrame(draw)
}
if (~navigator.userAgent.indexOf('Mobile')) {
  document.body.addEventListener('touchstart', function (e) {
    particles.push(new Particle(e.touches[0].pageX, e.touches[0].pageY, Math.random() * 5 + 5))
  })
} else {
  document.body.addEventListener('click', function (e) {
    particles.push(new Particle(e.clientX, e.clientY, Math.random() * 5 + 5))
  })
  window.onresize = function () {
    canvas.width = document.documentElement.offsetWidth
    canvas.height = document.documentElement.offsetHeight
    particles.width = canvas.width
    particles.height = canvas.height
  }
}


function draw () {
  // 1. 清除上一帧动画
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // 2. 渲染当前帧动画
  particles.render(ctx)
  // 3. 递归调用
  requestAnimationFrame(draw)
}

init()
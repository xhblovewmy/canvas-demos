var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var clock = new Clock(200, 200)
var snows = null
function init () {
  canvas.width = document.documentElement.clientWidth
  canvas.height = document.documentElement.clientHeight
  snows = new Snows(50, canvas.width, canvas.height)
  requestAnimationFrame(draw)
}

function draw () {
  // 1. 清除上一帧动画
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // 2. 渲染当前帧动画
  clock.render(ctx)
  snows.render(ctx)
  // 3. 递归调用
  requestAnimationFrame(draw)
}

init()
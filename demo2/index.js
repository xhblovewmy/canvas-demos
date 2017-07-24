var canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight;
           
     //初始化
    var clearColor = 'rgba(0, 0, 0, .1)',             //用于绘制渐变阴影
        wordColor = "#33ff33",                         //文字颜色
        words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?",
        wordsArr = words.split(''),                 //将文字拆分进一个数组
        font_size = 16,  //字体大小
        clumns = w / font_size,                     //文字降落的列数
        drops = [];

     for(var i=0; i<clumns; i++){
         drops[i] = 1;
     }

   function draw(){
       context.save();
       context.fillStyle = wordColor;
       context.font = font_size + "px arial";
       //核心
       for (var i = 0; i < drops.length; i++){
            var text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
                context.fillText(text, i * font_size, drops[i] * font_size);
                if (drops[i] * font_size > h && Math.random() > .96){
                        drops[i] = 0;
                }
                    drops[i]++;
        }
       context.restore();
  }
           
    //动画循环
  (function drawFrame(){
        window.requestAnimationFrame(drawFrame, canvas);
        context.fillStyle = clearColor;
        context.fillRect(0, 0, w, h);  //注意这
        draw();
   }())
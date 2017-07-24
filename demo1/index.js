var canvas = document.getElementById('canvas'),  //获取canvas元素
    context = canvas.getContext('2d'),           //获取画图环境，指明为2d
    centerX = canvas.width/2,                    //Canvas中心点x轴坐标
    centerY = canvas.height/2,                   //Canvas中心点y轴坐标
    rad = Math.PI*2/100,                         //将360度分成100份，那么每一份就是rad度
    speed = 0.1;                                  //加载的快慢就靠它了
             
    //绘制蓝色外圈
    function blueCircle(n){
        context.save();
        context.beginPath();
        context.strokeStyle = "#49f";
        context.lineWidth = 12;
        context.arc(centerX, centerY, 100 , - Math.PI/2 + n*rad, - Math.PI/2, true);
        context.stroke();
        context.restore();
    }
         
    //绘制白色外圈
    function whiteCircle(){
        context.save();
        context.beginPath();
        context.strokeStyle = "#A5DEF1";
        context.lineWidth = 12;
        context.arc(centerX, centerY, 100 , 0, Math.PI*2, false);
        context.stroke();
        context.closePath();
        context.restore();
    }
         
    //百分比文字绘制
    function text(n){
        context.save();
        context.fillStyle = "#F47C7C";
        context.font = "40px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(n.toFixed(0)+"%", centerX, centerY);
        context.restore();
   }
         
    //动画循环
    (function drawFrame(){
         window.requestAnimationFrame(drawFrame, canvas);
         context.clearRect(0, 0, canvas.width, canvas.height);
             
         whiteCircle();
         text(speed);
         blueCircle(speed);
                
         if(speed > 100) speed = 0;
         speed += 0.1;
    }());
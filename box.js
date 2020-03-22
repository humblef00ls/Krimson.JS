
$(document).ready(function(){
    var type = window.location.hash.substr(1);
    console.log($top);
drawGrid();
console.log($top);
});


var mousePressed = false;
var lastX, lastY;
var rad1 = 1.6;
var fpscon = 30;
var canvas = $('canvas#buax');
var canvasWidth = $(window).width();
var canvasHeight = $(window).height();
var dpr = window.devicePixelRatio || 1;
canvas.attr({height: canvasHeight*dpr, width: canvasWidth*dpr});
var context = canvas[0].getContext('2d');
context.scale(dpr,dpr);

function drawDot(x, y, radius,h,s,l) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle =  'hsl('+h+',' +s+'%,'+l+'%)';
    context.fill();
}
function drawGrid(){
     rad1 = 1.7;
    drawAnimate();
}
let $iddqd = 60;
var $top = 0 ;

var osc = 0;
var speed = $iddqd;
var step = speed/2;
var space = speed;

var travel = 0;
function drawAnimate(){
  $top = setTimeout(function(){
   
    var news = Math.sin(osc) * speed/2 ;
    if(Math.abs(news/(speed/2)) ==1){
        step = Math.PI/2;
    }   
    if(travel > canvasWidth/space + 20)
    travel = 0;
    if(mousePressed)
    context.fillStyle =  'rgba(0,0,0,.045)';
    else
    context.fillStyle =  'rgba(14,14,14,1)';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    var x = -10  + step ; var n = -10;
    var y = -10 + news; var m = -10; 
    var h = 360;       
    
    for(var i = 0; i < canvasHeight/space + 2; i++) { 
        for(var j = 0; j < canvasWidth/space + 2; j++) { 
            if(!mousePressed)
            drawDot(n,m,rad1,0,0,50);
            n = n + space;
            drawDot(x,y,rad1,h - i*2 - j,100,50);
            x = x + space;
        }
        
        x = -10 + step ;
        y = y + space;
        n = -10;
        m = m + space;
        
    }
    osc += Math.PI/speed;
    travel+=1;
    step += 1;
   // if(mousePressed)
   //rad1-=.01;
    drawAnimate();
    },fpscon);
}
var type ;
$(window).on('hashchange',function(){ 
    var type = window.location.hash.substr(1);
  if(type=="Home"||type==''){
    clearTimeout($top);
    canvasWidth = $(window).width();
    canvasHeight = $(window).height();
    dpr = window.devicePixelRatio || 1;
  canvas.attr({height: canvasHeight*dpr, width: canvasWidth*dpr});
   context.scale(dpr,dpr);
    osc = 0;
 speed = 60;
 step = speed/2;
   drawGrid();
  }
   //drawGrid();
});

$(window).resize(function(){
    var type = window.location.hash.substr(1);
   
    if(type=="Home"||type==""){
    canvasWidth = $(window).width();
    canvasHeight = $(window).height();
    dpr = window.devicePixelRatio || 1;
    clearTimeout($top);
    canvas.attr({height: canvasHeight*dpr, width: canvasWidth*dpr});
    context.scale(dpr,dpr);
    osc = 0;
    speed = $iddqd;
   step = speed/2;
   drawGrid();
    }
});


canvas.mousedown(function (event) {
    mousePressed = true;
    lastX = event.pageX - $(this).offset().left;
    lastY = event.pageY - $(this).offset().top;
    console.log( lastX + " | " + lastY );
    spacetime();
});

canvas.mousemove(function (event) {
    if (mousePressed) {
        lastX = event.pageX - $(this).offset().left;
        lastY = event.pageY - $(this).offset().top;
        console.log( lastX + " | " + lastY );
    }
    
});

canvas.mouseup(function (event) {
    mousePressed = false;
});
    canvas.mouseleave(function (event) {
    mousePressed = false;
});

function spacetime(){
  //  alert("hi")
}

 
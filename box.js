
$(document).ready(function(){
    var type = window.location.hash.substr(1);

drawGrid();

});


var mousePressed = false;
var lastX, lastY;
var rad1 = .1;
var fpscon = 30;
var canvas = $('canvas#buax');
var canvasWidth = $(window).width();
var canvasHeight = $(window).height();
var dpr = window.devicePixelRatio || 1;
canvas.attr({height: canvasHeight*dpr, width: canvasWidth*dpr});
var context = canvas[0].getContext('2d');
context.scale(dpr,dpr);
var probability = function(n) {
    return !!n && Math.random() <= n;
};

function dot(x,y){
    this.x = x;
    this.y = y;

}
let dots = [];
var spin =  canvasWidth/2 ;
var apin = canvasHeight/2;
var max = Math.max(canvasWidth,canvasHeight)
var $radix = Math.PI * 2 * Math.random();
var velo  = .4;
var $zeta = max/.9;

 
function drawDot(x, y, radius,color,blur) {
    
 context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle =  color;
    context.fill();
}
function drawGrid(){
     rad1 = .8;
      shifter = 0;
       velo  = .004;
for(let i = 1; i <  $zeta + 1; i++){

    var distance =  max/2 * Math.random() + 50  ;
    var distance2 =  max/2 * Math.random() + 50  ;
    
    var rad = Math.PI * 2 * Math.random();
    var sizeolife = rad1 + (distance/(max/2))*2
    if( probability( .3) ){
    var c0l0rhex = `hsla(${360 - (distance/(max/2))*90},100%,50%,1)`;
    var yagami = `hsla(${350 - (distance/(max/2))*90},100%,50%,.01)`;
    }
    else{
    var c0l0rhex = `hsla(50,0%,60%,1)`;
    var yagami =`hsla(50,0%,60%,.01)`;
    }
    dots.push({halo : yagami, size : sizeolife  ,coler : c0l0rhex ,raider : rad ,radix : rad, distx : distance, disty :distance2 })
}
    drawAnimate();
}
let $iddqd = 60;
var $top = 0 ;

var osc = 0;
var speed = $iddqd;
var step = speed/2;
var space = speed;

var travel = 0;

/*
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

            //console.log( spin )
            drawDot(spin,canvasHeight/2,20,0,0,50);
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
*/
var shifter = 0;
function drawAnimate() { 
    //var x = -10  + step ;
    //mousePressed = true
    var n = -10;
    //var y = -10 + news;
    var m = -10; 
    if(mousePressed){
        shifter+=.05;
       velo = .004 -  shifter/4000;
        context.fillStyle =  'rgba(1,1,1,.01)';
    }
    else
        context.fillStyle =  'rgba(10,10,10,1)';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    for(let i = 0; i < $zeta ; i++){
       // if(probability(.2)&&!mousePressed)
     //       continue
        dots[i].radix += velo;
    // if(mousePressed)
    //        var sx =  dots[i].size + ((dots[i].distx/600) * shifter/3);
    //   else
            var sx =   dots[i].size;
        
        if(mousePressed){

            spin  = canvasWidth/2  + Math.cos(dots[i].radix) * ((dots[i].distx ) * (1 + shifter/50)) *( 1 + (dots[i].distx/1000) * ( shifter/20))
            apin  = canvasHeight/2 + Math.sin(dots[i].radix) * ((dots[i].distx ) * (1 + shifter/50)) *( 1 + (dots[i].distx/1000) * ( shifter/20))
           // drawDot(spin,apin ,sx * 3 , dots[i].halo,mousePressed);
        }
        else{
        spin  = canvasWidth/2  + Math.cos(dots[i].radix) * (dots[i].distx )
        apin  = canvasHeight/2 + Math.sin(dots[i].radix) * (dots[i].distx )
        }

        
        drawDot(spin,apin ,sx , dots[i].coler,mousePressed);


    }
    // drawDot(canvasWidth/2,canvasHeight/2  ,30 + shifter*2 ,'rgba(0,0,5,1)' ,mousePressed);
    $top =  requestAnimationFrame(drawAnimate);
 }


var type ;
$(window).on('hashchange',function(){ 
    var type = window.location.hash.substr(1);
  if(type=="Home"||type==''){
    cancelAnimationFrame($top);
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
    cancelAnimationFrame($top);
    canvas.attr({height: canvasHeight*dpr, width: canvasWidth*dpr});
    context.scale(dpr,dpr);
    osc = 0;
    speed = $iddqd;
   step = speed/2;

   for(let i = 0; i < $zeta ; i++){

    //dots[i].radix =  dots[i].raider;
   }
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

 
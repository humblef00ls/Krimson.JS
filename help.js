
$(document).ready(function(){
    $('.Page').css("display","none");
    var type = window.location.hash.substr(1);
    if(type==''){
        $('#Home').css("display","block");
    }
    else{
        $('#' + type + '').css("display","block");
    }

    drawGrid();
});

var canvas = $('canvas.dots');
var canvasWidth = canvas.width();
var canvasHeight = canvas.height(); 
var dpr = window.devicePixelRatio || 1;
canvas.attr({height: canvasHeight*dpr, width: canvasWidth*dpr});
var context = canvas[0].getContext('2d');
context.scale(dpr,dpr);

function drawDot(x, y, radius,r,g,b) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'rgb('+r+',' +g+','+b+')';
    context.fill();
}
function drawGrid(){
     stop = 0;
    var x = 15;
    var y = 15;
    var r = 255;
    var b = 0;
    for(var i = 0; i < canvasHeight/25; i++) { 
      for(var j = 0; j < canvasWidth/25; j++) { 
      drawDot(x, y, 2.4,r,0,b);
      x = x+25;
     
      }
    x = 15;
    y = y+25;
    r = r - 5;
    b = b + 4.2;
    }
  
    drawAnimate();
}
var counter = 4;
var change = 4;
var rchange = 0;
var rchange2 = 0;
var rad1 = 2.4;
var stop ;
function drawAnimate(){
  stop =   setTimeout(function(){
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        var x = 15 ;
        var y = 15 ;
        var r = 255;
        var b = 0;
        rchange2 = 0;
        for(var i = 0; i < canvasHeight/25; i++) { 
            for(var j = 0; j < canvasWidth/25; j++) { 
                r = 255 - counter;
                b = counter;
              
                    drawDot(x, y, rad1,r,0,b);
            x = x+25;
            }
           

          x = 15;
          y = y+25;
          
          }

          if(counter>=254)
          {
              change= -4;
             
          }
          if(counter<=0){
          change=4 ;
          }
          counter = counter + change;
        
            drawAnimate();
    },50);
}


$('div.Ssidebar div').click(function(){

});
$(window).on('hashchange',function(){ 
    clearTimeout(stop);
    var type = window.location.hash.substr(1);
    $('.Page').css("display","none");
    $('#' + type + '').css("display","block");

    drawGrid();
});
$(window).resize(function(){

   clearTimeout(stop);
     canvasWidth = canvas.width();
     canvasHeight = canvas.height(); 
     dpr = window.devicePixelRatio || 1;
    canvas.attr({height: canvasHeight*dpr, width: canvasWidth*dpr});
    context.scale(dpr,dpr);
    drawGrid();
});
function showdrop(id){
    var dr =  id + 'C';
    var len = $('#' + dr).find('nav').length;
    if($('#' + dr).css("height")=='0px')
    { $('#' + dr).css("height",  5 + 55*len);}
    else
  {  $('#' + dr).css("height", '0px');}
   
}
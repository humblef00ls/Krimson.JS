
   $('.Page').css("display","none");
   $('#nav').css("display","none");
$(document).ready(function(){
 
    var type = window.location.hash.substr(1);
    if(type==''||type=='Home'){
     //   drawGrid();
        
        $('Body').css("grid-template-columns","1fr");
        $('#Home').css("display","block");
    }
    else{
        $('#nav').css("display","grid");
        if(window.innerWidth<600)
        $('Body').css("grid-template-columns","1fr");
        else
        $('Body').css("grid-template-columns","2fr 8fr");
        $('#' + type + '').css("display","block");
    }
   
    var codes = $('pre');

    for(var kii = 0; kii < codes.length; kii++){
        var kshmr = $(`pre:eq(${kii})`).html();
        $(`pre:eq(${kii})`).html(escapeHtml(kshmr));
    }
    
$(window).on('load', function () {
    setTimeout(function (param) {     $('.mainloader').fadeOut(1000); },0)

});


});


var isup = false;
var clear ;
$('button#runaway').click(function(){
    
    clearTimeout(clear);
  // $('.CC').css({'opacity':'.5', 'transform': 'rotate(15deg) scale(1.3)'});
    mousePressed = true;
    fpscon = 40;
    $('.hpage').addClass('fadeaway');
    clear = setTimeout(function(){
        $('.hpage').removeClass('fadeaway');
       fpscon = 30;
       mousePressed = false;
       window.location='#Start';
       
    }, 3300);
});


$(window).on('hashchange',function(){ 
    var type = window.location.hash.substr(1);
    $('.Page').css("display","none");

    if(type==''||type=='Home'){  
        $('#nav').css("display","none");
        $('Body').css("grid-template-columns","1fr");
        $('#Home').css("display","block");
    }
    else{
        $('#nav').css("display","grid");
        if(window.innerWidth<600){
        $('Body').css("grid-template-columns","1fr");
        if(isup)
        slippy();
            }
        else
        $('Body').css("grid-template-columns","2fr 8fr");
        $('#' + type + '').css("display","block");
    }
   
});

function escapeHtml(text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
  
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }

$(window).resize(function(){

  
    var type = window.location.hash.substr(1);
    if(!(type==''||type=='Home')){
    if(window.innerWidth<600)
    $('Body').css("grid-template-columns","1fr");
    else if (window.innerWidth<830)
    $('Body').css("grid-template-columns","4fr 9fr");
    else if (window.innerWidth<950)
    $('Body').css("grid-template-columns","3fr 9fr");
    else
    $('Body').css("grid-template-columns","2fr 8fr");
    }
    
});
function showdrop(id){
    var dr =  id + 'C';
    var len = $('#' + dr).find('nav').length;
    if($('#' + dr).css("height")=='0px')
    { $('#' + dr).css("height",  5 + 55*len);}
    else
  {  $('#' + dr).css("height", '0px');}
   
}
$('.navitem').click(function(){
    var t = $(this).text();
    var target = '#' + t; 
    var type = window.location.hash.substr(1);
if(t==type){
    if(isup)
        slippy();
}
    else
    window.location=target;
});
function slippy(){
    $('#nav').toggleClass('slide');
    if(!isup){
    $('#rarrow').css("transform","  rotate(45deg) translate3d(2px,-8px,0)");
    $('#larrow').css("transform","  rotate(-45deg) translate3d(-2px,-8px,0)");
    isup = true;
    }
    else{
    $('#rarrow').css("transform"," rotate(-45deg) translate3d(10px,0,0)");
    $('#larrow').css("transform"," rotate(45deg) translate3d(-10px,0,0)");
    isup = false
    }
}

$('.more').click(function(){
    
   slippy();
});


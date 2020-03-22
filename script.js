
    setVariable('--btn-travel','10px');
$(document).ready(function(){
    
    $('Button.brackets').each(function(){
        
        if($(this).parent().prop("tagName")!=$('pre').prop("tagName"))
        $(this).append("<span class='br-1'></span><span class='br-2'></span>");
    });
    
    $('Button.corners').each(function(){
        if($(this).parent().prop("tagName")!=$('pre').prop("tagName"))
        $(this).append("<span></span>");
    });

       
    
  
    
});
var $pulsecount = 0;
$('.ripple').click(function(e){
    var $offset = $(this).offset();
    var $x = e.pageX - $offset.left;
    var $y = e.pageY - $offset.top;
    $(this).append("<span class='pulser' id='NPC" + $pulsecount + "' style='left:"+$x+"px;top:"+$y+"px'></span>");
    var $del = $pulsecount;
    setTimeout(function(){
        $('#NPC' +  $del).remove();
    },40000);
    $pulsecount++;
});

function setVariable(varname, newValue){
    document.body.style.setProperty(varname, newValue);
}



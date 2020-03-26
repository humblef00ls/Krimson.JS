
  
$(document).ready(function(){
    
    $('.brackets').each(function(){
        
        if($(this).parent().prop("tagName")!=$('pre').prop("tagName"))
        $(this).append("<span class='br-1'></span><span class='br-2'></span>");
    });
    
    $('.corners').each(function(){
        if($(this).parent().prop("tagName")!=$('pre').prop("tagName"))
        $(this).append("<span></span>");
    });
  

    $('.tabs-menu').each(function(){
        if($(this).parent().prop("tagName")!=$('pre').prop("tagName")){

        // console.log($(this).children().eq(0).width())
        var $menu = $(this);
        $menu.children().eq(0).append("<span class='select-rail'></span>");
        var $railgun = $menu.find($("span.select-rail"));
        $menu.children().eq(0).addClass('tabs-active');
        var $winID = '#' + $(this).attr("id") + '-window';
      //  $($winID).children().eq(0).css('display','block');
        var $tabs = $menu.children();
        $tabs.each(function(){
            if($(this).hasClass('disabled')){
                $($winID).children().eq($(this).index()).html(" ");
                $($winID).children().eq($(this).index()).hide();
            }
        })
       
        $tabs.click(function (e) {
            if($(this).hasClass('disabled')){
            return false
            }
            $tabs.removeClass('tabs-active');
            // $($winID).children().css('display','none');
            var $howmany = $menu.find($('.disabled'));
            var $numdis = 0;
            var $tabWidth = $tabs.eq(0).width() + parseFloat($tabs.eq(0).css('padding-left')) +parseFloat($tabs.eq(0).css('padding-right')) ;
            $railgun.css("transform","translate3d(" + $tabWidth * $(this).index()  + "px,0,0)");
            $(this).addClass('tabs-active');
            var $activetab = $(this);
            $howmany.each(function(){
                if($(this).index()<$activetab.index())
                $numdis++;
            })
                
                $($winID).children().css("transform","translate3d(" + (-100 * ($(this).index()-$numdis))  + "%,0,0)");
        });       
       // $(this).children().toggleClass('flex');
        }
    });
    
  
    
});
$(window).resize(function(){
    setTimeout(function(){
        $('span.select-rail').each(function (param) { 
            var $menu =$(this).parent().parent();
            var $selected = $menu.find($(".tabs-active")).index();
            if($(this).width()==0){
                var $winID = '#' + $menu.attr("id") + '-window';
                $menu.children().removeClass('tabs-active');
                $menu.children().eq(0).addClass('tabs-active');
                $($winID).children().css("transform","translate3d(0%,0,0)");
            }
        
            $(this).css("transform","translate3d(" + $(this).width() * $selected   + "px,0,0)");
        })
    },50)    
});

var $pulsecount = 0;
$('.ripple').click(function(e){
    var offSet = this.getBoundingClientRect();
  
   var $x = e.pageX - offSet.left - 25;
   var $y = e.pageY - offSet.top - 25;

    $(this).append("<span class='pulser' id='NPC" + $pulsecount + "' style='left:"+$x+"px;top:"+$y+"px'></span>");
    var $del = $pulsecount;
    setTimeout(function(){
        $('#NPC' +  $del).remove();
    },4000);
    $pulsecount++;
});

function setVariable(varname, newValue){
    document.documentElement.style.setProperty(varname, newValue);
}

function getVariable(varname){
    return getComputedStyle(document.documentElement).getPropertyValue(varname);
}


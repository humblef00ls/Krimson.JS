

$(document).ready(function(){
    $('.preloader').each(function(){
        if($(this).parent().prop("tagName")!=$('pre').prop("tagName"))
            $(this).append("<div class='preloader-anim'></div>");
    })
    $('.preloader-circle').each(function(){
        if($(this).parent().prop("tagName")!=$('pre').prop("tagName"))
            $(this).append("<div class='preloader-anim-2'></div>");
    })
    $('.preloader-content').each(function(){
        if($(this).parent().prop("tagName")!=$('pre').prop("tagName"))
            $(this).append("<div class='preloader-anim-3'></div>");
    })


    
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
    $('table.table-index').each(function(){
        if($(this).parent().prop("tagName")!=$('pre').prop("tagName")){
            $(this).find($('thead')).find($('tr')).prepend("<th class = 'col-sort'>No.</th>");
            $(this).find($('tbody')).find($('tr')).each(function(index){
                $(this).prepend(`<td >${index+1}</td>`);
            })

        }
    })


    var flags = [];
    var initclick= [];
    $('.col-sort').each(function(){
        if($(this).parent().parent().parent().prop("tagName")!=$('pre').prop("tagName")){
                flags.push(-1);
                initclick.push(0);
                $(this).addClass('col-sort-arr-up');
                $(this).addClass('col-sort-arr-down');
        }
    })

    $(".col-sort").click(function(index){
   flags[$(this).index()] *= -1;
    var n = $(this).prevAll().length;
    sortTable(flags[$(this).index()] ,n);
    if(initclick[$(this).index()] == 0){
        $(this).toggleClass('col-sort-arr-up');
        initclick[$(this).index()] = 1
    }
    else{
        $(this).toggleClass('col-sort-arr-down');
        $(this).toggleClass('col-sort-arr-up');
    }
   
});
    $('.parallax-listener').ready(function () { 
        
        var $img = $('.parallax').find($('.parallax-background')).children()
        var st = $(this).scrollTop();
        $img.each(function (index) {  
            var offset = $(this).parent().offset();
            var center = $(window).height()/2
            var top = offset.top;
            var elpos = top + $(this).height()/2
            var $ht 
            $ht = (elpos - center)/ $parallaxspeed ;
            var x = $ht
            $(this).css("transform","translate3d(-50%,calc(-50% + " + x + "px),0px) scale(" +  $parallaxscale  + ")")
    
          
        })
      
        
    })
          

    
});
var $parallaxspeed = getVariable("--parallax-speed")
var $parallaxscale = getVariable("--parallax-scale")
function isHidden(el) {
    return (el.offsetParent === null)
}

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
    },30)    
});






$('.parallax-listener').scroll(function () { 
    var $img = $('.parallax').find($('.parallax-background')).children()
    var st = $(this).scrollTop();
    $img.each(function (index) {  
        var offset = $(this).parent().offset();
        var center = $(window).height()/2
        var top = offset.top;
        var elpos = top + $(this).height()/2
        var $ht 
        $ht = (elpos - center)/ $parallaxspeed ;
        var x = $ht
        $(this).css("transform","translate3d(-50%,calc(-50% + " + x + "px),0px) scale(" +  $parallaxscale  + ")")
      
    })
       
      
   
    
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

function cleanHTML(input) {
   input.replace(/\s/g, '')
    var stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g; 
    var output = input.replace(stringStripper, ' ');
    var commentSripper = new RegExp('<!--(.*?)-->','g');
    var output = output.replace(commentSripper, '');
    var tagStripper = new RegExp('<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>','gi');
    output = output.replace(tagStripper, '');  
    var badTags = ['style', 'script','applet','embed','noframes','noscript'];
    for (var i=0; i< badTags.length; i++) {
      tagStripper = new RegExp('<'+badTags[i]+'.*?'+badTags[i]+'(.*?)>', 'gi');
      output = output.replace(tagStripper, '');
    }
    var badAttributes = ['style', 'start'];
    for (var i=0; i< badAttributes.length; i++) {
      var attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"','gi');
      output = output.replace(attributeStripper, '');
    }
    return output;
  }


  function sortTable(f,n){
	var rows = $('.table-sort tbody  tr').get();

	rows.sort(function(a, b) {

		var A = getVal(a);
		var B = getVal(b);

		if(A < B) {
			return -1*f;
		}
		if(A > B) {
			return 1*f;
		}
		return 0;
	});

	function getVal(elm){
		var v = $(elm).children('td').eq(n).text().toUpperCase();
		if($.isNumeric(v)){
			v = parseInt(v,10);
		}
		return v;
	}

	$.each(rows, function(index, row) {
		$('.table-sort').children('tbody').append(row);
	});
}


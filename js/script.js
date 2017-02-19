$(function() {
	jQuery.fn.scrollTo = function(speed){
		var targetOffset = $(this).offset().top;
		$('html,body').stop().animate({scrollTop:targetOffset},speed);
		return this;
	};
	$('.hehe').on('click',function(){
		$('body').scrollTo(600);
		return false;
	})
    $('.btn').on('click',function(){
		
        var plus = $(".btn").index(this);
       
        $('#cv-'+plus).slideToggle();
      
        $('#cv-'+plus).prev().find('span').toggleClass(function(){
            if($('span.glyphicon-plus')) return 'glyphicon-minus';
        })
        
   
	})
    var nav = $('.navbar');
    $(window).scroll(function(){
        if($(document).scrollTop()>=80){
            nav.addClass("navbar-default"); 
             $('.hehe').css('display','block');  
        }
       else{
            nav.removeClass("navbar-default");  
             $('.hehe').css('display','none'); 
             
        }
    })
});
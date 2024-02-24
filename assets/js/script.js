
// back_2_top
$(".back_2_top").click(function(){
    $("html,body").animate({
        scrollTop:0
    },1000)
})
$(window).scroll(function(){
    if($(window).scrollTop() > 200 ) {
        $(".back_2_top").fadeIn()
    }else {
        $(".back_2_top").fadeOut()
    }
})
  

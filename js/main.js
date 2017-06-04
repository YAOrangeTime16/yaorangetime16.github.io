$(function(){
  $('a[href^=#]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
    
    //plugin t.js
    $(window).scroll(function(){
        
           $('.type-writer1').t({
                speed: 150,
                delay: 1,
                blink: 400
            });
        
            $('.type-writer2').t({
                speed: 90,
                delay: 1,
                blink: 400
            });
        

           $('.type-writer3').t({
                speed: 100,
                delay: 1,
                blink: 400
            });

        
    });
    
    
});
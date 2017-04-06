$(function(){
    let num=0;
    let numCV=0;
    let numP=0;
     $('#about').on('click', function(){

        $(this).data('click', ++num);
         click=$(this).data('click');
            if(click===1){
                $('#popinAbout').load('about.html');
                $('#cv, #work, .h1_who').fadeToggle('fast');
            }else{
                $('#popinAbout').fadeToggle();
                $('#cv, #work, .h1_who').fadeToggle('fast');
            }
        
    });

    $('#cv').on('click', function(){
        $(this).data('click', ++numCV);
         click=$(this).data('click');
            if(click===1){
                $('#popinCV').load('background.html');
                $('#work, .h1_cv').fadeToggle('fast');
            }else{
                $('#popinCV').fadeToggle();
                $('#work, .h1_cv').fadeToggle('fast');
            }
        
    });
    
    $('#work').on('click', function(){
        $(this).data('click', ++numP);
         click=$(this).data('click');
            if(click===1){
                $('#popinWork').load('projects.html');
                $('.h1_work').fadeToggle('fast');
            }else{
                $('#popinWork').fadeToggle();
                $('.h1_work').fadeToggle('fast');
            }
    });
    
    $('#back-to-top').on('click', function(){
        $('html, body').animate({scrollTop: 0});
    })
});
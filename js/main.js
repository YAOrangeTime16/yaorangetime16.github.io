$(function(){
    let num=0;
    let numCV=0;
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
    /*
    $('#about').on('click', function(){
        $('#popinAbout').fadeToggle();
        $('#popinAbout').load('about.html');
    });

    $('#cv').on('click', function(){
        $('#popinCV').fadeToggle();
        $('#popinCV').load('background.html');
    });
    */
});
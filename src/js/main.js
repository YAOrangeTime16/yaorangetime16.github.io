$(function(){
    $('#about').on('click', function(){
        $('#cv, #work').animate({width: 'toggle'},'slow');
        $('#aboutContent').load('about.html').toggle();
    });
    
    $('#aboutContent').on('click', function(){
            $(this).fadeOut();
            $('#cv, #work').animate({width: 'toggle'},'slow');
    });
    
    $('#cv').on('click', function(){
        $('#work').animate({width: 'toggle'},'slow');
        $('#cvContent').fadeToggle();
    });
    
    $('#cvContent').load('background.html');

});
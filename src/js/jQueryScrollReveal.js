(function( $ ) {

    $.fn.scrollReveal = function() {

        //get viewport size
        var windowHeight = $(window).height(),
            windowWidth = $(window).width(),
            initialScroll = $(window).scrollTop(),
            items = $('.js-reveal'),
            scroll;


        //hide anything not in the viewport
        items.each(function(){
            if($(this).offset().top >= windowHeight){
                $(this).addClass('js-reveal--hidden');
            }
        });
        $carousel = $('.carousel');
        $navbar = $('.navbar');
        $text = $('.text');
        //on scroll
        $(window).scroll(function (event) {
            //get the current scroll position

            scroll = $(window).scrollTop();
            //show anything that is now in view (scroll + windowHeight)
            items.each( function(){
                if($(this).offset().top <= (scroll + windowHeight)){
                    $(this).removeClass('js-reveal--hidden');
                }
            });
            // Prueba para animaciones
            $('.carousel').animate({origin: 'top', distance:'300px', duration: 2000}, 2000);
            $('.navbar').animate({origin: 'bottom', duration: 2000}, 2000);
            $('.text').animate({origin: 'left', duration: 2000, distance: '300px'})


        });

        return this;


    };

}( jQuery ));


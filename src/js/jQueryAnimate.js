jQuery(document).ready(function() {

    var nav = $('nav.navbar'),
        navOffset = nav.offset().top / 128,
        documentnav = $(document);

    documentnav.on('scroll', function() {
        if (documentnav.scrollTop() > navOffset && nav.hasClass('hidden')) nav.removeClass('hidden');
    });

    $(window).scroll(function() {
        var position = $(window).scrollTop();
        console.log(position);
        var animation = function() {
            $('.accCard').each(function() {
                $(this).delay(1000).animate({ opacity: 1, bottom: 0 }, 2000);

            });
        };
        var animation2 = function() {
            $('.colabcard').each(function() {
                $(this).delay(1000).animate({ opacity: 1, bottom: 0 }, 1500);

            });
        };
        var animation3 = function() {
            $('.btna').each(function() {
                $(this).delay(1000).animate({ opacity: 1, bottom: 0 }, 1800);

            });
        };
        var animation4 = function() {
            $('.btnsa').each(function() {
                $(this).delay(1300).animate({ opacity: 1, bottom: 0 }, 1800);

            });
        };


        if (position > 0 && position < 630) {
            $('.sertx').delay(1000).animate({ opacity: 1, left: 0 }, 1500);
            animation();


        } else if (position > 630 && position < 900) {
            $('.colabtx').delay(1500).animate({ opacity: 1, left: 0 }, 1000, "linear");
            animation2();
            animation3();
        } else if (position > 900) {
            $('.contx').delay(1000).animate({ opacity: 1, left: 0 }, 1500);
            $('.concard').delay(1000).animate({ opacity: 1, bottom: 0 }, 1500);
            animation4();
        }


    });




});
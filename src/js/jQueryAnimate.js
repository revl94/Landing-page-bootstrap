jQuery(document).ready(function() {

      var nav = $('nav.navbar'),
          navOffset = nav.offset().top/128,
          documentnav = $(document);

      documentnav.on('scroll', function() {
          if ( documentnav.scrollTop() > navOffset && nav.hasClass('hidden') ) nav.removeClass('hidden');
      });

   $(window).scroll(function () {
    var position = $(window).scrollTop();
       var animation = function () {
           $('.accCard').each(function () {
               $(this).delay(1000).animate({opacity:1, bottom: 0}, 2000)

           })
       };
       var animation2 = function () {
           $('.colabcard').each(function () {
               $(this).delay(2000).animate({opacity:1, bottom: 0}, 2000)

           })
       };
       var animation3 = function () {
           $('.btna').each(function () {
               $(this).delay(2000).animate({opacity:1, bottom: 0}, 2000)

           })
       };


    if (position >0 && position < 45000) {
      $('.sertx').delay(1000).animate({opacity:1, left: 0}, 2000);
      animation();
      $('.colabtx').delay(2000).animate({opacity:1, left: 0}, 2000, "linear");
      animation2();
      animation3();
      $('.contx').delay(3000).animate({opacity:1, left: 0}, 2000);
       $('.concard').delay(3000).animate({opacity:1, bottom: 0}, 2000);

    }


   });




});




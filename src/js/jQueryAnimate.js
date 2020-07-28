jQuery(document).ready(function() {
 /* jQuery('.post').addClass("hidden").viewportChecker({
    // classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
        offset: 100
    });
    jQuery('.navbar').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
        offset: 100
    });
    jQuery('.text').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
        offset: 100
    }); */


      var nav = $('nav.navbar'),
          navOffset = nav.offset().top/128,
          documentnav = $(document);

      documentnav.on('scroll', function() {
          if ( documentnav.scrollTop() > navOffset && nav.hasClass('hidden') ) nav.removeClass('hidden');
      });
/*          var serv = $('div.text'),
              servOffset = serv.offset().top/8,
              documentser = $(document);

          documentser.on('scroll', function() {
              if ( documentser.scrollTop() > servOffset && serv.hasClass('hidden') ) serv.removeClass('hidden');
          });

          var acc = $('div.card'),
              accvOffset = serv.offset().top/4,
              documentacc = $(document);

          documentacc.on('scroll', function() {
              if ( documentacc.scrollTop() > accvOffset && acc.hasClass('hidden') ) acc.removeClass('hidden');
          });*/




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



    /*if (position === 0 ){
        $('.carousel').animate({opacity:1, top: 0}, 'fast')
    }else*/
    if (position >0 && position < 45000) {
      $('.sertx').delay(1000).animate({opacity:1, left: 0}, 2000);
      animation();
      $('.colabtx').delay(2000).animate({opacity:1, left: 0}, 2000, "linear");
      animation2();
      animation3();
      $('.contx').delay(3000).animate({opacity:1, left: 0}, 2000);
       $('.concard').delay(1000).animate({opacity:1, bottom: 0}, 2000);




    }


   });




});




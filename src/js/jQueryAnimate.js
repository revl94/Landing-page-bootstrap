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

      var serv = $('div.text'),
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
      });




   $(window).scroll(function() {

        var position = $(window).scrollTop();
        var carousel = $('.carousel');
        if (position <0 ) {
            carousel.animate({top: 0, bottom: 50}, "slow")
        }

        });
});




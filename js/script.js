    //SIDENAV
    $(document).ready(function(){
        $('.sidenav').sidenav();

      });

    $(document).ready(function(){
        $('.parallax').parallax();
      });

    $(document).ready(function(){
        $('.scrollspy').scrollSpy();
      });

    // Menu-toggle button
    $(document).ready(function() {
          $(".menu-icon").on("click", function() {
                $("nav ul").toggleClass("showing");
          });
    });

    // Scrolling Effect

    $(window).on("scroll", function() {
          if($(window).scrollTop() > 50 ) {
                $('nav').addClass('black');
          }
          else {
                $('nav').removeClass('black');

          }
    })

    //Modal
    $(document).ready(function(){
    $('.modal').modal();
  });

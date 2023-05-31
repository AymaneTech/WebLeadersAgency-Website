(function ($) {

    //PRELOADER
    $('#preloader').delay(350).fadeOut('slow');

    // Move shape
    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
    friction = 1 / 30;

    function moveBackground() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;
      
      translate = 'translate(' + x + 'px, ' + y + 'px)';

      $('.banner-shape-animate img').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate,
      });

      window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove', function(e) {

      var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
      var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
      lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
      lFollowY = (10 * lMouseY) / 100;

    });

    moveBackground();

    //Live editor broken fixed
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/tiltimage_image.default', function($scope, $){
            $scope.find('.js-tilt').tilt({
                glare: true,
                maxGlare: .5
            });
        });
    });

    //Navbar Fixed
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 85) {
            $('.navbar').addClass('navcolor');
            $('.elementor-editor-active .navbar').removeClass('navcolor');
            $('.elementor-editor-active .navbar').removeClass('fixed-top');
            $('.sticky-logo').show();
            $('.custom-logo-link').hide();
        } else {
            $('.navbar').removeClass('navcolor');
            $('.sticky-logo').hide();
            $('.custom-logo-link').show();
        }
    });


    // Form
    $(".seo-form input.input").on('focus',function(){
        var placeholder = $(this).attr("name");
        $(this).before('<label>'+placeholder+'</label>');
        console.log(placeholder);
    });

    $(".seo-form input.input").focusout(function(){
        $('label').hide();
    });    

    //progress
    $(".progress-circle").circliful({
        animation: 1,
        animationStep: 5,
        animateInView: true,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 10,
        percent: 38,
        textSize: 28,
        textStyle: 'font-size: 12px;',
        backgroundColor: "rgba(225,225,255,0.5)",
        foregroundColor: "#fff",
        fontColor: '#fff',
    });


    //banner text
    $('.bnr-text').slick({
        autoplay: true,
        infinite: true,
        speed: 1300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    //testimonials
    $('.testimonials').slick({
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // portfolio
    $('.portfolio').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      infinite: true,
      centerMode: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    

    // Counter
$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');
    // popup video
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade'
    });

    //Backtotop
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            $('#backtotop').fadeIn(500);
        } else {
            $('#backtotop').fadeOut(500);
        }
    });

    $('#backtotop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });


    // Pricing Plan
    $('.package-btn li').on('click',function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.form-check input').on('change', function() {
        var total = 0;
        $('input:checkbox:checked').each(function(){
            total += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
        });

        $('.totalPrice').text(total);
    });


})(jQuery);
$( window ).load(function() {
  /** declare video array with video titles */
  var background = [ "beach", "ny" ];

  /** picks random number between 0 and array's total size */
  var numRand = Math.floor(Math.random() * background.length) + parseFloat(0);

  /** sets image background css attribute with selected background name */
  $("#introduction").css("background-image",'url(img/' + background[numRand] + '.png)');
});

jQuery(document).ready(function ($) {
  /* Rotates The Mobile Nav Icon */
  $( '.navigation__menu-toggle' ).on('click', function() {
    $(this).toggleClass( "rotate shift-down" );
    $('.dwab__logo').toggleClass ("shift-down");
  });

  // Hide nav on load
  $('.navigation__wrapper').hide();

  $('.navigation__menu-toggle').click(function () {
      $(".navigation__wrapper").slideToggle(300);
      return false;
  });

  window.setTimeout(function() {
    $(".introduction__salutation").css({opacity:'1'});
  }, 2000);

  window.setTimeout(function() {
    $(".introduction__logo").css({opacity:'1'});
  }, 3000);

  window.setTimeout(function() {
    $(".introduction__tagline").css({opacity:'1'});
  }, 4000);

  window.setTimeout(function() {
    $("#button").css({opacity:'1'});
    $("#button").addClass('button');
  }, 5000);
});

$(window).scroll(function () {
  //Gets the inital size of the browser window
  var h = $(window).height() - 50;
  var yPos = $(window).scrollTop();
  var $dwabLogo = $(".dwab__logo");

  /* show sticky menu after screen has scrolled down 650px from the top*/
  if (yPos > h) {
    $dwabLogo.css({opacity:'1'});
  } else {
    $dwabLogo.css({opacity:'0'});
  }

  // Animate the scroll to top
  $dwabLogo.off('click').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
  });
});

$(window).load(function() { $(".loader").fadeOut("slow"); });

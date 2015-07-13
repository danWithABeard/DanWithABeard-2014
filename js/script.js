$( window ).load(function() {
  //declare video array with video titles
  var background = [ "beach", "ny", "rockclimb" ];

  // Count the number of elements of an array
  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  // Gets the size of the background array
  var size = Object.size(background);

  //picks random number between 0 and array's total size
  var numRand = Math.floor(Math.random()*size) + parseFloat(0);

  //sets image background css attribute with selected background name
  $("#introduction").css("background-image",'url(img/' + background[numRand] + '.png)');

  //Gets the inital size of the browser window
  var h = $(window).height();

  $("#introduction").css({"height" : h});
  $("#footer").css({"height" : h/3});
  $("#slide8").css({"margin-bottom" : h/3});
});

//Adjusts slide height when window is resized
$(window).resize(function() {
  var h = $(window).height();
  $("#introduction").css({"height": h});
  $("#footer").css({"height": h/3});
  $("#slide8").css({"margin-bottom": h/3});
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

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  if( !isMobile.any() ){
    $(window).stellar();
  }

  $(window).stellar();

  var waypointLinks = $('.js-waypoint__link'),
      slide = $('.slide'),
      button = $('.button'),
      htmlBody = $('html,body');

  function goToByScroll(dataslide) {
    htmlBody.animate({
      scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
    }, 2000, 'easeInOutQuint');
  }

  waypointLinks.click(function(e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });

  button.click(function(e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });

  $(window).scroll(function () {
    //Gets the inital size of the browser window
    var h = $(window).height() - 50;
    var yPos = $(window).scrollTop();

    /* show sticky menu after screen has scrolled down 650px from the top*/
    if (yPos > h) {
      $("#dan-logo-nav").css({opacity:'1'});
    } else {
      $("#dan-logo-nav").css({opacity:'0'});
    }
  });

  // Animate the scroll to top
  $('#dan-logo-nav').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
  });
});

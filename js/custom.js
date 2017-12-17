// SERVICES

$(function() {
	// activte on scroll
	new WOW().init();
}); 

// WORK

$(function() {

  $("#work").magnificPopup({
  	delegate: 'a', // child items selector, by clicking on it popup will open
  	type: 'image',
  	gallery: {
    	enabled:true
  	}

  });
});

// TEAM

$(function(){

  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });

});

// TESTIMONIALS

$(function(){

  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });

});

// CLIENTS

$(function(){

  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });

});

// STATS

$(function(){

  $(".counter").counterUp({
  delay: 10,
  time: 3000
  });

});

// NAVIGATION

//Show/Hide background black navigation

$(function(){

  $(window).scroll(function(){

    if($(this).scrollTop() < 50) {
      //hide navigation bar
      $("nav").removeClass("vesco-top-nav");
      // hide back to top button
      $("#back-to-top").fadeOut();

    } else {
      //show navigation bar
      $("nav").addClass("vesco-top-nav");
      // show back to top button
      $("#back-to-top").fadeIn();
    }
  });
});

// Smooth Scrolling

$(function(){

  $("a.smooth-scroll").click(function(event){

    // prevent a link from opening the url
    event.preventDefault();

    // get/return section id (#about, #work #team etc.) 
    let section = $(this).attr("href");

    // add animation to html and body elements
    $("html, body").animate({
      scrollTop: $(section).offset().top -64
    }, 1250, "easeInOutExpo");
  });
});





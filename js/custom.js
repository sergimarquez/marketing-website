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
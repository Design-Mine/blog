(function(){
	var menu = $('body');
		$('.menu-icon').bind('click', function(){
          menu.toggleClass('allbody-open'); 
          return false;
      	});
})();


$(function() {
  $('#nav li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
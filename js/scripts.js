/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 55
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});

$( document ).ready(function() {
	$('#nav-who').on('activate.bs.scrollspy', function () {
		$('body').removeClass();
		$('body').addClass('green');
	});
});


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

	function switchColor (activeID) {
		$('body').removeClass();/*reverts it back to orange*/
		switch(activeID){ /*applies new color if necessary*/
			case 'nav-who':
				$('body').addClass('green');
				break;
			case 'nav-give':
				$('body').addClass('red');
				break;
			case 'nav-price':
				$('body').addClass('blue');
				break;
			case 'nav-community':
				$('body').addClass('purple');
				break;
		}
		
	}

	switchColor ($('#primarynavbar').find("li.active").attr("id"))

	$('#primarynavbar').on('activate.bs.scrollspy', function () {
	   var activeID = $(this).find("li.active").attr("id");
	   switchColor(activeID);
		$('.navbar-trans li>a').blur();/*this prevents two tabs being highlighted at the same time*/
	});
});


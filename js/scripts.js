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

$(function(){
  var
    $win = $(window),
    $filter = $('.navbar'),
    $filterSpacer = $('<div />', {
      "class": "filter-drop-spacer",
      "height": $filter.outerHeight()
    });
  $win.scroll(function(){     
    if(!$filter.hasClass('fix') && $win.scrollTop() > $filter.offset().top){
      $filter.before($filterSpacer);
      $filter.addClass("fix");
    } else if ($filter.hasClass('fix')  && $win.scrollTop() < $filterSpacer.offset().top){
      $filter.removeClass("fix");
      $filterSpacer.remove();
    }
  });
});

$( document ).ready(function() {
	(function( $ ){
	   $.fn.replaceDescription = function() {
			var className = $(this).attr('class');
			var description = $("<div id='timsle-btn-description'></div>").hide();
			
			description.addClass(className +'-faded')
			switch(className){
		  		case 'red':
					description.append('<h2>test</h2>');
					description.append('<p>this is the description of the red element</p>');
				case 'blue':

				case 'green':

				case 'orange':
				
	   		}
			$("div#timsle-btn-description").replaceWith(description);
			$("div#timsle-btn-description").slideDown("slow");
	   }; 
	})( jQuery );

	$(".timsle-buttons li:first").replaceDescription();

    $( ".timsle-buttons li" ).click(function() {
   		$(this).hide().prependTo('.timsle-buttons').slideDown("slow");
		$(this).replaceDescription();
	});
	
	

});


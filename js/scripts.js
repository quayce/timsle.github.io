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

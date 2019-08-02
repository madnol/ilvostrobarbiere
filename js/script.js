/*******************************************************************************
scrollreveal
*******************************************************************************/
ScrollReveal().reveal('.reveal', {
  delay: 500
});

//stickybar::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


$('.header').sticky({zIndex:9999,});




/*******************************************************************************
SLIDE ANIMATION
*******************************************************************************/
$(document).ready(function() {

  $("#the__Target").skippr({
    transition: 'fade',
    speed: 1000,
    easing: 'easeOutQuart',
    navType: 'bubble',
    childrenElementType: 'div',
    arrows: false,
    autoPlay: false,
    autoPlayDuration: 2500,
    keyboardOnAlways: true,
    hidePrevious: false
  });
  });

//anchorscroll::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
$('.anchor-scroll').anchorScroll({
  scrollSpeed: 800, // scroll speed
  offsetTop: 0, // offset for fixed top bars (defaults to 0)
  onScroll: function() {
    // callback on scroll start
  },
  scrollEnd: function() {
    // callback on scroll end
  }
});

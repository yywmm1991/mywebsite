$(window).on("scroll", function(e){
  var top = $(window).scrollTop();
  var user_has_scrolled = top !== 0;
  $("body").toggleClass("scrolled", user_has_scrolled);
});


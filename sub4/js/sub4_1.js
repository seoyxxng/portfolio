var st = $('.sticky').offset().top - 95;

$(window).on("scroll", function () {
  //스크롤의 거리가 발생하면
  var scroll = $(window).scrollTop();
  
  if (scroll >= st) {
    $(".sticky").addClass('on');
  } else {
    $(".sticky").removeClass("on");
  }
});




var st = $(".sticky").offset().top - 95;

$(window).on("scroll", function () {
  //스크롤의 거리가 발생하면
  var scroll = $(window).scrollTop();

  if (scroll >= st) {
    $(".sticky").addClass("on");
  } else {
    $(".sticky").removeClass("on");
  }
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto", //단수 , 'auto' (내가 원하는 단의 너비 사용할 때)
  spaceBetween: 30, //단사이 여백

  navigation: {
    //이전/다음 버튼
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  // Sticky 메뉴의 초기 위치 계산
  var st = $(".sticky").offset().top - 95;

  // 스크롤 이벤트
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    // Sticky 메뉴 고정
    if (scroll >= st) {
      $(".sticky").addClass("on");
    } else {
      $(".sticky").removeClass("on");
    }

    // 각 섹션의 위치 계산
    var case1Top = $(".case1").offset().top - 100;
    var case2Top = $(".case2").offset().top - 100;

    // 현재 스크롤 위치에 따른 메뉴 활성화
    $(".sticky h3 a").removeClass("cur");

    if (scroll < case2Top) {
      $(".sticky h3 a.new").addClass("cur");
    } else {
      $(".sticky h3 a.sin").addClass("cur");
    }
  });

  // 메뉴 클릭 이벤트
  $(".sticky a").click(function (e) {
    e.preventDefault();

    var targetPosition;

    if ($(this).hasClass("new")) {
      targetPosition = $(".case1").offset().top - 66;
    } else if ($(this).hasClass("sin")) {
      targetPosition = $(".case2").offset().top - 66;
    }

    $("html, body").stop().animate(
      {
        scrollTop: targetPosition,
      },
      1000
    );
  });

  // 초기 로드 시 첫 번째 메뉴 활성화
  $(".sticky h3:eq(0) a").addClass("cur");
});

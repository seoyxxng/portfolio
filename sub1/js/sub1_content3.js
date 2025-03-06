$(document).ready(function () {
  $(".slideMenu li:eq(0)").find("a").addClass("spy");
  //첫번째 서브메뉴 활성화

  $(".history section:eq(0)").addClass("boxMove");
  //첫번째 내용글 애니메이션 처리
  var smh = $("#content .slideMenu").offset().top-90; //메인 비주얼의 높이
  var h1 = $(".history section:eq(1)").offset().top-100;
  var h2 = $(".history section:eq(2)").offset().top-100;
  var h3 = $(".history section:eq(3)").offset().top-100;
  var h4 = $(".history section:eq(4)").offset().top-100;

  //스크롤의 좌표가 변하면.. 스크롤 이벤트
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    //스크롤top의 좌표를 담는다

    $(".text").text(scroll);
    //스크롤 좌표의 값을 찍는다.

    //sticky menu 처리
    if (scroll > smh) {
      $(".slideMenu").addClass("navOn");
      //스크롤의 거리가 350px 이상이면 서브메뉴 고정
      $("header").hide();
    } else {
      $(".slideMenu").removeClass("navOn");
      //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
      $("header").show();
    }

    $(".slideMenu li").find("a").removeClass("spy");
    //모든 서브메뉴 비활성화~ 불꺼!!!

    //스크롤의 거리의 범위를 처리
    if (scroll >= 0 && scroll < h1) {
      // 0~h1-800
      $(".slideMenu li:eq(0)").find("a").addClass("spy");
      //첫번째 서브메뉴 활성화

      $(".history li:eq(0)").addClass("boxMove");
      //첫번째 내용 콘텐츠 애니메이
    } else if (scroll >= h1 && scroll < h2) {
      //h1~h2-800
      $(".slideMenu li:eq(1)").find("a").addClass("spy");
      //두번째 서브메뉴 활성화

      $(".history section:eq(1)").addClass("boxMove");
    } else if (scroll >= h2 && scroll < h3) {
      $(".slideMenu li:eq(2)").find("a").addClass("spy");
      //세번째 서브메뉴 활성화

      $(".history section:eq(2)").addClass("boxMove");
    } else if (scroll >= h3 && scroll < h4) {
      $(".slideMenu li:eq(3)").find("a").addClass("spy");
      //네번째 서브메뉴 활성화

      $(".history section:eq(3)").addClass("boxMove");
    } else if (scroll >= h4) {
      $(".slideMenu li:eq(4)").find("a").addClass("spy");
      //네번째 서브메뉴 활성화

      $(".history section:eq(4)").addClass("boxMove");
    }
  });


  //메뉴 클릭 시 해당 컨텐츠로 이동
  $(".slideMenu a").click(function (e) {
    e.preventDefault(); //href="#" 속성을 막아주는..메소드

    var value = 0; //이동할 스크롤의 거리

    if ($(this).hasClass("link1")) {
      //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
      // value = 320;   //직접 값을 줄 때
      value = $(".history .con1").offset().top; // 해당 콘텐츠의 상단의 거리~~
    } else if ($(this).hasClass("link2")) {
      value = $(".history .con2").offset().top;
    } else if ($(this).hasClass("link3")) {
      value = $(".history .con3").offset().top;
    } else if ($(this).hasClass("link4")) {
      value = $(".history .con4").offset().top;
    } else if ($(this).hasClass("link5")) {
      value = $(".history .con5").offset().top;
    }

    $("html,body").stop().animate({ scrollTop: value }, 500);
  });
});

var divs = document.querySelectorAll(".intro div");
divs.forEach(function (elm) {
  elm.addEventListener("mouseenter", function () {
    var panel = document.querySelector(".highlight");
    panel.classList.toggle("highlight");
    elm.classList.toggle("highlight");
  });
});

window.addEventListener("keyup", function (e) {
  var panel = document.querySelector(".highlight");
  if ((e.keyCode == 37 || e.keyCode == 38) && panel != document.querySelectorAll(".intro div")[0]) {
    panel.previousElementSibling.classList.toggle("highlight");
    panel.classList.toggle("highlight");
  }
  if ((e.keyCode == 39 || e.keyCode == 40) && panel != document.querySelectorAll(".intro div")[3]) {
    panel.nextElementSibling.classList.toggle("highlight");
    panel.classList.toggle("highlight");
  }
});

window.focus();


// subnav

$(document).ready(function () {
  $(".subNav li:eq(0)").find("a").addClass("spy");
  //첫번째 서브메뉴 활성화

  $(".tgcon .sec:eq(0)").addClass("boxMove");
  //첫번째 내용글 애니메이션 처리

  var win_width,wgap=0;
  var smh,h1,h2,h3,h4;

  function w_size(){
    win_width = $(window).width();
  
    if(win_width>1280){  //와이드
      wgap = 300;
    }else if(win_width>1024){   //pc
      wgap = 350;
    }else if(win_width>768){ //테블릿
      wgap = 380;
    }else if(win_width>640){ //소형테블릿
      wgap = 460;
    }else{   //모바일
      wgap = 400;
    }
  
    smh = $(".navBox").offset().top; //메인 비주얼의 높이
    h1 = $(".tgcon .sec:eq(1)").offset().top-wgap;
    h2 = $(".tgcon .sec:eq(2)").offset().top-wgap;
    h3 = $(".tgcon .sec:eq(3)").offset().top-wgap;
    h4 = $(".tgcon .sec:eq(4)").offset().top-wgap;
  }

  w_size();

  $(window).resize(function(){
    w_size();
  });

  //스크롤의 좌표가 변하면.. 스크롤 이벤트
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    //스크롤top의 좌표를 담는다

    $(".text").text(scroll);
    //스크롤 좌표의 값을 찍는다.

    //sticky menu 처리
    if (scroll > smh) {
      $(".navBox").addClass("navOn");
      //스크롤의 거리가 350px 이상이면 서브메뉴 고정
      $("header").hide();
    } else {
      $(".navBox").removeClass("navOn");
      //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
      $("header").show();
    }


    $(".subNav li").find("a").removeClass("spy");
    //모든 서브메뉴 비활성화~ 불꺼!!!

    //스크롤의 거리의 범위를 처리
    if (scroll >= 0 && scroll < h1) {
      // 0~h1-800
      $(".subNav li:eq(0)").find("a").addClass("spy");
      //첫번째 서브메뉴 활성화

      $(".tgcon .sec:eq(0)").addClass("boxMove");
      //첫번째 내용 콘텐츠 애니메이
    } else if (scroll >= h1 && scroll < h2) {
      //h1~h2-800
      $(".subNav li:eq(1)").find("a").addClass("spy");
      //두번째 서브메뉴 활성화

      $(".tgcon .sec:eq(1)").addClass("boxMove");
    } else if (scroll >= h2 && scroll < h3) {
      $(".subNav li:eq(2)").find("a").addClass("spy");
      //세번째 서브메뉴 활성화

      $(".tgcon .sec:eq(2)").addClass("boxMove");
    } else if (scroll >= h3 && scroll < h4) {
      $(".subNav li:eq(3)").find("a").addClass("spy");
      //네번째 서브메뉴 활성화

      $(".tgcon .sec:eq(3)").addClass("boxMove");
    } else if (scroll >= h4) {
      $(".subNav li:eq(4)").find("a").addClass("spy");
      //네번째 서브메뉴 활성화

      $(".tgcon .sec:eq(4)").addClass("boxMove");
    }
  });


  //메뉴 클릭 시 해당 컨텐츠로 이동
  $(".navBox a").click(function (e) {
    e.preventDefault(); //href="#" 속성을 막아주는..메소드

    var value = 0; //이동할 스크롤의 거리

    if ($(this).hasClass("link1")) {
      //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
      // value = 320;   //직접 값을 줄 때
      value = $(".tgcon .sec1").offset().top - 74; // 해당 콘텐츠의 상단의 거리~~
    } else if ($(this).hasClass("link2")) {
      value = $(".tgcon .sec2").offset().top - 74;
    } else if ($(this).hasClass("link3")) {
      value = $(".tgcon .sec3").offset().top - 74;
    } else if ($(this).hasClass("link4")) {
      value = $(".tgcon .sec4").offset().top - 74;
    } else if ($(this).hasClass("link5")) {
      value = $(".tgcon .sec5").offset().top - 74;
    }

    $("html,body").stop().animate({ scrollTop: value }, 1000);
  });
});

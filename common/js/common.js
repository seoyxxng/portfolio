// 전체 페이지 공통 js

//스크롤 애니메이션AOS
AOS.init({
  easing: 'ease-in-out-sine'
});

// 글로벌 네비게이션(GNB)


$(document).ready(function () {
  var smh = $(".sub_visual").height(); //비주얼 이미지의 높이를 리턴한다   900px
  var on_off = false; //false(안오버)  true(오버)

  $("#headerArea").mouseenter(function () {
    // var scroll = $(window).scrollTop();
    $(this).css("background", "#fff");
    $(".dropdownmenu li a").css("color", "#333");

    on_off = true; //오버가되었다
  });

  $("#headerArea").mouseleave(function () {
    var scroll = $(window).scrollTop(); //스크롤의 거리

    if (scroll < smh - 87) {
      //스크롤 비주얼높이-헤더높이(비주얼 위 상태)
      $(this)
        .css("background", "rgba(255,255,255,.7)")
        .css("backdrop-filter", "blur(5px)")
        .css("box-shadow", "none");
      $(".dropdownmenu li a").css("color", "#333"); //글자색을 원래인 흰색으로
    } else {
      //비주얼 아래
      $(this).css("background", "#fff");
      $(".dropdownmenu li a").css("color", "#333");
    }
    on_off = false; //오버x
  });

  $(window).on("scroll", function () {
    //스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop(); //스크롤의 거리를 리턴하는 함수
    // console.log(scroll);

    if (scroll > smh - 90) {
      //스크롤300까지 내리면
      $("#headerArea").css("background", "#fff").css("box-shadow", "1px 0 8px rgba(0, 0, 0, .4)");
      $(".dropdownmenu li a").css("color", "#333");
    } else {
      //스크롤 내리기 전 디폴트(마우스올리지않음)
      if (on_off == false) {
        //헤더에 오버x 상태에서만
        $("#headerArea")
          .css("background", "rgba(255,255,255,.7)")
          .css("backdrop-filter", "blur(5px)")
          .css("box-shadow", "none");
        $(".dropdownmenu li a").css("color", "#333");
      }
    }
  });

  //2depth 열기/닫기
  $("ul.dropdownmenu").hover(
    function () {
      $("ul.dropdownmenu li.menu ul").fadeIn(300, function () {
        $(this).stop();
      }); //모든 서브를 다 열어라
      $("#headerArea").animate({ height: 250 }, 300).clearQueue();
    },
    function () {
      $("ul.dropdownmenu li.menu ul").hide(); //모든 서브를 다 닫아라
      $("#headerArea").animate({ height: 90 }, 300).clearQueue();
    }
  );


  //1depth 효과
  $("ul.dropdownmenu li.menu").hover(
    function () {
      $(".depth1", this).css("color", "#00a1d1");
    },
    function () {
      $(".depth1", this).css("color", "#333");
    }
  );

  //  2depth 효과
  $("ul.dropdownmenu .menu ul li").hover(
    function () {
      $("a", this).css("color", "#00a1d1");
    },
    function () {
      $("a", this).css("color", "#333");
    }
  );

  //tab 처리
  $("ul.dropdownmenu li.menu .depth1").on("focus", function () {
    $("ul.dropdownmenu li.menu ul").slideDown("normal");
    $("#headerArea").animate({ height: 250 }, "fast").clearQueue();
  });

  $("ul.dropdownmenu li.m6 li:last")
    .find("a")
    .on("blur", function () {
      $("ul.dropdownmenu li.menu ul").slideUp("fast");
      $("#headerArea").animate({ height: 90 }, "normal").clearQueue();
    });
});


// 패밀리 사이트 이동
$(document).ready(function () {
  // $('.select .arrow').click(function(){
  // 	$('.select .aList').fadeIn('slow');
  // });

  // $('.select .aList').mouseleave(function(){
  // 	$(this).fadeOut('fast');
  // });

  $(".family .arrow").toggle(
    function () {
      $(".family .aList").fadeIn('slow');
      $(this).find("i").animate({ rotate: "-180deg" }, 300);
    },
    function () {
      $(".family .aList").fadeOut("fast");
      $(this).find("i").animate({ rotate: "0deg" }, 300);
    }
  );


  //tab키 처리
  $(".family .arrow").on("focus", function () {
    $(".family .aList").fadeIn("slow");
  });
  $(".family .aList li:last a").on("blur", function () {
    $(".family .aList").fadeOut("fast");
  });
});

  //family 열려있을 때 body 클릭 시 닫기
  $("body").click(function () {
    $(".family .aList").fadeOut("fast");
    $(".family .arrow").find("i").animate({ rotate: "0deg" }, 300);
  });

//top으로 이동
  $(window).on("scroll", function () {
    //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리

    // $(".text").text(scroll);

    if (scroll > 500) {
      //300이상의 거리가 발생되면
      $(".top_move").fadeIn("slow"); //top보여라~~~~
    } else {
      $(".top_move").fadeOut("fast"); //top안보여라~~~~
    }
  });

  $(".top_move").click(function (e) {
    e.preventDefault();
    //상단으로 스르륵 이동합니다.
    $("html,body").stop().animate({ scrollTop: 0 }, 1000);
  });

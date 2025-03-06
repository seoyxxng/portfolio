// 메인 비주얼 처리코드
var timeonoff; //타이머 처리  홍길동 정보
var imageCount = $(".gallery ul li").size(); //이미지 총개수 5
var cnt = 1; //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때

$(".btn1").css("background", "rgba(255, 255, 255, 0.5)"); //첫번째 불켜
$(".btn1").css("width", "150px"); // 버튼의 너비 증가
$(".btn1").addClass('on');

$(".gallery .link1").fadeIn("fast"); //첫번째 이미지 보인다..
$(".gallery .link1 span:eq(0)").delay(1500).animate({ top: 310, opacity: 1 }, "slow");
$(".gallery .link1 span:eq(1)").delay(1900).animate({ top: 430, opacity: 1 }, "slow");

function gallery_change() {
  $(".gallery li").fadeOut("300"); //모든 이미지 안보인다.
  $(".gallery .link" + cnt).fadeIn("400"); //자기 자신만 이미지가 보인다

  $(".mbutton").css("background", "rgba(255, 255, 255, 0.5)"); //버튼 모두불꺼
  $(".mbutton").css("width", "20px");
  $(".mbutton").removeClass("on");
  $(".btn" + cnt).addClass("on");
  $(".btn" + cnt).css("background", "rgba(255, 255, 255, 0.5)"); //자신 버튼만 불켜
  $(".btn" + cnt).css("width", "150px");

  $(".gallery li span").css("top", 480).css("opacity", 0);
  $(".gallery .link" + cnt)
    .find("span:eq(0)")
    .delay(1500)
    .animate({ top: 310, opacity: 1 }, "slow");
  $(".gallery .link" + cnt)
    .find("span:eq(1)")
    .delay(2000)
    .animate({ top: 430, opacity: 1 }, "slow");
  }

function moveg() {
  if (cnt == imageCount + 1) cnt = 1;
  if (cnt == imageCount) cnt = 0; //카운트 초기화

  cnt++; //카운트 1씩 증가.. 5가되면 다시 초기화
  //1 2 3 4 5   1 2 3 4 5..
  gallery_change();

  if (cnt == imageCount) cnt = 0; //카운트의 초기화 0
}

timeonoff = setInterval(moveg, 4000); // 타이머를 동작 1~5이미지를 순서대로 자동 처리
//var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
//clearInterval(변수); -> 살인마/사이코패스/살인청부업자

$(".mbutton").click(function (event) {
  //각각의 버튼 클릭시
  var $target = $(event.target); //클릭한 버튼 $target == $(this)
  clearInterval(timeonoff); //타이머 중지

  cnt = $(this).index(".mbutton") + 1; //0~4 ->1~5
  // console.log(cnt);

  gallery_change();

  if (cnt == imageCount) cnt = 0; //카운트 초기화

  timeonoff = setInterval(moveg, 4000); //타이머의 부활!!!

  if (onoff == false) {
    //중지상태냐??
    onoff = true; //동작~~
    $(".ps").html('<span class="hidden">stop</span><i class="fa-regular fa-circle-pause"></i>');
  }
});

//stop/play 버튼 클릭시 타이머 동작/중지
$(".ps").click(function () {
  if (onoff == true) {
    // 타이머가 동작 중이냐??
    clearInterval(timeonoff); //살인마 고용 stop버튼 클릭시
    $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
    onoff = false; //중지
  } else {
    // false 타이머가 중지 상태냐??
    timeonoff = setInterval(moveg, 4000); //play버튼 클릭시  부활
    $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-pause"></i>');
    onoff = true; //동작
  }
});

//왼쪽/오른쪽 버튼 처리
$(".sub_visual .btn").click(function () {
  clearInterval(timeonoff); //살인마

  if ($(this).is(".btnRight")) {
    // 오른쪽 버튼 클릭 1 2 3 4 5
    if (cnt == imageCount) cnt = 0; //카운트가 마지막 번호(5)라면 초기화 0
    //if(cnt==imageCount+1)cnt=1;
    cnt++; //카운트 1씩증가
  } else if ($(this).is(".btnLeft")) {
    //왼쪽 버튼 클릭 5 4 3 2 1
    if (cnt == 1) cnt = imageCount + 1; // 1->6  만들고 6에서 다시 54321
    if (cnt == 0) cnt = imageCount; //0->5 만들고 4321로 감소
    cnt--; //카운트 감소
  }

  gallery_change();

  timeonoff = setInterval(moveg, 4000); //부활

  if (onoff == false) {
    onoff = true;
    $(".ps").html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
  }
});


// 사업영역 컨텐츠
$(document).ready(function () {
  // var timeonoff;
  var imageCount = $(".business ul li").size(); //4
  var cnt = 1; //리스트 순서

  $(".business ul li:eq(0)").addClass("current");

  function move_gallery() {
    cnt++; //1 2 3 4

    $(".business ul li").removeClass("current"); //모든 li 클래스 삭제
    $(".business ul li:eq(" + (cnt - 1) + ")").addClass("current"); //현재 열린 li만 클래스 추가

    if (cnt == 1) {
      $(".business .business_inner2").animate({ left: 1070 }, 450, "easeOutQuad").clearQueue();
      $(".business .business_inner3")
        .animate({ left: [1180, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner4")
        .animate({ left: [1290, "easeOutQuad"] }, 450)
        .clearQueue();
    } else if (cnt == 2) {
      $(".business .business_inner2")
        .animate({ left: [110, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner3")
        .animate({ left: [1290, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner4")
        .animate({ left: [1400, "easeOutQuad"] }, 450)
        .clearQueue();
    } else if (cnt == 3) {
      $(".business .business_inner2")
        .animate({ left: [110, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner3")
        .animate({ left: [220, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner4")
        .animate({ left: [1290, "easeOutQuad"] }, 450)
        .clearQueue();
    } else if (cnt == 4) {
      $(".business .")
        .animate({ left: [110, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner3")
        .animate({ left: [220, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner4")
        .animate({ left: [330, "easeOutQuad"] }, 450)
        .clearQueue();
    }

    if (cnt == imageCount) cnt = 0;
  }

  // timeonoff= setInterval(move_gallery, 4000);

  $(".business ul li span").mouseenter(function (event) {
    var $target = $(event.target); // var $target = $(this)

    // clearInterval(timeonoff);
    $(".business ul li").removeClass("current");
    $(this).parent().addClass("current");

    if ($target.is(".buttonMenu01")) {
      //첫번째 버튼에 마우스 오버되면
      $(".business .business_inner2")
        .animate({ left: [1070, "easeOutQuad"] }, 450)
        .clearQueue();
      //$('.business .img02').animate({left:350},450,'easeOutQuad').clearQueue();
      $(".business .business_inner3")
        .animate({ left: [1180, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner4")
        .animate({ left: [1290, "easeOutQuad"] }, 450)
        .clearQueue();
      cnt = 1;
    } else if ($target.is(".buttonMenu02")) {
      //두번째 버튼에 마우스 오버되면
      $(".business .business_inner2")
        .animate({ left: [110, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner3")
        .animate({ left: [1180, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner4")
        .animate({ left: [1290, "easeOutQuad"] }, 450)
        .clearQueue();
      cnt = 2;
    } else if ($target.is(".buttonMenu03")) {
      $(".business .business_inner2")
        .animate({ left: [110, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner3")
        .animate({ left: [220, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner4")
        .animate({ left: [1290, "easeOutQuad"] }, 450)
        .clearQueue();
      cnt = 3;
    } else if ($target.is(".buttonMenu04")) {
      $(".business .business_inner2")
        .animate({ left: [110, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner3")
        .animate({ left: [220, "easeOutQuad"] }, 450)
        .clearQueue();
      $(".business .business_inner4")
        .animate({ left: [330, "easeOutQuad"] }, 450)
        .clearQueue();
      cnt = 0;
    }

    //timeonoff= setInterval(move_gallery, 4000);  //부활~~
  });
});

// 지속가능경영 컨텐츠
$(document).ready(function () {
	var article = $(".management .article"); //모든 li들..(질문답변들...)
	
	$(".management .article:eq(0)").removeClass("hide").addClass("current");
	$(".management .article:eq(0) .h4").slideDown(100);	//초기화면 1번째 li 보이기

  $('.management .article').mouseenter(function(e){   //각각의 질문을 클릭하면
      //e.preventDefault();

    var myArticle = $(this);  //클릭한 해당 메뉴에 li(리스트) 
    var ind2 = $(this).index('.management .article');
    console.log(ind2);

    $(".management_left img").attr("src", './images/management'+(ind2+1)+'.jpg').hide().fadeIn('400');
	
	if(myArticle.hasClass('hide')){   //클릭한 해당 리스트가 닫혀있냐??
	    //article.find(".inner").slideUp(100); // 모든 리스트의 답변을 닫아라
      article.removeClass("current").addClass("hide"); //모든 리스트의 클래스 hide로 바꾼다
      article.css({ 'height': 100 });
    
		  myArticle.removeClass("hide").addClass("current");  // 클래스를 show로 바꾼다
      //myArticle.find(".inner").slideDown(100);  //해당 리스트의 답변을 열어라~~~
      myArticle.css({ 'height': 320 });
    
  }
  // else {  //클릭한 해당 리스트가 열려있냐?? (show)
	//    myArticle.removeClass("current").addClass("hide");  //클래스 hide로 바꾼다
  //   //myArticle.find(".inner").slideUp(100);   //해당 리스트의 답변을 닫아라~~~
  //   myArticle.css({'height':100});
	// }  
  });

}); 

// 사회공헌 컨텐츠
var social = [
  {
    name: "학습결손지원",
    information:
      "웅진은 어린이를 대상으로 한 교육문화 부분에 대해 사회공헌활동을 진행하고 있습니다. 교육으로 키우는 새로운 희망, 웅진이 앞장서겠습니다.",
    link: "./sub4/sub4_1.html",
  },
  {
    name: "봉사활동",
    information:
      "소아암 어린이를 위한 착한BOOK 상자 만들기 활동, 임직원 봉사 동호회 천사지기 활동 등 웅진은 매년 6,900시간, 평균 16시간의 봉사활동을 실천하고 있습니다.",
    link: "./sub4/sub4_2.html",
  },
  {
    name: "사회공헌활동",
    information: "소아암 어린이 후원, 군인가족 교육복지 지원 등 2005년부터 매년 10억 이상 지속적인 활동을 이어가고 있습니다.",
    link: "./sub4/sub4_3.html",
  },
  {
    name: "웅진재단후원",
    information:
      "웅진은 매년 웅진재단 기부를 통해 다문화사회 지원사업, 수학·과학·예술 영재 장학사업, 희귀난치성 환아 지원사업을 후원하고 있습니다. ",
    link: "./sub4/sub4_4.html",
  },
];

// var 객체배열명 = [{'속성':'값','속성':'값'},{'속성':'값','속성':'값'}]
//characters[방번호].속성

//   $(".characters .charbox img").attr("src", "./images/char01_x2.png");
//   $(".gallery-thumbs .title").html(characters[0].name);
//   $(".gallery-thumbs .main_t").html(characters[0].information);
// $(".characters .gallery-thumbs ul li:eq(0) a").css("filter", "grayscale(0)");
  

$(".social .social_menu li:first").addClass("menu_current");

$(".social .social_menu li")
  .click(function (e) {
    e.preventDefault();

    var ind = $(this).index(".social .social_menu li"); //0~5
    // ind=0

    $(".social .social_menu li").removeClass("menu_current");

    $(".social_bottom .social_right img").attr("src", "./images/social" + (ind + 1) + ".jpg");
    $(".social_bottom .social_right img").hide().fadeIn("slow");
    $(".social_bottom .current").hide().fadeIn("slow");

    $(".social_bottom .title").html(social[ind].name);
    $(".social_bottom .main_t").html(social[ind].information);

    $(".social_bottom .social_more").attr("href",social[ind].link);
    
    $(this).addClass("menu_current");
  });




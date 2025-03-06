var swiper1 = new Swiper(".swiper", {
  slidesPerView: 4.2, //단수 , 'auto' (내가 원하는 단의 너비 사용할 때)
  spaceBetween: 15, //단사이 여백
  pagination: {
    //페이지 네이션
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
    // type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  },
  breakpoints: {
      1280: {
        slidesPerView: 3.2,
      },
      1024: {
        slidesPerView: 3.2,
      },
      768: {
        slidesPerView: 2.2,
      },
      320: {
        slidesPerView: 1.2
      }
    }
});

// series


  var cnt = 5; //탭메뉴 개수 ***
  $(".series .series_btm:eq(0)").show(); // 첫번째 탭 내용만 열어라
  $(".series .tab1").css("border", "2px solid #ED1D24"); //첫번째 탭메뉴 활성화
  //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

  $(".series .tab").click(function (e) {
    e.preventDefault(); // <a> href="#" 값을 강제로 막는다

    var ind = $(this).index(".series .tab"); // 클릭시 해당 index를 뽑아준다
    // console.log(ind);

    $(".series .series_btm").hide(); //모든 탭내용을 안보이게...
    $(".series .series_btm:eq(" + ind + ")").show(); //클릭한 해당 탭내용만 보여라
    $(".ser_tab .tab").css("border", "none"); //모든 탭메뉴를 비활성화
    $(this).css("border", "2px solid #ED1D24"); // 클릭한 해당 탭메뉴만 활성화
  });



 //스크롤 탭 감추기

setTimeout(function(){
  $('.contlist:eq(1) .series_btm').hide();
  $('.contlist:eq(2) .series_btm').hide();
  $('.contlist:eq(3) .series_btm').hide();
  $('.contlist:eq(4) .series_btm').hide();
} , 500);
$(document).ready(function () {
  var cnt = $(".con2_l a").size(); //탭메뉴 개수 ***
  $(".con2_l .circle_con:eq(0)").show(); // 첫번째 탭 내용만 열어라
  $(".con2_l .icon1").css("border", "3px solid #E98300"); //첫번째 탭메뉴 활성화
  //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

  $(".con2_l a").each(function (index) {
    // index=0 1 2
    $(this).click(function (e) {
      //각각의 탭메뉴를 클릭하면...
      e.preventDefault(); // <a> href="#" 값을 강제로 막는다

      $(".con2_l .circle_con").hide(); //모든 탭내용을 안보이게...
      //$(".tabs .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
      $(".con2_l .circle_con:eq(" + index + ")").fadeIn("slow");
      $(".con2_l .icon").css("border", "none"); //모든 탭메뉴를 비활성화
      $(this).css("border", "3px solid #E98300"); // 클릭한 해당 탭메뉴만 활성화
    });
  });
});

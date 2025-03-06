
var cnt = $(".tabmenu h4").size(); //탭메뉴 개수 ***
$(".tabmenu .contlist:eq(0)").show(); // 첫번째 탭 내용만 열어라
$(".tabmenu .t1").css("background", "#00A1DE").css("color", "#fff");//첫번째 탭메뉴 활성화
$(".tabmenu .contlist:eq(1)").hide();
//자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

$(".tabmenu .tab").each(function (index) {
  // index=0 1 2
  $(this).click(function (e) {
    //각각의 탭메뉴를 클릭하면...
    e.preventDefault(); // <a> href="#" 값을 강제로 막는다

    $(".tabmenu .contlist").hide(); //모든 탭내용을 안보이게...
    //$(".tabs .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
    $(".tabmenu .contlist:eq(" + index + ")").fadeIn("slow");
    $(".tab").css("background", "none").css("color", "#777"); //모든 탭메뉴를 비활성화
    $(this).css("background", "#00A1DE").css("color", "#fff"); // 클릭한 해당 탭메뉴만 활성화
  });
});

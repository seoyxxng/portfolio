const modal = document.querySelector(".modal");
const modalOpen = document.querySelector(".modal_btn");
const modalClose = document.querySelector(".close_btn");

//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen.addEventListener("click", function (e) {
  e.preventDefault();
  //'on' class 추가
  //modal.classList.add("on");
  modal.style.display = 'block';
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose.addEventListener("click", function (e) {
  e.preventDefault();
  //'on' class 제거
  //modal.classList.remove("on");
  modal.style.display = 'none';
});
modal.addEventListener("click", function () {
  //'on' class 추가
  //this.classList.remove("on");
  this.style.display = 'none';
});

setTimeout(function(){
  modal.style.display = 'none';
  modal.style.opacity = 1;
}, 500);





// 스케치 보기




var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto", //단수 , 'auto' (내가 원하는 단의 너비 사용할 때)
  spaceBetween: 10, //단사이 여백

  pagination: {
    //페이지 네이션
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
    type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  },
});


$(document).ready(function () {
  $(".grid-image-item").hover(
    function () {
      $(this).siblings().css({ filter: "brightness(60%)" });
    },
    function () {
      $(this).siblings().css({ filter: "brightness(100%)" });
    }
  );
});


// intro

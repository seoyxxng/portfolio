  var animated = false;

  function startCounter() {
    if (animated) return;

    animated = true;

    // 첫번째 카운터
    $({ val: 0 }).animate(
      { val: 21 },
      {
        duration: 2000,
        step: function () {
          var number = Math.floor(this.val);
          $(".cnt1").text(number);
        },
        complete: function () {
          var number = Math.floor(this.val);
          $(".cnt1").text(number);
        },
      }
    );

    // 두번째 카운터
    $({ val: 0 }).animate(
      { val: 1300 },
      {
        duration: 2000,
        step: function () {
          var number = Math.floor(this.val);
          $(".cnt2").text(number);
        },
        complete: function () {
          var number = Math.floor(this.val);
          $(".cnt2").text(number);
        },
      }
    );

    // 세번째 카운터
    $({ val: 0 }).animate(
      { val: 1200 },
      {
        duration: 2000,
        step: function () {
          var number = Math.floor(this.val);
          $(".cnt3").text(number);
        },
        complete: function () {
          var number = Math.floor(this.val);
          $(".cnt3").text(number);
        },
      }
    );
  }

  $(window).scroll(function () {
    var counterSection = $(".con2");
    var counterPosition = counterSection.offset().top;
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > counterPosition - windowHeight / 2) {
      startCounter();
    }
  });

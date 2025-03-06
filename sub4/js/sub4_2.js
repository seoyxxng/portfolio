var animated = false;


function startCounter() {
  if (animated) return;

  animated = true;

  // 첫번째 카운터
  $({ val: 0 }).animate(
    { val: 6900 },
    {
      duration: 3000,
      step: function () {
        var number = Math.floor(this.val);
        $(".cnt1").text(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      },
      complete: function () {
        var number = Math.floor(this.val);
        $(".cnt1").text(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

      },
    }
  );

  // 두번째 카운터
  $({ val: 0 }).animate(
    { val: 16 },
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
}

  $(window).scroll(function () {
    var counterSection = $(".intro");
    var counterPosition = counterSection.offset().top;
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > counterPosition - windowHeight) {
      startCounter();
    }
  });

// con1 

  $(".back .con1 ul li:eq(1) a").css("filter", "grayscale(100%)");
  $(".back .con1 ul li:eq(2) a").css("filter", "grayscale(100%)");
  $(".back .con1 ul li:eq(3) a").css("filter", "grayscale(100%)");

  $(".back .con1 a").click(function (e) {
    e.preventDefault();

    var ind = $(this).index(".back .con1 a"); //0~5
    // ind=0

    $(".back .con1_big img").attr("src", "./images/content2/img" + (ind + 1) + ".jpg");
    $(".back .con1_big img").hide().fadeIn("slow");

    $(".back .con1 ul li a").css("filter", "grayscale(100%)");
    $(".back .con1 ul li:eq(" + ind + ") a").css("filter", "grayscale(0)");
  });

// con2

  $(".back .con2 ul li:eq(1) a").css("filter", "grayscale(100%)");
  $(".back .con2 ul li:eq(2) a").css("filter", "grayscale(100%)");
  $(".back .con2 ul li:eq(3) a").css("filter", "grayscale(100%)");

  $(".back .con2 a").click(function (e) {
    e.preventDefault();

    var ind = $(this).index(".back .con2 a"); //0~5
    // ind=0

    $(".back .con2_big img").attr("src", "./images/content2/img2" + (ind + 1) + ".jpg");
    $(".back .con2_big img").hide().fadeIn("slow");

    $(".back .con2 ul li a").css("filter", "grayscale(100%)");
    $(".back .con2 ul li:eq(" + ind + ") a").css("filter", "grayscale(0)");
  });

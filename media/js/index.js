
var swiper1 = new Swiper(".swiper1", {
  slidesPerView: "auto", //단수 , 'auto' (내가 원하는 단의 너비 사용할 때)
  spaceBetween: 10, //단사이 여백
});

var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 4, //단수 , 'auto' (내가 원하는 단의 너비 사용할 때)
  spaceBetween: 35, //단사이 여백
  breakpoints: {
    1280: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 2,
    },
  }
});

// movies

var movies = [
  {
    information:
      "Marvel Studios presents in association with Paramount Pictures 'Marvel's The Avengers'--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
  },
  {
    information:
      "Marvel Studios' ”Deadpool & Wolverine” finds Wade Wilson with his past as the morally flexible Deadpool behind him, until he suddenly finds himself in a fight for the survival of his homeworld and must suit-up again—and convince a reluctant Wolverine to help him.",
  },
  {
    information:
      "Marvel Studios' 'Doctor Strange in the Multiverse of Madness'—a thrilling ride through the Multiverse with Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. 'Doctor Strange in the Multiverse of Madness' opens in U.S. theaters on May 6, 2022.",
  },
  {
    information:
      "A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine—distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man—but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.",
  },
  {
    information:
      "Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia (Lupita Nyong'o) and Everett Ross (Martin Freeman) and forge a new path for the kingdom of Wakanda.",
  },
];

$(".movies .movies_r .film a:eq(0)").css("filter", "grayscale(.7)");

$(".movies .film a").click(function (e) {
  e.preventDefault();

  var ind = $(this).index(".movies .film a"); //0~5
  // ind=0

  $(".movies .avengers .big_img").attr("src", "./images/big" + (ind + 1) + ".jpg");

  $(".movies .avengers .logo").attr("src", "./images/logo" + (ind + 1) + ".png");

  $(".textm").html(movies[ind].information);

  $(".movies .film a").css("filter", "grayscale(0)");
  $(".movies .film a:eq(" + ind + ")").css("filter", "grayscale(.7)");
});

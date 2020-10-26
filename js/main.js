// Service Worker
window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
};

// Products Carousel
$("#recipeCarousel").carousel({
  interval: 10000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

// Search Bar
$(".search-wrapper").mouseover(function () {
  $(".search-box").show();
  $(".open").hide();
});

$(".search-wrapper").mouseout(function () {
  $(".search-box").hide();
  $(".open").show();
});

// User Panel
$(".user").mouseover(function () {
  $(".drop-user").show();
});

$(".user").mouseout(function () {
  $(".drop-user").hide();
});

$(".comment").mouseover(function () {
  $(".drop-comment").show();
});

$(".comment").mouseout(function () {
  $(".drop-comment").hide();
});
$(document).ready(function () {
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
  });
});

$(".services-gallery").mousedown(function () {
  $(".services-gallery").css("cursor", "grab");
});

$(".services-gallery").mouseup(function () {
  $(".services-gallery").css("cursor", "default");
});

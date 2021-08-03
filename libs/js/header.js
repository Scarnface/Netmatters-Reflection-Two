"use strict";

var scroll = false;
var lastScroll = 0;
var headerHeight = $(".header").height();

$(window).scroll(function () {
  var currentScroll = $(window).scrollTop();
  console.log(currentScroll);

  if (currentScroll == 0) {
    // Keep the header in place until we have scrolled past it.
    $(".header").css("position", "static");
    // Reset the gallery margin when the header is in the document flow.
    $(".services-gallery").css("margin-top", 0);
  } else if (currentScroll >= headerHeight + 50) {
    // Set fixed positioning to display over page when scrolling up.
    $(".header").css("position", "fixed");
    // Add a margin to the next element after the header to position it correctly after a fixed element.
    $(".services-gallery").css("margin-top", headerHeight);
  }

  if (currentScroll > lastScroll && scroll == false) {
    // Detect scroll down.
    $(".header").css("top", headerHeight * -1);
    scroll = true;
  } else if (currentScroll < lastScroll && scroll == true) {
    // Detect scroll up.
    $(".header").css("top", 0);
    scroll = false;
  }

  lastScroll = currentScroll;
});

//$(".header").css({ "top": 0, "position": "fixed", "transform": "translate3d(0, -100%, 0)" });
//$(".header").css({ "top": 0, "position": "fixed", "transform": "translate3d(0, -100%, 0)" });

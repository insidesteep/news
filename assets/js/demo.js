$(function () {
  // owl carousel script starts
  if ($("#main-banner-carousel").length) {
    $("#main-banner-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 2000,
      autoplayHoverPause: true,
      autoWidth: false,
      autoHeight: false,
      dots: true,
      margin: 0,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        320: {
          items: 1,
        },
      },
    });
  }

  // scroll header script here
  window.onscroll = function () {
    scrollHeader();
  };
  // Get the header
  var header = $(".navbar-bottom-menu");
  var body = $("body");
  function scrollHeader() {
    // adding sticky class
    if (window.pageYOffset > 105) {
      $(header).addClass("sticky");
    } else {
      // removing sticky class
      $(header).removeClass("sticky");
    }
  }

  // navbar toggler script
  $(".navbar-toggler").on("click", function () {
    $(".collapse").toggleClass("show");
    $("body").toggleClass("layer-open");
    // $(header).toggleClass("sticky-not");
    $(".navbar-close").show();
  });
  $(".navbar-close").on("click", function () {
    $(".collapse").toggleClass("show");
    $(".navbar-close").hide();
    $("body").toggleClass("layer-open");
    // $(header).toggleClass("sticky-not");
    $(".dark-overlay").click(function () {
      $(".collapse").removeClass("show");
      $("body").removeClass("layer-open");
    });
  });

  let videoGallery = document.querySelector(".video-gallery");
  let iframe = document.querySelector("iframe");
  let backdrop = document.querySelector(".backdrop");
  let html = document.documentElement;
  let closeButton = backdrop.querySelector(".backdrop__close");

  videoGallery.addEventListener("click", (e) => {
    const videoElm = e.target.closest(".video");

    if (!videoElm) return;

    const youtubeID = videoElm.getAttribute("data-youtube-id");

    if (!youtubeID) return;

    backdrop.classList.add("visible");
    html.classList.add("overflow-hidden");

    let youtubeSrc = `https://www.youtube.com/embed/${youtubeID}?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=3`;

    iframe.setAttribute("src", youtubeSrc);
    console.log(html);
  });

  closeButton.addEventListener("click", () => {
    backdrop.classList.remove("visible");
    html.classList.remove("overflow-hidden");
    iframe.removeAttribute("src");
  });
});

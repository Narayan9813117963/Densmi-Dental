  AOS.init();
// scroll navbar
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrollPosition = window.scrollY;
  if (scrollPosition > 60) {
    // adjust this value based on your needs
    navbar.classList.add("fixed");
    navbar.style.opacity = "1"; // Adjust the opacity level as needed
  } else {
    navbar.classList.remove("fixed");
    navbar.style.opacity = "1";
  }
});
// scroll navbar

// dropdown
var dropdownItems = document.querySelectorAll(".dropdown .nav-item");
var mainMenus = document.querySelectorAll(".main-menu");

dropdownItems.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    item.closest(".dropdown").classList.add("hovered");
    mainMenus.forEach(function (mainMenu) {
      mainMenu.classList.add("hovered");
    });
  });

  item.addEventListener("mouseleave", function () {
    item.closest(".dropdown").classList.remove("hovered");
    mainMenus.forEach(function (mainMenu) {
      mainMenu.classList.remove("hovered");
    });
  });
});

mainMenus.forEach(function (mainMenu) {
  mainMenu.addEventListener("mouseenter", function () {
    mainMenu.classList.add("main-menu-hovered");
  });

  mainMenu.addEventListener("mouseleave", function () {
    mainMenu.classList.remove("main-menu-hovered");
  });
});
/* dropdown */

// sidebar responsive
function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  sidebar.classList.toggle("openNav");
}

function closeSidebar() {
  var sidebar = document.getElementById("mySidebar");
  sidebar.classList.remove("openNav");
}

// sidebar responsive
// slider-1 hero
$(document).ready(function () {
  $(".hero-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
  });

  var filtered = false;

  $(".js-filter").on("click", function () {
    if (filtered === false) {
      $(".hero-slider").slick("slickFilter", ":even");
      $(this).text("Unfilter Slides");
      filtered = true;
    } else {
      $(".hero-slider").slick("slickUnfilter");
      $(this).text("Filter Slides");
      filtered = false;
    }
  });
});
// slider-1 hero

// slider-2 brand
$(document).ready(function () {
  $(".brandsslider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: ".brand-prev",
    nextArrow: ".brand-next",
    centerMode: true,
    centerPadding: "5px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  var filtered = false;

  $(".js-filter").on("click", function () {
    if (filtered === false) {
      $(".brandsslider").slick("slickFilter", ":even");
      $(this).text("Unfilter Slides");
      filtered = true;
    } else {
      $(".brandsslider").slick("slickUnfilter");
      $(this).text("Filter Slides");
      filtered = false;
    }
  });
});
// slider-2 brand

// slider-3 dentist
$(".dentist-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: ".dentist-prev",
  nextArrow: ".dentist-next",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

var filtered = false;

$(".js-filter").on("click", function () {
  if (filtered === false) {
    $(".dentist-slider").slick("slickFilter", ":even");
    $(this).text("Unfilter Slides");
    filtered = true;
  } else {
    $(".dentist-slider").slick("slickUnfilter");
    $(this).text("Filter Slides");
    filtered = false;
  }
});
// slider-3 dentist

// slider-4 product
$(".shop-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: ".product-prev",
  nextArrow: ".product-next",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

var filtered = false;

$(".js-filter").on("click", function () {
  if (filtered === false) {
    $(".shop-slider").slick("slickFilter", ":even");
    $(this).text("Unfilter Slides");
    filtered = true;
  } else {
    $(".shop-slider").slick("slickUnfilter");
    $(this).text("Filter Slides");
    filtered = false;
  }
});
// slider-4 product
// slider-5 testimonial
$(".testi-slider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: ".testi-prev",
  nextArrow: ".testi-next",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

var filtered = false;

$(".js-filter").on("click", function () {
  if (filtered === false) {
    $(".testi-slider").slick("slickFilter", ":even");
    $(this).text("Unfilter Slides");
    filtered = true;
  } else {
    $(".testi-slider").slick("slickUnfilter");
    $(this).text("Filter Slides");
    filtered = false;
  }
});
// slider-5 testimonial

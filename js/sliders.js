$(".testimonial-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  centerPadding: "120px",
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200, // < 1200px
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992, // < 992px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // < 768px
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
});

$(".feedback-slider").slick({
  slidesToShow: 3,
  centerMode: true,
  dots: true,
  centerPadding: "0px",
  // autoplay: true,
  // autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200, // < 1200px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992, // < 992px
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768, // < 768px
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

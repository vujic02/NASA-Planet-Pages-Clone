$('.slider-inner').slick({
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.mercury-slider').slick({
    dots: true,
    draggable: false,
    focusOnSelect: false,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 4000
  });
      
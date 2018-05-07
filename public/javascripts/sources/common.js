$(function() {

	const storiesSlider = $('.stories__slider');
	const storiesHandler = $('.stories__control')[0];
	const storiesSlides = $('.stories__slide');
	const transformSlider = $('.transform__slider');

	storiesSlider.slick({
		speed: 300,
		slidesToShow: 4.5,
		slidesToScroll: 1,
		dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    
		responsive: [
		{
			breakpoint: 1200,
			settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
  	breakpoint: 768,
  	settings: {
  		slidesToShow: 2,
  		slidesToScroll: 1
  	}
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]});

  transformSlider.slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
    arrows: true
  });

  noUiSlider.create(storiesHandler, {
	start: [0],
	connect: true,
	range: {
		'min': 0,
		'max': storiesSlides.length - 1
	}
});


	function onBurgerClick () {
		const burger = $('.burger');
		const submenu = $('.submenu');
		burger.toggleClass('burger--active');
		submenu.toggleClass('submenu--active');
	}

	function onControlDrag () {
		const pin = $('.noUi-handle');
		const pinValue = +pin.attr('aria-valuetext');
		storiesSlider[0].slick.slickGoTo(parseInt(pinValue));
	}

	function getButtonName () {
		const slides = $('.transform-slide');
		const buttons = $('.transform__slider .slick-dots button');
		slides.each((i) => {
			const slideName = slides.eq(i).find('.transform-slide__name').text();
			buttons.eq(i).text(slideName);
		})
	}
	getButtonName();

	$('.burger').on('click', onBurgerClick);
	storiesHandler.noUiSlider.on('update', onControlDrag);
})
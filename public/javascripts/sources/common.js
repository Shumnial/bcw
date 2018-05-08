$(function() {

	const storiesSlider = $('.stories__slider');
	const storiesHandler = $('.stories__control');
	const storiesSlides = $('.stories__slide');
	const transformSlider = $('.transform__slider');
	const popup = $('#popup');

	storiesSlider.slick({
		speed: 500,
		slidesToShow: 1,
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
      slidesToScroll: 1,
      centerMode: true,
    }
  }]});

  transformSlider.slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
    arrows: true,

		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: false
			}
  	}]
	});

  noUiSlider.create(storiesHandler[0], {
  	start: [0],
  	step: 1,
		range: {
			'min': [0],
			'max': [storiesSlides.length - 1]
		}
	});



	function onBurgerClick () {
		const burger = $('.burger');
		const submenu = $('.submenu');
		if (burger.hasClass('burger--active')) {
			burger.toggleClass('burger--active');
			submenu.slideUp(250);
		} else {
			burger.toggleClass('burger--active');
			submenu.slideDown(250);
		}
	}

	function onControlDrag (values) {
		
		storiesSlider.slick('goTo', Math.ceil(values[0]));
		console.log("handle: ", Math.ceil(values[0]));
		//console.log("storiesSlider: ", storiesSlider.slick('getSlick'));
	}

	function onSliderDrag () {
		const currentIndex = storiesSlider.slick('slickCurrentSlide');
		const pin = $('.noUi-handle');
		storiesHandler[0].noUiSlider.updateOptions({
			start: [currentIndex]
		});
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

	/*function onPreviewClick () {
		const popup = $('.popup');
		const video = popup.find('video');
		video.find('source').attr('src', $(this).attr('data-id'));
		video[0].play();
	}*/

	$("#popup").iziModal({
		width: 960,
		onClosed: onPopupClose,
		transitionIn: 'fadeIn',
    transitionOut: 'fadeOut'
	});

	function onSlideClick (evt) {
		evt.preventDefault();
		const video = popup.find('video');
		const img = $('.stories__preview');
		video.attr('src', `/video/${$(this).find(img).attr('data-id')}.mp4`);
    popup.iziModal('open');
    video[0].play();
	}

	function onPopupClose () {
		popup.find('.popup__video')[0].pause();
	}

	function onCrossClick () {
		popup.iziModal('close');
	}

	function onVideoClick () {
		this.paused ? this.play() : this.pause();
	}

	function toggleControls() {
		if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
  }

	$('#myvideo').on('hover', toggleControls);

	$(document).on('click', 'video', onVideoClick);
	$(document).on('click', '.popup__close', onCrossClick);
	$(document).on('click', '.stories__slide', onSlideClick);
	$('.burger').on('click', onBurgerClick);
	storiesHandler[0].noUiSlider.on('update', onControlDrag);
	storiesSlider.on('swipe', onSliderDrag);
	/*$('.stories__preview').on('click', onPreviewClick);*/
})
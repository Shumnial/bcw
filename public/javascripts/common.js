"use strict";$(function(){function s(){var s=$(".burger"),e=$(".submenu");s.toggleClass("burger--active"),e.toggleClass("submenu--active")}function e(){var s=$(".noUi-handle"),e=+s.attr("aria-valuetext");i[0].slick.slickGoTo(parseInt(e))}function o(){var s=$(".transform-slide"),e=$(".transform__slider .slick-dots button");s.each(function(o){var i=s.eq(o).find(".transform-slide__name").text();e.eq(o).text(i)})}var i=$(".stories__slider"),t=$(".stories__control")[0],r=$(".stories__slide"),n=$(".transform__slider");i.slick({speed:300,slidesToShow:4.5,slidesToScroll:1,dots:!1,arrows:!1,centerMode:!0,infinite:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),n.slick({infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0}),noUiSlider.create(t,{start:[0],connect:!0,range:{min:0,max:r.length-1}}),o(),$(".burger").on("click",s),t.noUiSlider.on("update",e)});
//# sourceMappingURL=../javascripts/common.js.map

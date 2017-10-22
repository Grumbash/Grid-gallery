jQuery(document).ready(function($) {
	var current_count_slide = 0;
	var width = $('.slider').width(); // динамически замеряет ширину элемента 
	var count = $('.slider .photos img').length; // количество слайдов в слайдере
	$('.slider .photos').width( width*count+"px" ); // делаем скролл 
	$('.slider .photos img').width( width+"px" ); // задаем ширину фоткам
	
	$('.navigation button.nav').on('click', function(){
		console.log("click");
		if ( $(this).hasClass('nav-next') ) {
			if ( current_count_slide < count-1 ) {
				current_count_slide++;
			} else if ( current_count_slide == count-1 ) {
				current_count_slide = 0;
			}
			$('.nabor-tochek .tochka').removeClass('active');
			$('.nabor-tochek .tochka').eq(current_count_slide).addClass('active');
		} else if ( $(this).hasClass('nav-prev') ) {
			if ( current_count_slide > 0 ) {
				current_count_slide--;
			} else if ( current_count_slide == 0 ) {
				current_count_slide = count-1;
			}

			$('.nabor-tochek .tochka').removeClass('active');
			$('.nabor-tochek .tochka').eq(current_count_slide).addClass('active');

		} else {
			console.log("нет переключения");
		}
		var lenta = $('.slider .photos');
		var photos = $('.slider .photos img');
		var delta = width*current_count_slide;
		delta = -delta;
		lenta.css('transform','translate('+ delta +'px,0)');

	});
/*-=================ПОКАЗЫВАЕМ СЛАЙДЕР=================-*/
	var nav = $('.navigation');
	var btn = $('.open-navigation');
	btn.click(function() {
		nav.css('display', 'flex');
		$(this).addClass('hide');
		console.log('open');
	});
	var close = $('.hide-navigator');
	close.click(function() {
		nav.css('display', 'none');
		btn.removeClass('hide');
		console.log('close');
	});

	var menu_items = $('.menu-item');
	var menu = $('#menu');
	menu.click(function(){
		/*показать меню*/
		var child_times = $(this).children('.menu #menu .fa-times');
		var child_bars = $(this).children('.menu #menu .fa-bars');
		if ($(this).children('.fa').hasClass('bars')) {
			menu_items.css('display', 'block')
			child_times.css('display', 'block');
			child_bars.css('display', 'none');
			$(this).css('background-color', '#fff');
			$(this).css('border-color', '#f3c90c');
			child_bars.removeClass('bars');
		} else{
			/*скрыть меню */
			child_bars.addClass('bars');
			menu_items.css('display', 'none');
			child_times.css('display', 'none');
			child_bars.parent('#menu').css('display', 'block');
			child_bars.css('color', '#fff');
			child_bars.css('display', 'inline-block');
			$(this).css('background-color', '#000');
			$(this).css('border-color', '#000');
		}
	});

	$('#drop-submenu').mouseover(function() {
		$('.drop').css('display', 'block');
	});
	$('.drop').mouseleave(function() {
		$('.drop').css('display', 'none');
	});

	var list_items = $('.drop li a');
	list_items.hover(function() {
		$(this).prev('i').css('opacity', '1');
	}, function() {
		$(this).prev('i').css('opacity', '0');
	});

	var sub_submenu = $('.sub-submenu');
	var bw = sub_submenu.prev('a');
	bw.mouseover(function() {
		sub_submenu.css('display', 'block');
	});
	sub_submenu.mouseleave(function() {
		$(this).css('display', 'none');
	});

/*------------------КОНЕЦ jQuery------------------*/
});
// function slide_to_slide() {
// 	var slider_f = document.querySelector('.slider');
// 	if (slider_f.style.display == "none") {
// 		slider_f.style.display = "block";
// 		console.log('lol');
// 	} else{
// 		slider_f.style.display = "none";
// 		console.log('kek');
// 	}
// }
// var call_slider = document.querySelectorAll(".gallerybtn");
// for (var i = 0; i < call_slider.length; i++) {
// 	call_slider[i].addEventListener('click', slide_to_slide);	
// }

















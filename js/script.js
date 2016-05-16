;(function($){
	$(document).ready(function(){

		$('.fancybox').fancybox();

		$(document).on('click', function (e){
			var me = $(e.target);//убирает наследование


			if ( me.is('.popup-close') ){
				if ( !me.is('.popup') ) {
					me = me.closest('.popup');
				}
				me.removeClass('visible');
				e.preventDefault();
			}
			else if ( me.is('[data-popup]') ) {
				// if (me.is('[data-popup]="bye"') ) {
				// 	$('.img-block.visible').removeClass('visible');
				// }
				$('.popup[data-popup="'+ me.attr('data-popup') +'"]').addClass('visible');
				e.preventDefault();
			}
			else if ( me.is('.parent') || me.is('.parent *') ){
				if ( !me.is('.parent') ) me = me.closest('.parent');

				$('.scroll-element').removeClass('visible');
				var index = me.attr('data-index');
				$('.scroll-element[data-index="'+ index +'"]').addClass('visible');
				console.log('INDEX :' + index);
			}
/*<input class="" type="button" data-popup="callback" value="Заказать звонок!"><!--shows callbackform -->
<div class="popup" data-popup="callback">
	<form class="callbackform" action="" method="get"><!-- callbackform -->
		<label for="tel">Телефон</label><input id="tel" type="tel" placeholder="Телефон" required><!-- CM jQuery плагин-->
		<label for="name">Имя</label><input id="name" type="text" placeholder="Ваше имя (не обязательно)">
		<!-- <input type="email" placeholder="Email"> -->
		<!-- <textarea placeholder="Сообщение"></textarea> -->
		<input class="popup-close" type="submit"*/

		});

		// $(document).on('mouseover', function (e){
		// 	var me = $(e.target);
		// 	if ( me.is('.logo > img') ){
		// 		$('.logo > img').fadeIn(200, function() {
		// 			$('.logo > img').attr('src', 'img/logo-lada-light.png');
		// 		});
		// 	};
		// });
		// $(document).on('mouseout', function (e){
		// 	var me = $(e.target);
		// 	if ( me.is('.logo > img') ){
		// 		$('.logo > img').fadeIn(200, function() {
		// 			$('.logo > img').attr('src', 'img/logo-lada.png');
		// 		});
		// 	};
		// });
	});
})(jQuery);
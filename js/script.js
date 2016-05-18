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
				// console.log('INDEX :' + index);
			}
			else if ( me.is('input[data-modal="callback"]') ) {
				$('.input[data-modal="callback"]').removeClass('visible');
				$('.callbackform').addClass('visible');
				e.preventDefault();
			}
			else if ( me.is('.form-close') ) {
				$('.input[data-modal="callback"]').addClass('visible');
				$('.callbackform').removeClass('visible');
				e.preventDefault();
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
	});
})(jQuery);
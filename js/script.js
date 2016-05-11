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
				$('.popup[data-popup="'+ me.attr('data-popup') +'"]').addClass('visible');
				e.preventDefault();
			}
			else if ( me.is('.parent') || me.is('.parent *') ){
				if ( !me.is('.parent') ) me = me.closest('.parent');

				$('.scroll-element').removeClass('visible');
				var index = me.attr('data-index');
				$('.scroll-element[data-index="'+ index +'"]').addClass('visible');
			}

		});
	});
})(jQuery);
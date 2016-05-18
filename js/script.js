;(function($){
	$(document).ready(function(){

		$('.fancybox').fancybox();


		// $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
		$("#phone").mask("+3 8 (999) 999-99-99", {placeholder: &#1645;});
		$("#phone-bye").mask("+3 8 (999) 999-99-99", {placeholder: &#1645;});

		$(document).on('click', function (e){
			var me = $(e.target);

			if ( me.is('.popup-close') ){
				if ( !me.is('.popup') ) {
					me = me.closest('.popup');
				}
				me.removeClass('visible');
				e.preventDefault();
			}
			if ( me.is('[data-popup]') ) {
				$('.popup[data-popup="'+ me.attr('data-popup') +'"]').addClass('visible');
				e.preventDefault();
			}
			if ( me.is('.parent') || me.is('.parent *') ){
				if ( !me.is('.parent') ) me = me.closest('.parent');
				$('.scroll-element').removeClass('visible');
				var index = me.attr('data-index');
				$('.scroll-element[data-index="'+ index +'"]').addClass('visible');
				// console.log('INDEX :' + index);
			}
			if ( me.is('a[data-popup="callback"]') ) {
				$('a[data-popup="callback"]').removeClass('visible');
				$('.callbackform').addClass('visible');
				e.preventDefault();
			}
			if ( me.is('.form-close') ) {$("#leftFit").slideDown("slow")
				$('a[data-popup="callback"]').addClass('visible');
				$('.callbackform').removeClass('visible');
				e.preventDefault();
			}

		});
	});
})(jQuery);
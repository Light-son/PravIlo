;(function($){
	$(document).ready(function(){

		$('.fancybox').fancybox();

		// Phone mask
		// $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
		$("#phone").mask("+3 8 (999) 999-99-99", {placeholder: "*"});
		$("#phone-bye").mask("+3 8 (999) 999-99-99", {placeholder: "*"});

		$(document).on('click', function (e){
			var me = $(e.target);
			var cur = $(e.currentTarget);

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
				$('.scroll-element').addClass('fadeIn');
				$('.scroll-element').addClass('animated');
				$('.scroll-element').removeClass('visible');
				var index = me.attr('data-index');
				$('.scroll-element[data-index="'+ index +'"]').addClass('visible');
				// console.log('INDEX :' + index);
			}

/* SHOW HIDE CALL FORM */
			if ( me.is('#btnShow') ) {
				me.removeClass('visible');
				$('.callbackform').addClass('visible');
				$('.callbackform').addClass('animated');
				$('.callbackform').addClass('fadeIn');
				// e.preventDefault();
			}
			else if(me.parents('#call-form').length == 0
				&& !me.is('#call-form')
				&& $('#call-form').hasClass('visible'))
			{
				$('.callbackform').removeClass('visible');
				$('#btnShow').addClass('visible');
			}
			if ( me.is('.form-close')) {
				// $("#leftFit").slideDown("slow")
				$('#btnShow').addClass('visible');
				$('#call-form').removeClass('visible');
				// e.preventDefault();
			}

/* Записаться сейчас ! Popup show */
			if(me.is('.training'))
			{
				$('#training-popup').addClass('visible');
				$('#training-popup').addClass('animated');
				$('#training-popup').addClass('fadeIn');
			}
			// Записаться сейчас ! Popup hide
			else if(me.parents('.bye-form').length == 0
				&& !me.is('.bye-form')
				&& $('#training-popup').hasClass('visible'))
			{
				$('#training-popup').removeClass('visible');
			}

			// if(me.is('.form.bye-form .sub .animation.special-button.popup-close'))
			// {
			// 	//
			// }


		});
	});
})(jQuery);
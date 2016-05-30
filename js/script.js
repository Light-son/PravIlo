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

			// if ( me.is('.popup-close') ){
			// 	if ( !me.is('.popup') ) {
			// 		me = me.closest('.popup');
			// 	}
			// 	me.removeClass('visible');
			// 	e.preventDefault();
			// }
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
			if(me.is('#get-up-trainings'))
			{
				$('#training-popup').addClass('visible');
				$('#training-popup').addClass('animated');
				$('#training-popup').addClass('fadeIn');
			}
			// Записаться сейчас ! Popup hide
			else if(me.parents('#training-popup').length == 0
				&& !me.is('#training-form')
				&& $('#training-popup').hasClass('visible'))
			{
				$('#training-popup').removeClass('visible');
			}
/* Заказать правило  */
			if(me.is('#bye-button'))
			{  
				// $('#bye-popup').addClass('visible');
				// $('#bye-popup').addClass('animated');
				// $('#bye-popup').addClass('fadeIn');
			}
			// Записаться сейчас ! Popup hide
			else if(me.parents('#bye-popup').length == 0 
				&& !me.is('#bye-form') 
				&& $('#bye-popup').hasClass('visible'))
			{
				$('#bye-popup').removeClass('visible');
			}
		/**/
/* НОВА ПОШТА */
			// if(me.is('#get-up-trainings'))
			// {
			// 	var fnumb = 100;
			// 	var snumb = 200;
			// 	$.get('server.php', {a:fnumb,b:snumb}, function(data){
			// 	   $("#training-popup").html(data);
			// 	});
			// }

		});
	});
})(jQuery);
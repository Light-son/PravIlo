;(function($){
	$(document).ready(function(){

		$('.fancybox').fancybox();


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
				$('.scroll-element').removeClass('visible');
				var index = me.attr('data-index');
				$('.scroll-element[data-index="'+ index +'"]').addClass('visible');
				// console.log('INDEX :' + index);
			}
			if ( me.is('#btnShow') ) {
				me.removeClass('visible');
				$('.callbackform').addClass('visible');
				// e.preventDefault();
			}
			else if(me.parents('#call-form').length == 0 
				&& !me.is('#call-form') 
				&& $('#call-form').hasClass('visible'))
			{
				$('#btnShow').addClass('visible');
				$('#call-form').removeClass('visible');
			}
			if ( me.is('.form-close')) {
				// $("#leftFit").slideDown("slow")
				$('#btnShow').addClass('visible');
				$('#call-form').removeClass('visible');
				// e.preventDefault();
			}
			

		});
	});
})(jQuery);
$(function(){

	$('#slider').slides({
		effect: 'fade',
		play: 50000,
		pause: 2500,
		generatePagination: true,
		preload: true,
		hoverPause: true
	});
	$('.photo_slider').cycle({
	fx: 'fade',
	speed: 1000,
	timeout: 2000,
	});
	$('.colvo span').click(function(e) {
		e.preventDefault();
		var input = $(this).parent().find('input[type=text]');
		var count = input.val();
		if ($(this).hasClass('plus')) {
			count++;
		}
		else if (count > 1) {
			count--;
		}
		input.val(count);
	});
	
	$('.submenu').toggle(
		function(){
			$(this).siblings(".second").show();
		},
		function(){
			$('.submenu').siblings(".second").hide();    
	});
	
});
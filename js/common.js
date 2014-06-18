$(document).ready(function() {
	$("#header").swipe( {
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
		$('#content-wrap').css('position', 'absolute');
		$('#content-wrap').animate({
			marginLeft: "0px",
		}, 150 );
		$('.show-nav').show();
		$('.hide-nav').hide();
		},
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$('#content-wrap').css('position', 'fixed');
			$('#content-wrap').animate({
				marginLeft: "180px",
			}, 150 );	
			$('.show-nav').hide();
			$('.hide-nav').show();
		},
		threshold:10
	});

	$('.show-nav').click(function(){
		$('#content-wrap').css('position', 'fixed')
		$('#content-wrap').animate({
			marginLeft: "180px",
		}, 150 );
		//$('.sidebar').show();
		$('.show-nav').hide();
		$('.hide-nav').show();
		return false;
	});

	$('.hide-nav').click(function(){
		$('#content-wrap').css('position', 'absolute')
		$('#content-wrap').animate({
			marginLeft: "0px",
		}, 150 );
		//$('.sidebar').show();
		$('.show-nav').show();
		$('.hide-nav').hide();
		return false;
	});
});
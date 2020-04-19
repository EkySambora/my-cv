$(document).ready(function() {
	$('menu').click(function(event) {
	  // console.log(123);
	  $('#parentMenu').slideToggle('fast');
	});
	$('#search').css({display: 'none'});
	$('.imgSrc').css('cursor', 'pointer');
	$('#logoSearch>img').click(function(event) {
		$('#search').animate({
			width: "toggle",
		});
	
		if($('#logoSearch').attr('data-status') == 'oke'){
			$('#logoSearch>img').attr({
				'src': 'img/close.svg'
			});
			$('#logoSearch').attr('data-status', 'test');
		} else {
			$('#logoSearch').attr('data-status', 'oke');
			$('#logoSearch>img').attr({
				'src': 'img/search.svg'
			});
		}
	});	
	
})
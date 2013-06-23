$(document).ready(function(){
	$('div.text').hide();
	$('div.text').fadeIn(500);	
	$('area.cerova').click(function(){
		$('#bottom').load('dodavatel/vietor-dodavatel.html .vietor-1',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
	$('area.ostryvrch').click(function(){
		$('#bottom').load('dodavatel/vietor-dodavatel.html .vietor-2',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
	$('area.skalite').click(function(){
		$('#bottom').load('dodavatel/vietor-dodavatel.html .vietor-3',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
	});
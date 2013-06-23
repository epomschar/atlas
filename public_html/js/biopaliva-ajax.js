$(document).ready(function(){
	$('div.text').hide();
	$('div.text').fadeIn(500);	
	$('area.hniezdne').click(function(){
		$('#bottom').load('dodavatel/biopaliva-dodavatel.html .biopal-2',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
	$('area.leopoldov').click(function(){
		$('#bottom').load('dodavatel/biopaliva-dodavatel.html .biopal-1',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
	});

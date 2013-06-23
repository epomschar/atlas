$(document).ready(function(){
	$('div.text').hide();
	$('div.text').fadeIn(500);
	$('area.bratislava').click(function(){
		$('#bottom').load('dodavatel/solar-dodavatel.html .solar-1',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.ivankapridunaji').click(function(){
		$('#bottom').load('dodavatel/solar-dodavatel.html .solar-5',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.lozorno').click(function(){
		$('#bottom').load('dodavatel/solar-dodavatel.html .solar-7',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.zahorskabystrica').click(function(){
		$('#bottom').load('dodavatel/solar-dodavatel.html .solar-9',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.senec').click(function(){
		$('#bottom').load('dodavatel/solar-dodavatel.html .solar-12',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});	
		$('area.kralovaprisenci').click(function(){
		$('#bottom').load('dodavatel/solar-dodavatel.html .solar-13',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});		
	});
$(document).ready(function(){
	$('div.text').hide();
	$('div.text').fadeIn(500);		
	$('area.jasenie').click(function(){
		$('#bottom').load('dodavatel/mve-dodavatel.html .mve-1',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});			
		});
	$('area.bratislava').click(function(){
		$('#bottom').load('dodavatel/mve-dodavatel.html .mve-3',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});			
		});
	$('area.kosice').click(function(){
		$('#bottom').load('dodavatel/mve-dodavatel.html .mve-7',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});			
		});
	$('area.okolicne').click(function(){
		$('#bottom').load('dodavatel/mve-dodavatel.html .mve-9',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});			
		});
	$('area.novaky').click(function(){
		$('#bottom').load('dodavatel/mve-dodavatel.html .mve-10',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});			
		});	
	$('area.uhorskaves').click(function(){
		$('#bottom').load('dodavatel/mve-dodavatel.html .mve-11',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});			
		});
	$('area.ruzomberok').click(function(){
		$('#bottom').load('dodavatel/mve-dodavatel.html .mve-13',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});			
		});
	$('area.remata').click(function(){
		$('#bottom').load('dodavatel/mve-dodavatel.html .mve-14',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});			
		});
	$('area.trnovec').click(function(){
		$('#bottom').load('dodavatel/mve-dodavatel.html .mve-15',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});			
		});		
	});
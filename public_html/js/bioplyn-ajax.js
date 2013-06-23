$(document).ready(function(){
	$('div.text').hide();
	$('div.text').fadeIn(500);	
	$('area.banskabystrica').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-1',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
	$('area.zvolen').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-2',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		})		
	$('area.revuca').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-3',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		})
	$('area.lucenec').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-4',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		})
	$('area.nizna').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-5',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
	$('area.bytca').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-6',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.cadca').click(function(){
			$('area.cadca').css({'border':'none'});	
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-7',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);	
			});
		});
		$('area.zilina').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-8',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.kubin').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-9',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.kosice').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-10',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.michalovce').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-11',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.spisnv').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-12',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.presov').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-13',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.brezov').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-14',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.kapusany').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-15',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});
		$('area.humenne').click(function(){
		$('#bottom').load('dodavatel/bioplyn-dodavatel.html .bioplyn-16',function(){
			$("tr td:nth-child(1)").addClass('highlight');
			$(this).hide();
			$(this).fadeIn(300);
			});
		});		
});		

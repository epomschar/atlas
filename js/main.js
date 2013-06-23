$(document).ready(function(){
	$('a[href=#top]').click(function(){
		$('#bottom').animate({scrollTop:0}, 'slow');
	  return false;
	});	
});	

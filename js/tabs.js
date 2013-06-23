	$(document).ready(function(){
	//When page loads...
	$('#top img').hide();
	//$(".text").hide(); //Hide all content
	//$(".text:first").show(); //Show first tab content
	//On Click Event
	$("#tab1").click(function() {
	$('#top img').hide();
	$('#top').css({'background':'none','background-color':'#ADD037'});
	$('#top img').show('slow');  
	//$('.text').load('tabs.html .text1');
	//return false;
	});
	$("#tab2").click(function() {
	$('#top img').hide();	
	$('#top').css({'background':'none','background-color':'#ADD037'});
	$('#top img').show('slow');  
	$('.text').load('tabs.html .text2');
	return false;
	});
	$("#tab3").click(function() {
	$('#top img').hide();	
	$('#top').css({'background':'none','background-color':'#ADD037'});
	$('#top img').show('slow');  
	$('.text').load('tabs.html .text3');
	return false;
	});
	$("#tab4").click(function() {
	$('#top img').hide();	
	$('#top').css({'background':'none','background-color':'#ADD037'});
	$('#top img').show('slow');  
	$('.text').load('tabs.html .text4');
	return false;
	});
	$("#tab5").click(function() {
	$('#top img').hide();	
	$('#top').css({'background':'none','background-color':'#ADD037'});
	$('#top img').show('slow');  
	$('.text').load('tabs.html .text5');
	return false;
	});
	$("#tab6").click(function() {
	$('#top img').hide();	
	$('#top').css({'background':'none','background-color':'#ADD037'});
	$('#top img').show('slow');  
	$('.text').load('tabs.html .text6');
	return false;
	});
	$("#tab7").click(function() {
	$('#top img').hide();	
	$('#top').css({'background':'none','background-color':'#ADD037'});
	$('#top img').show('slow');  
	$('.text').load('tabs.html .text7');
	return false;
	});		
});
			


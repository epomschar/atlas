$(document).ready(function(){
		$.fn.ezpz_tooltip.positions.position = function(contentInfo, mouseX, mouseY, offset, targetInfo) {
	  contentInfo['top'] = 290;
	  contentInfo['left'] = 700;
	  return contentInfo;
    };
		$('.cerova').ezpz_tooltip({contentId:'cerova',contentPosition: 'position'});
		$('.ostryvrch').ezpz_tooltip({contentId:'ostryvrch',contentPosition: 'position'});
		$('.skalite').ezpz_tooltip({contentId:'skalite',contentPosition: 'position'});
	});
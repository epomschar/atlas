$(document).ready(function(){
		$.fn.ezpz_tooltip.positions.position = function(contentInfo, mouseX, mouseY, offset, targetInfo) {
	  contentInfo['top'] = 290;
	  contentInfo['left'] = 700;
	  return contentInfo;
    };
		$('.leopoldov').ezpz_tooltip({contentId:'leopoldov',contentPosition: 'position'});
		$('.hniezdne').ezpz_tooltip({contentId:'hniezdne',contentPosition: 'position'});
	});


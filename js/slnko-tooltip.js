$(document).ready(function(){
		$.fn.ezpz_tooltip.positions.position = function(contentInfo, mouseX, mouseY, offset, targetInfo) {
	  contentInfo['top'] = 290;
	  contentInfo['left'] = 700;
	  return contentInfo;
    };
		$('.lozorno').ezpz_tooltip({contentId:'lozorno',contentPosition: 'position'});
		$('.zahorskabystrica').ezpz_tooltip({contentId:'zahorskabystrica',contentPosition: 'position'});
		$('.senec').ezpz_tooltip({contentId:'senec',contentPosition: 'position'});
		$('.kralovaprisenci').ezpz_tooltip({contentId:'kralovaprisenci',contentPosition: 'position'});
		$('.ivankapridunaji').ezpz_tooltip({contentId:'ivankapridunaji',contentPosition: 'position'});
		$('.bratislava').ezpz_tooltip({contentId:'bratislava',contentPosition: 'position'});
});


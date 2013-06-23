$(document).ready(function(){
		$.fn.ezpz_tooltip.positions.position = function(contentInfo, mouseX, mouseY, offset, targetInfo) {
	  contentInfo['top'] = 290;
	  contentInfo['left'] = 700;
	  return contentInfo;
    };		
		$('.bratislava').ezpz_tooltip({contentId:'bratislava',contentPosition: 'position'});
		$('.trnovec').ezpz_tooltip({contentId:'trnovec',contentPosition: 'position'});
		$('.novaky').ezpz_tooltip({contentId:'novaky',contentPosition: 'position'});
		$('.remata').ezpz_tooltip({contentId:'remata',contentPosition: 'position'});
		$('.jasenie').ezpz_tooltip({contentId:'jasenie',contentPosition: 'position'});
		$('.ruzomberok').ezpz_tooltip({contentId:'ruzomberok',contentPosition: 'position'});
		$('.okolicne').ezpz_tooltip({contentId:'okolicne',contentPosition: 'position'});
		$('.uhorskaves').ezpz_tooltip({contentId:'uhorskaves',contentPosition: 'position'});
		$('.kosice').ezpz_tooltip({contentId:'kosice',contentPosition: 'position'});
});

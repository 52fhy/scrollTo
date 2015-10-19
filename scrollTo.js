/**
	* 平滑滚动到指定位置
	* @param : target string||object 
	* @example : $.scrollTo($('#desID'));
	* 	     $.scrollTo('300px');
	* 	     $scrollTo('300px');
	* @version 1.0
	* @date 2015-10-19 15:09:57
	* @author YJC
	* @github https://github.com/52fhy/scrollTo
	*/
;(function(window, $){
	'use strict';
	
	var $scrollTo = $.scrollTo = function(target) {
		return $(window).scrollTo(target);
	};
	
	var timer = null;
	var scrollTop = 0;
		window.onscroll=function(){
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	};
	
	$.fn.scrollTo = function(target) {
		var destOffsetTop = 0;
		if(typeof target == 'string'){
			destOffsetTop = target;
		}else{
			var destOffsetTopObj = target.offset();
			destOffsetTop = destOffsetTopObj.top;
		}

		clearInterval(timer);
		timer = setInterval(function(){
			var now	= scrollTop;
			var speed = (destOffsetTop - now) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(scrollTop == destOffsetTop){
				clearInterval(timer);
			}
			document.documentElement.scrollTop = scrollTop + speed;
			document.body.scrollTop = scrollTop + speed;
		}, 30);
	};
	
	window.$scrollTo = $scrollTo; //支持$scrollTo('300px');纯js用法
})(window, window.jQuery || window.Zepto);

/*
jQuery.openpanel.js
author: Keisuke Nagashima
Version: 1.0
*/

$.fn.openPanel = function(options){

	options = $.extend({
		effect  : "slide", // 開閉エフェクト
    speed   : "fast",　// 開閉スピード
    toggl   : ".toggl", // ボタンのクラス名
    panel   : ".panel", // パネルのクラス名
	}, options);

	return this.each(function(){

		$(options.panel).hide();

		$(options.toggl).click(function(){

			if ( options.effect == "slide") {
				$(this).next().slideToggle(options.speed);

			} else if ( options.effect == "fade") {
				$(this).next().fadeToggle(options.speed);

			} else if ( options.effect == "none") {
				$(this).next().toggle(options.speed);

			} else {
				$(this).next().toggle(options.speed);
			}	

		});
	});
};

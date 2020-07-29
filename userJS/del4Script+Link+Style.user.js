// ==UserScript==
// @namespace dgje
// @name 删除页面脚本样式
// @description 删除页面脚本样式
// @version 0.0.1
// @include *
// @include *://sina.com/*
// @run-at document-start
// ==/UserScript==

!function () {
	var aa = document.querySelectorAll('script,link,style');
	for (var i = 0, c; c = aa[i]; i++) {
		c.remove();
	}
}();
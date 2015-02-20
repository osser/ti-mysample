var args = arguments[0] || {};

(function() {

})();

function btnClose_onClick(e) {
	var anima = Titanium.UI.createAnimation();
	anima.left = Ti.Platform.displayCaps.platformWidth;
	anima.duration = 200;
	$.facebook_win.close(anima);
}

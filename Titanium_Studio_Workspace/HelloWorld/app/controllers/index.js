function doClick(e) {
	alert($.label.text);
}

$.index.open();

function btnFacebook_onClick(e) {

	var win = Alloy.createController('facebook_win', {
	}).getView();

	win.left = Ti.Platform.displayCaps.platformWidth;
	win.top = 0;

	if (OS_IOS) {
		var anima = Titanium.UI.createAnimation();
		anima.left = 0;
		anima.duration = 200;
		win.open(anima);
	}

	if (OS_ANDROID) {
		win.open({
			activityEnterAnimation : Ti.Android.R.anim.fade_in,
			activityExitAnimation : Ti.Android.R.anim.fade_out
		});
	}
}

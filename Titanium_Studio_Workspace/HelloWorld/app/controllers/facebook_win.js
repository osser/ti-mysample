var args = arguments[0] || {};
//var facebook = require('rebel.facebook');

var fb = undefined;

if (OS_IOS) {
	fb = require('com.facebook');
}

if (OS_ANDROID) {
	fb = require('com.ti.facebook');
	$.facebook_win.fbProxy = fb.createActivityWorker({
		lifecycleContainer : win
	});
}

if (fb) {
	fb.permissions = ['public_profile', 'email', 'user_friends'];

	fb.addEventListener('login', function(e) {
		console.log('fb.login', e);
		/*
		 if (e.success) {
		 console.log(JSON.stringify(e.data));
		 console.log(JSON.stringify(fb.permissions));
		 } else if (e.cancelled) {
		 console.log('e.cancelled', e.cancelled);
		 } else if (e.error) {
		 console.log(e.error);
		 } else {
		 console.log('Please check your network connection and try again');
		 }
		 */
	});

	fb.addEventListener('logout', function() {
		console.log('fb.logout');
	});

	// fb.initialize(true);
	// console.log('OS_IOS', OS_IOS);
	// console.log('OS_ANDROID', OS_ANDROID);
	if (OS_IOS)
		fb.initialize(6000, false);
	if (OS_ANDROID)
		fb.initialize(4000);
}

(function() {

})();

function btnClose_onClick(e) {
	var anima = Titanium.UI.createAnimation();
	anima.left = Ti.Platform.displayCaps.platformWidth;
	anima.duration = 200;
	$.facebook_win.close(anima);
}

function btnLogin_onClick(e) {

	if (fb) {
		console.log('fb.loggedIn', fb.loggedIn);
		if (!fb.loggedIn) {
			fb.authorize();
		} else {
			console.log(fb);
			console.log(fb.permissions);
			console.log(fb.createLikeButton);
		}
	}

	// facebook.authorize(['public_profile', 'email', 'user_friends'], function(fbEvent) {
	// if (fbEvent.success) {
	// Ti.API.info(fbEvent);
	// facebook.me(function(me_data) {
	// console.log(me_data);
	// });
	// // facebook.requestNewPublishPermissions(['user_friends'], facebook.audienceFriends, function(writeEvt) {
	// // Ti.API.info(writeEvt);
	// // });
	// } else if (fbEvent.cancelled) {
	//
	// } else if (fbEvent.error) {
	//
	// }
	// });
}

function btnLogout_onClick(e) {

	if (fb) {
		if (fb.loggedIn) {
			fb.logout();
			console.log('btnLogout_onClick');
		}
	}

	// facebook.logout();
}

function btnShare_onClick(e) {
	if (fb) {
		console.log('fb.getCanPresentShareDialog()', fb.getCanPresentShareDialog());
		if (fb.getCanPresentShareDialog()) {
			fb.share({
				url : 'http://example.com'
			});
		}
	}
}

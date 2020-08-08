/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to NEW Facebook and navigate to this link: https://www.facebook.com/me/
*/

// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;
let privacy = 5; // Choose number, Public - 1/Friends of Friends - 2/Friends - 3/Only me - 5/ Close friends - 7
let postIndex = 1; // If the script error in one post, change this to that post's number

// Don't modify code below
(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	if(timePerAction < 500) return console.error("timePerAction must greater than 500 ms");
	setTimeout(function continuousWhenPageLoad() {
		// get list posts
		let listPosts = document.getElementsByClassName('du4w35lb k4urcfbm l9j0dhe7 sjgh65i0');
		if(postIndex > listPosts.length - 1 || listPosts.length === 0) return console.warn("Not found any posts");
		setTimeout(function setPrivacyNextPost() {
			if(postIndex > listPosts.length - 1) {
				window.scrollTo(0, document.body.scrollHeight); // scroll to page end
				setTimeout(continuousWhenPageLoad, 3000);
				return;
			}
			// click three-dot button
			listPosts[postIndex - 1].firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.lastChild.firstChild.firstChild.nextSibling.firstChild.lastChild.firstChild.click();
			// find Edit audience button
			buttonShowWhenClickThreeDotButtonIndex = 0;
			setTimeout(function checkButtonInSubmenu() {
				const listButtonsShowWhenClickThreeDotButton = document.getElementsByClassName('oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 oi9244e8 oygrvhab h676nmdw cxgpxx05 dflh9lhu sj5x9vvc scb9dxdr i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn dwo3fsh8 btwxx1t3 pfnyh3mw du4w35lb');
				if(buttonShowWhenClickThreeDotButtonIndex < listButtonsShowWhenClickThreeDotButton.length) {
					const buttonName = listButtonsShowWhenClickThreeDotButton[buttonShowWhenClickThreeDotButtonIndex].firstChild.nextSibling.firstChild.firstChild.textContent;
					if(buttonName.toLowerCase() === 'edit audience' || buttonName.toLowerCase() === 'chỉnh sửa đối tượng') {
						listButtonsShowWhenClickThreeDotButton[buttonShowWhenClickThreeDotButtonIndex].click();
						setTimeout(() => {
							// select privacy
							const button = document.getElementsByClassName('ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 nnctdnn4 hpfvmrgz qt6c0cv9 jb3vyjys l9j0dhe7 du4w35lb bp9cbjyn btwxx1t3 dflh9lhu scb9dxdr')[privacy];
							const privacyOpt = button.firstChild.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.textContent;
							button.click();
							console.log(`Privacy of post ${postIndex ++} change to ${privacyOpt}`);
							setTimeout(setPrivacyNextPost, timePerAction);
						}, 1200);
						return;
					}
					// check next button
					buttonShowWhenClickThreeDotButtonIndex ++;
					setTimeout(checkButtonInSubmenu, 0);
				}
				else {
					console.log(`Skip post ${postIndex ++}`);
					setTimeout(setPrivacyNextPost, timePerAction);
				}
			}, 2000);
		}, 0);
	}, 0);
})();

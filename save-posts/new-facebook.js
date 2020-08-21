/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* BEFORE YOU RUN CODE, INSPECT ANY LIKE BUTTON YOU SEE FIRST, THEN THIS CODE WILL RUN SUCCESSFULLY
* Please switch to NEW Facebook and navigate to wherever have posts
*/
// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 2000;
let postIndex = 1; // If the script error in one post, change this to that post

// Don't modify code below
(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	if(timePerAction < 500) return console.error("timePerAction must greater than 500 ms");
	setTimeout(function continuousWhenPageLoad() {
		// get list of three-dot menu
		let listMenuButtons = document.getElementsByClassName('nqmvxvec j83agx80 jnigpg78 cxgpxx05 dflh9lhu sj5x9vvc scb9dxdr odw8uiq3');
		if(postIndex > listMenuButtons.length - 1 || listMenuButtons.length === 0) return console.warn("Not found any posts");
		setTimeout(function saveNextPost() {
			if(postIndex > listMenuButtons.length - 1) {
				window.scrollTo(0, document.body.scrollHeight); // scroll to the end of page
				setTimeout(continuousWhenPageLoad, 3000);
				return;
			}
			listMenuButtons[postIndex - 1].firstChild.click();
			//
			setTimeout(() => {
				// click Save post button
				document.getElementsByClassName('oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 oi9244e8 oygrvhab h676nmdw cxgpxx05 dflh9lhu sj5x9vvc scb9dxdr i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn dwo3fsh8 btwxx1t3 pfnyh3mw du4w35lb')[0].click();
				// check if show Done button or not
				setTimeout(() => {
					const DoneButton = document.getElementsByClassName('oajrlxb2 s1i5eluu gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys tkv8g59h qt6c0cv9 fl8dtwsd i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329');
					// click Done button
					if(DoneButton.length) DoneButton[0].click();
					console.log(`Save post ${postIndex ++} successfully!`);
					setTimeout(saveNextPost, timePerAction);
				}, 700);
			}, 2300);
		}, 0);
	}, 0);
})();

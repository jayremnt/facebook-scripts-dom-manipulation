/*
* Code by JayremntB, 2020
* Requirement: New Facebook
* Please copy all the code to make sure that you will not get any errors
* BEFORE YOU RUN CODE, INSPECT ANY LIKE BUTTON YOU SEE FIRST, THEN THIS CODE WILL RUN SUCCESSFULLY
* Please switch to NEW Facebook and navigate to this link: https://www.facebook.com/pages/?category=liked&ref=bookmarks
*/
// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;
let timeToLoadPage = 3000;

// Don't modify code below
(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	if (timePerAction < 500) return console.error("timePerAction must greater than 500");
	let buttonIndex = 1;
	setTimeout(function continuousWhenPageLoad() {
		// get list of "Liked" buttons
		let listLikedButtons = document.getElementsByClassName('oajrlxb2 oo1teu6h gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329');
		if (buttonIndex > listLikedButtons.length - 1 || listLikedButtons.length === 0) return console.warn("Not found any page");
		setTimeout(function clickNextButton() {
			if (buttonIndex > listLikedButtons.length - 1) {
				window.scrollTo(0, document.body.scrollHeight); // scroll to the end of page
				console.log("Load pages...")
				setTimeout(continuousWhenPageLoad, timeToLoadPage);
				return;
			}
			listLikedButtons[buttonIndex].click(); // click Unlike button
			// get page name
			let pageName = document.getElementsByClassName('oajrlxb2 oo1teu6h gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329')[buttonIndex].parentNode.parentNode.firstChild.lastChild.firstChild.firstChild.textContent;
			console.log(`Unliked ${pageName} successfully!`);
			setTimeout(clickNextButton, timePerAction);
		}, 0);
	}, 0);
})();
/*
* Code by (author)
* Requirement: New Facebook
* Please copy all the code to make sure that you will not get any errors
* Please switch to NEW Facebook and navigate to this link: https://www.facebook.com/pokes
*/
// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 300;
let timeToLoadPage = 10000;

(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	// prepare
	let listButtons;
	let buttonIndex = 0;
	// process
	setTimeout(function continuousWhenPageLoad() {
		listButtons = document.getElementsByClassName('oajrlxb2 s1i5eluu gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329');
		if(listButtons.length === 0 || buttonIndex > listButtons.length - 1) return console.warn("Not found ???");
		setTimeout(function clickNextButton() {
			// if reach the last button, scroll to load more
			if(buttonIndex > listButtons.length - 1) {
				// scroll
				// with window
				window.scrollTo(0, document.body.scrollHeight); // scroll to page end
				setTimeout(continuousWhenPageLoad, timeToLoadPage);
				return;
			}
			// click button
			listButtons[buttonIndex].click();
			// get user's name
			let userName = listButtons[buttonIndex].parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.textContent;
			console.log(`Poked ${userName} successfully!`);
			setTimeout(clickNextButton, timePerAction);
		}, 0);
	}, 2000);
})();
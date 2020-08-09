/*
* Code by (author)
* Requirement: (Old/New) Facebook 
* Please copy all the code to make sure that you will not get any errors
* Please switch to (OLD/NEW) Facebook and navigate to this link: (link)
*/
// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;
let timeToLoadPage = 3000;

(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by (author)");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	if(timePerAction < 500) return console.warn("time per action must be set >= 500 ms");
	// prepare
	let listButtons;
	let buttonIndex = 0;
	// process
	setTimeout(function continuousWhenPageLoad() {
		listButtons = document.getElementsByClassName('');
		if(listButtons.length === 0 || buttonIndex > listButtons.length - 1) return console.warn("Not found ???");
		setTimeout(function clickNextButton() {
			// if reach the last button, scroll to load more
			if(buttonIndex > listButtons.length - 1) {
				// scroll
				// with things like dialog
				document.getElementsByClassName('')[0].scrollTo(0, document.getElementsByClassName('')[0].scrollHeight);
				// with window
				window.scrollTo(0, document.body.scrollHeight); // scroll to page end
				setTimeout(continuousWhenPageLoad, timeToLoadPage);
				return;
			}
			// click button
			listButtons[buttonIndex].click();
			// wait for sth, and do sth
			setTimeout(() => {
				// do sth here
			}, timeToDoSth);
			// get user's name
			let sthHasName = listButtons[buttonIndex].textContent;
			console.log(`(action) ${sthHasName} successfully!`);
			buttonIndex ++;
			setTimeout(clickNextButton, timePerAction);
		}, 0);
	}, 2000);
})();

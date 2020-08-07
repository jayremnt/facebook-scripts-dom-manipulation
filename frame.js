let timePerAction = 1000;
let timeToLoadPage = 3000;

(() => {
	console.log("Code by JayremntB, 2020");
	if(timePerAction < 500) return console.warn("time per action must be set >= 500 ms");
	// prepare
	let thingAims;
	let subThingIndex = 0;
	// process
	setTimeout(function continuousWhenPageLoad() {
		thingAims = document.getElementsByClassName('');
		if(thingAims.length === 0 || subThingIndex > thingAims.length - 1) return console.warn("Not found any ...");
		thingAims[].click();
		setTimeout(function handleNextSubThing() {
			if(subThingIndex > thingAims.length - 1) {
				// scroll
				// with things like dialog
				document.getElementsByClassName('')[0].scrollTo(0, document.getElementsByClassName('')[0].scrollHeight);
				// with window
				window.scrollTo(0, document.body.scrollHeight); // scroll to page end
				setTimeout(continuousWhenPageLoad, timeToLoadPage);
				return;
			}
			// click first thing
			thingAims[subThingIndex].click();
			setTimeout(() => {
				
			}, timeToDoSth);
			// get user's name
			let sthHasName = thingAims[subThingIndex].textContent;
			console.log(`  ${sthHasName} successfully!`);
			setTimeout(handleNextSubThing, timePerAction);
		}, 0);
	}, 2000);
})();

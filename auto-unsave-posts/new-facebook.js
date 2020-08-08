/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* BEFORE YOU RUN CODE, INSPECT ANY LIKE BUTTON YOU SEE FIRST, THEN THIS CODE WILL RUN SUCCESSFULLY
* Please change to NEW Facebook and navigate to this link: https://www.facebook.com/saved
*/
// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;

// Don't modify code below
(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	if(timePerAction < 500) return console.error("timePerAction must greater than 500 ms");
	setTimeout(function unsaveNextPost() {
		const listPosts = document.getElementsByClassName('sjgh65i0');
		if(listPosts.length === 0) return console.warn("Not found any posts saved");
		// click first see more button
		const firstSeeMoreButton = listPosts[0].firstChild.firstChild.firstChild.lastChild.lastChild.lastChild.firstChild.lastChild.firstChild.click();
		// click unsave button
		setTimeout(() => {
			document.getElementsByClassName('oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 oi9244e8 oygrvhab h676nmdw cxgpxx05 dflh9lhu sj5x9vvc scb9dxdr i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn dwo3fsh8 btwxx1t3 pfnyh3mw du4w35lb')[0].click();
			console.log('Unsave post successfully!');
			setTimeout(unsaveNextPost, timePerAction);
		}, 500);
	}, 0);
})();

/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* BEFORE YOU RUN CODE, INSPECT ANY LIKE BUTTON YOU SEE FIRST, THEN THIS CODE WILL RUN SUCCESSFULLY
* Please switch to NEW Facebook and navigate to one's profile/ one page/ one group that has available Share buttons
*/
// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;
let postIndex = 0; // If the script error in one post, change this to that post

// Don't modify code below
(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	setTimeout(function continuousWhenPageLoad() {
		let ShareButtons = document.getElementsByClassName('oajrlxb2 bp9cbjyn g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 j83agx80 rj1gh0hx btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l buofh1pr k7cz35w2 taijpn5t ms05siws flx89l3n ogy3fsii');
		if(ShareButtons.length === 0 || postIndex > ShareButtons.length - 1) return console.error("Not found any posts, process end");
		//
		setTimeout(function clickShareButton() {
			if(postIndex > ShareButtons.length - 1) {
				window.scrollTo(0, document.body.scrollHeight);
				console.log("Loading page...");
				setTimeout(continuousWhenPageLoad, 2500);
				return;
			}
			// click Share button
			ShareButtons[postIndex].click();
			// click Share now button
			setTimeout(() => {
				document.getElementsByClassName('kr520xx4 pedkr2u6 ms05siws pnx7fd3z b7h9ocf4 pmk7jnqg j9ispegn k4urcfbm')[0].firstChild.firstChild.firstChild.click();
				console.log(`Share post ${postIndex ++} successfully!`);
				setTimeout(clickShareButton, timePerAction);
			}, 1000);
		}, 1000);
	}, 0);
})();
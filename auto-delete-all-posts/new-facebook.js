/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to NEW Facebook and navigate to this link: https://www.facebook.com/me/
*/

let postsDeleteOneTime = 50; // <= 50, number of posts will be deleted per time

// Don't modify code below
(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
    console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	setTimeout(function loopUntilDeleteAllPosts() {
		// click Manage posts button
		let ManagePostsButton = document.getElementsByClassName('rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 d1544ag0 tw6a2znq jb3vyjys b5q2rw42 lq239pai mysgfdmx hddg9phg');
		if(ManagePostsButton.length === 0) return console.warn("Not found the Manage posts button");
		ManagePostsButton[0].lastChild.firstChild.lastChild.click();
		setTimeout(() => {
			// scroll dialog
			document.getElementsByClassName('o8kakjsu rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t d76ob5m9 eg9m0zos l9j0dhe7 du4w35lb d8ncny3e buofh1pr tgvbjcpo qan41l3s c3g1iek1 k4xni2cv')[0].scrollTo(0, document.getElementsByClassName('o8kakjsu rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t d76ob5m9 eg9m0zos l9j0dhe7 du4w35lb d8ncny3e buofh1pr tgvbjcpo qan41l3s c3g1iek1 k4xni2cv')[0].scrollHeight);
			console.log("Loading...");
			// check the checkboxes
			let checkboxIndex = 0;
			let numberOfCheckboxChosen = 0;
			let listCheckboxes = document.getElementsByClassName('oajrlxb2 rq0escxv f1sip0of hidtqoto nhd2j8a9 datstx6m kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x b5wmifdl lzcic4wl jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso pmk7jnqg j9ispegn kr520xx4 k4urcfbm');
			if(listCheckboxes.length === 0) return console.warn('Not found any posts');
			// check the checkboxes until reach 50 posts or no more posts
			setTimeout(function checkNextPost() {
				let listCheckboxes = document.getElementsByClassName('oajrlxb2 rq0escxv f1sip0of hidtqoto nhd2j8a9 datstx6m kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x b5wmifdl lzcic4wl jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso pmk7jnqg j9ispegn kr520xx4 k4urcfbm');
				// filter posts (can delete or not)
				if(checkboxIndex < listCheckboxes.length - 1 && numberOfCheckboxChosen < postsDeleteOneTime) {
					listCheckboxes[checkboxIndex ++].click();
					return setTimeout(() => {
						const announcement = document.getElementsByClassName('discj3wi b3onmgus ph5uu5jm ihqw7lf3 btwxx1t3 pygxslno')[0].firstChild.firstChild.nextSibling.textContent.toLowerCase();
						if(!announcement.includes('delete') && !announcement.includes('xoá') && !announcement.includes('xóa')) {
							listCheckboxes[checkboxIndex - 1].click();
							console.log(`Unchosen post (can't delete)`);
							return setTimeout(checkNextPost, 200);
						}
						console.log(`${++ numberOfCheckboxChosen} posts chosen`);
						setTimeout(checkNextPost, 200);
						return;
					}, 200);
				}
				// when filter done
				if(numberOfCheckboxChosen === 0) return console.warn("DONE! Process ended");
				// click Next button
				document.getElementsByClassName('oajrlxb2 s1i5eluu gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys tkv8g59h qt6c0cv9 fl8dtwsd i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329')[0].click();
				setTimeout(() => {
					// choose Delete option
					document.getElementsByClassName('kr520xx4 pedkr2u6 ms05siws pnx7fd3z b7h9ocf4 pmk7jnqg j9ispegn')[0].firstChild.lastChild.firstChild.lastChild.firstChild.firstChild.firstChild.lastChild.firstChild.firstChild.firstChild.click()
					setTimeout(() => {
						// click Done button
						document.getElementsByClassName('kr520xx4 pedkr2u6 ms05siws pnx7fd3z b7h9ocf4 pmk7jnqg j9ispegn')[0].firstChild.lastChild.lastChild.firstChild.firstChild.firstChild.click();
						console.log(`Deleted ${numberOfCheckboxChosen} posts successfully!`);
						setTimeout(loopUntilDeleteAllPosts, 3000);
					}, 500);
				}, 1000);
			}, 2000);
		}, 3000);
	}, 0);
})();
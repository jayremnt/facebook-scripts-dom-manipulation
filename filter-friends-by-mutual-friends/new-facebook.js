/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to NEW Facebook and navigate to this link: https://www.facebook.com/me/friends/
*/
let mutualFriendsMin = 1; // Friends have less than this number will be removed
let mutualFriendsMax = 5000; // Friends have more than this number will be removed
let inactiveFriends = true;
let friendsExcept = ['JayremntB', 'Bảo']; // You can replace or add more friends who you don't want to be affected by the process, each friend's name must be put between with a single quote ('') and a comma (,) before
// Don't modify code below
(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
    console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	console.log('----------------------------------');
	console.log(`Friends achieving these conditions below won't be removed: \n${mutualFriendsMin} <= mutual friends <= ${mutualFriendsMax} (includes inactive friends)`);
	let userIndex = 0;
	setTimeout(function continuousWhenPageLoad() {
		console.log("Searching...");
		let users = document.getElementsByClassName('bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr');
		if(users.length === 0 || userIndex + 8 > users.length - 1) return console.warn("DONE! You have reached the end of list friends.");
		// 
		setTimeout(function checkNextUser() {
			if(userIndex + 8 > users.length - 1) {
				window.scrollTo(0, document.body.scrollHeight); // scroll to page bottom
				setTimeout(continuousWhenPageLoad, 3000);
				return;
			}
			const friendName = users[userIndex].firstChild.nextSibling.firstChild.textContent;
			let inExceptFriends = false;
			friendsExcept.forEach(friend => {
				if(friend.toLowerCase() === friendName.toLowerCase()) {
					console.log(`Skip ${friendName} (exception)`);
					inExceptFriends = true;
					return;
				}
			});
			const mutualFriends = Number(users[userIndex].firstChild.nextSibling.lastChild.textContent.split(' ')[0]);
			if(!inExceptFriends && (isNaN(mutualFriends) || mutualFriends < mutualFriendsMin || mutualFriends > mutualFriendsMax)) {
				// click Friends button
				users[userIndex].lastChild.firstChild.firstChild.firstChild.click();
				// click Unfriend button
				setTimeout(() => {
					const listButtonsWhenClickFriendsButton = document.getElementsByClassName('oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 oi9244e8 oygrvhab h676nmdw cxgpxx05 dflh9lhu sj5x9vvc scb9dxdr i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn dwo3fsh8 btwxx1t3 pfnyh3mw du4w35lb');
					listButtonsWhenClickFriendsButton[listButtonsWhenClickFriendsButton.length - 1].click();
					// click Confirm button
					return setTimeout(() => {
						document.getElementsByClassName('oajrlxb2 s1i5eluu gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329')[0].click();
						console.log(`Removed ${friendName} as a friend (${isNaN(mutualFriends) ? 0 : mutualFriends} mutual friends)! Searching...`);
						userIndex ++;
						setTimeout(checkNextUser, 600);
					}, 200);	
				}, 1200);
			}
			else {
				userIndex ++;
				setTimeout(checkNextUser, 0);
			}
		}, 0);
	}, 0);
})();

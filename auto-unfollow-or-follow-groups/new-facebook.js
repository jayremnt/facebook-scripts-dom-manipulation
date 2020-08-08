/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* BEFORE YOU RUN CODE, INSPECT ANY LIKE BUTTON YOU SEE FIRST, THEN THIS CODE WILL RUN SUCCESSFULLY
* Please switch to NEW Facebook and navigate to this link: https://www.facebook.com/groups/
*/

let option = 2; // 1 - Unfollow, 2 - Follow
let exceptGroupsThatHasWords = ['J2', 'Động khỉ']; // You can replace or add more words, which group's name exists one or more words in this array won't be affected by the process, each group's name must be put between with a single quote ('') and a comma (,) before

// Don't modify code below
(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	setTimeout(function loopUntilLeaveAllGroups() {
		// scroll until show last page
		let preLastGroupName = "";
		setTimeout(function scrollUntilShowLastPage() {
			console.log("Loading groups...");
			let listGroupsDialog = document.getElementsByClassName('q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 d8ncny3e buofh1pr tgvbjcpo l56l04vs r57mb794 kh7kg01d c3g1iek1 k4xni2cv')[0];
			const listGroups = document.getElementsByClassName('oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 a8c37x1j mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi');
			const lastGroupName = listGroups[listGroups.length - 1].firstChild.lastChild.firstChild.firstChild.firstChild.firstChild.textContent;
			if(lastGroupName !== preLastGroupName) {
				// continue scrolling
				listGroupsDialog.scrollTo(0, listGroupsDialog.scrollHeight);
				preLastGroupName = lastGroupName;
				return setTimeout(scrollUntilShowLastPage, 1500);
			}
			console.log("\x1b[33m%s\x1b[0m", "Loaded all groups. Checking for word exception...");
			let groupLeaveIndex = listGroups.length;
			// unfollow group bottom up
			setTimeout(function unfollowNextGroup() {
				console.log("\x1b[33m%s\x1b[0m", "Checking for word exception...");
				// Choose group which doesn't have except words
				for (let i = groupLeaveIndex - 1; i > 1; i --) {
					let exceptCheck = false;
					const groupName = listGroups[i].firstChild.lastChild.firstChild.firstChild.firstChild.firstChild.textContent;
					for (let j = 0; j < exceptGroupsThatHasWords.length; j ++) {
						if(groupName.toLowerCase().includes(exceptGroupsThatHasWords[j].toLowerCase())) {
							exceptCheck = true;
							console.log(`-> Skip ${groupName} (Word contains: ${exceptGroupsThatHasWords[j].toLowerCase()})`);
							break;
						}
					}
					if(!exceptCheck) {
						console.log("\x1b[33m%s\x1b[0m", `Checking done. Prepare to ${option === 1 ? "unfollow" : "follow"}\n${groupName}...`);
						groupLeaveIndex = i;
						break;
					}
				}
				if(groupLeaveIndex === 0) return console.warn("Successfully unfollowed all groups!");
				// unfollow group chosen
				const groupLeave = listGroups[groupLeaveIndex];
				const groupName = groupLeave.firstChild.lastChild.firstChild.firstChild.firstChild.firstChild.textContent;
				groupLeave.click();
				// wait group interface show and click three-dot button
				setTimeout(() => {
					document.getElementsByClassName('oajrlxb2 tdjehn4e gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys hv4rvrfc qt6c0cv9 dati1w0a i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329')[1].click();
					// wait submenu show and find unfollow group button
					let buttonInThreeDotMenuIndex = 0;
					const listButtonsInThreeDotMenu = document.getElementsByClassName('oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 oi9244e8 oygrvhab h676nmdw cxgpxx05 dflh9lhu sj5x9vvc scb9dxdr i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn dwo3fsh8 btwxx1t3 pfnyh3mw du4w35lb');
					// find unfollow button
					setTimeout(function findUnfollowButton() {
						if(buttonInThreeDotMenuIndex > listButtonsInThreeDotMenu.length - 1) {
							console.warn("\x1b[31m%s\x1b[0m", `Already ${option === 1 ? "unfollow" : "follow"}`);
							return setTimeout(unfollowNextGroup, 0);
						}
						const buttonName = listButtonsInThreeDotMenu[buttonInThreeDotMenuIndex].firstChild.nextSibling.firstChild.firstChild.firstChild.textContent.toLowerCase();
						if((option === 1 && (buttonName.includes("unfollow") || buttonName.includes("bỏ theo dõi"))) ||
						   (option === 2 && (buttonName.includes("follow") || (buttonName.includes("theo dõi") && !buttonName.includes('bỏ'))))) {
							listButtonsInThreeDotMenu[buttonInThreeDotMenuIndex].click();
							console.log("\x1b[31m%s\x1b[0m", `${buttonName} ${groupName}`);
							return setTimeout(unfollowNextGroup, 0);
						}
						else {
							buttonInThreeDotMenuIndex ++;
							setTimeout(findUnfollowButton, 0);
						}
					}, 1500);
				}, 2500);
			}, 0);
		}, 0);
	}, 0);
})();
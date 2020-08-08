/*
* Code by JayremntB, 2020
* Requirement: Old Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to OLD facebook and navigate to https://www.facebook.com/friends
*/

// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;

// Don't modify code below
(() => {
    console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
    console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
    if(timePerAction < 500) return console.warn("time per action must be set >= 500 ms");
    setTimeout(function clickLoadMoreButton() {
        // click load more button until end list
        let LoadMoreButton = document.getElementsByClassName('pam uiBoxLightblue _5cz uiMorePagerPrimary');
        if(LoadMoreButton.length) {
            LoadMoreButton[0].click();
            console.log(`Loaded ${document.getElementsByClassName('clearfix ruUserBox _3-z friendRequestItem').length} requests. Still loading...`);
            setTimeout(clickLoadMoreButton, 2500);
        }
        else {
            // accept one by one request
            const listAcceptFriendRequestsButtons = document.getElementsByClassName('clearfix ruUserBox _3-z friendRequestItem');
            let AcceptButtonIndex = 0;
            console.log(`Loaded full friend requests. You have ${listAcceptFriendRequestsButtons.length} requests.\nPrepare to accept each request...`);
            setTimeout(function clickNextAcceptFriendRequestButton() {
                if(AcceptButtonIndex === listAcceptFriendRequestsButtons.length) return console.warn('DONE!');
                listAcceptFriendRequestsButtons[AcceptButtonIndex].lastChild.firstChild.lastChild.firstChild.firstChild.firstChild.click();
                // get user's name
                const userName = listAcceptFriendRequestsButtons[AcceptButtonIndex ++].lastChild.firstChild.firstChild.firstChild.firstChild.firstChild.textContent;
                console.log(`Accept friend request of ${userName} successfully!`);
                setTimeout(clickNextAcceptFriendRequestButton, timePerAction);
            }, 2000);
        }
    }, 0);
})();
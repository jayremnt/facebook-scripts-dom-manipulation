/*
* Code by JayremntB, 2020
* Requirement: Old Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to OLD Facebook and navigate to this link: https://www.facebook.com/friends/
*/

// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;

// Don't modify code below
(() => {
    console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
    console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
    if(timePerAction < 500) return console.warn("time per action must be set >= 500 ms");
    // click load more button until end list
    setTimeout(function clickLoadMoreButton() {
        let LoadMoreButton = document.getElementsByClassName('pam uiBoxLightblue _5cz uiMorePagerPrimary');
        if(LoadMoreButton.length) {
            LoadMoreButton[0].click();
            console.log(`Loaded ${document.getElementsByClassName('clearfix ruUserBox _3-z friendRequestItem').length} requests. Still loading...`);
            setTimeout(clickLoadMoreButton, 2500);
        }
        else {
            const listDeleteFriendRequestsButtons = document.getElementsByClassName('clearfix ruUserBox _3-z friendRequestItem');
            let DeleteButtonIndex = 0;
            console.log(`Loaded full friend requests. You have ${listDeleteFriendRequestsButtons.length} requests.\nPrepare to delete each request...`);
            // click each decline button
            setTimeout(function clickNextDeleteFriendRequestButton() {
                if(DeleteButtonIndex === listDeleteFriendRequestsButtons.length) return console.warn('DONE!');
                listDeleteFriendRequestsButtons[DeleteButtonIndex].lastChild.firstChild.lastChild.firstChild.firstChild.lastChild.click();
                // get user's name
                const userName = listDeleteFriendRequestsButtons[DeleteButtonIndex ++].lastChild.firstChild.firstChild.firstChild.firstChild.firstChild.textContent;
                console.log(`Delete friend request of ${userName} successfully!`);
                setTimeout(clickNextDeleteFriendRequestButton, timePerAction);
            }, 2000);
        }
    }, 0);
})();
/*
* Code by JayremntB, 2020
* Requirement: Old Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to OLD Facebook and navigate to this link: https://www.facebook.com/messages/
*/

// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;
let friendsExcept = ['JayremntB', 'Bảo']; // You can replace or add more friends who you don't want to be affected by the process, each friend's name must be put between with a single quote ('') and a comma (,) before

// Don't modify code below
(() => {
    console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
    console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
    let preLastUserName = "";
    setTimeout(function loadUntilShowAllConversations() {
        console.log("Loading conversations...");
        const listUsers = document.getElementsByClassName('_1qt3 _6-5k _5l-3');
        // get who chat
        let lastUserName = listUsers[listUsers.length - 1].getAttribute('data-tooltip-content');
        if(lastUserName === preLastUserName) {
            let userIndex = listUsers.length;
            return setTimeout(function deleteNextConversation() {
                userIndex --;
                // get who chat
                let whoChat = listUsers[userIndex].getAttribute('data-tooltip-content');
                for (let i = 0; i < friendsExcept.length; i++) {
                    if(whoChat === null || whoChat.toLowerCase().includes(friendsExcept[i].toLowerCase())) {
                        console.log(`Skip ${whoChat}`);
                        return setTimeout(deleteNextConversation, 0);
                    }
                }
                // click three-dot in userIndex conversation
                document.getElementsByClassName('_5blh _8102')[userIndex].click();
                // click Delete button in submenu
                setTimeout(() => {
                    document.getElementsByClassName('_54ni __MenuItem')[2].click();
                    // click Delete button in "Delete conversation" dialog 
                    setTimeout(() => {
                        document.getElementsByClassName('_3quh _30yy _2t_ _3ay_ _5ixy')[0].click();
                        console.log(`Deleted conversation with ${whoChat} successfully!`);
                        setTimeout(deleteNextConversation, timePerAction);
                    }, 300);
                }, 2000);
            }, 0);
        }
        preLastUserName = lastUserName;
        document.getElementsByClassName('_2xhi')[0].lastChild.firstChild.firstChild.scrollTo(0 , document.getElementsByClassName('_2xhi')[0].lastChild.firstChild.firstChild.scrollHeight);
        setTimeout(loadUntilShowAllConversations, 1500);
    }, 0);
})();

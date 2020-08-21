/*
* Code by JayremntB, 2020
* Requirement: None
* Please copy all the code to make sure that you will not get any errors
* Before run this script, navigate to this link: https://www.facebook.com/pages/?category=invites&ref=bookmarks
*/

// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;

// Don't modify code below
(() => {
    console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
    console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
    let invitationIndex = 0;
    setTimeout(function continuousWhenPageLoad() {
        let listInvitations = document.getElementsByClassName('_42ft _5upp _50zy _5l77 _50-0 _50z_');
        if(listInvitations.length === 0 || invitationIndex > listInvitations.length - 1) return console.warn("Not found any invitations");
        setTimeout(function deleteNextInvitation() {
            if(invitationIndex > listInvitations.length - 1) {
                window.scrollTo(0, document.body.scrollHeight);
                setTimeout(continuousWhenPageLoad, 2500);
                return;
            }
            listInvitations[invitationIndex].click();
            console.log(`Deleted invitation to like page ${document.getElementsByClassName('_s0 _4ooo _1x2_ _1ve7 img')[invitationIndex ++].getAttribute('aria-label')}`);
            setTimeout(deleteNextInvitation, timePerAction);
        }, 0);
    }, 0);
})();
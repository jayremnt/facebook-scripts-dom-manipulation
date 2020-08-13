/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to NEW Facebook and navigate to this link: https://www.facebook.com/me/friends/
*/

// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let option = 2; // Choose 1 = Unfollow, 2 = Follow

// Advanced setting
let timeWaitMenuShow = 700; // time to wait menu show when click Friends button (which has the Unfollow/Follow button).
let timeToLoadPage = 3000; // time to load page when scroll to the end of page (Load more friends)

// Don't modify code below
(() => {
  console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
  console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
  let userIndex = 0;
  let buttonShowWhenClickFriendsButtonIndex;
  setTimeout(function continuousWhenPageLoad() {
    let users = document.getElementsByClassName('bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr');
    if(users.length === 0 || userIndex + 8 > users.length - 1) return console.warn("You have reached the end of list friends");
    // click Friends button
    setTimeout(function clickNextFriendsButton() {
      if(userIndex + 8 > users.length - 1) {
        window.scrollTo(0, document.body.scrollHeight); // scroll to the end of page
        setTimeout(continuousWhenPageLoad, timeToLoadPage);
        return;
      }
      // click Friends button
      users[userIndex].lastChild.firstChild.click();
      // get friend's name
      const friendName = users[userIndex].firstChild.nextSibling.firstChild.textContent;
      // check one by one button in submenu which will show when click Friends button
      buttonShowWhenClickFriendsButtonIndex = 0;
      setTimeout(function checkButtonInSubmenu() {
        const listButtonsShowWhenClickFriendsButton = document.getElementsByClassName('oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 oi9244e8 oygrvhab h676nmdw cxgpxx05 dflh9lhu sj5x9vvc scb9dxdr i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn dwo3fsh8 btwxx1t3 pfnyh3mw du4w35lb');
        if(buttonShowWhenClickFriendsButtonIndex < listButtonsShowWhenClickFriendsButton.length) {
          const buttonName = listButtonsShowWhenClickFriendsButton[buttonShowWhenClickFriendsButtonIndex].textContent.toLowerCase();
          if((option === 1 && (buttonName.includes("unfollow") || buttonName.includes("bỏ theo dõi"))) ||
						 (option === 2 && ((buttonName.includes("follow") && !buttonName.includes("unfollow")) || (buttonName.includes("theo dõi") && !buttonName.includes('bỏ'))))) {
            listButtonsShowWhenClickFriendsButton[buttonShowWhenClickFriendsButtonIndex].click();
            console.log(`${option === 1 ? "Unfollowed" : "Followed"} ${friendName} successfully!`);
            // click next Friends button
            userIndex ++;
            setTimeout(clickNextFriendsButton, 100);
            return;
          }
          // check next button
          buttonShowWhenClickFriendsButtonIndex ++;
          setTimeout(checkButtonInSubmenu, 0);
        }
        else {
          console.log(`Already ${option === 1 ? "unfollowed" : "followed"} ${friendName}`);
          // click next Friends button
          userIndex ++;
          setTimeout(clickNextFriendsButton, 0);
        }
      }, timeWaitMenuShow);
    }, 0);
  }, 0);
})();

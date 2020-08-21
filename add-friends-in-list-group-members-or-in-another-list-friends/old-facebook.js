/*
* Code by JayremntB, 2020
* Requirement: Old Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to OLD facebook and navigate to an account's list friends/group members' list you want
* Example: https://www.facebook.com/marcel/friends (account) & https://www.facebook.com/groups/dongkhiit/members (group)
*/

// You can change time delay of these variables below or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;
let totalFriendRequestsSent = 1000; // the number of users you want to send friend requests

// Don't modify code below
(() => {
  console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
  console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
  console.log("-----------------------");
  console.log(`Friend requests remanding: ${totalFriendRequestsSent}`);
  if(timePerAction < 500) return console.error("timePerAction must greater than 500 ms");
  // add friends in group
  if(window.location.href.includes('groups')) {
    if(document.getElementsByClassName('_42ft _4jy0 FriendRequestAdd addButton _4jy3 _517h _51sy').length === 0) return console.warn("Not found any users");
    let AddFriendButtonIndex = 0;
    //
    setTimeout(function continuousWhenPageLoad() {
      let listUsers = document.getElementsByClassName('_42ft _4jy0 FriendRequestAdd addButton _4jy3 _517h _51sy');
      if(listUsers.length === 0 || AddFriendButtonIndex > listUsers.length - 1) return console.warn("You have reached the end of list friends");
      // click Add Friend buttons
      setTimeout(function clickNextAddFriendButton() {
        if(totalFriendRequestsSent === 0) return console.warn(`Process ended`);
        // if reach end page
        if(AddFriendButtonIndex + 8 > listUsers.length - 1) {
          window.scrollTo(0, document.body.scrollHeight); // scroll to the end of page
          setTimeout(continuousWhenPageLoad, 3000);
          return;
        }
        // in case not Add Friend Button
        if(listUsers[AddFriendButtonIndex].getAttribute('class').includes("hidden_elem") || listUsers[AddFriendButtonIndex].nextSibling.nextSibling !== null && listUsers[AddFriendButtonIndex].nextSibling.nextSibling.nodeName === "A") {
          console.log(`Skip: ${listUsers[AddFriendButtonIndex].getAttribute('aria-label')}`);
          AddFriendButtonIndex ++;
          setTimeout(clickNextAddFriendButton, 0);
          return;
        }
        // click Add Friend Button
        listUsers[AddFriendButtonIndex].click();
        console.log(`${listUsers[AddFriendButtonIndex].getAttribute('aria-label')} - ${--totalFriendRequestsSent} remanding...`);
        // click next Add Friend button
        AddFriendButtonIndex ++;
        setTimeout(clickNextAddFriendButton, timePerAction);
      }, 0);
    }, 0);
  }
  // add friends in list friends
  else {
    if(document.getElementsByClassName('_698').length === 0) return console.warn("Not found any users");
    let AddFriendButtonIndex = 0;
    //
    setTimeout(function continuousWhenPageLoad() {
      let listUsers = document.getElementsByClassName('_698');
      if(listUsers.length === 0 || AddFriendButtonIndex > listUsers.length - 1) return console.warn("You have reached the end of list friends");
      // click Add Friend buttons
      setTimeout(function clickNextAddFriendButton() {
        if(totalFriendRequestsSent === 0) return console.warn(`Process ended`);
        // if reach end page
        if(AddFriendButtonIndex + 8 > listUsers.length - 1) {
          window.scrollTo(0, document.body.scrollHeight); // scroll to the end of page
          setTimeout(continuousWhenPageLoad, 3000);
          return;
        }
        // in case deactive user
        if(listUsers[AddFriendButtonIndex].firstChild.lastChild.lastChild.getAttribute('class') !== "uiProfileBlockContent") {
          console.log(`Skip`);
          AddFriendButtonIndex ++;
          setTimeout(clickNextAddFriendButton, 0);
          return;
        }
        // get user's name
        const userName = listUsers[AddFriendButtonIndex].firstChild.lastChild.lastChild.firstChild.lastChild.firstChild.firstChild.textContent;
        // in case not Add Friend Button
        if(listUsers[AddFriendButtonIndex].firstChild.lastChild.firstChild.lastChild.firstChild.firstChild.lastChild.nodeName === "A" || listUsers[AddFriendButtonIndex].firstChild.lastChild.firstChild.lastChild.firstChild.firstChild.firstChild.getAttribute('class') !== "_42ft _4jy0 FriendRequestAdd addButton _4jy3 _4jy1 selected _51sy") {
          console.log(`Skip ${userName}`);
          AddFriendButtonIndex ++;
          setTimeout(clickNextAddFriendButton, 0);
          return;
        }
        // click Add Friend Button
        listUsers[AddFriendButtonIndex].firstChild.lastChild.firstChild.lastChild.firstChild.firstChild.firstChild.click();
        console.log(`Sent friend request to ${userName} - ${--totalFriendRequestsSent} remanding...`);
        // click next Add Friend button
        AddFriendButtonIndex ++;
        setTimeout(clickNextAddFriendButton, timePerAction);
      }, 0);
    }, 0);
  }
})();
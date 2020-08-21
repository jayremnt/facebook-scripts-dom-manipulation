/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to NEW facebook and navigate to an account's list friends/group members' list you want
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
  if(timePerAction < 500) return console.error("timePerAction must >= 500 ms");
  // add friends in group
  if(window.location.href.includes("groups")) {
    if(document.getElementsByClassName('oajrlxb2 tdjehn4e gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329').length === 0) return console.warn("Not found any users");
    let AddFriendButtonIndex = 0;
    //
    setTimeout(function continuousWhenPageLoad() {
      let listUsers = document.getElementsByClassName('oajrlxb2 tdjehn4e gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329');
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
        // get user's name
        const userName = listUsers[AddFriendButtonIndex].parentNode.parentNode.parentNode.parentNode.previousSibling.firstChild.firstChild.firstChild.textContent
        // in case not Add Friend Button
        let label = listUsers[AddFriendButtonIndex].getAttribute('aria-label');
        if(!label || (label && (label.toLowerCase() !== 'thêm bạn bè' && label.toLowerCase() !== "add friend"))) {
            console.log(`Skip ${userName}`);
            AddFriendButtonIndex ++;
            setTimeout(clickNextAddFriendButton, 0);
            return;
        }
        // click Add Friend Button
        listUsers[AddFriendButtonIndex].click();
        console.log(`Sent friend request to ${userName} - ${--totalFriendRequestsSent} remanding...`);
        // click next Add Friend button
        AddFriendButtonIndex ++;
        setTimeout(clickNextAddFriendButton, timePerAction);
      }, 0);
    }, 0);
  }
  // add friends in list friends
  else {
    if(document.getElementsByClassName('bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr').length === 0) return console.warn("Not found any users");
    let AddFriendButtonIndex = 0;
    //
    setTimeout(function continuousWhenPageLoad() {
      let listUsers = document.getElementsByClassName('bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr');
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
        // get user's name
        const userName = listUsers[AddFriendButtonIndex].firstChild.nextSibling.firstChild.textContent;
        // in case not Add Friend Button
        let label = listUsers[AddFriendButtonIndex].lastChild.firstChild.firstChild.firstChild.getAttribute('aria-label');
        if(!label || (label.toLowerCase() !== 'thêm bạn bè' && label.toLowerCase() !== "add friend")) {
            console.log(`Skip ${userName}`);
            AddFriendButtonIndex ++;
            setTimeout(clickNextAddFriendButton, 0);
            return;
        }
        // click Add Friend Button
        listUsers[AddFriendButtonIndex].lastChild.firstChild.firstChild.firstChild.click();
        console.log(`Sent friend request to ${userName} - ${--totalFriendRequestsSent} remanding...`);
        // click next Add Friend button
        AddFriendButtonIndex ++;
        setTimeout(clickNextAddFriendButton, timePerAction);
      }, 0);
    }, 0);
  }
})();
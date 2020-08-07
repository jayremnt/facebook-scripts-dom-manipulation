/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to NEW Facebook and navigate to this link: https://www.facebook.com/friends/
*/

// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 300; // time delay between 2 actions (click the "Cancel request" button)

// Don't modify code below
(() => {
  console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
  console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
  if(timePerAction < 300) return console.warn("time per action must be set >= 300 ms");
  // open Sent request dialog
  let SentRequestDialog = document.getElementsByClassName('oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh q66pz984')
  if(SentRequestDialog.length === 0) return console.warn("Not found View sent requests button...");
  SentRequestDialog[SentRequestDialog.length - 1].parentNode.click();
  setTimeout(() => {
    // check if having any friend request sent
    let SentRequestDialog = document.getElementsByClassName('q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 l56l04vs r57mb794 kh7kg01d c3g1iek1 otl40fxz cxgpxx05 rz4wbd8a sj5x9vvc a8nywdso');
    if(SentRequestDialog.length === 0) return console.warn("Not found any friend request sent");
    nextFriendRequestSent = SentRequestDialog[0].firstChild.firstChild.nextSibling;
    // count friend requests sent now
    let friendRequestsSentNow = 0;
    while(1) {
      friendRequestsSentNow ++;
      if(nextFriendRequestSent.nextSibling === null || (nextFriendRequestSent.nextSibling !== null && nextFriendRequestSent.nextSibling.firstChild.getAttribute('class') !== null)) break;
      nextFriendRequestSent = nextFriendRequestSent.nextSibling;
    }
    // get Cancel Request list buttons
    let listCancelRequestListButtons = document.getElementsByClassName('oajrlxb2 tdjehn4e gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329');
    let firstCancelRequestButton = listCancelRequestListButtons.length - friendRequestsSentNow;
    // process
    setTimeout(function continuousWhenScrollDialogToTheEnd() {
      let listCancelRequestListButtons = document.getElementsByClassName('oajrlxb2 tdjehn4e gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329');
      if(firstCancelRequestButton > listCancelRequestListButtons.length - 1) return console.warn("Not found any friend request sent");
      setTimeout(function clickNextCancelRequest() {
        if(firstCancelRequestButton > listCancelRequestListButtons.length - 1) {
          // scroll
          document.getElementsByClassName('q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 l56l04vs r57mb794 kh7kg01d c3g1iek1 otl40fxz cxgpxx05 rz4wbd8a sj5x9vvc a8nywdso')[0].scrollTo(0, document.getElementsByClassName('q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 l56l04vs r57mb794 kh7kg01d c3g1iek1 otl40fxz cxgpxx05 rz4wbd8a sj5x9vvc a8nywdso')[0].scrollHeight);
          setTimeout(continuousWhenScrollDialogToTheEnd, 3000);
          return;
        }
        listCancelRequestListButtons[firstCancelRequestButton].click();
        // get user's name
        let userName = listCancelRequestListButtons[firstCancelRequestButton].parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild.textContent;
        console.log(`Cancel request to ${userName} successfully!`);
        setTimeout(clickNextCancelRequest, timePerAction);
      }, 0);
    }, 0);
  }, 2000);
})();
/*
* Code by JayremntB, 2020
* Requirement: Old Facebook 
* Please copy all the code to make sure that you will not get any errors
* BEFORE YOU RUN CODE, INSPECT ANY LIKE BUTTON YOU SEE FIRST, THEN THIS CODE WILL RUN SUCCESSFULLY
* Please switch to OLD Facebook and navigate to this link: https://www.facebook.com/pages/?category=liked
*/
// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 1000;

// Don't modify code below
(() => {
  console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
  if(timePerAction < 500) return console.error("timePerAction must greater than 500");
  let buttonIndex = 0;
  setTimeout(function continuousWhenPageLoad() {
    // get list of "Liked" buttons
    let listLikedButtons = document.getElementsByClassName('_271k _271l _271m _1qjd _3-9a _7tvm _7tv2 _7tv4');
    if(buttonIndex > listLikedButtons.length - 1 || listLikedButtons.length === 0) return console.warn("Not found any page");
    setTimeout(function clickNextButton() {
      if(buttonIndex > listLikedButtons.length - 1) {
        window.scrollTo(0, document.body.scrollHeight); // scroll to the end of page
        setTimeout(continuousWhenPageLoad, 1700);
        return;
      }
      listLikedButtons[buttonIndex].click(); // click Unlike button
      // get page name
      let pageName = document.getElementsByClassName('_7ywj fsl fwb fcb')[buttonIndex ++].firstChild.firstChild.textContent;
      console.log(`Unliked ${pageName} successfully!`);
      setTimeout(clickNextButton, timePerAction);
    }, 0);
  }, 0);
})();
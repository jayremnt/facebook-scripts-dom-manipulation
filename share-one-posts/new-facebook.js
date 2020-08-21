/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* BEFORE YOU RUN CODE, INSPECT ANY LIKE BUTTON YOU SEE FIRST, THEN THIS CODE WILL RUN SUCCESSFULLY
* Please switch to NEW Facebook and navigate to one post of an individual/group/...
*/
// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint
let timePerAction = 3000;
let shareTimes = 500;

// Don't modify code below
(() => {
  console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
  setTimeout(function clickShareButton() {
    if(shareTimes === 0) {
      console.warn("DONE!");
      return;
    }
    document.getElementsByClassName('oajrlxb2 bp9cbjyn g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 j83agx80 rj1gh0hx btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l buofh1pr k7cz35w2 taijpn5t ms05siws flx89l3n ogy3fsii')[0].click();
    setTimeout(() => {
      document.getElementsByClassName('kr520xx4 pedkr2u6 ms05siws pnx7fd3z b7h9ocf4 pmk7jnqg j9ispegn k4urcfbm')[0].firstChild.firstChild.firstChild.click();
      console.log(`Share post successfully! ${shareTimes --} times remaining...`);
      setTimeout(clickShareButton, timePerAction);
    }, 500);
  }, 0);
})();







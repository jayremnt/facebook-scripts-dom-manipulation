/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* BEFORE YOU RUN CODE, INSPECT ANY LIKE BUTTON YOU SEE FIRST, THEN THIS CODE WILL RUN SUCCESSFULLY
* Please switch to NEW Facebook and choose whatever post you want by click the time under the name of author
*/

// Don't modify code below
(() => {
    console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
    console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
    let LoadRepliesButtonIndex = 0;
    // load comments
    console.log("Loading comments...");
    setTimeout(function clickNextLoadComments() {
        let LoadRepliesButtons = document.getElementsByClassName('j83agx80 fv0vnmcu hpfvmrgz');
        if(LoadRepliesButtons.length === 0 || LoadRepliesButtonIndex > LoadRepliesButtons.length - 1) return console.warn("Loaded all comments successfully!");
        let textContent = LoadRepliesButtons[LoadRepliesButtonIndex].firstChild.textContent.toLowerCase();
        if(textContent.includes("hide") || textContent.includes('ẩn')) {
            LoadRepliesButtonIndex ++;
            setTimeout(clickNextLoadComments, 0);
            return;
        }
        LoadRepliesButtons[LoadRepliesButtonIndex].parentNode.click();
        setTimeout(clickNextLoadComments, 1000);
    }, 0);
})();


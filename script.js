//when key is pressed do the following
document.addEventListener("keypress", function (event) {
    //check which key was pressed
    if (event.key === "a") {// console.log(`key 'A' is pressed`); testing purpose
        let musicFile = new Audio("audio/A.mp3")
        musicFile.play();
    } else if (event.key === "s") {
        let musicFile = new Audio("audio/S.mp3");
        musicFile.play();
        // console.log(`key 'S' is pressed`);
    } else if (event.key === "d") {
        let musicFile = new Audio("audio/D.mp3");
        musicFile.play();
        // console.log(`key 'D' is pressed`);
    } else if (event.key === "f") {
        let musicFile = new Audio("audio/F.mp3");
        musicFile.play();
        // console.log(`key 'F' is pressed`);
    } else if (event.key === "g") {
        let musicFile = new Audio("audio/G.mp3");
        musicFile.play();
        // console.log(`key 'G' is pressed`);
    } else if (event.key === "h") {
        let musicFile = new Audio("audio/H.mp3");
        musicFile.play();
        // console.log(`key 'H' is pressed`);
    } else if (event.key === "j") {
        let musicFile = new Audio("audio/J.mp3");
        musicFile.play();
        // console.log(`key 'J' is pressed`);
    } else if (event.key === 'w') {
        let musicFile = new Audio("audio/W.mp3");
        musicFile.play();
    } else if (event.key === 'e') {
        let musicFile = new Audio("audio/E.mp3");
        musicFile.play();
    } else if (event.key === 't') {
        let musicFile = new Audio("audio/T.mp3");
        musicFile.play();
    } else if (event.key === 'y') {
        let musicFile = new Audio("audio/Y.mp3");
        musicFile.play();
    } else if (event.key === 'u') {
        let musicFile = new Audio("audio/U.mp3");
        musicFile.play();
    }
});

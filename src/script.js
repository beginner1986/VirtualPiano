document.addEventListener("keydown", function (e) {

   switch(e.code) {
       case "KeyA":
           let audioA = new Audio("/res/A.mp3");
           audioA.play();
           break;
       case "KeyS":
           let audioS = new Audio("/res/S.mp3");
           audioS.play();
           break;
       case "KeyD":
           let audioD = new Audio("/res/D.mp3");
           audioD.play();
           break;
       case "KeyF":
           let audioF = new Audio("/res/F.mp3");
           audioF.play();
           break;
       case "KeyG":
           let audioG = new Audio("/res/G.mp3");
           audioG.play();
           break;
       case "KeyH":
           let audioH = new Audio("/res/H.mp3");
           audioH.play();
           break;
       case "KeyJ":
           let audioJ = new Audio("/res/J.mp3");
           audioJ.play();
           break;
       case "KeyW":
           let audioW = new Audio("/res/W.mp3");
           audioW.play();
           break;
       case "KeyE":
           let audioE = new Audio("/res/E.mp3");
           audioE.play();
           break;
       case "KeyT":
           let audioT = new Audio("/res/T.mp3");
           audioT.play();
           break;
       case "KeyY":
           let audioY = new Audio("/res/Y.mp3");
           audioY.play();
           break;
       case "KeyU":
           let audioU = new Audio("/res/U.mp3");
           audioU.play();
           break;
       default:
           console.log("Wrong key is pressed.");
           break;
   }
});
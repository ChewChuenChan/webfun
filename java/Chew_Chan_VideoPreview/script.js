console.log("page loaded...");

var x=document.getElementById("myVideo");

console.log("line4 no problem");

function play(){
    x.play();
}

function pause(){
    x.pause();
}

function disableMute(){
    x.muted = false;
}

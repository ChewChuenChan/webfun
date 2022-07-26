var arr=[];
function alwaysHungry(arr){
    var hungry=0;
    var yummy=0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]=="food"){
        yummy=yummy+1;
        console.log("yummy");
        }
        else {
        hungry=hungry+1;
        }
    }
    if ( yummy==0){
    console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food","pie", true, "food"]);
// this should console log "yummy", "yummy"

alwaysHungry([4,1,5,7,2]);
// this should console log "I'm hungry"
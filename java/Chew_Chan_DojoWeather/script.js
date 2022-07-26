//debugging
console.log("enter@1");

// fucntion Loading
// when function is called, it pops out an alert message. 
function Loading(){
    alert("Loading weather report");
}

// Debugging
console.log("Running");

// fuction gone will make the alert box disappear
function gone(element){
// debugging see whether function gone is running
    console.log("gone");
    console.log(element);
    // cookiesbox is gone 
    document.getElementById("cookiesbox").remove();
}

// Function convert
// convert celsius to Fahrenheit
// convert Fahrenheit to celsius
    // push celsius data in array
    var CeltempArray =[];
    for(var i=0; i<8; i++){
        console.log(document.getElementsByClassName("output")[i]);
        CeltempArray.push(document.getElementsByClassName("output")[i]);
    }
     //debug see if the array printed. 
    console.log("Finish")
    console.log(CeltempArray);
    
    // function covertion
    // celsius to Fahrenheith
    // or Fahrenheigth to celsius
    function convert(event){
        console.log(event.target.value);
        if(event.target.value =="Fahrenheit"){
            for(var i=0; i<8; i++){
            var CeltoFah = Math.round (parseInt(CeltempArray[i].innerHTML) * 9/5 +32);
            console.log(CeltoFah)
            CeltempArray[i].innerHTML=CeltoFah;
        }   
        } else {
            for(var i=0; i<8; i++){
            var FahtoCel = Math.round (parseInt((CeltempArray[i].innerHTML)-32)* 5/9);
            console.log(FahtoCel)
            CeltempArray[i].innerHTML=FahtoCel;
        }
        }
    }
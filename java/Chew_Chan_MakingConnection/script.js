console.log("page loaded...");


// var nameswitch = document.getElementById("switchname");
// console.log(nameswitch);
function changename(){
document.getElementById("switchname").innerText="Marilyn Monroe";
}

function removeuser(id){
    document.getElementById(id).remove();
}

function decreasecount(id){
    document.getElementById(id).innerText--;
}

function increasecount(id){
    document.getElementById(id).innerText++;
}
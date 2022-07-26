// High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

var arr=[];
var filteredArr=[];
var cutoff=0;
function highPass(arr,cutoff){
for(var i =0; i<arr.length; i++){
    if(arr[i]>cutoff){
        filteredArr.push(arr[i]);
    }
}

    return filteredArr;
}

var result= highPass([6,8,3,10,-2,5,9],5);
console.log(result);
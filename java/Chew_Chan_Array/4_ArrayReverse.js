// Array Reverse
// Write a function that will reverse that values an array and return them

function reverse(arr) {
    var temp=[];
    for(var i=(arr.length-1); i>=0; i--){
    temp.push(arr[i]);
    }
        arr=temp;
        return arr;
    }
     var result = reverse(["a","b","c","d","e"]);
    console.log(result);
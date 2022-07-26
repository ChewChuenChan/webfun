// Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average

function betterThanAverage(arr){
    var sum=0; 
    for (var i =0; i< arr.length; i++){
        sum +=arr[i];
        }

    var average =0;
    average = Math.round(sum/(arr.length+1));

    var count=0;
    for (var i =0; i< arr.length; i++){
    if(average < arr[i]){
    count ++;
    }
    }
    return count;
}

var result = betterThanAverage([6,8,3,10,-2,5,9]);
console.log(result);
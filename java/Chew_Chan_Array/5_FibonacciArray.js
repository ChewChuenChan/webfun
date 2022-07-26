// Fibonacci Array
// Write a function that will return an array of Fibonacci numbers up to given length n. 

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i =0; i <n-2; i++){
     var num =fibArr[i]+ fibArr[i+1]; 
     fibArr.push(num);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); 

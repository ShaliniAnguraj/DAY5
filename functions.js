//1.ANONYMOUS FUNCTION AND IIFE FUNCTION

//A.print the odd numbers in an array
    //ANONYMOUS FUNCTION: 
  
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
var foo = function(arr){
    for (let i=0;i<arr.length;i++){
     if(arr[i]%2!=0){
    console.log(arr[i])
}
}
}
foo(arr);

//IIFE FUNCTION:

(function (arr1){
  for (let i=0;i<arr1.length;i++){
   if(arr1[i]%2!=0){
 console.log(arr1[i]);
   }
}
})(arr1);

//B.convert all the string to title caps in a string array:

//ANONYMOUS FUNCTION :
                   
var result = function(str){
    str = str.toLowerCase() .split(' ');
    for(var i = 0; i< str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() +str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(result("shalini anguraj"));

//IIFE FUNCTION:

  (function (str){
    str = str.toLowerCase() .split(' ');
    for(var i = 0; i< str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() +str[i].slice(1);
    }
    console.log(str.join(' '));
    
})("shalini anguraj");

//C.Sum of all numbers in an array

////ANONYMOUS FUNCTION :
var array = [1,2,3,4,5,6,7,8,9];
var result =  function(array){
var  sum = 0;
  for (var i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
 
  return sum;

}
console.log(result(array));

//IIFE FUNCTION :

(function  (array)  {
  var  sum = 0;
    for (var i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
   console.log((sum));
  })(array);

  //D. Return all the prime numbers in an array:

//ANONYMOUS FUNCTION :

var result = function(numArray){
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
    }
    return true;
    });
    console.log(numArray);
    }([1,29,3,55,34,89,49])

//IIFE FUNCTION:

( function(numArray){
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
    }
    return true;
    });
    console.log(numArray);
    })([1,2,3,4,23,11])

//G.Remove duplicates from an array

//ANONYMOUS FUNCTION :
    var arr = [2,3,4,2,3,4,4,5,6,7,8];
 
    var result = function removeDuplicates(arr) {
        return [...new Set(arr)];
    }
 
    console.log(result(arr));
//IIFE FUNCTION:

(function(arr){
  let result = [...new Set(arr)];
  console.log(result);
 })([1,1,2,3,4])

//H.Rotate an array by k times

//ANONYMOUS FUNCTION :

let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
var foo = function RightRotate(a, n, k){
   k = k % n;
     for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(a[n + i - k] + " ");
        }
        else {
            console.log((a[i - k]) + " ");
            }
        }
}
  console.log(foo(Array, N, K));

//IIFE FUNCTION:
( function(a, n, k){
  k = k % n;
    for (let i = 0; i < n; i++) {
       if (i < k) {
           console.log(a[n + i - k] + " ");
       }
       else {
           console.log((a[i - k]) + " ");
           }
       }
       console.log(foo(Array, K));     
})([2,3,4,5],2)


//ARROW FUNCTIONS:

//A.print the odd numbers in an array
                 
let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12]
var foo = (arr1)=>{
    for (let i=0;i<arr1.length;i++){
     if(arr1[i]%2!=0){
   console.log(arr1[i]);
}
}
}
foo(arr1);

//B.Convert all the strings to title caps in a string array

var result1 = (str) =>{
  str = str.toLowerCase() .split(' ');
  for(var i = 0; i< str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() +str[i].slice(1);
  }
  return str.join(' ');
}
console.log(result1("shalini anguraj"));


//C. Sum of all numbers in an array

var result =(array) => {
  var  sum = 0;
    for (var i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
    return sum;
  }
  console.log(result(array));

//D.Return all the prime numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);

//E.Return all the palindromes in an array



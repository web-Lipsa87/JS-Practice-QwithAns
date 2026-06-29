//Some given numbers of array use the method to calculate product of all numbers in in the array.
let n = prompt("Enter a number");
let arr =[];

for(let i=1; i<n; i++) {
   arr[i-1] = i;
}
console.log(arr);
let factorial = arr.reduce((prev, curr) => {
   return prev * curr ; //Factorial
});
console.log("factorial = ", factorial);

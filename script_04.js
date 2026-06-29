//count how many numbers are even
let num = [2, 5, 8, 6, 7, 20, 25, 30];
let count = 0;
num.forEach((num) => {
   if(num % 2 === 0){
      count ++;
   }
});
console.log("Even Numbers count:",count)

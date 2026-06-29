//write a function named isLeapYear that takes a as an arguments and returns true if it is leap year, or false otherwise.
function isLeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
      return true;
   } else {
      return false;
   }
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2025));


//We are given array of marks of students. Filter out the marks of student  score 90+
let marks = [87, 90, 96, 76, 89, 99, 92];

const result = marks.filter((val) => {
   return val > 90;

});
console.log(result);

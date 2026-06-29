//print only names from object array
let Student = [
   {name: "Kiran", age: 20},
   {name: "Rahul", age: 22},
   {name: "Sita", age: 21}
];
let names = Student.map(item => item.name);
console.log(names)

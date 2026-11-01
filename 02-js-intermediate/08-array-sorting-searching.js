
// 1. sort() - Sorts elements alphabetically

let fruits = ["Mango", "Apple", "Orange", "Banana"];

fruits.sort();

console.log("Sorted Fruits:", fruits);


// 2. Sorting Numbers in Ascending Order

let numbers = [40, 10, 100, 5, 25];

numbers.sort(function(a, b) {
    return a - b;
});

console.log("Ascending:", numbers);


// 3. Sorting Numbers in Descending Order

let scores = [40, 10, 100, 5, 25];

scores.sort(function(a, b) {
    return b - a;
});

console.log("Descending:", scores);


// 4. reverse() - Reverses Array Elements

let values = [10, 20, 30, 40, 50];

values.reverse();

console.log("Reversed:", values);


// 5. includes() - Checks if Element Exists

let colors = ["Red", "Green", "Blue"];

console.log(colors.includes("Green"));
console.log(colors.includes("Yellow"));


// 6. indexOf() - Finds Element Position

let names = ["Anand", "Rahul", "Amit", "Anand"];

console.log(names.indexOf("Rahul"));
console.log(names.indexOf("Anand"));
console.log(names.indexOf("Vijay"));


// 7. lastIndexOf() - Finds Last Matching Position

console.log(names.lastIndexOf("Anand"));


// 8. find() - Returns First Matching Element

let marks = [35, 45, 60, 80, 90];

let firstPass = marks.find(function(mark) {
    return mark >= 60;
});

console.log("First Pass:", firstPass);


// 9. findIndex() - Returns Matching Element Index

let index = marks.findIndex(function(mark) {
    return mark >= 60;
});

console.log("Index:", index);


// 10. Searching Objects in an Array

let students = [
    { name: "Anand", marks: 85 },
    { name: "Rahul", marks: 45 },
    { name: "Amit", marks: 90 }
];

let student = students.find(function(item) {
    return item.name === "Rahul";
});

console.log("Found Student:", student);


// 11. Sorting Objects by Marks

students.sort(function(a, b) {
    return a.marks - b.marks;
});

console.log("Sorted Students:", students);

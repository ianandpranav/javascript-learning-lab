
// =====================================
// 1. Creating an Array
// =====================================

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);


// =====================================
// 2. Basic Array Destructuring
// =====================================

const [first, second, third] = fruits;

console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);


// =====================================
// 3. Skipping Array Elements
// =====================================

const [a, , c] = fruits;

console.log("A:", a);
console.log("C:", c);


// =====================================
// 4. Default Values
// =====================================

const colors = ["Red"];

const [color1, color2 = "Blue"] = colors;

console.log(color1);
console.log(color2);


// =====================================
// 5. Swapping Variables
// =====================================

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log("X:", x);
console.log("Y:", y);


// =====================================
// 6. Nested Array Destructuring
// =====================================

const numbers = [10, [20, 30]];

const [firstNumber, [secondNumber, thirdNumber]] = numbers;

console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);


// =====================================
// 7. Rest in Array Destructuring
// =====================================

const subjects = ["Java", "JavaScript", "HTML", "CSS"];

const [mainSubject, ...otherSubjects] = subjects;

console.log("Main Subject:", mainSubject);
console.log("Other Subjects:", otherSubjects);


// =====================================
// 8. Spread Operator - Copying Array
// =====================================

const original = [10, 20, 30];

const copied = [...original];

console.log("Original:", original);
console.log("Copied:", copied);


// =====================================
// 9. Spread Operator - Merging Arrays
// =====================================

const frontend = ["HTML", "CSS", "JavaScript"];

const backend = ["Java", "MySQL"];

const fullStack = [...frontend, ...backend];

console.log("Full Stack:", fullStack);


// =====================================
// 10. Adding Elements Using Spread
// =====================================

const updatedFruits = ["Pineapple", ...fruits, "Grapes"];

console.log("Updated Fruits:", updatedFruits);


// =====================================
// 11. Finding Maximum Using Spread
// =====================================

const marks = [75, 90, 45, 88, 95];

console.log("Maximum Marks:", Math.max(...marks));

console.log("Minimum Marks:", Math.min(...marks));


// =====================================
// 12. Spread Operator with Function
// =====================================

function add(a, b, c) {
    return a + b + c;
}

const values = [10, 20, 30];

console.log("Sum:", add(...values));


// =====================================
// 13. Updating Array Using Spread
// =====================================

const oldNumbers = [10, 20, 30];

const newNumbers = [
    ...oldNumbers,
    40
];

console.log("New Numbers:", newNumbers);

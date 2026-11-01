
// 1. Rest Parameters in Functions

function add(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log("Sum:", add(10, 20));
console.log("Sum:", add(10, 20, 30, 40));


// 2. Rest Parameters with Normal Parameters

function calculate(first, second, ...remaining) {
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Remaining:", remaining);
}

calculate(10, 20, 30, 40, 50);


// 3. Rest Operator in Array Destructuring

const fruits = ["Apple", "Banana", "Mango", "Orange"];

const [firstFruit, secondFruit, ...otherFruits] = fruits;

console.log("First:", firstFruit);
console.log("Second:", secondFruit);
console.log("Others:", otherFruits);


// 4. Rest Operator in Object Destructuring

const student = {
    name: "Anand",
    age: 23,
    city: "Jaipur",
    course: "MCA"
};

const { name, ...otherDetails } = student;

console.log("Name:", name);
console.log("Other Details:", otherDetails);


// 5. Finding Maximum Number

function findMaximum(...numbers) {
    return Math.max(...numbers);
}

console.log("Maximum:", findMaximum(10, 50, 30, 90, 20));


// 6. Arrow Function with Rest Parameters

const multiply = (...numbers) => {
    return numbers.reduce((total, number) => total * number, 1);
};

console.log("Product:", multiply(2, 3, 4));

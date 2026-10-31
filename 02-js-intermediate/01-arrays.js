
// 1. Creating an Array

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);


// 2. Accessing Array Elements

console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);


// 3. Array Length

console.log("Total Fruits:", fruits.length);


// 4. Adding Elements

fruits.push("Grapes");

console.log("After push:", fruits);


// 5. Removing Last Element

fruits.pop();

console.log("After pop:", fruits);


// 6. Adding Element at Beginning

fruits.unshift("Pineapple");

console.log("After unshift:", fruits);


// 7. Removing First Element

fruits.shift();

console.log("After shift:", fruits);


// 8. Updating an Element

fruits[1] = "Watermelon";

console.log("After update:", fruits);


// 9. Looping Through an Array

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// 10. Checking an Element

console.log("Includes Mango:", fruits.includes("Mango"));

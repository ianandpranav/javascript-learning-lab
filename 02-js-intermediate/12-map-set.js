
// =====================================
// 1. Creating a Map
// =====================================

let student = new Map();

student.set("name", "Anand");
student.set("age", 23);
student.set("city", "Jaipur");

console.log(student);


// 2. Accessing Map Values

console.log("Name:", student.get("name"));
console.log("Age:", student.get("age"));


// 3. Checking Key Exists

console.log(student.has("city"));
console.log(student.has("course"));


// 4. Updating Map Values

student.set("age", 24);

console.log("Updated Age:", student.get("age"));


// 5. Deleting Map Entry

student.delete("city");

console.log(student);


// 6. Map Size

console.log("Map Size:", student.size);


// 7. Iterating Through Map

student.forEach(function(value, key) {
    console.log(key, ":", value);
});


// 8. Looping Using for...of

for (let [key, value] of student) {
    console.log(key, value);
}


// 9. Creating Map Directly

let marks = new Map([
    ["Math", 85],
    ["English", 90],
    ["Science", 80]
]);

console.log(marks);


// =====================================
// 10. Creating a Set
// =====================================

let numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(10);

console.log(numbers);


// 11. Duplicate Values Are Ignored

let values = new Set([1, 2, 2, 3, 3, 4]);

console.log("Unique Values:", values);


// 12. Checking Value Exists

console.log(values.has(2));
console.log(values.has(10));


// 13. Deleting Set Value

values.delete(3);

console.log(values);


// 14. Set Size

console.log("Set Size:", values.size);


// 15. Iterating Through Set

values.forEach(function(value) {
    console.log(value);
});


// 16. Clearing a Set

let colors = new Set(["Red", "Green", "Blue"]);

colors.clear();

console.log("After Clear:", colors);


// =====================================
// 17. Removing Duplicate Values from Array
// =====================================

let numbersArray = [10, 20, 20, 30, 30, 40];

let uniqueNumbers = [...new Set(numbersArray)];

console.log("Unique Array:", uniqueNumbers);


// 18. Checking Unique Values

let names = new Set(["Anand", "Rahul", "Anand"]);

console.log("Unique Names:", names);

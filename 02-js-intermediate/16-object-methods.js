
// 1. Create an object
const student = {
    name: "Rahul",
    age: 22,
    course: "JavaScript"
};

console.log("Original Object:", student);


// 2. Object.keys() - Returns all keys
console.log("Keys:", Object.keys(student));


// 3. Object.values() - Returns all values
console.log("Values:", Object.values(student));


// 4. Object.entries() - Returns key-value pairs
console.log("Entries:", Object.entries(student));


// 5. Object.fromEntries() - Converts entries into an object
const entries = [
    ["name", "Aman"],
    ["age", 24],
    ["course", "Java"]
];

const newStudent = Object.fromEntries(entries);

console.log("New Student:", newStudent);


// 6. Object.assign() - Copies properties into a target object
const personalDetails = {
    name: "Priya",
    age: 23
};

const educationDetails = {
    course: "BCA",
    college: "ABC College"
};

const combinedDetails = Object.assign({}, personalDetails, educationDetails);

console.log("Combined Details:", combinedDetails);


// 7. Object.freeze() - Prevents adding, deleting and changing properties
const employee = {
    name: "Amit",
    salary: 30000
};

Object.freeze(employee);

employee.salary = 40000;
employee.city = "Jaipur";
delete employee.name;

console.log("Frozen Object:", employee);


// 8. Object.seal() - Prevents adding and deleting properties
const user = {
    name: "Karan",
    age: 25
};

Object.seal(user);

user.age = 26;       // Allowed
user.city = "Delhi"; // Not allowed
delete user.name;    // Not allowed

console.log("Sealed Object:", user);


// 9. Object.hasOwn() - Checks whether an object has its own property
console.log(Object.hasOwn(student, "name"));   // true
console.log(Object.hasOwn(student, "salary")); // false

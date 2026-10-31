
// 1. Creating an Object

let student = {
    name: "Anand",
    age: 23,
    city: "Jaipur",
    course: "MCA"
};

console.log(student);


// 2. Accessing Object Properties

console.log("Name:", student.name);
console.log("Age:", student.age);


// 3. Accessing Properties Using Bracket Notation

console.log("City:", student["city"]);


// 4. Updating Object Properties

student.age = 24;

console.log("Updated Age:", student.age);


// 5. Adding New Properties

student.email = "anand@example.com";

console.log("Updated Object:", student);


// 6. Deleting Properties

delete student.course;

console.log("After Delete:", student);


// 7. Object Methods

let person = {
    name: "Anand",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();


// 8. Looping Through an Object

for (let key in student) {
    console.log(key + ":", student[key]);
}


// 9. Object.keys()

console.log("Keys:", Object.keys(student));


// 10. Object.values()

console.log("Values:", Object.values(student));


// 11. Object.entries()

console.log("Entries:", Object.entries(student));


// 12. Checking Property

console.log("Has name:", student.hasOwnProperty("name"));

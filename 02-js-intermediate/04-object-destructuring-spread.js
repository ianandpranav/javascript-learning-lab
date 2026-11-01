
// 1. Creating an Object

const student = {
    name: "Anand",
    age: 23,
    city: "Jaipur",
    course: "MCA"
};


// 2. Object Destructuring

const { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);


// 3. Destructuring with Different Variable Names

const { name: studentName, age: studentAge } = student;

console.log(studentName);
console.log(studentAge);


// 4. Default Values

const { country = "India" } = student;

console.log(country);


// 5. Nested Object Destructuring

const employee = {
    name: "Rahul",
    address: {
        city: "Jaipur",
        state: "Rajasthan"
    }
};

const {
    address: { city: employeeCity, state }
} = employee;

console.log(employeeCity);
console.log(state);


// 6. Spread Operator - Copying an Object

const original = {
    name: "Anand",
    age: 23
};

const copied = { ...original };

console.log(copied);


// 7. Spread Operator - Merging Objects

const personalDetails = {
    name: "Anand",
    age: 23
};

const professionalDetails = {
    role: "Developer",
    city: "Jaipur"
};

const completeDetails = {
    ...personalDetails,
    ...professionalDetails
};

console.log(completeDetails);


// 8. Updating Object Using Spread

const updatedStudent = {
    ...student,
    age: 24
};

console.log(updatedStudent);


// 9. Adding New Properties Using Spread

const newStudent = {
    ...student,
    email: "anand@example.com"
};

console.log(newStudent);

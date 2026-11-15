
// 1. JavaScript Object

const student = {
    name: "Anand",
    age: 23,
    course: "MCA",
    city: "Jaipur"
};

console.log(student);


// 2. JSON.stringify()
// JavaScript Object to JSON String

const jsonData = JSON.stringify(student);

console.log(jsonData);

console.log(typeof jsonData);


// 3. JSON.parse()
// JSON String to JavaScript Object

const convertedObject = JSON.parse(jsonData);

console.log(convertedObject);

console.log(typeof convertedObject);


// 4. JSON with Array

const students = [
    {
        name: "Anand",
        age: 23
    },
    {
        name: "Rahul",
        age: 22
    },
    {
        name: "Priya",
        age: 24
    }
];

const studentsJSON = JSON.stringify(students);

console.log(studentsJSON);


// 5. Access JSON Data

const userJSON = `{
    "name": "Aman",
    "age": 25,
    "city": "Delhi"
}`;

const user = JSON.parse(userJSON);

console.log(user.name);
console.log(user.age);
console.log(user.city);


// 6. JSON.stringify() with Formatting

const employee = {
    name: "Rohit",
    salary: 35000,
    department: "IT"
};

const formattedJSON = JSON.stringify(employee, null, 4);

console.log(formattedJSON);


// 7. JSON.stringify() with Selected Properties

const person = {
    name: "Anand",
    age: 23,
    password: "secret123"
};

const safeJSON = JSON.stringify(person, ["name", "age"]);

console.log(safeJSON);


// 8. Handling Invalid JSON

const invalidJSON = '{"name": "Anand", "age": }';

try {
    const result = JSON.parse(invalidJSON);
    console.log(result);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}


// 9. JSON Data with Nested Objects

const product = {
    name: "Laptop",
    price: 50000,
    specifications: {
        brand: "Dell",
        ram: "16GB",
        storage: "512GB SSD"
    }
};

const productJSON = JSON.stringify(product);

const convertedProduct = JSON.parse(productJSON);

console.log(convertedProduct.specifications.brand);
console.log(convertedProduct.specifications.ram);

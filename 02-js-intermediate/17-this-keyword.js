
// 1. this inside an object
const student = {
    name: "Anand",
    age: 23,

    showDetails: function () {
        console.log(this.name);
        console.log(this.age);
    }
};

student.showDetails();


// 2. this to access object properties
const employee = {
    name: "Rahul",
    salary: 30000,

    getSalary: function () {
        return this.salary;
    }
};

console.log(employee.getSalary());


// 3. this with object method
const person = {
    name: "Aman",

    greet: function () {
        console.log("Hello, " + this.name);
    }
};

person.greet();


// 4. this with a regular function
function showThis() {
    console.log(this);
}

showThis();


// 5. this inside an arrow function
const user = {
    name: "Priya",

    greet: () => {
        console.log(this);
    }
};

user.greet();


// 6. Arrow function inside an object method
const teacher = {
    name: "Neha",

    showName: function () {
        const printName = () => {
            console.log(this.name);
        };

        printName();
    }
};

teacher.showName();


// 7. this with constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

const car1 = new Car("Toyota", "Fortuner");

console.log(car1.brand);
console.log(car1.model);

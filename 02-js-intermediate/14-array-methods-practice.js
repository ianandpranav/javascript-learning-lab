
// =====================================
// 1. Student Marks Management
// =====================================

const marks = [45, 80, 35, 90, 65, 25, 75];

// Find students who passed (marks >= 40)

const passedStudents = marks.filter(function(mark) {
    return mark >= 40;
});

console.log("Passed Students:", passedStudents);


// 2. Add 5 Bonus Marks to Every Student

const updatedMarks = marks.map(function(mark) {
    return mark + 5;
});

console.log("Updated Marks:", updatedMarks);


// 3. Calculate Total Marks

const totalMarks = marks.reduce(function(total, mark) {
    return total + mark;
}, 0);

console.log("Total Marks:", totalMarks);


// 4. Calculate Average Marks

const averageMarks = totalMarks / marks.length;

console.log("Average Marks:", averageMarks);


// 5. Find Highest Marks

const highestMarks = marks.reduce(function(max, mark) {
    return mark > max ? mark : max;
}, marks[0]);

console.log("Highest Marks:", highestMarks);


// =====================================
// 6. Shopping Cart
// =====================================

const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 },
    { name: "Monitor", price: 12000, quantity: 1 }
];


// Calculate Price of Each Product

const productTotals = cart.map(function(product) {
    return {
        name: product.name,
        total: product.price * product.quantity
    };
});

console.log("Product Totals:", productTotals);


// Calculate Total Shopping Cart Amount

const cartTotal = cart.reduce(function(total, product) {
    return total + (product.price * product.quantity);
}, 0);

console.log("Cart Total:", cartTotal);


// Find Products Above Rs. 1000

const expensiveProducts = cart.filter(function(product) {
    return product.price > 1000;
});

console.log("Expensive Products:", expensiveProducts);


// =====================================
// 7. Employee Salary Management
// =====================================

const employees = [
    { name: "Anand", salary: 25000 },
    { name: "Rahul", salary: 35000 },
    { name: "Amit", salary: 20000 },
    { name: "Priya", salary: 45000 }
];


// Find Employees with Salary Above 25000

const highSalaryEmployees = employees.filter(function(employee) {
    return employee.salary > 25000;
});

console.log("High Salary Employees:", highSalaryEmployees);


// Increase Every Employee Salary by 10%

const increasedSalaries = employees.map(function(employee) {
    return {
        ...employee,
        salary: employee.salary * 1.10
    };
});

console.log("Updated Salaries:", increasedSalaries);


// Calculate Total Salary Expense

const totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Salary Expense:", totalSalary);

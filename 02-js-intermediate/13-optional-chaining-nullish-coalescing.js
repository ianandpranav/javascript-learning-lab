
// =====================================
// 1. Optional Chaining (?.)
// =====================================

const student = {
    name: "Anand",
    address: {
        city: "Jaipur",
        state: "Rajasthan"
    }
};

console.log("Name:", student?.name);

console.log("City:", student?.address?.city);


// 2. Accessing Missing Properties Safely

console.log("Country:", student?.address?.country);


// 3. Without Optional Chaining

const employee = {};

console.log(employee.department); // undefined

// This would cause an error:
// console.log(employee.department.name);


// 4. With Optional Chaining

console.log(employee.department?.name); // undefined


// 5. Optional Chaining with Arrays

const users = [
    { name: "Anand" },
    { name: "Rahul" }
];

console.log(users?.[0]?.name);
console.log(users?.[5]?.name);


// 6. Optional Chaining with Functions

const person = {
    greet() {
        return "Hello Anand!";
    }
};

console.log(person.greet?.());

console.log(person.sayHello?.());


// =====================================
// 7. Nullish Coalescing (??)
// =====================================

let username = null;

let result = username ?? "Guest";

console.log(result);


// 8. Undefined Value

let age;

let userAge = age ?? 18;

console.log(userAge);


// 9. Zero is a Valid Value

let marks = 0;

let finalMarks = marks ?? 50;

console.log(finalMarks);


// 10. False is a Valid Value

let isLoggedIn = false;

let loginStatus = isLoggedIn ?? true;

console.log(loginStatus);


// =====================================
// 11. Difference Between || and ??
// =====================================

let score = 0;

console.log(score || 100); // 100

console.log(score ?? 100); // 0


// =====================================
// 12. Real-World Example
// =====================================

const user = {
    name: "Anand",
    profile: {
        city: "Jaipur"
    }
};

const city = user?.profile?.city ?? "City Not Available";

console.log("User City:", city);


// 13. Optional Chaining with Function Result

const account = {
    getDetails() {
        return {
            balance: 5000
        };
    }
};

const balance = account.getDetails?.()?.balance ?? 0;

console.log("Balance:", balance);

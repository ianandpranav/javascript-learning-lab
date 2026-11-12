
// 1. Global Scope

let globalName = "Anand";

function showGlobalName() {
    console.log("Inside Function:", globalName);
}

showGlobalName();

console.log("Outside Function:", globalName);


// 2. Function Scope

function showAge() {
    let age = 23;

    console.log("Inside Function:", age);
}

showAge();

// console.log(age); // ReferenceError


// 3. Block Scope using let and const

if (true) {
    let city = "Jaipur";
    const country = "India";

    console.log("City:", city);
    console.log("Country:", country);
}

// console.log(city);    // ReferenceError
// console.log(country); // ReferenceError


// 4. var is not Block Scoped

if (true) {
    var language = "JavaScript";
}

console.log("Language:", language);


// 5. Lexical Scope

function outerFunction() {
    let name = "Anand";

    function innerFunction() {
        console.log("Name:", name);
    }

    innerFunction();
}

outerFunction();


// 6. Nested Function Scope

function school() {
    let schoolName = "ABC School";

    function classroom() {
        let subject = "Computer Science";

        function student() {
            let studentName = "Rahul";

            console.log(schoolName);
            console.log(subject);
            console.log(studentName);
        }

        student();
    }

    classroom();
}

school();


// 7. Variable Shadowing

let message = "Global Message";

function showMessage() {
    let message = "Local Message";

    console.log(message);
}

showMessage();

console.log(message);


// 8. Scope with var, let and const

function variableScope() {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

variableScope();

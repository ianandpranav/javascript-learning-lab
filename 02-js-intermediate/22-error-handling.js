
// 1. try and catch

try {
    console.log("Program Started");

    let result = 10 / 0;

    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}


// 2. Handling ReferenceError

try {
    console.log(userName);
} catch (error) {
    console.log("Error:", error.message);
}


// 3. finally Block

try {
    console.log("Trying to execute code");
} catch (error) {
    console.log("Something went wrong");
} finally {
    console.log("Finally block executed");
}


// 4. throw Keyword

function checkAge(age) {
    if (age < 18) {
        throw new Error("You are not eligible to vote");
    }

    console.log("You are eligible to vote");
}

try {
    checkAge(16);
} catch (error) {
    console.log("Error:", error.message);
}


// 5. Handling Invalid Input

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }

    return a / b;
}

try {
    console.log(divideNumbers(10, 2));
    console.log(divideNumbers(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}


// 6. Multiple Error Checks

function validateUser(name, age) {
    if (!name) {
        throw new Error("Name is required");
    }

    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }

    return "User validation successful";
}

try {
    console.log(validateUser("Anand", 23));
} catch (error) {
    console.log("Validation Error:", error.message);
}


// 7. Error Object Properties

try {
    throw new Error("Something went wrong");
} catch (error) {
    console.log("Name:", error.name);
    console.log("Message:", error.message);
}


// 8. Custom Error

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Invalid email address");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

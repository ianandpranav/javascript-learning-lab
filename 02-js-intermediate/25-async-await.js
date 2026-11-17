
// 1. Basic Async Function

async function greet() {
    return "Hello JavaScript!";
}

greet().then((result) => {
    console.log(result);
});


// 2. Basic Await

function getData() {
    return new Promise((resolve) => {
        resolve("Data received successfully");
    });
}

async function showData() {
    const result = await getData();

    console.log(result);
}

showData();


// 3. Async/Await with setTimeout

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded after 2 seconds");
        }, 2000);
    });
}

async function displayData() {
    console.log("Loading...");

    const result = await fetchData();

    console.log(result);
}

displayData();


// 4. Async/Await with Multiple Operations

function getUser() {
    return Promise.resolve({
        id: 1,
        name: "Anand"
    });
}

function getUserPosts() {
    return Promise.resolve([
        "JavaScript Basics",
        "React Fundamentals",
        "Node.js"
    ]);
}

async function showUserDetails() {
    const user = await getUser();

    console.log("User:", user.name);

    const posts = await getUserPosts();

    console.log("Posts:", posts);
}

showUserDetails();


// 5. Error Handling with try...catch

function checkResult() {
    return new Promise((resolve, reject) => {
        reject("Something went wrong");
    });
}

async function handleError() {
    try {
        const result = await checkResult();

        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Operation finished");
    }
}

handleError();


// 6. Async/Await with Conditional Logic

function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Eligible to vote");
        } else {
            reject("Not eligible to vote");
        }
    });
}

async function validateAge() {
    try {
        const result = await checkAge(23);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

validateAge();


// 7. Running Promises in Parallel

function task1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 1 completed"), 2000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 2 completed"), 2000);
    });
}

async function runTasks() {
    const [result1, result2] = await Promise.all([
        task1(),
        task2()
    ]);

    console.log(result1);
    console.log(result2);
}

runTasks();


// 8. Async Arrow Function

const getMessage = async () => {
    return "Welcome to Async JavaScript";
};

getMessage().then((message) => {
    console.log(message);
});

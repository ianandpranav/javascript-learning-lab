
// 1. Synchronous Code

console.log("First");

console.log("Second");

console.log("Third");


// 2. setTimeout() - Asynchronous Code

console.log("Start");

setTimeout(() => {
    console.log("Timeout Executed");
}, 0);

console.log("End");


// 3. Call Stack and Event Loop

function firstFunction() {
    console.log("First Function Started");

    secondFunction();

    console.log("First Function Ended");
}

function secondFunction() {
    console.log("Second Function Executed");
}

firstFunction();


// 4. Promise - Microtask Queue

console.log("Program Started");

setTimeout(() => {
    console.log("setTimeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Callback");
});

console.log("Program Ended");


// 5. Microtask vs Macrotask

console.log("One");

setTimeout(() => {
    console.log("Two - setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Three - Promise");
});

queueMicrotask(() => {
    console.log("Four - queueMicrotask");
});

console.log("Five");


// 6. Multiple Microtasks

console.log("Main Task");

Promise.resolve().then(() => {
    console.log("Microtask 1");
});

Promise.resolve().then(() => {
    console.log("Microtask 2");
});

setTimeout(() => {
    console.log("Timer Task 1");
}, 0);

setTimeout(() => {
    console.log("Timer Task 2");
}, 0);


// 7. Async/Await and Event Loop

async function showMessage() {
    console.log("Async Function Started");

    await Promise.resolve();

    console.log("After Await");
}

console.log("Before Async");

showMessage();

console.log("After Async");


// 8. Nested Microtasks

console.log("Start");

Promise.resolve().then(() => {
    console.log("First Promise");

    Promise.resolve().then(() => {
        console.log("Nested Promise");
    });
});

setTimeout(() => {
    console.log("Timer Executed");
}, 0);

console.log("End");

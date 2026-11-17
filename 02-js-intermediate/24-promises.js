
// 1. Creating a Promise

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation Successful!");
    } else {
        reject("Operation Failed!");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// 2. Promise with resolve()

const successPromise = new Promise((resolve) => {
    resolve("Data received successfully");
});

successPromise.then((result) => {
    console.log(result);
});


// 3. Promise with reject()

const failurePromise = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

failurePromise.catch((error) => {
    console.log(error);
});


// 4. Promise with setTimeout()

const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data loaded after 2 seconds");
    }, 2000);
});

delayedPromise.then((result) => {
    console.log(result);
});


// 5. Promise Chaining

const numberPromise = new Promise((resolve) => {
    resolve(10);
});

numberPromise
    .then((number) => {
        console.log("Original Number:", number);
        return number * 2;
    })
    .then((result) => {
        console.log("After Multiplication:", result);
        return result + 5;
    })
    .then((result) => {
        console.log("Final Result:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// 6. Promise.finally()

const taskPromise = new Promise((resolve) => {
    resolve("Task Completed");
});

taskPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Task execution finished");
    });


// 7. Promise.all()

const promise1 = Promise.resolve("Task 1 Completed");
const promise2 = Promise.resolve("Task 2 Completed");
const promise3 = Promise.resolve("Task 3 Completed");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All Results:", results);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// 8. Promise.allSettled()

const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");
const p3 = Promise.resolve("Completed");

Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log("All Settled Results:", results);
    });


// 9. Promise.race()

const race1 = new Promise((resolve) => {
    setTimeout(() => resolve("First Promise"), 1000);
});

const race2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second Promise"), 2000);
});

Promise.race([race1, race2])
    .then((result) => {
        console.log("Race Winner:", result);
    });


// 10. Promise.any()

const any1 = Promise.reject("First Failed");
const any2 = Promise.resolve("Second Successful");
const any3 = Promise.resolve("Third Successful");

Promise.any([any1, any2, any3])
    .then((result) => {
        console.log("First Successful Result:", result);
    })
    .catch((error) => {
        console.log(error);
    });

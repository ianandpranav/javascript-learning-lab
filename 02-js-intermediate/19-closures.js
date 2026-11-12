
// 1. Basic Closure

function outerFunction() {
    let message = "Hello JavaScript";

    function innerFunction() {
        console.log(message);
    }

    innerFunction();
}

outerFunction();


// 2. Inner Function Accessing Outer Variable

function studentDetails() {
    let name = "Anand";

    function showName() {
        console.log("Student Name:", name);
    }

    return showName;
}

const result = studentDetails();

result();


// 3. Closure with Counter

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log("Count:", count);
    };
}

const counter = createCounter();

counter();
counter();
counter();


// 4. Private Variable using Closure

function bankAccount() {
    let balance = 1000;

    return {
        deposit: function (amount) {
            balance += amount;
            console.log("Balance:", balance);
        },

        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log("Balance:", balance);
            } else {
                console.log("Insufficient Balance");
            }
        },

        checkBalance: function () {
            console.log("Current Balance:", balance);
        }
    };
}

const account = bankAccount();

account.checkBalance();
account.deposit(500);
account.withdraw(200);
account.checkBalance();


// 5. Closure with Function Parameters

function multiplier(number) {
    return function (value) {
        return value * number;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Double:", double(10));
console.log("Triple:", triple(10));


// 6. Multiple Independent Closures

function createCounterInstance() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounterInstance();
const counter2 = createCounterInstance();

console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1
console.log(counter2()); // 2

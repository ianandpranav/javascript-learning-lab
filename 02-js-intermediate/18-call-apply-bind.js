
// 1. call() Method

const person1 = {
    name: "Anand"
};

function greet(city, country) {
    console.log("Hello, " + this.name);
    console.log("City:", city);
    console.log("Country:", country);
}

greet.call(person1, "Jaipur", "India");


// 2. apply() Method

const person2 = {
    name: "Rahul"
};

function introduce(city, country) {
    console.log("My name is " + this.name);
    console.log("I live in " + city + ", " + country);
}

introduce.apply(person2, ["Jaipur", "India"]);


// 3. bind() Method

const person3 = {
    name: "Aman"
};

function welcome(city) {
    console.log("Hello " + this.name);
    console.log("Welcome to " + city);
}

const newFunction = welcome.bind(person3, "Jaipur");

newFunction();


// 4. Practical Example

const user1 = {
    name: "Anand"
};

const user2 = {
    name: "Rahul"
};

function showDetails(message) {
    console.log(message + ", " + this.name);
}

showDetails.call(user1, "Welcome");
showDetails.call(user2, "Hello");

const welcomeAnand = showDetails.bind(user1, "Good Morning");

welcomeAnand();

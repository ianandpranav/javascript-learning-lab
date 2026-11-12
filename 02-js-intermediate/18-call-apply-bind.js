
const person = {
    name: "Anand"
};

function greet(city, country) {
    console.log("Hello, " + this.name);
    console.log("City:", city);
    console.log("Country:", country);
}

greet.call(person, "Jaipur", "India");

// Output:
// Hello, Anand
// City: Jaipur
// Country: India

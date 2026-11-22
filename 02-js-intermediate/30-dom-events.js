
// 1. Click Event

const button = document.getElementById("clickButton");

if (button) {
    button.addEventListener("click", function () {
        console.log("Button Clicked!");
    });
}


// 2. Double Click Event

const doubleButton = document.getElementById("doubleButton");

if (doubleButton) {
    doubleButton.addEventListener("dblclick", function () {
        console.log("Button Double Clicked!");
    });
}


// 3. Mouse Enter Event

const box = document.getElementById("box");

if (box) {
    box.addEventListener("mouseenter", function () {
        console.log("Mouse Entered the Box");
    });
}


// 4. Mouse Leave Event

if (box) {
    box.addEventListener("mouseleave", function () {
        console.log("Mouse Left the Box");
    });
}


// 5. Input Event

const username = document.getElementById("username");

if (username) {
    username.addEventListener("input", function (event) {
        console.log("Current Value:", event.target.value);
    });
}


// 6. Change Event

const city = document.getElementById("city");

if (city) {
    city.addEventListener("change", function (event) {
        console.log("Selected City:", event.target.value);
    });
}


// 7. Keydown Event

document.addEventListener("keydown", function (event) {
    console.log("Key Pressed:", event.key);
});


// 8. Keyup Event

document.addEventListener("keyup", function (event) {
    console.log("Key Released:", event.key);
});


// 9. Form Submit Event

const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        console.log("Form Submitted Successfully!");
    });
}


// 10. Event Object

const eventButton = document.getElementById("eventButton");

if (eventButton) {
    eventButton.addEventListener("click", function (event) {
        console.log("Event Type:", event.type);
        console.log("Target Element:", event.target);
    });
}


// 11. Remove Event Listener

const removeButton = document.getElementById("removeButton");

function handleClick() {
    console.log("Event Listener Executed");
}

if (removeButton) {
    removeButton.addEventListener("click", handleClick);

    // Remove listener when needed:
    // removeButton.removeEventListener("click", handleClick);
}


// 12. Once Option

const onceButton = document.getElementById("onceButton");

if (onceButton) {
    onceButton.addEventListener("click", function () {
        console.log("This message appears only once!");
    }, { once: true });
}


// 13. Event Bubbling

const parent = document.getElementById("parent");
const child = document.getElementById("child");

if (parent && child) {
    parent.addEventListener("click", function () {
        console.log("Parent Clicked");
    });

    child.addEventListener("click", function () {
        console.log("Child Clicked");
    });
}


// 14. Stop Event Propagation

const stopButton = document.getElementById("stopButton");

if (stopButton) {
    stopButton.addEventListener("click", function (event) {
        event.stopPropagation();

        console.log("Event Propagation Stopped");
    });
}


// 15. Prevent Default Behaviour

const link = document.getElementById("myLink");

if (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        console.log("Default Link Behaviour Prevented");
    });
}

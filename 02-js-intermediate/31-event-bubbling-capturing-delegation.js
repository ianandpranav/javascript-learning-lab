
// 1. Event Bubbling

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


// 2. Event Capturing

const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

if (outer && inner) {

    outer.addEventListener("click", function () {
        console.log("Outer Clicked");
    }, true);

    inner.addEventListener("click", function () {
        console.log("Inner Clicked");
    }, true);

}


// 3. Bubbling vs Capturing

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

if (box1 && box2) {

    box1.addEventListener("click", function () {
        console.log("Box 1 - Capturing");
    }, true);

    box2.addEventListener("click", function () {
        console.log("Box 2 - Capturing");
    }, true);

    box1.addEventListener("click", function () {
        console.log("Box 1 - Bubbling");
    });

    box2.addEventListener("click", function () {
        console.log("Box 2 - Bubbling");
    });

}


// 4. stopPropagation()

const parentBox = document.getElementById("parentBox");
const childBox = document.getElementById("childBox");

if (parentBox && childBox) {

    parentBox.addEventListener("click", function () {
        console.log("Parent Event");
    });

    childBox.addEventListener("click", function (event) {
        event.stopPropagation();

        console.log("Child Event");
    });

}


// 5. Event Delegation

const list = document.getElementById("studentList");

if (list) {

    list.addEventListener("click", function (event) {

        if (event.target.matches("li")) {
            console.log("Student:", event.target.textContent);
        }

    });

}


// 6. Event Delegation with Dynamic Elements

const buttonContainer = document.getElementById("buttonContainer");

if (buttonContainer) {

    buttonContainer.addEventListener("click", function (event) {

        if (event.target.matches(".dynamicButton")) {
            console.log("Dynamic Button Clicked!");
        }

    });

    const newButton = document.createElement("button");

    newButton.textContent = "Click Me";

    newButton.classList.add("dynamicButton");

    buttonContainer.appendChild(newButton);

}


// 7. Event Delegation for Multiple Buttons

const actionContainer = document.getElementById("actionContainer");

if (actionContainer) {

    actionContainer.addEventListener("click", function (event) {

        const action = event.target.dataset.action;

        if (action === "edit") {
            console.log("Edit Button Clicked");
        }

        if (action === "delete") {
            console.log("Delete Button Clicked");
        }

    });

}


// 8. event.target vs event.currentTarget

const mainContainer = document.getElementById("mainContainer");

if (mainContainer) {

    mainContainer.addEventListener("click", function (event) {

        console.log("Target:", event.target);

        console.log("Current Target:", event.currentTarget);

    });

}


// 9. once Option

const onceButton = document.getElementById("onceButton");

if (onceButton) {

    onceButton.addEventListener("click", function () {

        console.log("This event runs only once");

    }, { once: true });

}


// 1. Create XMLHttpRequest Object

const xhr = new XMLHttpRequest();


// 2. Basic GET Request

function getUsers() {
    const xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/users"
    );

    xhr.onload = function () {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);

            console.log("Users:", users);
        } else {
            console.log("Request Failed:", xhr.status);
        }
    };

    xhr.onerror = function () {
        console.log("Network Error");
    };

    xhr.send();
}

getUsers();


// 3. GET Request - Single User

function getSingleUser() {
    const xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/users/1"
    );

    xhr.onload = function () {
        if (xhr.status === 200) {
            const user = JSON.parse(xhr.responseText);

            console.log("Name:", user.name);
            console.log("Email:", user.email);
            console.log("City:", user.address.city);
        }
    };

    xhr.send();
}

getSingleUser();


// 4. POST Request - Create User

function createUser() {
    const xhr = new XMLHttpRequest();

    xhr.open(
        "POST",
        "https://jsonplaceholder.typicode.com/users"
    );

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.onload = function () {
        if (xhr.status === 201) {
            const user = JSON.parse(xhr.responseText);

            console.log("Created User:", user);
        } else {
            console.log("Request Failed:", xhr.status);
        }
    };

    xhr.onerror = function () {
        console.log("Network Error");
    };

    const userData = {
        name: "Anand",
        username: "anand123",
        email: "anand@example.com"
    };

    xhr.send(JSON.stringify(userData));
}

createUser();


// 5. PUT Request - Update User

function updateUser() {
    const xhr = new XMLHttpRequest();

    xhr.open(
        "PUT",
        "https://jsonplaceholder.typicode.com/users/1"
    );

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.onload = function () {
        console.log("Updated User:", xhr.responseText);
    };

    const updatedData = {
        id: 1,
        name: "Anand Pranav",
        email: "anand@example.com"
    };

    xhr.send(JSON.stringify(updatedData));
}

updateUser();


// 6. DELETE Request

function deleteUser() {
    const xhr = new XMLHttpRequest();

    xhr.open(
        "DELETE",
        "https://jsonplaceholder.typicode.com/users/1"
    );

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("User Deleted Successfully");
        } else {
            console.log("Delete Failed:", xhr.status);
        }
    };

    xhr.send();
}

deleteUser();


// 7. XMLHttpRequest Ready State

function checkReadyState() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        console.log("Ready State:", xhr.readyState);

        if (xhr.readyState === 4) {
            console.log("Request Completed");
            console.log("Status:", xhr.status);
            console.log("Response:", xhr.responseText);
        }
    };

    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/users/1"
    );

    xhr.send();
}

checkReadyState();


// 8. Request Timeout

function fetchWithTimeout() {
    const xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/users"
    );

    xhr.timeout = 5000;

    xhr.ontimeout = function () {
        console.log("Request Timed Out");
    };

    xhr.onload = function () {
        console.log("Response:", xhr.responseText);
    };

    xhr.onerror = function () {
        console.log("Network Error");
    };

    xhr.send();
}

fetchWithTimeout();

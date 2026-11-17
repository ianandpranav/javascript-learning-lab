
// 1. Basic Fetch API - GET Request

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("Users:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// 2. Fetch API with Async/Await

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log("User Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();


// 3. Fetch a Single User

async function getSingleUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const user = await response.json();

        console.log("Name:", user.name);
        console.log("Email:", user.email);
        console.log("City:", user.address.city);
    } catch (error) {
        console.log("Error:", error);
    }
}

getSingleUser();


// 4. POST Request - Create New User

async function createUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Anand",
                    username: "anand123",
                    email: "anand@example.com"
                })
            }
        );

        const data = await response.json();

        console.log("Created User:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

createUser();


// 5. PUT Request - Update Complete Resource

async function updateUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    id: 1,
                    name: "Anand Pranav",
                    username: "anand",
                    email: "anand@example.com"
                })
            }
        );

        const data = await response.json();

        console.log("Updated User:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

updateUser();


// 6. PATCH Request - Update Specific Fields

async function updateUserEmail() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: "newemail@example.com"
                })
            }
        );

        const data = await response.json();

        console.log("Updated Email:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

updateUserEmail();


// 7. DELETE Request

async function deleteUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "DELETE"
            }
        );

        if (response.ok) {
            console.log("User deleted successfully");
        } else {
            console.log("Request failed:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

deleteUser();


// 8. Check HTTP Response Status

async function checkResponse() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        console.log("Status:", response.status);
        console.log("Success:", response.ok);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        console.log("Response Data:", data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

checkResponse();


// 1. LocalStorage - Save Data

localStorage.setItem("username", "Anand");
localStorage.setItem("city", "Jaipur");


// 2. LocalStorage - Get Data

const username = localStorage.getItem("username");
const city = localStorage.getItem("city");

console.log("Username:", username);
console.log("City:", city);


// 3. LocalStorage - Remove Specific Data

localStorage.removeItem("city");

console.log("City:", localStorage.getItem("city"));


// 4. LocalStorage - Check Storage Length

console.log("Storage Items:", localStorage.length);


// 5. LocalStorage - Get Key by Index

console.log("First Key:", localStorage.key(0));


// 6. LocalStorage - Clear All Data
// Use only in a dedicated practice browser profile.

localStorage.clear();


// 7. SessionStorage - Save Data

sessionStorage.setItem("user", "Anand");
sessionStorage.setItem("course", "JavaScript");


// 8. SessionStorage - Get Data

console.log(sessionStorage.getItem("user"));
console.log(sessionStorage.getItem("course"));


// 9. SessionStorage - Remove Data

sessionStorage.removeItem("course");


// 10. Store JavaScript Object in LocalStorage

const student = {
    name: "Anand",
    age: 23,
    course: "JavaScript"
};

localStorage.setItem("student", JSON.stringify(student));


// 11. Retrieve Object from LocalStorage

const storedStudent = localStorage.getItem("student");

if (storedStudent) {
    const studentData = JSON.parse(storedStudent);

    console.log("Student Name:", studentData.name);
    console.log("Student Age:", studentData.age);
    console.log("Student Course:", studentData.course);
}


// 12. Store Array in LocalStorage

const skills = ["HTML", "CSS", "JavaScript", "React"];

localStorage.setItem("skills", JSON.stringify(skills));


// 13. Retrieve Array from LocalStorage

const storedSkills = localStorage.getItem("skills");

if (storedSkills) {
    const skillsData = JSON.parse(storedSkills);

    console.log("My Skills:", skillsData);
}


// 14. Update Existing LocalStorage Data

localStorage.setItem("username", "Anand Pranav");

console.log("Updated Username:", localStorage.getItem("username"));


// 15. Check Whether Data Exists

if (localStorage.getItem("username") !== null) {
    console.log("Username Found");
} else {
    console.log("Username Not Found");
}


// 16. Handle Invalid JSON Data

const invalidData = "{ invalid json }";

try {
    const result = JSON.parse(invalidData);
    console.log(result);
} catch (error) {
    console.log("Invalid JSON Data:", error.message);
}


// 17. Storage Event

window.addEventListener("storage", function (event) {
    console.log("Storage Key:", event.key);
    console.log("Old Value:", event.oldValue);
    console.log("New Value:", event.newValue);
});

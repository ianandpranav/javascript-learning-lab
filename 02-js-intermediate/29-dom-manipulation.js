
// 1. Select Element by ID

const heading = document.getElementById("heading");

console.log(heading);


// 2. Select Element by Class Name

const paragraphs = document.getElementsByClassName("paragraph");

console.log(paragraphs);


// 3. Select Elements by Tag Name

const allParagraphs = document.getElementsByTagName("p");

console.log(allParagraphs);


// 4. querySelector()

const firstElement = document.querySelector(".paragraph");

console.log(firstElement);


// 5. querySelectorAll()

const allElements = document.querySelectorAll(".paragraph");

console.log(allElements);


// 6. Change HTML Content

const title = document.getElementById("heading");

if (title) {
    title.textContent = "Welcome to JavaScript DOM";
}


// 7. Change HTML Content using innerHTML

const content = document.getElementById("content");

if (content) {
    content.innerHTML = "<strong>JavaScript DOM Manipulation</strong>";
}


// 8. Change CSS Styles

const box = document.getElementById("box");

if (box) {
    box.style.backgroundColor = "blue";
    box.style.color = "white";
    box.style.padding = "20px";
    box.style.borderRadius = "10px";
}


// 9. Change HTML Attributes

const image = document.getElementById("image");

if (image) {
    image.setAttribute("alt", "JavaScript Image");
    image.setAttribute("title", "DOM Example");
}


// 10. Get Attribute

if (image) {
    console.log(image.getAttribute("alt"));
}


// 11. Add CSS Class

if (box) {
    box.classList.add("active");
}


// 12. Remove CSS Class

if (box) {
    box.classList.remove("active");
}


// 13. Toggle CSS Class

if (box) {
    box.classList.toggle("highlight");
}


// 14. Check CSS Class

if (box) {
    console.log(box.classList.contains("highlight"));
}


// 15. Create New HTML Element

const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a new paragraph";

document.body.appendChild(newParagraph);


// 16. Remove HTML Element

const oldElement = document.getElementById("remove-me");

if (oldElement) {
    oldElement.remove();
}


// 17. Parent Element

const child = document.getElementById("child");

if (child) {
    console.log(child.parentElement);
}


// 18. Children Elements

const parent = document.getElementById("parent");

if (parent) {
    console.log(parent.children);
}


// 19. Change Input Value

const input = document.getElementById("username");

if (input) {
    input.value = "Anand";
}


// 20. Get Text Content

const text = document.getElementById("message");

if (text) {
    console.log(text.textContent);
}


// 1. length - Returns String Length

let text = "JavaScript";

console.log("Length:", text.length);


// 2. toUpperCase() - Converts to Uppercase

console.log(text.toUpperCase());


// 3. toLowerCase() - Converts to Lowercase

console.log(text.toLowerCase());


// 4. trim() - Removes Spaces from Both Ends

let username = "   Anand Pranav   ";

console.log(username.trim());


// 5. trimStart() and trimEnd()

console.log(username.trimStart());
console.log(username.trimEnd());


// 6. charAt() - Returns Character at Index

console.log(text.charAt(0));


// 7. at() - Accesses Character Using Index

console.log(text.at(-1));


// 8. includes() - Checks if Text Exists

console.log(text.includes("Script"));


// 9. startsWith() - Checks Starting Text

console.log(text.startsWith("Java"));


// 10. endsWith() - Checks Ending Text

console.log(text.endsWith("Script"));


// 11. indexOf() - Finds First Position

console.log(text.indexOf("Script"));


// 12. slice() - Extracts Part of String

console.log(text.slice(0, 4));


// 13. substring() - Extracts Part of String

console.log(text.substring(4, 10));


// 14. replace() - Replaces First Matching Text

let message = "Hello World";

console.log(message.replace("World", "Anand"));


// 15. replaceAll() - Replaces All Matching Text

let sentence = "Java is easy. Java is powerful.";

console.log(sentence.replaceAll("Java", "JavaScript"));


// 16. split() - Converts String into Array

let skills = "HTML,CSS,JavaScript,React";

console.log(skills.split(","));


// 17. concat() - Joins Strings

let firstName = "Anand";
let lastName = "Pranav";

console.log(firstName.concat(" ", lastName));


// 18. repeat() - Repeats String

console.log("Hello ".repeat(3));


// 19. padStart() - Adds Characters at Beginning

let number = "5";

console.log(number.padStart(3, "0"));


// 20. padEnd() - Adds Characters at Ending

console.log(number.padEnd(3, "0"));


// 1. Get Current Date and Time

let currentDate = new Date();

console.log("Current Date:", currentDate);


// 2. Get Current Year

console.log("Year:", currentDate.getFullYear());


// 3. Get Current Month (0 to 11)

console.log("Month:", currentDate.getMonth());


// 4. Get Current Date (Day of Month)

console.log("Date:", currentDate.getDate());


// 5. Get Day of Week (0 = Sunday, 6 = Saturday)

console.log("Day:", currentDate.getDay());


// 6. Get Hours, Minutes and Seconds

console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());


// 7. Create a Specific Date

let birthday = new Date("2003-01-10");

console.log("Birthday:", birthday);


// 8. Get Timestamp in Milliseconds

console.log("Timestamp:", currentDate.getTime());


// 9. Set Date Values

let date = new Date();

date.setFullYear(2027);
date.setMonth(5);
date.setDate(15);

console.log("Updated Date:", date);


// 10. Convert Date into String

console.log("Date String:", currentDate.toDateString());


// 11. Get Time String

console.log("Time String:", currentDate.toTimeString());


// 12. Get ISO Format

console.log("ISO Date:", currentDate.toISOString());


// 13. Get Locale Date

console.log(
    "Formatted Date:",
    currentDate.toLocaleDateString("en-IN")
);


// 14. Get Locale Time

console.log(
    "Formatted Time:",
    currentDate.toLocaleTimeString("en-IN")
);


// 15. Calculate Difference Between Two Dates

let startDate = new Date("2026-01-01");
let endDate = new Date("2026-12-31");

let difference = endDate - startDate;

let days = difference / (1000 * 60 * 60 * 24);

console.log("Difference in Days:", days);


// 16. Check Whether a Year is Leap Year

function isLeapYear(year) {
    return (
        (year % 4 === 0 && year % 100 !== 0) ||
        year % 400 === 0
    );
}

console.log("Leap Year:", isLeapYear(2024));

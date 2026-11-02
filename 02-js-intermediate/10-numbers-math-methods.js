
// 1. Number Methods

let number = 123.456;

console.log("Original:", number);


// 2. toFixed() - Controls Decimal Places

console.log("Two Decimal Places:", number.toFixed(2));


// 3. toPrecision() - Controls Total Significant Digits

console.log("Precision:", number.toPrecision(5));


// 4. Number() - Converts Value into Number

let value = "250";

console.log("Converted:", Number(value));


// 5. parseInt() - Converts into Integer

console.log("Integer:", parseInt("100.75"));


// 6. parseFloat() - Converts into Decimal Number

console.log("Float:", parseFloat("100.75"));


// 7. isNaN() - Checks Whether Value is Not a Number

console.log("Is NaN:", Number.isNaN(NaN));


// 8. isFinite() - Checks Finite Number

console.log("Is Finite:", Number.isFinite(100));
console.log("Is Infinite:", Number.isFinite(Infinity));


// 9. Math.round() - Rounds to Nearest Integer

console.log("Round:", Math.round(4.6));


// 10. Math.floor() - Rounds Down

console.log("Floor:", Math.floor(4.9));


// 11. Math.ceil() - Rounds Up

console.log("Ceil:", Math.ceil(4.1));


// 12. Math.trunc() - Removes Decimal Part

console.log("Trunc:", Math.trunc(4.9));


// 13. Math.max() - Finds Maximum Number

console.log("Maximum:", Math.max(10, 50, 30, 90));


// 14. Math.min() - Finds Minimum Number

console.log("Minimum:", Math.min(10, 50, 30, 90));


// 15. Math.sqrt() - Square Root

console.log("Square Root:", Math.sqrt(64));


// 16. Math.pow() - Power

console.log("Power:", Math.pow(2, 3));


// 17. Math.abs() - Absolute Value

console.log("Absolute:", Math.abs(-25));


// 18. Math.random() - Random Number Between 0 and 1

console.log("Random:", Math.random());


// 19. Random Integer Between 1 and 100

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random Integer:", randomNumber);


// 20. Math.PI - Value of PI

console.log("PI:", Math.PI);


// 21. Math.cbrt() - Cube Root

console.log("Cube Root:", Math.cbrt(27));


// 22. Math.sign() - Checks Number Sign

console.log("Positive:", Math.sign(10));
console.log("Negative:", Math.sign(-10));
console.log("Zero:", Math.sign(0));

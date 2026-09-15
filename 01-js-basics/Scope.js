let globalValue = "Global";

function demonstrateScope() {
    let functionValue = "Function";

    console.log("Inside function:", globalValue);
    console.log("Inside function:", functionValue);
}

demonstrateScope();

if (true) {
    let blockValue = "Block";
    const fixedValue = 100;

    console.log("Inside block:", blockValue);
    console.log("Inside block:", fixedValue);
}

console.log("Global value:", globalValue);

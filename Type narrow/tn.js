function printString(s) {
    if (typeof s === "string") {
        return s.toLowerCase();
    }
    if (typeof s === "number") {
        return console.log("String should be in String format you passed number");
    }
}
console.log(printString(4368)); // Works
//# sourceMappingURL=tn.js.map
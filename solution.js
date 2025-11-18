"use strict";
// problem 1............
Object.defineProperty(exports, "__esModule", { value: true });
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        return !value;
    }
}
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
//# sourceMappingURL=solution.js.map
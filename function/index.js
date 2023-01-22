function add(a, b) {
    return a + b;
}
console.log(add(10, 5));
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase("hello"));
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log("empty: ", position());
console.log("One param: ", position(10));
console.log("Two params: ", position(10, 15));

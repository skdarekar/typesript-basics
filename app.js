//we can define return type of funuction
function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log("Result", result);
}
printResult(add(33, 4));
var combineValues = add;
console.log(combineValues(2, 3));

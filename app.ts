type Combineable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

//using unions in ts
//we can define type as literals => in this case resulttype can only contain 2 values defined
function combine(
    input1: Combineable,
    input2: Combineable,
    resultType: ConversionDescriptor) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultType === "as-number") {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}

const combineAges = combine(23, 43, "as-number");
console.log(combineAges);

const combineNames = combine("Sagar", "darekar", "as-string");
console.log(combineNames);
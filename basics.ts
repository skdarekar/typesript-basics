console.log("Hello World!");
function add(num1: number, num2: number) {
    return num1 + num2;
}

const number1 = "5";
const number2 = 10.3;

//+ to convert string to number
const result = add(+number1, number2);
console.log(result);
// We can have type boolean & string in ts
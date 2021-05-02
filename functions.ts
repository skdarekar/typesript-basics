//we can define return type of funuction
function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(result): void {
    console.log("Result", result);
}

printResult(add(33, 4));

//We can also define var as Function type=> it will always point to function
// let combineValues : Function;

//We can also define function defination while assigning Function type..
//combineValues can store only function with defined format def
let combineValues: (a: number, b: number) => number;

combineValues = add;
//combineValues = 5; //we cannot store any other value in function type
console.log(combineValues(2, 3));
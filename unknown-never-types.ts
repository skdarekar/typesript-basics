let userInput: unknown;
let userName: string;

userInput = 12;
userInput = "anything";

//we cannot simply assign unknown type to string variable in ts
// userName = userInput;
//We have to do type checking before assignment
if (typeof userInput == "string") {
    userName = userInput;
}

//return type of this function is "never" because it simple throws an error 
//so not return anything not even undefined
function generateError(message: string, code: number): never {
    throw { message, errorCode: code };
}

generateError("Error here", 500);
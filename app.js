var userInput;
var userName;
userInput = 12;
userInput = "anything";
//we cannot simply assign unknown type to string variable in ts
// userName = userInput;
//We have to do type checking before assignment
if (typeof userInput == "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("Error here", 500);

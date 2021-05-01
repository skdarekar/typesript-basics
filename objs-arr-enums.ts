
enum Roles { ADMIN = 6, READ_ONLY, AUTHOR }

// const person: {
//     name: string,
//     age: number
// } = {
//Above one is alternate syntax
const person = {
    name: "Sagar",
    age: 24,
    hobbies: ["Sports", "Cooking"],
    role: Roles.ADMIN
}

let favoriteActivities : string[];
let anyArray : any[];
favoriteActivities = ["Sports"];
anyArray = ["hello", 1, true];

console.log("Log:", favoriteActivities);
console.log("Log any:", anyArray);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase()); // Works fine
    // console.log(hobby.map()); // Throws error because hobby is of type sting & map cannot be user 
}

if(person.role === Roles.ADMIN){
    console.log("ADMIN USER");
}
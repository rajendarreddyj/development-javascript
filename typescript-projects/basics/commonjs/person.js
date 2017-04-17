function greeter(stringOrPerson) {
    if (stringOrPerson && typeof stringOrPerson === "string") {
        return stringOrPerson;
    }
    else {
        const person = stringOrPerson;
        return "Hello, " + person.firstName + " " + person.lastName;
    }
}
var user = { firstName: "Rajendarreddy", lastName: "Jagapathi" };
console.log(greeter(user));

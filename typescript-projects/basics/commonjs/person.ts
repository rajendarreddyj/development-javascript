interface Person {
  firstName: string;
  lastName: string;
}
function greeter(stringOrPerson: Person| string) {
  if (stringOrPerson && typeof stringOrPerson === "string") {
    return stringOrPerson;
  } else {
    const person = stringOrPerson as Person;
    return "Hello, " + person.firstName + " " + person.lastName;
  }
}
var user = { firstName: "Rajendarreddy", lastName: "Jagapathi" };
console.log(greeter(user));

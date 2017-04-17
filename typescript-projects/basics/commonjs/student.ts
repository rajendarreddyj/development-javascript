class Student{
  firstName: string;
  middleInitial: string;
  lastName: string;
constructor(firstName: string,
  middleInitial: string,
  lastName: string){
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
  }
getFullName(){
  return this.firstName + " " + this.middleInitial + ". " +
  this.lastName;
}
}
let student = new Student("Rajendar", "R", "Jagapathi");
console.log(student.getFullName());
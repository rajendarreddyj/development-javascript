class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " + this.middleInitial + ". " +
            this.lastName;
    }
}
let student = new Student("Rajendar", "R", "Jagapathi");
console.log(student.getFullName());

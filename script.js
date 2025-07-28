//Part One
let student = {
    name: "Scott",
    age: 33,
    enrolled: true,
    courses: ["CPAN113","CPAN111","WRIT120"],
    studentInfo: function(){
        console.log("My name is: "+this.name);
        console.log("My age is: "+this.age);
        console.log("Am I enrolled? : "+this.enrolled);
        console.log("My courses : "+this.courses);
    },
    addCourse: function(newCourse){
        this.courses = [...this.courses, newCourse];
    },
    numberOfCourses: function() {
        return this.courses.length;
    }
};

console.log("Hello, I am "+student.name+" and I am "+student.age);
student.studentInfo();

//Part Two
let studentString = JSON.stringify(student);
console.log(studentString);

console.log("Orignal student object:")
console.log(student);

console.log("Parsed student object:")
let newStudent = JSON.parse(studentString);
console.log(newStudent);

console.log("The parsed student object is missing the studentInfo function.")

//Part Three
let { name:studentName, courses:studentCourses } = student;
console.log(studentName);
console.log(studentCourses);

let scores = [65,80,95,98];
let [firstScore, secondScore] = scores;
console.log(firstScore);
console.log(secondScore);

//Part Four
let clonedStudent = {...student};
clonedStudent.graduationYear = 2026;
console.log(clonedStudent);

let newCourses = [...student.courses, "CPAN100", "CPAN200"];
console.log(newCourses);

//Part Five
student.addCourse("WRIT220");
console.log(student);
console.log("Number of courses: "+student.numberOfCourses());
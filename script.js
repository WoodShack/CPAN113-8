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
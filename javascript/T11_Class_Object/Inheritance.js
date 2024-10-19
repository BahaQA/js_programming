class Person{

    constructor(name, age, gender, salary){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }

    work(){
        console.log(`${this.name} is working`);
    }
}

class Student extends Person{
    constructor(name, age, gender, salary, studentId){
        super(name, age, gender, salary);
        this.studentId = studentId;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

let student1 = new Student('Baha', '47', 'Male', '100_000');
console.log(student1);
student1.study();



class Teacher extends Person{} //If you don't have additional fields in the child class constructor, it is called implicitly with a call to super.


let teacher1 = new Teacher('Aaron', '47', 'Male', '500_000');


console.log(teacher1);

student1.work();
teacher1.work();
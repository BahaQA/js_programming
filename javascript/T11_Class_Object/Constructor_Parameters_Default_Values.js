
class Employee{

    /**
    There is no method overloading concept in JS. 
    But it can be achieved by assigning default values to constructor parameters. 
    This way we can create objects without having to pass all the arguments.
     */

    constructor(name = undefined, age = 0, gender = undefined, salary = 0){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }

    work(){
        console.log(`${this.name} is working`);
    }
}

let employee1 = new Employee('Baha');
console.log(employee1);
employee1.work();
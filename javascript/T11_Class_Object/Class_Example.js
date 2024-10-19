
class Employee{

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

let employee1 = new Employee('Baha', '47', 'Male', '100_000');
console.log(employee1);
employee1.work();
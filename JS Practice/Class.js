class Person{
    constructor(name, age){
        this.name= name;
        this.age =age;
    }
    greet(){
        console.log(`Hello ${name}`);
    }
}
let user = new Person("sk",20);
user.greet();
console.log(user);

class User{
    constructor(name,age){
        this.name  = name;
        this.age = age;
    }
    hi(){
        console.log(`hi ${name}`);
    }
}
let user1 = new User("sk",21);
console.log(user1)
// let obj = {
//     fnmae:"Shivam"
// };
// let obj1 ={
//     lNmae:"Kasaudhan"
// }
// obj1.__proto__ = obj;
// console.log(obj1);
// let obj2 =Object.create(obj1);
// console.log(obj2);
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function(){
    console.log(`Hello ${this.name}`)
}

    

let user = new Person("sk",20);
user.greet();
console.log(user);
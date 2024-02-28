let obj = {
    fnmae:"Shivam"
};
let obj1 ={
    lNmae:"Kasaudhan"
}
obj1.__proto__ = obj;
console.log(obj1);
let obj2 =Object.create(obj1);
console.log(obj2);
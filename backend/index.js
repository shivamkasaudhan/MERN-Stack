// const add = require ("./add.js");

// function hello(){
//     console.log("shivam");
// }
// hello();

// const sum  = add(20,10);
// console.log(sum);

// const os = require('os');
// const a = os.freemem();
// const b = os.hostname();
// const c = os.machine();
// const e = os.userInfo();
// const d = os.availableParallelism();
// console.log(a);
// console.log(b,c,d,e);


// const path  = require('path');
// console.log(__filename);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log(path.extname(__filename))

// console.log(path.join('/hello','/hello','file.txt'));
//async way
const fs = require('fs');
fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);
});


//sync. way
const file = fs.readFileSync('file.txt','utf-8');
console.log(file);

//write
fs.writeFile('text.txt','hello ',(err)=>{
    if(err){
        console.log(err)
        return 
    }
    console.log("success")
});

fs.writeFileSync('text2.txt','hiiiiiiiiiiii','utf-8');

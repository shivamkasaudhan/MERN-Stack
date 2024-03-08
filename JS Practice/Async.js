// function test(a){
//     console.log(a);
// }
// function add(a,b,callback){
//     let sum = a+b;
//     callback(sum);
// }
// add(5,10,test);



//callback hell
function DataCollecting(callback){
    setTimeout(()=>{
        console.log("1. Collecting");
        callback();
    },2000)
}

function DataSending(){
    setTimeout(()=>{
        console.log("2. Sending");
    },4000)
}

function DataApproving(){
    console.log("3. Approving");
}

function DataApproved(){
    console.log("4. Approved");
}
// DataCollecting(function(){
//     DataSending();
//     DataApproving();
//     DataApproved();
// });
async function Ex(){
    await DataCollecting();
    await DataApproving();
    await DataSending();
}
Ex().catch((err)=>{
    console.log(err);
});
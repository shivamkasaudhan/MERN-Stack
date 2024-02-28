function loadingData(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{ 
            console.log("1. loading..");
            resolve();
        },2000)
    })
    
}
function collectingData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("2. collecting..");
            resolve();
        },2000)

    })
    
}
function approvingData(){
    console.log("3. approving");
    
}
function approve(){
    setTimeout(()=>{
        console.log("4. approved..");
    },3000)
}
loadingData().then(collectingData).then(approvingData).then(approve);
// collectingData();


async function Ex(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approve();
}
Ex();
Ex().catch(err => console.error(err));
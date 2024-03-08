const form = document.getElementById("form");
const user = document.getElementById("user");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
const Confirm = document.getElementById("confirm");
const Check = document.getElementById("agree");
const Submit = document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();
})

const validateInputs= ()=>{
    const userValue = user.value.trim();
    const emailValue = Email.value.trim();
    const passwordValue = Password.value.trim();
    const confirmValue = Confirm.value.trim();
    const checkValue = Check.checked;

    if(emailValue===''){
        setError(Email,'Email is required.');
    }else if(!validEmail(emailValue)){
        setError(Email,'Provide a valid Email.')
    }
    else{
        setSuccess(Email);
    }
    if(userValue===''){
        setError(user,'Username is required.');
    }else{
        setSuccess(user);
    }
    
    if(passwordValue===''){
        setError(Password,'Password is required.');
    }else if(passwordValue,length<8){
        setError(Password,'Password must contain atleast 8 charecters.');

    }
    else{
        setSuccess(Password);
    }
    if(passwordValue!==confirmValue){
        setError(Confirm,'Password is not matching.');
    }else if(confirmValue===''){
        setError(Confirm,'Confirm your Password.')
    }
    else{
        setSuccess(Confirm);
    }
    if (!checkValue) { 
        setError(Check, 'You must agree to the terms.');
    } else {
        setSuccess(Check);
    }
    
}

const setError=(element, message)=>{
    const InputControl = element.parentElement; 
    const errorDisplay = InputControl.querySelector('.error')
    errorDisplay.innerText = message;
     
    InputControl.classList.add('error');
    InputControl.classList.remove('success');
}
const setSuccess=(element)=>{
    const InputControl=element.parentElement;
    const errorDisplay=InputControl.querySelector('.error')
    errorDisplay.innerText=''
    InputControl.classList.add('success');
    InputControl.classList.remove('error');
}
function validEmail(e){
    var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(e);
}
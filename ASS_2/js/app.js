const form = document.querySelector('#contact-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
// const area = document.querySelector('#Area');
const message = document.querySelector('#message')
const result = document.getElementById('result')
const Result = "THANK YOU"
// const totop = document.querySelector(".to-top");
arr=["chennai", "mumbai","delhi","kolkata","pune","Ahmedabad", "Jaipur"]

// window.addEventListener("scroll", () =>{
//     if(window.scrollY > 250){
//         console.log("error")
//         totop.style.display = "block" ;
//     }else{
//         totop.style.display = "none" ;
//     }
// })

form.addEventListener('submit',(e)=>{
    // e.preventDefault();
    // validateInput();
    if(!validateInput()){
        e.preventDefault()
    }else{
        
        result.innerHTML = Result;
        alert("thank you")

    }


})

arr.forEach(val => {
    const opt = document.createElement('option')
    opt.textContent = val
    opt.value = val
    document.getElementById('Area').appendChild(opt)
    
});

function validateInput(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const messageVal = message.value.trim();
    // const areaVal = area.value.trim();
    let success= true
   


    // validating username 
    if(usernameVal===''){
        success= false;
        setError(username, 'username is required')
       
    }else{
        setSuccess(username)
    
    }

     // validating email
    if(emailVal===''){
        success= false;
        setError(email, 'email is required')
        
    }else if(!emailValidation(emailVal)){
        success= false;
        setError(email, 'enter a valid email')
        

    }else{
        setSuccess(email)
    }

    // validating phone number 
    if(phoneVal === ''){
        success= false;
        setError(phone, 'phone number is required')
        
    }else if(phoneVal.length > 10){
        success= false;
        setError(phone, 'phone number is more then 10 digit, dont add +91')
       

    }else if(phoneVal.length < 10){
        success= false;
        setError(phone, 'phone number is less then 10 digit, dont add +91')
        

    }else{
        setSuccess(phone)

    }
    if(messageVal===''){
        success= false;
        setError(message, 'message is required')
        

    }else{
        setSuccess(message)
    }

    // if(areaVal===''){
    //     success= false;
    //     setError(area, 'area is required')
        
    // }else{
    //     setSuccess(area)
    // }

    return success;


}



// creating function for error
function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
    console.log("error")




}


// creating function for success
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');

}

// email validation function
 
function emailValidation(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
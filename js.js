const form=document.querySelector('form'),
emailField=form.querySelector('.email-field'),
emailInput=emailField.querySelector('.email'),
passField=form.querySelector('.create-password'),
passInput=passField.querySelector('.password'),
cPassField=form.querySelector('.confirm-password'),
cPassInput=cPassField.querySelector('.cpassword');
const eyeIcons=document.querySelectorAll(".show-hide");

function createpass(){
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passInput.value.match(passPattern)){
        return passField.classList.add('invalid')
    }
    passField.classList.remove('invalid')
}

eyeIcons.forEach((eyeIcon)=>{
    eyeIcon.addEventListener('click',()=>{
        const pInput=eyeIcon.parentElement.querySelector('input');
        if(pInput.type==="password"){
            eyeIcon.classList.replace('fa-eye-slash','fa-eye')
            return pInput.type="text";
        }
        eyeIcon.classList.replace('fa-eye','fa-eye-slash')
            return pInput.type="password";
    })
})

function checkEmail(){
    const emaiPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emaiPattern)){
        return emailField.classList.add('invalid')
    }
    emailField.classList.remove('invalid')
}
function confirmpass(){
    if(passInput.value!==cPassInput.value || cPassInput.value===""){
        return cPassField.classList.add('invalid')
    }
    cPassField.classList.remove('invalid')
}


form.addEventListener("submit",(e)=>{
    // e.preventDefault()
    checkEmail()
    createpass()
    confirmpass()
    if(
        !emailField.classList.contains('invalid')&&
        !passField.classList.contains('invalid')&&
        !cPassField.classList.contains('invalid')
    ){
        location.href=form.getAttribute('action')
    }
})
emailInput.addEventListener("keyup",checkEmail)
passInput.addEventListener("keyup",createpass)
cPassInput.addEventListener("keyup",confirmpass)
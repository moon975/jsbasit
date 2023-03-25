const password = document.querySelector('#password');
const eye = document.querySelector('#eye');

eye.addEventListener('click', () => {
    if(eye.classList.contains('fa-eye')){
        eye.classList.replace('fa-eye', 'fa-eye-slash');
        password.setAttribute('type', 'text');
    }
    else{
        eye.classList.replace('fa-eye-slash', 'fa-eye');
        password.setAttribute('type', 'password');
    }
})





























// const password = document.querySelector('#password');
// const eye = document.querySelector('#eye');

// eye.addEventListener('click', () => {

//     if(eye.classList.contains('fa-eye')){
//         password.setAttribute('type', 'text');
//         eye.classList.replace('fa-eye', 'fa-eye-slash');
//     }
//     else{
//         password.setAttribute('type', 'password');
//         eye.classList.replace('fa-eye-slash', 'fa-eye');
//     }
// })
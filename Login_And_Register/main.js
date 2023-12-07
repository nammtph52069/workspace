const logregBox = document.querySelector('.logreg_box');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');

registerLink.addEventListener('click', ()=>{
    logregBox.classList.add('active');

})

loginLink.addEventListener('click', ()=>{
    logregBox.classList.remove('active');

})

let form = document.getElementById('form');

form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('exampleEmail');
    let phone = document.getElementById('tel');

    let obj = {
        Name:name.value,
        Email:email.value,
        Phone:phone.value,
    }

    localStorage.setItem(email.value ,JSON.stringify(obj));
    name.value = '';
    email.value ='';
    phone.value ='';


})

let form = document.getElementById('form');

form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('exampleEmail');
    let obj = {
        myName:name.value,
        myEmail:email.value,
    }

    localStorage.setItem(name.value ,JSON.stringify(obj));
    name.value = '';
    email.value ='';

})

let form = document.getElementById('form');
let ul= document.getElementById('add');


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

    let li =  document.createElement('li');
     
    li.append(document.createTextNode(name.value));
    li.append(document.createTextNode("-"));

    li.append(document.createTextNode(email.value));
    li.append(document.createTextNode("-"));

    li.append(document.createTextNode(phone.value));

    let button =  document.createElement('button');
    button.textContent = "delete";
    button.className="btn btn-secondary"
    li.append(button);


    ul.appendChild(li);

    name.value = '';
    email.value ='';
    phone.value ='';


})


ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains("btn")){
        let parent = e.target.parentNode;
        const nthElementChild =parent.childNodes[2].textContent;
       // console.log(nthElementChild);
        localStorage.removeItem(nthElementChild);
          e.target.parentNode.remove();
    }   
})
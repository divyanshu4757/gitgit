
let form = document.getElementById('form');
let ul= document.getElementById('add');
let name = document.getElementById('name');
let email = document.getElementById('exampleEmail');
let phone = document.getElementById('tel');


form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    

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
    button.className="btn btn-secondary delete-that"
    li.append(button);

    let edit =  document.createElement('button');
    edit.textContent = "edit";
    edit.className="btn btn-success edit"
    li.append(edit);

    ul.appendChild(li);

    name.value = '';
    email.value ='';
    phone.value ='';


})


ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains("delete-that")){
        
       
        const nthElementChild =parent.childNodes[2].textContent;
       // console.log(nthElementChild);
        localStorage.removeItem(nthElementChild);
          e.target.parentNode.remove();
    }   

    if(e.target.classList.contains("edit")){
        console.log(e.target.classList);
        let parent = e.target.parentNode;
        const nthName = parent.childNodes[0].textContent;

        const nthEmail = parent.childNodes[2].textContent;

        const nthNum = parent.childNodes[4].textContent;

        console.log(nthEmail);
        name.value = nthName;
        email.value = nthEmail;
        phone.value = nthNum;
        localStorage.removeItem(nthEmail);
        e.target.parentNode.remove();
    }
})
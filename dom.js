//console.dir(document);
/*
console.log(document.domain);
 console.log(document.URL);
console.log(document.title);

console.log(document.title);
console.log(document.doctype);
console.log(document.head);
 console.log(document.body);
 console.log(document.all);
console.log(document.all[10]);
 console.log(document.forms);
 console.log(document.links);


document.title = "lemon";
console.log(document.forms[0]);


*/


//console.log(document.getElementById('header-title'));



// const headerTitle = document.getElementById('header-title');

// const header = document.getElementById('main-header');

// console.log(headerTitle);

// headerTitle.textContent = 'Lemon chus lo';
// headerTitle.innerText = 'AAlo kha lo';

// headerTitle.innerHTML = '<h3>CHaman</h3>'

// console.log(headerTitle);

// header.style.borderBottom = 'solid 3px black';
/*
var items = document.getElementsByClassName('list-group-item');

items.style.fontWeight = 'bold';

*/

// const elements = document.getElementsByClassName('title');

// elements[0].style.fontWeight = 'bold';

// console.log("leom");




// get element by tag name

/*

const ulElement = document.getElementsByTagName('ul');

const liElement = document.createElement('li');

liElement.textContent = "New Item";

ulElement[0].appendChild(liElement);


liElement.classList.add("lemon");

console.log(liElement);

const li = document.getElementsByTagName("li");

li[4].style.backgroundColor  = "magenta";


liElement.classList.add("list-group-item");

*/

// query selector -> grabs the first one if not use all

/*
let second = document.querySelector('.list-group-item:nth-child(2)');

second.style.backgroundColor = "green";

let third = document.querySelector('.list-group-item:nth-child(3)');
third.style.display = "none";
*/

let second = document.querySelectorAll('.list-group-item');
second[1].style.color = "green";

let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "green";
}



/*
 let header = document.querySelector('#main-header');
 header.style.borderBottom = "solid 10px black";

 var input = document.querySelector('input');

 input.value ="hello world";


 var submit = document.querySelector('input[type="submit"]');
 submit.value = "jao";

 var item = document.querySelector('.list-group-item');

 item.style.color ='red';

 var lastitem = document.querySelector('.list-group-item:last-child');
 lastitem.style.color = "blue";
 

 
 var seconditem = document.querySelector('.list-group-item:nth-child(2)');
 seconditem.style.color = "green";


 var titles = document.querySelectorAll('.title');
 console.log(titles);

 titles[0].textContent = "kha lo";

 var odd  = document.querySelectorAll('li:nth-child(odd)');

 for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "yellow";
 }

 */
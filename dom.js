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



const headerTitle = document.getElementById('header-title');

const header = document.getElementById('main-header');

console.log(headerTitle);

headerTitle.textContent = 'Lemon chus lo';
headerTitle.innerText = 'AAlo kha lo';

headerTitle.innerHTML = '<h3>CHaman</h3>'

console.log(headerTitle);

header.style.borderBottom = 'solid 3px black';


const elements = document.getElementsByClassName('title');

elements[0].style.fontWeight = 'bold';



var items = document.getElementsByClassName('list-group-item');


items[2].style.backgroundColor = 'green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight= "bold";
}

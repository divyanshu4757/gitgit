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


let second = document.querySelectorAll('.list-group-item');
second[1].style.color = "green";

let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "green";
}

*/



// traversing the dom

var itemList = document.querySelector('#items');

// parentNode

console.log(itemList.parentNode);
console.log(itemList.parentNode.parentNode);
itemList.parentNode.parentNode.style.marginTop = '100px';
console.log(itemList.parentNode.parentNode.parentNode);


//parentElement - same as node


console.log(itemList.parentElement);
console.log(itemList.parentElement.parentElement);
itemList.parentElement.parentElement.style.marginLeft = '100px';
console.log(itemList.parentElement.parentElement.parentElement);



//child nodes->pain in the ass -> use children

//console.log(itemList.childNodes);


console.log(itemList.children);

itemList.children[0].style.backgroundColor = "black"

// first  child
console.log(itemList.firstChild);

//first element child

itemList.firstElementChild.textContent = "lemon";


//last child

console.log(itemList.lastChild);

//last element child

console.log(itemList.lastElementChild);


// next sibling

console.log(itemList.nextSibling);

//next element sibling
console.log(itemList.nextElementSibling);

// previous sibling

console.log(itemList.previousSibling);

//previous element sibling

console.log(itemList.previousElementSibling);

itemList.previousElementSibling.textContent = "ja be";


// create element

var newDiv = document.createElement('div');
console.log(newDiv);

newDiv.className = 'hello';
console.log(newDiv);

newDiv.id = 'hello1';

console.log(newDiv);
//add attribute
newDiv.setAttribute('title' , 'Hello div');

console.log(newDiv);


var newDivText = document.createTextNode('hello world');

console.log(newDivText);

// add text to div

newDiv.appendChild(newDivText);
console.log(newDiv);


var container = document.querySelector('header .container');

var h1 = document.querySelector('header h1');


container.insertBefore(newDiv , h1)
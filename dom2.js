var form = document.getElementById("addForm");

var itemList = document.getElementById("items");

// form submit event

form.addEventListener("submit", addItem);

//delete event

itemList.addEventListener('click' , removeItem);
//add item

function addItem(e) {
  e.preventDefault();

  //get input value

  var newItem = document.getElementById("item").value;

  //create new li element

  var li = document.createElement("li");

  li.className = "list-group-item";

  // add text node with input value

  li.appendChild(document.createTextNode(newItem));

  var button = document.createElement("button");
  button.className = "btn btn-danger btn-sm float-right delete";
  button.appendChild(document.createTextNode("X"));
  li.appendChild(button);


  var button2 = document.createElement("button");
  button2.className = "btn bg-success btn-sm float-right delete mr-2";
  button2.appendChild(document.createTextNode("Edit"));
  li.appendChild(button2);

  itemList.appendChild(li);
}



//remove item

function removeItem(e){
   //s console.log(e.target.classList);
   if(e.target.classList.contains('delete')){     
    if(confirm('Are You Sure?')){
        console.log(e.target.parentElement);
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
    
   }
}
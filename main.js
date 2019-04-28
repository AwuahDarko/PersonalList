var items = document.getElementsByClassName("list-group-item");
items[0].style.backgroundColor = "red";
items[1].style.backgroundColor = "yellow";
items[2].style.backgroundColor = "green";
items[3].style.backgroundColor = "aqua";

var itemList = document.querySelector("#items");
itemList.parentNode.style.backgroundColor = "grey";
var newDiv = document.createElement("div");

newDiv.className = "hello";
newDiv.id = "hello-world";
newDiv.setAttribute("title", "hello Div");
newDiv.setAttribute("name", "newDiv");

var newDivText = document.createTextNode("Inserted From JavaScript");

newDiv.appendChild(newDivText);

let container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");


container.insertBefore(newDiv, h1);

var button = document.getElementById('button').addEventListener("mousemove", buttonClick);

function buttonClick(e) {
    document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",10)";
}

//--===============================================================--
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener("submit", addItem);

function addItem(evt) {
    evt.preventDefault();

    var newItem = document.getElementById("item").value;

    var li = document.createElement("li");

    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
}
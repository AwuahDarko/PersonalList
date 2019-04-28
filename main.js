//add background color to list items

function setItemListBackground() {
    var items = document.getElementsByClassName("list-group-item");
    var num = document.getElementById("number");
    for (let i = 0; i < items.length; ++i) {
        items[i].style.backgroundColor = "yellow";
    }
    num.textContent = items.length.toString();
}

setItemListBackground();


//==============================================
//add background color to form

var itemList = document.querySelector("#items");
itemList.parentNode.style.backgroundColor = "grey";
var newDiv = document.createElement("div");

//--===============================================================--
//add events
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");


//adding items to item list
form.addEventListener("submit", addItem);

function addItem(evt) {
    evt.preventDefault();

    var newItem = document.getElementById("item").value;
    var li = document.createElement("li");
    li.className = "list-group-item";
    if (newItem) {
        li.appendChild(document.createTextNode(newItem));

        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-danger btn-sm float-right delete");

        button.appendChild(document.createTextNode("X"));
        li.appendChild(button);

        itemList.appendChild(li);
        setItemListBackground();
    }


}

//remove items from item list
itemList.addEventListener("click", removeItem);

function removeItem(evt) {
    if (evt.target.classList.contains("delete")) {
        if (confirm("Are you sure?")) {
            var li = evt.target.parentElement;
            itemList.removeChild(li);
        }
    }
    setItemListBackground();
}

var filter = document.getElementById("filter");

filter.addEventListener("keyup", filterItems);

function filterItems(evt) {
    var text = evt.target.value.toLowerCase();
    var itemss = itemList.getElementsByTagName("li");

    Array.from(itemss).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
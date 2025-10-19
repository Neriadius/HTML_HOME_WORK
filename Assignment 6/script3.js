function addNew() {
    let list = document.getElementsByTagName("ol")[0];
    let newItem = document.createElement("li");
    newItem.textContent = "The Whole thing, I think it’s sick";
    list.appendChild(newItem);
}

function remove() {
    let list = document.getElementsByTagName("ol")[0];
    list.lastElementChild.remove()
}
var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}
// criar novos elementos
function createListElement() {
  var li = document.createElement("li"); //criando listas
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li); //add li em ul
  input.value = "";
  //add "eliminar"
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Eliminar!"));
  li.appendChild(btn);
  btn.onclick = removeParent;
}
// add elementos depois do click
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
// add elementos depois do enter
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

//add eventos
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// adding done to list elements
ul.onclick = function (event) {
  var target = event.target;
  target.classList.toggle("done");
};

//
function removeParent(event) {
  event.target.parentNode.remove();
}
//eliminar2
// function deleteButton() {
//   var btn = document.createElement("button");
//   btn.appendChild(document.createTextNode("Delete!"));
//   listItems[i].appendChild(btn);
//   btn.onclick = removeParent;
// }

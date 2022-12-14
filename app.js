const inputEl = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.querySelector(".todo");
const doneBtn = document.getElementById("done-btn");
let toDoContainer = document.getElementById("to-do-item-container");
let toDoItemEl = document.querySelector(".to-do-item");
const userNameEl = document.getElementById("user-name");
let userNameStore = "";

// Event Listeners

addBtn.addEventListener("click", storeToDoItem);
toDoContainer.addEventListener("click", removeOrDone);

// Functions

window.onload = function checkForExistingUsername() {
  if (localStorage.getItem("username") === null) {
    let userName = prompt("Enter your name: ");
    localStorage.setItem("username", userName);
    userNameStore = userName;
  } else {
    userNameStore = localStorage.getItem("username");
  }
  displayUserName();
};

function displayUserName() {
  if (userNameStore === "my" || userNameStore === "My") {
    userNameEl.textContent = "My ";
  } else {
    userNameEl.textContent = userNameStore + "'s ";
  }
}

function storeToDoItem() {
  let toDoString = inputEl.value;
  if (toDoString !== "") {
    let newDiv = document.createElement("div");
    newDiv.classList.add("to-do-item");
    toDoContainer.append(newDiv);

    let newToDoTitle = document.createElement("p");
    newToDoTitle.classList.add("to-do-item-title");
    newToDoTitle.textContent = toDoString;
    newDiv.append(newToDoTitle);

    let newDoneBtn = document.createElement("button");
    newDoneBtn.classList.add("button", "todo", "done");
    newDoneBtn.textContent = "Done";
    newDiv.append(newDoneBtn);

    let newRemoveBtn = document.createElement("button");
    newRemoveBtn.classList.add("button", "todo", "remove");
    newRemoveBtn.textContent = "Remove";
    newDiv.append(newRemoveBtn);

    inputEl.value = "";
  } else {
    alert("enter something!");
  }
}

function removeOrDone(e) {
  if (e.target.textContent === "Remove") {
    e.target.parentElement.classList.add("to-do-item-delete");
    setTimeout(function () {
      e.target.parentElement.remove();
    }, 500);
  } else if (e.target.textContent === "Done") {
    e.target.parentElement.classList.toggle("to-do-item-fade");
  }
}

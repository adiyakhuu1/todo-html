let todos = [
  {
    name: "watch a movie",
    status: "todo",
  },
  { name: "go walk", status: "done" },
  { name: "practice js", status: "in-progress" },
  { name: "duolingo", status: "done" },
];

const refreshBtn = document.getElementById("refresh-button");
const exitEveryPopup = document.querySelectorAll("add-new-popup");
const addNewTaskBtn = document.getElementById("add-new-button");
const addNewSubmit = document.getElementById("add-new-submit");
const editSubmit = document.getElementById("edit-submit");
const exitBtnEdit = document.getElementById("exit-edit");
const exitBtnDelete = document.getElementById("exit-delete");
const exitBtnAdd = document.getElementById("exit-add");
const deleteNO = document.getElementById("deleteNO");
const deleteYes = document.getElementById("deleteYes");
addNewSubmit.addEventListener("click", addNew);
editSubmit.addEventListener("click", editTaskSubmit);
exitBtnAdd.addEventListener("click", displayNone);
addNewTaskBtn.addEventListener("click", addNewButton);
exitBtnEdit.addEventListener("click", displayNone);
exitBtnDelete.addEventListener("click", displayNone);
refreshBtn.addEventListener("click", refresh);
deleteNO.addEventListener("click", displayNone);
deleteYes.addEventListener("click", deleteOne);

document.addEventListener("keydown", hidePopupKey);
document.addEventListener("keyup", (e) => {
  if (e.code === "KeyR") {
    refresh();
  }
});

// todos[2].name = "kasjnrujt";
// console.log(todos[2]);
// let editIdx = 0;
function takeOne(i) {
  selectedTask = i;
  return selectedTask;
}

function showUp(selectedTask) {
  // const name = prompt("Enter new name");
  defaultUtga1 = document.getElementById("select-status2-1");
  defaultUtga1.value = todos[selectedTask].name;
  defaultUtga2 = document.getElementById("select-status2-2");
  defaultUtga2.value = todos[selectedTask].status;
  showPopup = document.getElementById("edit-popup");
  showPopup.style.display = "block";
  // i = i;
}
function editTaskSubmit(i) {
  const changedName = document.getElementById("select-status2-1").value;
  const changedStatus = document.getElementById("select-status2-2").value;
  todos[selectedTask].name = changedName;
  todos[selectedTask].status = changedStatus;
  displayNone();
  refresh();
}
function deleteOne() {
  arr = [];
  for (j = 0; j < todos.length; j++) {
    if (j !== selectedTask) {
      arr.push(todos[j]);
    }
  }
  todos = arr;
  displayNone();
  refresh();
}

function checkboxDone(selectedTask) {
  i = selectedTask;
  if (todos[selectedTask].status === "todo") {
    todos[selectedTask].status = "in-progress";
  } else if (todos[selectedTask].status === "in-progress") {
    todos[selectedTask].status = "done";
  } else if (todos[selectedTask].status === "done") {
    deleteOne(i);
  } else if (todos[selectedTask].status === "blocked") {
    deleteOne(i);
  }
  refresh();
}

function createTaskElement(task, i) {
  let innerTaskContainer = document.createElement("div");
  let checkbox = document.createElement("input");
  checkbox.type = "radio";
  innerTaskContainer.className = "task";
  let todoName = document.createElement("p");
  todoName.className = "todo-name";
  todoName.innerText = task.name;
  let todoOptions = document.createElement("div");
  todoOptions.className = "task-options";
  let editOption1 = document.createElement("a");
  checkbox.onclick = function () {
    takeOne(i);
    checkboxDone(selectedTask);
  };
  editOption1.onclick = function () {
    takeOne(i);
    showUp(selectedTask);
  };
  editOption1.href = "#";
  let editOption2 = document.createElement("a");
  editOption2.onclick = function () {
    takeOne(i);

    document.getElementById("delete-popup").style.display = "block";
    // deleteOne(selectedTask);
  };
  editOption2.href = "#";
  let editOptionImage1 = document.createElement("img");
  editOptionImage1.src = "./edit.svg";
  let editOptionImage2 = document.createElement("img");
  editOptionImage2.src = "./delete.svg";
  editOption1.appendChild(editOptionImage1);
  editOption2.appendChild(editOptionImage2);
  todoOptions.appendChild(editOption1);
  todoOptions.appendChild(editOption2);
  innerTaskContainer.appendChild(checkbox);
  innerTaskContainer.appendChild(todoName);
  innerTaskContainer.appendChild(todoOptions);

  return innerTaskContainer;
}
function refresh() {
  document.getElementById("task-container-todo").innerHTML = "";
  document.getElementById("task-container-inprogress").innerHTML = "";
  document.getElementById("task-container-done").innerHTML = "";
  document.getElementById("task-container-blocked").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let task = todos[i];
    let taskElement = createTaskElement(task, i);
    if (task.status == "todo") {
      document.getElementById("task-container-todo").appendChild(taskElement);
    } else if (task.status == "done") {
      document.getElementById("task-container-done").appendChild(taskElement);
    } else if (task.status == "in-progress") {
      document
        .getElementById("task-container-inprogress")
        .appendChild(taskElement);
    } else if (task.status == "blocked") {
      document
        .getElementById("task-container-blocked")
        .appendChild(taskElement);
    }
  }
}

function addNew() {
  const selectStatus1 = document.getElementById("select-status1").value;
  const selectStatus2 = document.getElementById("select-status2").value;
  todos.push({ name: selectStatus1, status: selectStatus2 });
  displayNone();
  refresh();
}

function displayNone() {
  const hidePopup = document.getElementById("add-new-popup");
  const hidePopup1 = document.getElementById("edit-popup");
  const hidePopup2 = document.getElementById("delete-popup");
  hidePopup.style.display = "none";
  hidePopup1.style.display = "none";
  hidePopup2.style.display = "none";
}

function hidePopupKey(e) {
  if (e.key === "Escape") {
    displayNone();
  }
}

function addNewButton() {
  const button = document.getElementById("add-new-popup");
  button.style.display = "block";
}
// function to edit the todo
// function editTask() {
// }

// function to edit the todo status
function editStatusButton(i, editing) {
  let item = todo[i];
  editing = " -" + editing;
  item.status = editing;
  currentTodo();
}

// function to delete the todo
function deleteTodo2(number) {
  arr = [];
  for (i = 0; i < todo.length; i++) {
    if (i !== number) {
      arr.push(todo[i]);
    }
  }
  todos = arr;
  refresh();
}

// event listeners

// for (i = 0; i < exitBtn.length; i++) {
//   exitBtn[i].addEventListener("click", displayNone());
// }
// refresh();

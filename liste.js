//Mülltonne SVG
removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/> <g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';

// das erste Element im Dokument mit der Klasse " " wird ausgegeben 
//Elemente werden zu Vars zugeordnet  
var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');

var newList = document.querySelector('#new-list')
var addListBtn = document.querySelector('#addList')


var toDoUl = document.querySelector(".todo-list ul");
var completeUl = document.querySelector(".complete-list ul");
var ToDoListen = document.querySelector(".listen ul")


//CREATE FUNCTION

//CREATING THE ACTUAL TASK LIST ITEM
var createNewTask = function(task) {

    //Neues To-do in der Liste
    var listItem = document.createElement("li"); //<li>
    var checkBox = document.createElement("input"); //checkbox
    var label = document.createElement("label"); // <label>

    //PULL THE INPUTED TEXT INTO LABEL
    //Inhalt wird durch den in der Variable task gespeicherten Text ersetzt
    label.innerText = task;


    //Eigenschaften  hinzufügen 
    checkBox.type = "checkbox";

    //ADD ITEMS TO THE LI
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    //EVERYTHING PUT TOGETHER
    return listItem;

};

var createNewList = function(liste) {

    //Neue Liste 
    var listenobjekt = document.createElement("li");
    var inhalt = document.createElement("label");

    inhalt.innerText = liste;

    //Neue Liste hinzufügen
    listenobjekt.appendChild(inhalt);
    return listenobjekt;

};

//ADD THE NEW TASK INTO ACTUAL INCOMPLETE LIST
var addTask = function() {
    //console.log("Adding task...");
    //FOR CLARITY, GRAB THE INPUTTED TEXT AND STORE IT IN A VAR
    var listItem = createNewTask(newTask.value);
    //ADD THE NEW LIST ITEM TO LIST
    toDoUl.appendChild(listItem);
    //CLEAR THE INPUT
    newTask.value = "";

    //BIND THE NEW LIST ITEM TO THE INCOMPLETE LIST
    bindIncompleteItems(listItem, completeTask);

};
var addList = function() {
    var listenobjekt = createNewList(newList.value);
    // ???? ToDoListen.appendChild(listenobjekt);
    newList.value = "";


};

var completeTask = function() {

    //GRAB THE CHECKBOX'S PARENT ELEMENT, THE LI IT'S IN
    var listItem = this.parentNode;

    //CREATE AND INSERT THE DELETE BUTTON
    var deleteBtn = document.createElement("button"); // <button>
    deleteBtn.innerHTML = removeSVG;
    deleteBtn.className = "delete";
    listItem.appendChild(deleteBtn);

    //SELECT THE CHECKBOX FROM THE COMPLETED CHECKBOX AND REMOVE IT
    var checkBox = listItem.querySelector("input[type=checkbox]");
    checkBox.remove();

    //PLACE IT INSIDE THE COMPLETED LIST
    completeUl.appendChild(listItem);

    //BIND THE NEW COMPLETED LIST
    bindCompleteItems(listItem, deleteTask);

};



//DELETE TASK FUNCTIONS
var deleteTask = function() {
    //console.log("Deleting task...");

    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
};

//A FUNCTION THAT BINDS EACH OF THE ELEMENTS THE INCOMPLETE LIST
var bindIncompleteItems = function(taskItem, checkBoxClick) {
    //console.log("Binding the incomplete list...");

    //BIND THE CHECKBOX TO A VAR
    var checkBox = taskItem.querySelector("input[type=checkbox]");

    //SETUP EVENT LISTENER FOR THE CHECKBOX
    checkBox.onchange = checkBoxClick;
};


//A FUNCTIONM THAT BINDS EACH OF THE ELEMTS IN THE COMPLETE LIST
var bindCompleteItems = function(taskItem, deleteButtonPress) {
    //console.log("Binding the complete list...");

    //BIND THE DELETE BUTTON
    var deleteButton = taskItem.querySelector(".delete");

    //WHEN THE DELETE BUTTIN IS PRESSED, RUN THE deleteTask function
    deleteButton.onclick = deleteButtonPress;

};

for (var i = 0; i < toDoUl.children.length; i++) {
    bindIncompleteItems(toDoUl.children[i], completeTask);
}

for (var i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}


addTaskBtn.addEventListener("click", addTask);
addListBtn.addEventListener("click", addList);
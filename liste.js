//Mülltonne SVG
removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/> <g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
//Haken SVG
hakenSVG = '<svg class="svg-icon" viewBox="0 0 20 20"> <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path> </svg>';
var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');

var newList = document.querySelector('#new-list')
var addListBtn = document.querySelector('#addList')

var toDoUl = document.querySelector(".todo-list ul");
var completeUl = document.querySelector(".complete-list ul");

var letzteID = 0;
const url = 'https://shopping-lists-api.herokuapp.com/api/v1/lists/';

var aktuelleListe = null;

//Schließ Button-einfügen
var meineListe = document.getElementsByTagName("li");
var i;
for (i = 0; i < meineListe.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    meineListe[i].appendChild(span);
}

//Neue Aufgabe erstellen
var createNewTask = function(task, itemID) {

    //Neues To-do in der Liste

    var listItem = document.createElement("li");
    var tskBx = document.createElement("input");
    var label = document.createElement("label");
    var dltBx = document.createElement("input");
    var dataNode = document.createElement("id");


    tskBx.setAttribute("type", "checkbox");
    dltBx.setAttribute("type", "checkbox");
    var taskBtn = document.createElement("button");
    var completeBtn = document.createElement("button");
    taskTrsh = document.createElement("i");
    taskTrsh.setAttribute("class", "fa fa-trash");
    taskBtn.appendChild(taskTrsh);
    taskBtn.innerHTML = removeSVG;
    completeBtn.innerHTML = hakenSVG;

    listItem.appendChild(completeBtn);
    listItem.appendChild(tskBx);
    listItem.appendChild(label);
    listItem.appendChild(taskBtn);
    listItem.appendChild(dataNode);
    //Inhalt wird durch den in der Variable task gespeicherten Text ersetzt
    label.innerText = task;
    dataNode.innerText = itemID;
    this.evalTasklist;
    taskBtn.addEventListener("click", delTask);
    completeBtn.addEventListener("click", complTask);
    return listItem;


};
var evalTasklist = function() {
        var i, tskBx, dltBx;
        for (i = 0; i < this.ToDoU1Children.length; i += 1) {
            tskBxBox = this.ToDoU1Children[i].getElementsByTagName("input")[0];
            tskBox.onclick = this.completeTask.bind(this, this.ToDoU1Children[i], tskBox);

            taskBtn = this.ToDOu1Children[i].getElementsByTagName("button")[0];
            taskBtn.onclick = this.delTask.bind(this, i);
        }
    }
    // Liste aufrufen 
var createNewList = function(liste) {

<<<<<<< HEAD
    //Neue Liste 
    var listenobjekt = document.createElement("li");
    var inhalt = document.createElement("label");
    inhalt.setAttribute("id", "listenname");

   
    inhalt.innerText = liste;

    //Neue Liste hinzufügen
    listenobjekt.appendChild(inhalt);
    return listenobjekt;

=======
    var neu = liste;
    document.getElementById('aktuellesListe').innerHTML = neu;
>>>>>>> 12906084d40da7b8958a45851edc1ceb5bf45bab
};

//Aufgabe hinzufügen 
function addTask() {

    if (aktuelleListe == null) {
        alert("Bitte zuerst eine neue Liste hinzufügen.");
        document.getElementById("new-task").value = "";
    } else {

        var task = newTask.value;


        var data = { "bought": false, "_id": "testID", "name": task };
        try {
            const response = fetch(url + aktuelleListe + "/items", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Accept": "application/json",
                    "content-type": "application/json"

                }

            }).then(function(json) {
                fetch("https://shopping-lists-api.herokuapp.com/api/v1/lists/" + aktuelleListe).then(
                    function(antwort) {
                        return antwort.json();
                    }).then(function(json) {
                    var laenge = Object.keys(json.items).length;
                    var indexneuesObjekt = laenge - 1;
                    neuesObjektname = json["items"][indexneuesObjekt]["name"];
                    neuesObjektID = json["items"][indexneuesObjekt]["_id"];
                    console.log(neuesObjektID);
                    var listItem = createNewTask(newTask.value, neuesObjektID);
                    toDoUl.appendChild(listItem);
                    newTask.value = "";
                });

            });


        } catch (e) {

        }

    }
}

var addList = function() {
    var id = newList.value;
    aktuelleListe = id;
<<<<<<< HEAD
   
    //API 
=======

>>>>>>> 12906084d40da7b8958a45851edc1ceb5bf45bab
    fetch("https://shopping-lists-api.herokuapp.com/api/v1/lists/"  +  aktuelleListe).then(        function(antw)  {            
        if  (antw.status  ==  200)  {                 return  antw.json();             } 
        else  {                 alert("Es ist ein Fehler beim Laden der Liste aufgetreten"  +  antw.status);             }        
    }    ).then(        function(json)  {           
        var  listenName  =  json["name"];  
        var listenobjekt = createNewList(listenName);

        newList.value = "";  
        listeLaden(id);     
        var  newElement  =  document.createElement("button");            
        newElement.className  =  'liste';            
        newElement.id  =  json._id;            
        newElement.addEventListener('click',                 function(event)  {                    
            btns  =  header.gestElementsByClassName("liste");                    
            markieren();                    
            showList(event.target.id);              
        });            

    }    );    

}

function listeLaden(id) {

    fetch("https://shopping-lists-api.herokuapp.com/api/v1/lists/" + id).then(
        function(antwort) {
            return antwort.json();
        }).then(function(json) {
        console.log(json);
        for (i = 0; i < Object.keys(json.items).length; i++) {
            console.log(json["items"][i]["name"]);
            var einItem = json["items"][i]["name"];
            var listItem = createNewTask(einItem);
            toDoUl.appendChild(listItem);
        }
    });

}


function complTask() {
    var listItem = this.parentNode;
    var dings = listItem.children;
    var name = dings[2].innerHTML;
    var id = dings[4].innerHTML;


    var data = { "bought": true, "_id": id, "name": name };
    const response = fetch(url + aktuelleListe + "/items/" + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Accept": "application/json",
            "content-type": "application/json"
        }

    });
};



var bindCompleteItems = function(taskItem, deleteButtonPress) {

    var deleteButton = taskItem.querySelector(".delete");
    deleteButton.onclick = deleteButtonPress;

};


addTaskBtn.addEventListener("click", addTask);
addListBtn.addEventListener("click", addList);


var delTask = function() {
    // Item aus Liste löschen 
    var listItem = this.parentNode;
    var dings = listItem.children;
    var name = dings[2].innerHTML;
    var id = dings[4].innerHTML;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
    // Item aus der API löschen 
    var data = { "bought": false, "_id": id, "name": name };
    try {
        var request = new XMLHttpRequest();
        console.log(id);
        request.open('DELETE', url + aktuelleListe + "/items/" + id, true);
        request.send();
    } catch {
        alert("Fehler beim löschen des Elements");
    }


};
<<<<<<< HEAD
var newID = function(task) {
    var id = task;
    return id;
}

(function () {
    function berechne() {
      var jetzt = new Date(),
        tag = jetzt.getDate(),
        jahr = jetzt.getFullYear(),
        tagZahl = jetzt.getDay(),
        wochentag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag',
          'Freitag', 'Samstag'],
        monatZahl = jetzt.getMonth(),
        monat = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
          'August', 'September', 'Oktober', 'November', 'Dezember'],text;
      text =  wochentag[tagZahl] + " " + tag + '. ' + monat[monatZahl] + " " + jahr;
      document.getElementById('datumsausgabe')
        .innerHTML = text;
=======

// Datum anzeigen 
(function() {
    function berechne() {
        var jetzt = new Date(),
            tag = jetzt.getDate(),
            jahr = jetzt.getFullYear(),
            tagZahl = jetzt.getDay(),
            wochentag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag',
                'Freitag', 'Samstag'
            ],
            monatZahl = jetzt.getMonth(),
            monat = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
                'August', 'September', 'Oktober', 'November', 'Dezember'
            ],
            text;
        text = wochentag[tagZahl] + " " + tag + '. ' + monat[
            monatZahl] + " " + jahr;
        document.getElementById('datumsausgabe')
            .innerHTML = text;
>>>>>>> 12906084d40da7b8958a45851edc1ceb5bf45bab
    }
    document.addEventListener("DOMContentLoaded", function() {
        berechne();
    });
}());
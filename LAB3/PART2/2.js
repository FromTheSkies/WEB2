let listinput = document.getElementById("listinput")
let taskBox = document.querySelector(".list")

// var elements = {};/

var keyandstatus = [];

const elements = new Map();

var index = 0;

function addElements(){

    var cnt = 0;

    let li = "";

    keyandstatus = [false,`item${index}`]

    li = `<fieldset class ="box"><li id = "list">
                <input  class = "no" class = "galochka" type = "checkbox" id = "item${index}">
                <p class = "elem">${listinput.value}</p>
                <button class = "trash" onclick="deleteitem(${index})">
                    
                </button>
            </li></fieldset>`

    if(listinput.value){

        elements.set(li,keyandstatus)

        index++;
    }

    listinput.value = null;

    // display();
    taskBox.innerHTML += li
    
}

function display(){

    li = "";

    taskBox.innerHTML = "";

    for(var i in elements){
        li += i;
    }

    taskBox.innerHTML = li;

}
function deleteitem(id){
    var cnt = 0;
    for(var i in elements){
        if(`item${id}` == elements[i][1]){
            elements.delete(i);
            break;
        }
    }
    for(var i in elements){
        elements[i][1]=`item${cnt}`
        cnt++;
    }
    display();
}

function cross(){
    for(var i in elements){
        if(`item${id}` == elements[i][1] && elements[i][0]==true){
            
        }
    }
}

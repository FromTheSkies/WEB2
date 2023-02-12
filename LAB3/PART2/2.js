var elements = [];
let listinput = document.getElementById("listinput")
let taskBox = document.querySelector(".list")

function addElements(){
    let li = "";
    li += `<li id = "list">
                <input class = "galochka" type = "checkbox" id = "checkboxname">
                <p class = "elem">${listinput.value}</p>
                <button class = "trash">
                    <img style = "z-index: 3;width : 25px;height : 25px;position : relative; top:-90px;left : 700px;" src = "https://i.ibb.co/QPhd9LQ/delete.png">
                </button>
            </li>`
    if(listinput.value){
        taskBox.innerHTML += li;
    }
    listinput.value = null;
}

function checkfortrue(){
    let check = document.querySelector(".galochka").checked
    if(check == true){}
}
function deleteElements(){

}
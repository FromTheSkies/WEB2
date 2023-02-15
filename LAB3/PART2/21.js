let listinput = document.getElementById("listinput")
let taskBox = document.querySelector(".list")

var arr = []

var cnt = 0
var index = 0

function addElements(){

    let li = "";

    li = `<fieldset class ="box"><li id = "list">
                <input  class = "no" class = "galochka" type = "checkbox" id = "item${index}">
                <p class = "elem">${listinput.value}</p>
                <button class = "trash" onclick="deleteitem(${index})">
                    
                </button>
            </li></fieldset>`
    
    keyandstatus = [false, index,li]
    if(listinput.value){

        arr.push(keyandstatus)

        cnt++;
    }

    listinput.value = null;

    taskBox.innerHTML += li;
    index ++
    // display();
    console.log(arr)
    
}

function display(){

    li = "";

    taskBox.innerHTML = "";

    for(var i=0;i<arr.length;++i){
        li += `${arr[i][2]}`;
        // console.log(arr[i][2])
    }

    taskBox.innerHTML = li;

}
function deleteitem(id){

    console.log(id);

    for(var i=0;i<arr.length;++i){
        if(arr[i][1] == id){
            arr.splice(i,1);
            break
        }
    }

    display();
}

// function cross(){
//     for(var i in elements){
//         if(`item${id}` == elements[i][1] && elements[i][0]==true){
            
//         }
//     }
// }

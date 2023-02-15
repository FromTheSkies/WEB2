let listinput = document.getElementById("listinput")
let taskBox = document.querySelector(".list")

var arr = []

var cnt = 0
var index = 0

function addElements(){

    let li = "";

    li = `<fieldset class ="box"><li id = "list">
                <input class = "no" class = "galochka" type = "checkbox" id = "item${index}" onclick="cross(this,${index})">
                <p class = "elem" id = "cb${index}">${listinput.value}</p>
                <button class = "trash" onclick="deleteitem(${index})">
                   <img src=""  
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
    
}
function display(){

    li = "";

    taskBox.innerHTML = "";

    for(var i=0;i<arr.length;++i){
        li += arr[i][2];
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
function cross(cb,id){
    for(var i=0;i<arr.length;++i){
        if(arr[i][1] == id && cb.checked == true){
            console.log(1)
            document.getElementById(`cb${id}`).classList.remove('no');
            document.getElementById(`cb${id}`).classList.add('yes');
            arr[i][0]==false;
            break;
        }
        else if(arr[i][1] == id  && cb.checked == false){
            console.log(0)
            document.getElementById(`cb${id}`).classList.remove('yes');
            document.getElementById(`cb${id}`).classList.add('no');
            arr[i][0]==true;
            break;
        }
    }
}

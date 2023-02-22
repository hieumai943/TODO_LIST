const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];
let tasklist;
let complete = [];

function displayDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
   
    document.querySelector(".date").innerHTML += `DATE: ${day} / ${month+1} / ${year}`;

}
displayDate();

function addItem(){

    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        tasklist = [];
    }
    else {
        tasklist = localItems;
    }
    tasklist.push(inputVal.value);
    localStorage.setItem('localItem', JSON.stringify(tasklist))
    showlist();
}
document.querySelector('.header input').addEventListener("keydown", (event)=>{
    if(event.key =="Enter"){
        if (document.querySelector('.header input').value.length == 0) {
            alert("Please Enter a Task");
        }
        else {
            
           addItem();
        }
    }
})
addTaskBtn.addEventListener('click', () => {
    if (document.querySelector('.header input').value.length == 0) {
        alert("Please Enter a Task");
    }
    else {
        
       addItem();
    }
})
function showlist() {
    
    let outPut = ``;
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    if (localItems === null) {
        tasklist = [];
    }
    else {
        tasklist = localItems;
    }
    tasklist.forEach((data, index) => {
      
        outPut +=
            `<div class="task">
        
        <span id="taskname" onclick="completed(${index})">
            <i class="fa fa-circle" aria-hidden="true"style="font-size:10px;padding-right: 10px;"></i>
          ${tasklist[index]}
            </span>
            <button class="delete" onClick="deleteItem(${index})">
                <i class="fa fa-trash-o" aria-hidden="true" ></i>
                </button>
                </div>`
        
    }); 
   
    document.querySelector('.tasks').innerHTML = outPut;
}
showlist();

function deleteItem(index) {
    tasklist.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(tasklist))
    
    showlist();
}


function completed(index) {
    
   complete.push(index);
    var tasks = document.querySelectorAll('#taskname');
    tasks[index].classList.toggle('completed');

    setTimeout(function () {
        tasklist.splice(index, 1)
        localStorage.setItem('localItem', JSON.stringify(tasklist))
        showlist();
    }, 3000)

}


const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];
let tasklist;
addTaskBtn.addEventListener('click', ()=>{
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if(localItems ===null){
        tasklist =[];
    }
    else{
        tasklist = localItems;
    }
   tasklist.push(inputVal.value);
   localStorage.setItem('localItem', JSON.stringify(tasklist))
   showlist();
})
function showlist(){
    let outPut =``;
   let localItems = JSON.parse(localStorage.getItem('localItem'));
   if(localItems ===null){
        tasklist =[];
    }
    else{
        tasklist = localItems;
    }
    tasklist.forEach((data, index) => {
        outPut += 
        `<div class="task">
        
        <span id="taskname">
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
function deleteItem(index){
tasklist.splice(index,1)
localStorage.setItem('localItem', JSON.stringify(tasklist))
showlist();
}


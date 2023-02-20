var workList=[];
document.querySelector('#add').onclick = function () {
    if (document.querySelector('.header input').value.length == 0) {
        alert("Please Enter a Task");
    }
    else {
        workList.push(document.querySelector('.header input').value);
        document.querySelector('.tasks').innerHTML
            += `<div class="task">
                
            <span id="taskname">
                <i class="fa fa-circle" aria-hidden="true"style="font-size:10px;padding-right: 10px;"></i>
              ${document.querySelector(".header input").value}
                </span>
                <button class="delete">
                    <i class="fa fa-trash-o" aria-hidden="true" ></i>
                    </button>
                    </div>`
                    
                    ;
            console.log(workList);
        var current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll('#taskname');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }
        document.querySelector('header input').value = "";

    }

}
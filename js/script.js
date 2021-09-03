// função que adiciona tarefa
function addTask() {

    // titulo da tarefa
    const taskTtitle = document.querySelector("#task-title").value;

    if(taskTtitle) {

        // clonar template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adicionar titulo
        newTask.querySelector(".task-title").textContent = taskTtitle;

        // remover classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adicionar tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // adicionar evento de remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        // adicionar evento de completar tarefa
        const addBtn =  newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        // limpar texto
        document.querySelector("#task-title").value = "";
    }



}

// função de remover tarefa
function removeTask(task) {
    
    task.parentNode.remove(true);

}

// função de completar tarefa
function completeTask(task) {

    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");

}

// evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();

});
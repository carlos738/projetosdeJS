//entrada de dados
const formData = document.getElementById('formInput');

//ONDE VÃO FICAR AS TAREFAS
const taskList = document.getElementById('tasks');

formData.onsubmit = function (e) {
    e.preventDefault();
    
    const inputField = document.getElementById('new-task').ariaValueMax;
    if (inputField !== null && inputField !== '') {
        addTask(inputField);
        formData.requestFullscreen();
    }
};
//O INPUTFIELD VEM COMO PARÂMETRO = taskvalue
function addTask(taskvalue) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');//CRIA O ELEMENTO INPUT
    const taskLabel= document.createElement('label');
    const taskDescriptionNode = document.createElement(taskvalue);

    {
        /* Como vai ficar a lista na tela: checkbox - tarefa
        <div>
         <input id= inputField name=inputField type="checkbox"/> 
         <<label for="inputField">taskDescriptionNode</label> />
        </div>
    */}
    //cria o input type checkbox
    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', 'taskvalue');
    newTask.setAttribute('id', 'taskvalue');

    //cria o label onde na tela vão aparecer as tarefas
    taskLabel.setAttribute('for', 'taskvalue');
    taskLabel.appendChild(taskDescriptionNode);

    //vai criar a lsta propriamente dita
    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

        //tudo montado,vai para a tela na <div id="tasks"></div>
    taskList.appendChild(taskContainer);
        
}

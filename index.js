const input = document.getElementById('input');
const btAdd = document.getElementById('btAdd');
const ul = document.getElementById('ul-todo');
const divTodo = document.getElementById('div-todo');


const userTodo = [];

fetch('./data.json').then(response => response.json()).then(data => {
    console.log(JSON.stringify(data, null, 2));
})



addTask = (event) => {
    const userInput = input.value;
    if(userInput){
        userTodo.push(userInput);
        const li = document.createElement('li');
        li.textContent = `⭘ ${userInput}`;
        console.log(`user added task: ${userInput}`);
        ul.appendChild(li);
        input.value = '';
    }
};

deleteTask = () => {
    const deletedTask = event.target;
    userTodo.pop(deletedTask);
    console.log(`user deleted task: ${deletedTask.textContent}`);
    ul.removeChild(deletedTask);
}



btAdd.addEventListener('click', (event) =>{
    addTask();
    console.log(event);
});

ul.addEventListener('click', (event) => {
    deleteTask();
});

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        addTask();
    }
})

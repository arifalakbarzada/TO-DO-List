const inputElem = document.querySelector(".inputTodo");
const addTodobtn = document.querySelector(".addTodo");
const todoList = document.querySelector(".todoList");
const modeLight  = document.getElementById("light-mode");
const modeDark   = document.getElementById( "dark-mode" );
let todos = [];
const createTodo = ()=>{
    if (inputElem.value.trim() !== ``) {
        todos.push(inputElem.value.trim());
        localStorage.setItem("todos",JSON.stringify(todos));
        let elemLi = document.createElement("li");
        elemLi.innerText = inputElem.value;
        todoList.appendChild(elemLi);
        inputElem.value = ``;
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML= `<i class="fa-solid fa-trash-can"></i>`;
        elemLi.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function(){
            this.parentElement.remove();
            });
    }
    else{
        alert("Please enter a task!");
        inputElem.value = ``;
    }
};
addTodobtn.addEventListener("click",createTodo);
document.addEventListener('keyup',(e)=>{
if (e.key === `Enter`) {
    createTodo();
}
});
modeLight.style.display = "none";
modeDark.addEventListener( 'click', ()=>{
    document.body.classList.add( "dark" ) ;
    modeLight.style.display = "inline";
    modeDark.style.display =  "none";
});
modeLight.addEventListener ('click', ()=>{
    document.body.classList.remove(`dark`) ;
    modeDark.style.display =  "inline";
    modeLight.style.display = "none";
});
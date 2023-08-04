const todoForm = document.querySelector(".form-todo");
const todoList = document.querySelector(".todo-list")
const todoInput = document.querySelector(".form-todo input[type='text']")
// console.log(todoInput)
// console.log(todoForm);
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log("submit")
    const newTodoText = todoInput.value;
    // console.log(todoInput.value)
    if(todoInput.value !== ""){
    const newLi = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = ""
    }
});

todoList.addEventListener("click", (e)=>{
    // console.log(e.target);
    // check wheather user clicked on done button
    // console.log(e.target.classList);
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        console.log(liSpan)
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        console.log("you want to dalete something")
        const targatedLi = e.target.parentNode.parentNode;
        console.log(targatedLi);
        targatedLi.remove();
    }
})
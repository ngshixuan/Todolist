const addForm = document.querySelector(".add");
const todos = document.querySelector(".todos"); //ul 
const searchForm = document.querySelector(".search");

addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = addForm.add.value.trim();

    if(input.length > 0){
        const htmlTemplate = 
        `<li class="flex justify-between items-center bg-gray-800 py-2 px-4 mb-2 rounded-lg">
            <span>${input}</span>
            <i class="fa-solid fa-trash delete"></i>
        </li>`
    
        todos.innerHTML += htmlTemplate;
    }

    addForm.reset()

});

// Event Listener needed to remove todo's
todos.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});

// search and filter todos

searchForm.addEventListener("keyup",(e) => {
    let text = e.target.value.trim().toUpperCase();

    // HTML Collection --> array
    let li_todos = Array.from(todos.children)

    li_todos.filter((li_todo) => {
        return !li_todo.textContent.toUpperCase().includes(text);
    }).forEach((todo) => todo.classList.add("filtered"));

    li_todos.filter((li_todo) => {
        return li_todo.textContent.toUpperCase().includes(text);
    }).forEach((todo) => todo.classList.remove("filtered"));
});
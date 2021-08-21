window.addEventListener("dblclick", () => {
    document.body.classList.toggle("light-theme");
})


const todo = document.querySelector(".todo");
console.log(1);

todo.addEventListener("click", (e) => {
    const target = e.target;
    console.log(11);

    if(target.classList.contains("todo__checkbox")){
        target.classList.toggle("todo__checkbox--checked");
    }
})
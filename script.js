const btn = document.querySelector("[data-form-btn]");
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]").value;
    console.log(input);
}

console.log(btn);


btn.addEventListener("click",createTask);


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    // cria-se um valor para o botão
    
    if(inputBox.value === "") {
    alert("Hey! You need to write something.")
    // Se o o valor digitado for nada, ou seja vazia. O programa exibirá a mensagem
    }
    else{
    // Aqui, quando o usuário fornecer uma informação será criado um elemento em LI no HTML
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // Criando o ícone de cruz 
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }

    inputBox.value="";
    saveData();
}

// Para a função clique e remover:

// Adicione um listener de clique ao elemento
listContainer.addEventListener("click", function (e) {
    // Verifica se o clique foi no elemento LI
    if (e.target.tagName === "LI") {
        // Adiciona ou remove a classe 'list' ao clicar em um LI
        e.target.classList.toggle("checked");
    }
    // Verifica se o clique foi no elemento SPAN
    else if (e.target.tagName === "SPAN") {
        // Remove o elemento pai do SPAN (o LI)
        e.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);


}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()




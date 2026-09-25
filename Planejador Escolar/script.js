let tarefas = [];

let totalTarefas = 0;
let tarefasConcluidas = 0;

function adicionarTarefa() {

    let nome = document.getElementById("tarefa").value.trim();

    let materia = document.getElementById("materia").value.trim();

    let prioridade = document.getElementById("prioridade").value.trim();

    let mensagem = document.getElementById("mensagem");

    if (nome === "" || materia === "" || prioridade === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";
        return;
    }

    let duplicada = tarefas.some(function (tarefa) {
        return tarefa.nome.toLowerCase() === nome.toLowerCase();
    });

    if (duplicada) {
        mensagem.textContent = "Essa tarefa já foi adicionada.";
        mensagem.style.color = "red";
        return;
    }

    let novaTarefa = {
        nome: nome,
        materia: materia,
        prioridade: prioridade,
        concluida: false
    };

    tarefas.push(novaTarefa);
    totalTarefas++;
    mensagem.textContent = "Tarefa adicionada com sucesso!";
    mensagem.style.color = "green";

    atualizarContador();
    exibirTarefas();
    limparCampos();
}

function exibirTarefas() {
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.textContent = "";

    tarefas.forEach(function (tarefa, indice) {
        let card = document.createElement("div");
        card.className = "tarefa";

        let titulo = document.createElement("h3");
        titulo.textContent = tarefa.nome;

        let materia = document.createElement("p");
        materia.textContent = "Matéria: " + tarefa.materia;
        
        let prioridade = document.createElement("p");
        prioridade.textContent = "Prioridade: " + tarefa.prioridade;

        let status = document.createElement("p");
        status.textContent = tarefa.concluída
            ? "Status: Concluída"
            : "Status: Pendente";
        
        card.appendChild(titulo);
        card.appendChild(materia);
        card.appendChild(prioridade);
        card.appendChild(status);

        destacarPrioridade(card, tarefa.prioridade);

        if (!tarefa.concluída) {
            card.classList.add("concluida");
        } else {
            let botao= document.createElement("button");
            botao.textContent = "Concluir tarefa";

            botao.onclick = function () {
                concluirTarefa(indice);
            };

            card.appendChild(botao);
        }

        listaTarefas.appendChild(card);
    });
}

function destacarPrioridade(card, prioridade) {
    if (prioridade === "Alta") {
        card.style.borderLeft = "5px solid red";
    } else if (prioridade === "Média") {
        card.style.borderLeft = "5px solid orange";
    } else if (prioridade === "Baixa") {
        card.style.borderLeft = "5px solid green";
    }
}

function concluirTarefa(indice) {
    let tarefa = tarefas[indice];
    if (tarefa.concluida) {
        return;
    }

    tarefa.concluida = true;
    totalConcluídas++;

    let mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Tarefa concluída com sucesso!";
    mensagem.style.color = "green";

    atualizarContador();
    exibirTarefas();
}

function atualizarContador() {
    document.getElementById("contador").textContent =
    "Tarefas cadastradas: " + totalTarefas;
    document.getElementById("contadorConcluidas").textContent =
    "Tarefas concluídas: " + tarefasConcluidas;
}

function limparCampos() {
    document.getElementById("tarefa").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("prioridade").value = "";
}

function alternarModo() {
    document.body.classList.toggle("modo-concentracao");
}

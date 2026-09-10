console.log("Olá, Luiz! Seja bem-vindo!")
console.log("Olá, Gustavo! Seja bem-vindo!")
console.log("Olá, Luciana! Seja bem-vinda!")  

function darBoasVindas(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
}

darBoasVindas("Luiz");
darBoasVindas("Gustavo");
darBoasVindas("Luciana");

function apresentarPessoa(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentarPessoa("Luiz", 25);
apresentarPessoa("Gustavo", 30);
apresentarPessoa("Luciana", 28);

// Criar uma função que recebe o nome de uma pessoa e mostra a mensagem dizendo que ela está estudando.

function mostrarEstudo(nome) {
    console.log(`${nome} está estudando!`);
}

mostrarEstudo("Luiz");
mostrarEstudo("Gustavo");
mostrarEstudo("Luciana");

function somar(a, b) {
    return a + b;
}
somar(5, 10);

// crie uma função que pegue dois valores e de a média deles se for acima de 6 é aprovado senão reprovado.

function calcularMedia(valor1, valor2) {
    const media = (valor1 + valor2) / 2;
    if (media > 6) {
        console.log(`A média é ${media}. Aprovado!`);
    } else {
        console.log(`A média é ${media}. Reprovado!`);
    }
}

calcularMedia(7, 8);
calcularMedia(5, 6);
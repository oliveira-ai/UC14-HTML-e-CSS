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


// Continuação

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

let nome = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = calcularMedia(nota1, nota2);

console.log(`${nome} ficou com média ${media}.`);

if (media >= 6) {
    console.log(`${nome} está aprovado!`);
} else {
    console.log(`${nome} está reprovado!`);
}

calcularMedia(nota1, nota2)





// Crie um programa que utilize uma função com vários parâmetros para calcular o custo total de uma viagem. O programa deverá receber os vários valores de passagem, hospedagem, alimentação e passeios, calcular o total e informar se a viagem está dentro do orçamento de R$ 2.000,00.

function calcularCustoViagem(passagem, hospedagem, alimentacao, passeios) {
    const total = passagem + hospedagem + alimentacao + passeios;
    return total;
}

let passagem = Number(prompt("Digite o valor da passagem:"));
let hospedagem = Number(prompt("Digite o valor da hospedagem:"));
let alimentacao = Number(prompt("Digite o valor da alimentação:"));
let passeios = Number(prompt("Digite o valor dos passeios:"));

let custoTotal = calcularCustoViagem(passagem, hospedagem, alimentacao, passeios);

console.log(`O custo total da viagem é de R$ ${custoTotal.toFixed(2)}.`);

if (custoTotal <= 2000) {
    console.log("A viagem está dentro do orçamento!");
} else {
    console.log("A viagem está acima do orçamento!");
}

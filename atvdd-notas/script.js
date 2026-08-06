// O projeto: calculadora de média escolar
/* Classificação 
Abaixo de 4 - REPROVADO 
Entre 4 e 6.9 - RECUPERAÇÃO 
Abaixo de 7 (mas acima de 4) - RECUPERAÇÃO
Acima de 7 - APROVADO */

let nome = prompt('Qual é o seu nome?');

let nota1Str = prompt(`Olá, ${nome}! Qual é a sua primeira nota?\n(use vírgula ou ponto - ex: 7,5 ou 7.5)`);
let nota2Str = prompt(`Qual é a sua segunda nota?\n(use vírgula ou ponto - ex: 8,0 ou 8.0)`);

let nota1 = Number(nota1Str.replace(',', '.'));
let nota2 = Number(nota2Str.replace(',', '.'));

console.log('Nome:', nome);
console.log('Nota 1:', nota1, typeof nota1);
console.log('Nota 2:', nota2, typeof nota2);

let media = (nota1 + nota2) / 2;
let mediaFormatada = media.toFixed(1);

if (media < 4) {
    alert(`Olá, ${nome}! Sua média é ${mediaFormatada} e você está REPROVADO.`);
} else if (media >= 4 && media < 7) {
    alert(`Olá, ${nome}! Sua média é ${mediaFormatada} e você está de RECUPERAÇÃO.`);
} else if (media >= 7) {
    alert(`Olá, ${nome}! Sua média é ${mediaFormatada} e você está APROVADO.`);
}

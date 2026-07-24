let nomedeUsuario = prompt("Olá! Qual é o seu nome?");
let cidadedeUsuario = prompt("De qual cidade você é, " + nomedeUsuario + "?");

alert("Seja bem-vindo(a), " + nomedeUsuario + " de " + cidadedeUsuario + "!");

console.log("Usuário: " + nomedeUsuario);
console.log("Cidade: " + cidadedeUsuario);

let numeroSecreto = 7;

let tentativa = prompt("Tente adivinhar o número secreto (entre 1 e 10):");

if (parseInt(tentativa) === numeroSecreto) {
    alert("Parabéns! Você acertou o número " + numeroSecreto + "!");
    console.log("Usuário acertou! Tentativa: " + tentativa);
} else {
    alert("Que pena! Você errou. O número secreto era " + numeroSecreto + ".");
    console.log("Usuário errou. Tentativa: " + tentativa);
}

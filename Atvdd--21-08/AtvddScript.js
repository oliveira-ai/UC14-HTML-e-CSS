let temperaturaDigitada = prompt("Digite a temperatura atual em °C:");
let temperatura = parseFloat(temperaturaDigitada);

let classificacao = "";

if (temperatura > 35) {
    classificacao = "Está muito quente! 🔥";
} else if (temperatura > 25) {
    classificacao = "Está quente! 🥵";
} else if (temperatura >= 15 && temperatura <= 25) {
    classificacao = "O clima está agradável! 😊";
} else if (temperatura < 15) {
    classificacao = "Está frio! 🥶";
} else {
    classificacao = "Temperatura inválida ou não informada. 🤷";
}


let elementoTemperatura = document.getElementById("temperatura");
let elementoMensagem = document.getElementById("mensagem");

if (!isNaN(temperatura)) {
    elementoTemperatura.textContent = "Temperatura informada: " + temperatura + "°C";
    elementoMensagem.textContent = classificacao;
} else {
    elementoTemperatura.textContent = "Nenhuma temperatura válida foi digitada.";
    elementoMensagem.textContent = classificacao;
}

console.log("--- Relatório do Clima ---");
    console.log("Temperatura digitada:", temperaturaDigitada);
console.log("Temperatura processada:", temperatura);
console.log("Classificação final:", classificacao);

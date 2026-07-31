const nomeCompleto = prompt("Digite seu nome completo:");
const cargoFuncao = prompt("Digite seu cargo ou função:");
const empresaEscola = prompt("Digite o nome da empresa ou escola:");
const email = prompt("Digite seu e-mail:");

const nomeMaiusculo = nomeCompleto.toUpperCase();

const cartaoVisita = `

 Nome:    ${nomeMaiusculo}
 Cargo:   ${cargoFuncao}
 Empresa: ${empresaEscola}
 E-mail:  ${email}

`;

console.log(cartaoVisita);


alert("O cartão de visita foi gerado com sucesso! Confira o console.");

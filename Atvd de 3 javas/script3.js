const senha = prompt("Digite a senha para verificação de força:");

const tamanhoSenha = senha.length;
const possuiMaiuscula = /[A-Z]/.test(senha);
const possuiMinuscula = /[a-z]/.test(senha);

let classificacao = "Fraca";

if (tamanhoSenha >= 8 && possuiMaiuscula && possuiMinuscula) {
    classificacao = "Forte";
}

const relatorioSenha = `
 Análise de Força de Senha 
Tamanho da senha: ${tamanhoSenha} caracteres
Possui maiúscula: ${possuiMaiuscula ? "Sim" : "Não"}
Possui minúscula: ${possuiMinuscula ? "Sim" : "Não"}
Classificação Final: ${classificacao}
`;

console.log(relatorioSenha);
alert(`Resultado da Análise:\nTamanho: ${tamanhoSenha} caracteres\nSua senha é: ${classificacao}`);

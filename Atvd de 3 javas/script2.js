const nomeProduto = prompt("Digite o nome do produto:");
const precoOriginal = parseFloat(prompt(`Digite o preço original de "${nomeProduto}":`));
const percentualDesconto = parseFloat(prompt("Digite o percentual de desconto (apenas números):"));

const valorDesconto = precoOriginal * (percentualDesconto / 100);
const precoFinal = precoOriginal - valorDesconto;

const formatarMoeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const precoOriginalFormatado = formatarMoeda(precoOriginal);
const valorDescontoFormatado = formatarMoeda(valorDesconto);
const precoFinalFormatado = formatarMoeda(precoFinal);

const resultadoDesconto = `
 Recibo de Desconto: ${nomeProduto}
Preço Original: ${precoOriginalFormatado}
Desconto aplicado: ${percentualDesconto}% (${valorDescontoFormatado})
Preço Final: ${precoFinalFormatado}
`;

console.log(resultadoDesconto);
alert(`Resumo do Desconto:\nProduto: ${nomeProduto}\nDesconto: ${valorDescontoFormatado}\nPreço Final: ${precoFinalFormatado}`);

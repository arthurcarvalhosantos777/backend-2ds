// São estruturas complexas de dados
// Agrupamento do tipo chave-valor (k, v)
// Pode conter valores arrays, objetos, funções, etc.

const celular = {
    tela: '6.7',
    modelo: 'Nothing Phone (2)',
    cor: ['preto', 'branco'],
    acao: function onOff(){ return 'Liga/Desliga'}
}
console.log(celular.cor[1])
console.log(celular.acao) //menciona, mas não executa
console.log(celular.acao()) // executa literalmente
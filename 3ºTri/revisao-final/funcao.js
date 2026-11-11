// são blocos de código reaproveitáveis
// remetem a alguma ação ou procedimento (replicável)
// exige nomes autoexplicativos
                    // isso é apenas um modelo
function montarCarros(peças, regras, documentos, montador) {
    return { //expor os valores da função para reaproveitamento
        itens: [peças, regras, documentos, montador],
        montar: function() { console.log('Carro obtido com sucesso \\o/')}
    }
} // TODOS OS DADOS SERÃO DESCARTADOS

montarCarros(['motor', 'portas', 'rodas'], 
    'como montar um Monza',
    'projeto para montar um Monza',
    'João'
)
//funçôes são blocos reaproveitáveis
//podem ou não receber parâmetros
//podem ou não retornar valores
//permitem qualquer tipo de valor

//1° etapa - declaração
function dizOla(){
    console.log('Olá!')
}
//2° etapa - invocação
dizOla();

function somDoAnimal(nomeAnimal, tipoSom){
    console.log("O animal " + nomeAnimal + " emite o som " + tipoSom)
}

somDoAnimal("Vaca", "MuUuUuh")
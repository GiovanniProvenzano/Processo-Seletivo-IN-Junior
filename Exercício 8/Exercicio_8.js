function analisarConsumo(aparelhos,lim){
    let classificacao = []
    for(a of aparelhos){
        if(a<lim){
            classificacao.push("Econômico")
        }else if(a == lim){
            classificacao.push("No limite")
        }else{
            classificacao.push("Acha que é sócio da Enel")
        }
    }
    return(classificacao)
}

let cons = [23,42,55,76,23,8888,43,55,123,4,52,990]
try{
    let limite = prompt("Isira o limite máximo de consumo para aparelhos eletrônicos")
    if(limite*0 != 0){
        throw new Error("O limite deve ser escrito somente com números")
    }else{
        limite = parseFloat(limite)
        let classi = analisarConsumo(cons,limite)
        for (let i = 0;i < classi.length;i++){
            console.log("Aparelho "+i+": "+classi[i])
        }
    }
}catch(error){
    alert(error.message)
}
function adicionarJogador(){
    let jogador = {}
    jogador.nome = prompt("Insira o nome do jogador")
    jogador.idade = parseInt(prompt("Isnira a idade do jogador"))
    if (jogador.idade*0 != 0){
        throw new Error("A idade deve ser um valor numérico, pela inconsistência dos dados o jogador não foi adicionado no time")
        return(jogador)
    }
    jogador.posicao = prompt("Insira a posição do jogador")
    jogador.pontuacao = parseFloat(prompt("Insira a pontuação do jogador"))
    if(jogador.pontuacao*0 != 0){
        throw new Error("A pontuação deve ser um valor numérico, pela inconsistência dos dados o jogador não foi adicionado no time")
        return(jogador)
    }
    return (jogador)
}

function buscarPorPosicao(time,posicao){
    let count = 0
    for(jogador of time){
        if(jogador.posicao == posicao){
            console.log("O jogador "+jogador.nome+" joga na posição "+posicao)
            count++
        }
    }
    if (count == 0){
        console.log("Não foi endcontrado nenhum jogador nesse time que jogue nea posição "+posicao)
    }
}

function listarTime(time){
    for (jogador of time){
        console.log(jogador.nome+", com "+jogador.idade+" anos, joga na posição "+jogador.posicao+", tem a pontuação igual a "+jogador.pontuacao)
    }
}

function calcularPontuacaoMedia(time){
    let count = 0
    let i = 0
    for(jogador of time){
        count += jogador.pontuacao
        i++
    }
    if(i != 0){
        count /= i
    }
    console.log("A média da pontuação do time é de "+count)
}

let time = []

while(true){
    console.log("========Menu========")
    console.log("1-Adicionar jogador")
    console.log("2-Buscar por posição")
    console.log("3-Listar time")
    console.log("4-Calcular pontuação média")
    console.log("5-Sair")
    let n = prompt("Insira a operação que deseja fazer")
    if(n == 1){
        try{
            time.push(adicionarJogador())
        }catch(error){
            alert(error.message)
            time.pop()
        }
    }else if(n == 2){
        buscarPorPosicao(time,prompt("Insira a posição que deseja buscar"))
    }else if(n == 3){
        listarTime(time)
    }else if(n == 4){
        calcularPontuacaoMedia(time)
    }else if(n == 5){
        break
    }else{
        alert("Esta ação não está disponível no menu, digite apenas os números correspondentes a cada ação")
    }
}
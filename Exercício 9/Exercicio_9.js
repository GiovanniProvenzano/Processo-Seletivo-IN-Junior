function compactarTexto(texto){
    let c = texto.at(0)
    let compacto = c
    let count = 0
    for (let i = 0;i < texto.length;i++){
        if(texto.at(i) == c){
            count++
        }else{
            compacto = compacto + count
            count = 1
            c = texto.at(i)
            compacto = compacto + c
        }
    }compacto = compacto + count
    return compacto
}

let palavra = prompt("Digite um texto a ser compactado")
alert("O texto compactado é: "+compactarTexto(palavra))
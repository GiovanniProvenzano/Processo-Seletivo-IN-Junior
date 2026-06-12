try{
    let valor = prompt("Digite o valor em reais a ser convertido")
    if (valor*0 != 0){
        throw new Error("O valor deve ser escrito somente com números")
    }else{
        valor = parseFloat(valor)
        let valorEuro = valor/ 6.1
        let valorDolar = valor/ 5.7
        alert("O valor de R$"+valor+" fica €"+valorEuro+" em euro e $"+valorDolar+" em dolar")
    }
}catch(error){
    alert(error.message)
}
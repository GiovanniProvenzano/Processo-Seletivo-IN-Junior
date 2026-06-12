
let fila = []

while(true){
    let s = 0
    console.log("a fila no mometo está assim:")
    while(fila[s++]){
        console.log(s+"° "+fila[s-1])
    }if(s == 1){
        console.log("fila vazia")
    }
    console.log("menu:")
    console.log("1-Novo cliente")
    console.log("2-Atender cliente")
    console.log("3-sair")
    let n = prompt("O que deseja fazer?")
    if(n == 1){
        let nome = prompt("Insira o nome do cliente")
        fila.push(nome)
    }else if(n == 2){
        fila.shift()
    }else if(n == 3){
        break
    }else{
        alert("Esta ação não está disponível no menu, digite apenas os números correspondentes a cada ação")
    }
}
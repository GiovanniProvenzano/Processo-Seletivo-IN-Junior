function fatorial(a){
    if(a == 0){
        return 1
    }else{
        return a*fatorial(a-1)
    }
}

try{
    let loop = true
    do{
        let n = prompt("Insira um inteiro positivo")
        if(parseInt(n) != parseFloat(n)){
            throw new Error("O número deve ser inteiro")
            loop = false
        }else if(n<0){
            throw new Error("O número deve ser positivo")
            loop = false
        }else{
            n = parseInt(n)
            alert("O fatorial de "+n+" é igual a "+fatorial(n))
            loop = confirm("Você quer inserir outro número?")
        }
    }while(loop)
}catch(error){
    alert(error.message)
}
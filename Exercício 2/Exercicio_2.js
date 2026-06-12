try{
    let a = prompt("insira o valor de a")
    let b = prompt("insira o valor de b")
    let c = prompt("insira o valor de c")
    if(a*0 != 0 || b*0 != 0 || c*0 != 0){
        throw new Error("Os valores devem ser exclusivamente com números")
    }else if(a == 0){
        throw new Error("O valor de a não pode ser nulo")
    }else{
        let delta = b*b - 4*a*c
        if (delta<0){
            alert("A equação não possui valores reais")
        }else{
            let x1 = (delta - b)/ (2*a)
            if(delta == 0){
                alert("O valor da raiz real é "+x1)
            }else{
                let x2 =(-delta -b)/ (2*a)
                alert("O valor das raizes reais são "+x1+" e "+x2)
            }
        }
    }
}catch(error){
    alert(error.message)
}
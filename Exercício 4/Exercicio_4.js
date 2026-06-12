function reverte(f){
    if(f.length == 1){
        return f
    }else{
        return f.slice(-1) + reverte(f.slice(0,-1))
    }
}

let frase = prompt("Insira uma frase")
frase.toLowerCase()
frase.split(' ')
if(frase == reverte(frase)){
    alert("A frase é palíndroma")
}else{
    alert("A frase não é palíndroma")
}
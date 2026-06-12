import { booksByCategory } from "./books.js";

function authors(library){
    let a = []
    for (b of library){
        for (l of b.books){
            a.push(l.author)
        }
    }
    return a;
}

let autores = authors(booksByCategory)
for(a of autores){
    console.log(a)
}
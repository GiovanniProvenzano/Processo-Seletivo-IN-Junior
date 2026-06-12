import { booksByCategory } from "./books.js";

function countBooksInCategory(library){
    for (let b of library){
        let s = 0
        while(b.books[s]){
            s++
        }
        alert("A categoria "+b.category+" tem "+s+" livros")
    }
}

countBooksInCategory(booksByCategory)
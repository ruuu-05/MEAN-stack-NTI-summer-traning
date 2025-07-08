interface  Book{
id : number
title : string
author : string 
}
 class Library {
    books : Book[]= [];

    constructor(books : Book[]){
        this.books = books;
    }

    addBook(book : Book) : void{
        this.books.push(book)
    }
    removeBook (id : number ):void{
        this.books= this.books.filter(book => book.id != id);
    }
    displayALLBooks(): void{
        this.books.forEach( book=>{
            console.log(`book title: ${book.title} author : ${book.author}  ID : ${book.id}`)
        }
        )
    }
 }
const b1: Book = { id: 1, title: 'Harry Potter', author: 'JK' };
const b2: Book = { id: 2, title: 'Book 2', author: 'Author2' };
const b3: Book = { id: 3, title: 'Book 3', author: 'Author3' };
const ba: Book = { id: 4, title: 'Added Book', author: 'Added Author' };
var books = [b1 , b2 ,b3];
var l1 = new Library(books);
l1.displayALLBooks();
l1.addBook(ba);
l1.displayALLBooks();
l1.displayALLBooks();
l1.removeBook(2);
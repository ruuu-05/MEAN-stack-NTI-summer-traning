var Library = /** @class */ (function () {
    function Library(books) {
        this.books = [];
        this.books = books;
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (id) {
        this.books = this.books.filter(function (book) { return book.id != id; });
    };
    Library.prototype.displayALLBooks = function () {
        this.books.forEach(function (book) {
            console.log("book title: ".concat(book.title, " author : ").concat(book.author, "  ID : ").concat(book.id));
        });
    };
    return Library;
}());
var b1 = { id: 1, title: 'Harry Potter', author: 'JK' };
var b2 = { id: 2, title: 'Book 2', author: 'Author2' };
var b3 = { id: 3, title: 'Book 3', author: 'Author3' };
var ba = { id: 4, title: 'Added Book', author: 'Added Author' };
var books = [b1, b2, b3];
var l1 = new Library(books);
l1.displayALLBooks();
l1.addBook(ba);
l1.displayALLBooks();
l1.displayALLBooks();
l1.removeBook(2);

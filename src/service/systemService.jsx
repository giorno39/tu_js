class SystemService {
    addBook(book) {
        let bookList = JSON.parse(localStorage.getItem('bookList'));

        if (bookList === null) {
            let bookList = [];
            bookList.push(book);
            localStorage.setItem('bookList', JSON.stringify(bookList));
        } else {
            bookList.push(book);
            localStorage.setItem('bookList', JSON.stringify(bookList));
        }
    }

    getBookList() {
        let bookList = JSON.parse(localStorage.getItem('bookList'));
        return bookList;
    }

    deleteBook(id) {
        let bookList = JSON.parse(localStorage.getItem('bookList'));
        let index = bookList.findIndex(book => book.id === id);
        bookList.splice(index, 1);
        localStorage.setItem('bookList', JSON.stringify(bookList));
    }

    updateBook(book) {
        let bookList = JSON.parse(localStorage.getItem('bookList'));
        let index = bookList.findIndex(b => b.id === book.id);
        bookList[index] = book;
        localStorage.setItem('bookList', JSON.stringify(bookList));
    }

    getBookById(id) {
        let bookList = JSON.parse(localStorage.getItem('bookList'));
        let index = bookList.findIndex(book => book.id === id);
        return bookList[index];
    }
}

export default new SystemService();
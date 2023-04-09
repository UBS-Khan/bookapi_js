module.exports = class ReadingList{
    constructor(){
        this.books = [];
    }
    addBook(book,dateRead,rating){
      const bookItem = {
        book : book,
        dateRead:dateRead,
        rating: rating
      }
      this.books.push(bookItem);
    }
    numberRead(){
        return this.books.length;
    }
    removeBook(title){
        this.books = this.books.filter(bookItem => bookItem.book.title != title);
    }
    getBooks(){
        return  this.books.map(bookItem =>{
            let star = '';
            for(let i = 0; i < bookItem.rating; i++){
                star += '*';
            }
          return  `${bookItem.book.title} by ${bookItem.book.author}, ${bookItem.book.length} pages, ${bookItem.book.year} read on ${bookItem.dateRead},${star}`
    } );
    }

    getBooksByRating(rating){
        return this.books.filter(bookItem => bookItem.rating == rating).map(bookItem =>{
            let star = '';
            for(let i = 0; i < bookItem.rating; i++){
                star += '*';
            }
          return  `${bookItem.book.title} by ${bookItem.book.author}, ${bookItem.book.length} pages, ${bookItem.book.year} read on ${bookItem.dateRead},${star}`
    } );
    }
}


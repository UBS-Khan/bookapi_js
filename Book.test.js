// AC 1: Given that I visit the site, when I first start, I expect my list to be empty.
const expect = require('chai').expect;
const ReadingList = require("./ReadingList");
const Book = require("./Book");

test('empty list', ()=>{
    //Arrange
    const readingList = new ReadingList();
    //Assert
    expect(readingList.books).to.deep.equal([]);
}); 

//AC 2:Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.

test('adding book', ()=>{
    //Arrange
    const bookObj = new Book('The psychology of money', 'Morgan', 500, 2002);
    const readingList = new ReadingList();
    //Act
    readingList.addBook(bookObj,'January 1, 2023',5);
    const numberRead = readingList.numberRead()
    //Assert
    expect(numberRead).to.be.equal(1);

})

//AC 3:Given that I have an empty list, when I add additional books to the list I expect the numberRead to return the total number of books in my list.

test('adding books', ()=>{
    //Arrange
    const bookObj1 = new Book('The psychology of money', 'Morgan', 500, 2002);
    const bookObj2 = new Book('The power of now', 'Eckhart ', 500, 1988);
    const bookObj3 = new Book('Rich dad poor dad', 'kiyosaki', 200, 1998);
    const readingList = new ReadingList();
    //Act
    readingList.addBook(bookObj1,'January 1, 2023',5);
    readingList.addBook(bookObj2,'January 1, 2023',5);
    readingList.addBook(bookObj3,'January 1, 2023',4);
    const numberRead = readingList.numberRead()
    //Assert
    expect(numberRead).to.be.equal(3);

})

//AC 4: Given that I have a book in my list, when I call removeBook("<title>") with "title" representing the title of my book that I want to delete, then when I call getBooks() the book I deleted should no longer be there.

test('remove book',()=>{
    //Arrange
    const bookObj1 = new Book('The psychology of money', 'Morgan', 500, 2002);
    const bookObj2 = new Book('The power of now', 'Eckhart ', 500, 1988);
    const bookObj3 = new Book('Rich dad poor dad', 'kiyosaki', 200, 1998);
    const readingList = new ReadingList();
    const result = ['The power of now by Eckhart , 500 pages, 1988 read on January 1, 2023,*****','Rich dad poor dad by kiyosaki, 200 pages, 1998 read on January 1, 2023,****']
    //Act
    readingList.addBook(bookObj1,'January 1, 2023',5);
    readingList.addBook(bookObj2,'January 1, 2023',5);
    readingList.addBook(bookObj3,'January 1, 2023',4);
    readingList.removeBook('The psychology of money');
    //Assert
    expect(readingList.getBooks()).to.deep.equal(result);
})

//AC 5: Given that I have an empty list, when I add a new book I expect getBooks() to return a list of books that includes the book I added.
test('list of books', ()=>{
    //Arrange
    const bookObj2 = new Book('The power of now', 'Eckhart ', 500, 1988);
    const bookObj3 = new Book('Rich dad poor dad', 'kiyosaki', 200, 1998);
    const readingList = new ReadingList();
    const result = ['The power of now by Eckhart , 500 pages, 1988 read on January 1, 2023,*****','Rich dad poor dad by kiyosaki, 200 pages, 1998 read on January 1, 2023,****']


    //Act
    readingList.addBook(bookObj2,'January 1, 2023',5);
    readingList.addBook(bookObj3,'January 1, 2023',4);
    
    //Assert
    expect(readingList.getBooks()).to.deep.equal(result);
})

//AC 6:Given when I call getBooksByRating(), I should return a list of books that all have that rating.

test('search by rating',()=>{
     //Arrange
     const bookObj2 = new Book('The power of now', 'Eckhart ', 500, 1988);
     const bookObj3 = new Book('Rich dad poor dad', 'kiyosaki', 200, 1998);
     const readingList = new ReadingList();
     const result = ['The power of now by Eckhart , 500 pages, 1988 read on January 1, 2023,*****']
    
     //Act
     readingList.addBook(bookObj2,'January 1, 2023',5);
     readingList.addBook(bookObj3,'January 1, 2023',4);

     //Assert
     expect(readingList.getBooksByRating(5)).to.deep.equal(result);
})
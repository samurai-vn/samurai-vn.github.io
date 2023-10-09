describe('Add new book Test Suite', () => {
    it('add empty title', () => {
        let length = libraryBooks.length;
        addBook("", "author", 1234);
        equals(libraryBooks.length, length);
    });
    it('add empty author', () => {
        let length = libraryBooks.length;
        addBook("title", "", 1234);
        equals(libraryBooks.length, length);
    });
    it('add null id', () => {
        let length = libraryBooks.length;
        addBook("title", "author", null);
        equals(libraryBooks.length, length);
    });
    it('add invalid type id', () => {
        let length = libraryBooks.length;
        addBook("title", "author", "libraryID");
        equals(libraryBooks.length, length);
    });
    it('add new book', () => {
        let length = libraryBooks.length;
        let book = addBook("title", "author", 1232);
        equals(libraryBooks.length, length + 1);
        equals(book.title, "title");
        equals(book.author, "author");
        equals(book.libraryID, "1232");
        // remove test data
        libraryBooks.pop();
    });
});

describe('Get Book Titles Test Suite', () => {
    it('check titles length', () => {
        let titles = getTitles();
        equals(titles.length, 4);
    });
    it('check titles sorted order', () => {
        let titles = getTitles();
        equals(titles[0], "Mockingjay: The Final Book of The Hunger Games");
        equals(titles[1], "The Road Ahead");
        equals(titles[2], "The Road Ahead");
        equals(titles[3], "Walter Isaacson");
    });
});

describe('Find Books Test Suite', () => {
    it('input invalid type keyword', () => {
        equals(findBooks(123), null);
    });
    it('input null keyword', () => {
        equals(findBooks(null), null);
    });
    it('input not found keyword', () => {
        equals(findBooks("@@").length, 0);
    });
    it('input found keyword', () => {
        let books = findBooks("Walter");
        equals(books.length, 1);
        equals("Steve Jobs", books[0].author);
    });
});
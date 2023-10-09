/**
 * utility functions
 */
function isNumber(num) {
    return typeof num == 'number';
}
function isString(str) {
    return typeof str == 'string';
}

function isNullOrEmpty(str) {
    return str == null || (typeof str == 'string' && str.trim().length === 0);
}
function isEmptyString(str) {
    return str != null && typeof str == 'string' && str.trim().length === 0;
}

let libraryBooks = [
    {title: "The Road Ahead", author: "Bill Gates", libraryID: 1235},
    {title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268},
    {title: "The Road Ahead", author: "Bill Gates", libraryID: 4268},
    {title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257}
];

function addBook (title, author, libraryID) {
    if (!isNumber(libraryID) || isNullOrEmpty(title) || isNullOrEmpty(author)) {
        return;
    }
    let newBook = {
        title: title,
        author: author,
        libraryID: libraryID
    };
    libraryBooks[libraryBooks.length] = newBook;
    return newBook;
}

function getTitles() {
    return libraryBooks.map(book => book.title).sort();
}

function findBooks(keyword) {
    if (!isString(keyword) || keyword == null) {
        return null;
    }
    return libraryBooks.filter(book => book.title.includes(keyword))
        .sort((b1, b2) => b1.author.localeCompare(b2.author));
}

// console.log(findBooks(""));

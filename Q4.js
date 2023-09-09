// Filtering and Capitalizing: Books Published After 2010 with Author Names.

// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized


// Sample list of books with authors and publication years
const books = [
    { title: 'Book 1', author: 'author 1', year: 2005 },
    { title: 'Book 2', author: 'author 2', year: 2012 },
    { title: 'Book 3', author: 'author 3', year: 2008 },
    { title: 'Book 4', author: 'author 4', year: 2015 },
];

// Use the filter() method to filter out books published in or after 2010,
// and map() to capitalize author names.
const LatestBooks = books
    .filter((elem) => elem.year >= 2010)
    .map((elem) => ({
        title: elem.title,
        author: elem.author.toUpperCase(),
        year: elem.year,
    }));

// Display the resulting array of books
console.log(LatestBooks);

// Output
//      [
//          { title: 'Book 2', author: 'AUTHOR 2', year: 2012 },
//          { title: 'Book 4', author: 'AUTHOR 4', year: 2015 }
//      ] 




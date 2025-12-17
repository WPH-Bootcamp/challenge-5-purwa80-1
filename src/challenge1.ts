// 1. Create a type for book
type Book = {
  title: string;
  author: string;
  year: number;
};

// 2. Create books array to store books
let books: Book[] = [];

// 3. Implement addBook function
function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${year})`);
}

// 4. Implement listBooks function
function listBooks(): void {
  console.log('All Books:');
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// 5. Implement searchBook function
function searchBook(searchTitle?: string): void {
  // Jika parameter kosong (undefined)
  if (!searchTitle) {
    console.log('Please provide a title to search.');
    return;
  }

  // Filter buku berdasarkan judul (Case-sensitive sesuai requirement test)
  const foundBooks = books.filter((book) => book.title.includes(searchTitle));

  if (foundBooks.length > 0) {
    console.log(`Search Results for "${searchTitle}":`);
    foundBooks.forEach((book) => {
      console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
  } else {
    console.log(`No books found with title containing "${searchTitle}".`);
  }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };

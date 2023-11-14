//sort books by authors name

const books = [
    {name : "Hqarry", author:'janine Rowling'},
    {name : "Wacrolss", author:'janine Luu'},
    {name : "The hubnger", author:'janine Collins'},
  ]
  
  
  
  const sortedBooks = books.sort((bookA, bookB) => {
    return bookA.author.split(' ')[1] < bookB.author.split(' ')[1] ? -1 : 1 
  })
  
  console.log(sortedBooks)
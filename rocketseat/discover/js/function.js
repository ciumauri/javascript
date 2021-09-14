// Buscando e contando dados em arrayConst

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length

console.log(`Total de categorias: ${totalCategories}`)

for (let object of booksByCategory) {
  console.log(`Total de livros da categoria: ${object.category}`)
  console.log(`Total: ${object.books.length}`)
}

function countAuthors() {
  let authors = []

  for (let object of booksByCategory) {
    for (let book of object.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log(`Total de autores: ${authors.length}`)
}

countAuthors()

function booksofAuthor(author) {
  let books = []

  for (let object of booksByCategory) {
    for (let book of object.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }
  console.log(
    `Livros do ${author} - Total: ${books.length}, Livro(s): ${books.join(
      ', '
    )}`
  )
}

booksofAuthor('George S. Clason')

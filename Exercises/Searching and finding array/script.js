const booksByCategory = [
    {
        category: "Ficticious",
        books: [
            {
                title: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
            },
            {
                title: "Harry Potter and the Chamber of Secrets",
                author: "J.K. Rowling",
            },
            {
                title: "Harry Potter and the Prisoner of Azkaban",
                author: "J.K. Rowling",
            }
        ]
    },
    {
        category: "Romantic",
        books: [
            {
                title: "titanic",
                author: "James Cameron",
            },
            {
                title: "she's out of my league",
                author: "Sean Anders",
            },
            {
                title: "the greatest man in the world",
                author: "James Cameron",
            }
        ]
    }
]

const totalCategoryCount = booksByCategory.length;

console.log(totalCategoryCount)
for (const category of booksByCategory) {
    console.log('total number of books in the category: ', category.category)
    console.log(category.books.length)
}

const totalAuthor = () => {
    let authorCount = []

    for (const category of booksByCategory) {
        for (const book of category.books) {
            if(authorCount.indexOf(book.author) == -1){
                authorCount.push(book.author)
            }
        }
    }

    console.log("Total of authors: ", authorCount.length)
}

totalAuthor()